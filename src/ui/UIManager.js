import * as THREE from 'three';
import { JAKARTA_LANDMARKS } from '../config/landmarks.js';

export class UIManager {
  constructor({ onSelectPreset, onTimeChange }) {
    this.onSelectPreset = onSelectPreset;
    this.onTimeChange = onTimeChange;

    this.drawer = document.getElementById('detail-drawer');
    this.drawerTitle = document.getElementById('drawer-title');
    this.drawerTagline = document.getElementById('drawer-tagline');
    this.drawerCategory = document.getElementById('drawer-category');
    this.drawerHeight = document.getElementById('drawer-height');
    this.drawerYear = document.getElementById('drawer-year');
    this.drawerLocation = document.getElementById('drawer-location');
    this.drawerDesc = document.getElementById('drawer-desc');
    this.drawerFacts = document.getElementById('drawer-facts');
    this.drawerFocusBtn = document.getElementById('drawer-focus-btn');
    this.currentLandmark = null;

    // 3D Map Labels state
    this.labelsVisible = true;
    this.labelElements = [];
    this.tempVec = new THREE.Vector3();

    this.init();
  }

  init() {
    this.initMapLabels();
    this.bindTourButtons();
    this.bindTimeButtons();
    this.bindDrawerEvents();
    this.bindImportEvents();
    this.bindGoogleTilesEvents();
  }

  /**
   * Create floating Google Maps-style 3D place labels for every Jakarta landmark
   */
  initMapLabels() {
    const container = document.getElementById('map-labels-container');
    if (!container) return;

    container.innerHTML = '';
    this.labelElements = [];

    JAKARTA_LANDMARKS.forEach((landmark) => {
      const el = document.createElement('button');
      el.type = 'button';
      el.className =
        'map-pin-label pointer-events-auto fixed top-0 left-0 -translate-x-1/2 -translate-y-full flex flex-col items-center group cursor-pointer transition-opacity duration-150';

      el.innerHTML = `
        <div class="px-2 py-0.5 rounded-md bg-zinc-950/85 backdrop-blur-md border border-white/15 group-hover:border-amber-400/70 group-hover:bg-zinc-900 shadow-lg flex items-center gap-1.5 transition-all">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
          <span class="text-[10px] font-sans font-semibold text-zinc-100 group-hover:text-amber-300 whitespace-nowrap tracking-tight">${landmark.shortName || landmark.name}</span>
        </div>
        <div class="w-px h-2.5 bg-gradient-to-b from-amber-400/70 to-transparent"></div>
      `;

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        this.showLandmarkDetails(landmark);
        this.onSelectPreset(landmark);
      });

      container.appendChild(el);
      this.labelElements.push({
        landmark,
        element: el,
        worldPos: new THREE.Vector3(
          landmark.position[0],
          landmark.labelHeight || 28,
          landmark.position[2]
        )
      });
    });

    const toggleBtn = document.getElementById('toggle-labels-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.labelsVisible = !this.labelsVisible;
        container.style.display = this.labelsVisible ? 'block' : 'none';
        toggleBtn.classList.toggle('active-time', this.labelsVisible);
      });
    }
  }

  /**
   * Project 3D world coordinates of each Jakarta place to 2D screen coordinates
   */
  updateMapLabels(camera) {
    if (!this.labelsVisible || !this.labelElements.length) return;

    const widthHalf = window.innerWidth / 2;
    const heightHalf = window.innerHeight / 2;

    for (let i = 0; i < this.labelElements.length; i++) {
      const item = this.labelElements[i];
      this.tempVec.copy(item.worldPos);
      this.tempVec.project(camera);

      // Check if behind camera or far outside frustum
      if (this.tempVec.z > 1.0 || this.tempVec.z < -1.0) {
        item.element.style.opacity = '0';
        item.element.style.pointerEvents = 'none';
        continue;
      }

      const x = this.tempVec.x * widthHalf + widthHalf;
      const y = -(this.tempVec.y * heightHalf) + heightHalf;

      const dist = camera.position.distanceTo(item.worldPos);
      if (dist > 1100) {
        item.element.style.opacity = '0';
        item.element.style.pointerEvents = 'none';
      } else {
        item.element.style.opacity = dist > 750 ? '0.65' : '1';
        item.element.style.pointerEvents = 'auto';
        item.element.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
      }
    }
  }

  bindGoogleTilesEvents() {
    const modal = document.getElementById('google-tiles-modal');
    const openBtn = document.getElementById('open-google-tiles-btn');
    const closeBtn = document.getElementById('close-google-tiles-btn');
    const enableBtn = document.getElementById('enable-google-tiles-btn');
    const disableBtn = document.getElementById('disable-google-tiles-btn');
    const input = document.getElementById('google-api-key-input');

    const savedKey = localStorage.getItem('google_3d_tiles_api_key') || '';
    if (input && savedKey) {
      input.value = savedKey;
    }

    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
      });
    }

    if (enableBtn) {
      enableBtn.addEventListener('click', () => {
        const key = input ? input.value.trim() : '';
        if (!key) {
          alert('Silakan masukkan Google Maps API Key terlebih dahulu.');
          return;
        }
        window.dispatchEvent(
          new CustomEvent('toggle-google-tiles', { detail: { apiKey: key, enable: true } })
        );
        if (modal) modal.classList.add('hidden');
      });
    }

    if (disableBtn) {
      disableBtn.addEventListener('click', () => {
        window.dispatchEvent(
          new CustomEvent('toggle-google-tiles', { detail: { enable: false } })
        );
        if (modal) modal.classList.add('hidden');
      });
    }
  }

  updateGoogleTilesStatus(info) {
    const badge = document.getElementById('google-tiles-badge');
    if (badge) {
      if (info.status === 'active') {
        badge.textContent = 'GOOGLE 3D ON';
        badge.className = 'inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30';
      } else if (info.status === 'loading') {
        badge.textContent = 'STREAMING...';
        badge.className = 'inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/30';
      } else {
        badge.textContent = 'PETA 3D JAKARTA';
        badge.className = 'inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-800 text-zinc-400 border border-white/5';
      }
    }
  }

  bindTourButtons() {
    const buttons = document.querySelectorAll('[data-tour-id]');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-tour-id');
        this.selectTourPreset(id);
      });
    });
  }

  selectTourPreset(id) {
    if (id === 'aerial') {
      this.onSelectPreset({
        cameraPosition: [360, 290, 380],
        cameraTarget: [0, 0, 20]
      });
      return;
    }

    const landmark = JAKARTA_LANDMARKS.find((l) => l.id === id);
    if (landmark) {
      this.showLandmarkDetails(landmark);
      this.onSelectPreset(landmark);
    }
  }

  bindTimeButtons() {
    const timeBtns = document.querySelectorAll('[data-time-preset]');
    timeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        timeBtns.forEach((b) => b.classList.remove('active-time'));
        btn.classList.add('active-time');
        const preset = btn.getAttribute('data-time-preset');
        this.onTimeChange(preset);
      });
    });
  }

  bindDrawerEvents() {
    const closeBtn = document.getElementById('drawer-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.hideLandmarkDetails());
    }

    if (this.drawerFocusBtn) {
      this.drawerFocusBtn.addEventListener('click', () => {
        if (this.currentLandmark) {
          this.onSelectPreset(this.currentLandmark);
        }
      });
    }
  }

  bindImportEvents() {
    const importModal = document.getElementById('import-modal');
    const openImportBtn = document.getElementById('open-import-btn');
    const closeImportBtn = document.getElementById('close-import-btn');

    if (openImportBtn && importModal) {
      openImportBtn.addEventListener('click', () => {
        importModal.classList.remove('hidden');
      });
    }

    if (closeImportBtn && importModal) {
      closeImportBtn.addEventListener('click', () => {
        importModal.classList.add('hidden');
      });
    }

    // Model dropped event listener
    window.addEventListener('model-imported', (e) => {
      this.showToast(`Model 3D berhasil dimuat: ${e.detail.name} (ditempatkan di koridor pusat)`);
      if (e.detail.model?.userData?.landmarkData) {
        this.showLandmarkDetails(e.detail.model.userData.landmarkData);
      }
    });
  }

  showLandmarkDetails(data) {
    this.currentLandmark = data;

    if (this.drawerTitle) this.drawerTitle.textContent = data.name;
    if (this.drawerTagline) this.drawerTagline.textContent = data.tagline || '';
    if (this.drawerCategory) this.drawerCategory.textContent = data.category || 'Bangunan Jakarta';
    if (this.drawerHeight) this.drawerHeight.textContent = data.height || '-';
    if (this.drawerYear) this.drawerYear.textContent = data.year || '-';
    if (this.drawerLocation) this.drawerLocation.textContent = data.location || 'DKI Jakarta';
    if (this.drawerDesc) this.drawerDesc.textContent = data.description || '';

    if (this.drawerFacts && data.facts) {
      this.drawerFacts.innerHTML = data.facts
        .map((f) => `<li class="flex items-start gap-2.5 text-xs text-zinc-300"><span class="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span><span class="leading-relaxed">${f}</span></li>`)
        .join('');
    }

    if (this.drawer) {
      this.drawer.classList.remove('translate-x-full');
    }
  }

  hideLandmarkDetails() {
    if (this.drawer) {
      this.drawer.classList.add('translate-x-full');
    }
    this.currentLandmark = null;
  }

  showToast(message) {
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    if (toast && toastMsg) {
      toastMsg.textContent = message;
      toast.classList.remove('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        toast.classList.add('opacity-0', 'pointer-events-none');
      }, 4500);
    }
  }
}
