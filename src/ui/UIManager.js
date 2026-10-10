import * as THREE from 'three';
import { JAKARTA_LANDMARKS } from '../config/landmarks.js';

export class UIManager {
  constructor({ onSelectPreset, onTimeChange }) {
    this.onSelectPreset = onSelectPreset;
    this.onTimeChange = onTimeChange;

    this.homescreen = document.getElementById('homescreen-overlay');
    this.uiOverlay = document.getElementById('ui-overlay');
    this.labelsContainer = document.getElementById('map-labels-container');

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

    // State
    this.isHomeActive = true;
    this.labelsVisible = true;
    this.labelElements = [];
    this.tempVec = new THREE.Vector3();

    this.init();
  }

  init() {
    this.populateHomescreenDirectory();
    this.initScrollReveal();
    this.initAccordions();
    this.bindHomescreenEvents();
    this.initMapLabels();
    this.bindTourButtons();
    this.bindTimeButtons();
    this.bindDrawerEvents();
    this.bindImportEvents();
    this.bindGoogleTilesEvents();
  }

  /**
   * Populate the 23-landmark directory on the Homescreen using Cold Luxury & Dark Tech glass tiles
   */
  populateHomescreenDirectory() {
    const grid = document.getElementById('homescreen-landmark-grid');
    if (!grid) return;

    grid.innerHTML = JAKARTA_LANDMARKS.map((item, idx) => {
      const num = String(idx + 1).padStart(2, '0');
      const coords = item.coordinates || '6.1950° S, 106.8230° E';
      return `
        <button type="button" data-home-jump="${item.id}" class="glass-tile rounded-xl p-6 text-left flex flex-col justify-between group cursor-pointer reveal-item" style="transition-delay: ${(idx % 6) * 45}ms">
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="font-mono text-[11px] text-sky-400">NODE // ${num}</span>
              <span class="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-[0.12em] bg-sky-500/10 text-sky-400 border border-sky-400/20">
                ${item.category}
              </span>
            </div>
            <h3 class="font-display font-bold tracking-tight text-xl text-zinc-100 group-hover:text-sky-400 transition-colors">
              ${item.name}
            </h3>
            <p class="mt-1.5 font-mono text-[11px] text-zinc-500">
              ${coords}
            </p>
            <p class="mt-2.5 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
              ${item.tagline}
            </p>
          </div>
          <div class="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>ELEV ${item.height}</span>
            <span class="text-sky-400 group-hover:translate-x-0.5 transition-transform">FOKUS 3D →</span>
          </div>
        </button>
      `;
    }).join('');
  }

  /**
   * IntersectionObserver for smooth spatial reveal transitions
   */
  initScrollReveal() {
    const items = document.querySelectorAll('.reveal-item');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: this.homescreen, threshold: 0.08 }
    );

    items.forEach((el) => observer.observe(el));
  }

  /**
   * Accordions with sharp + and - toggle state
   */
  initAccordions() {
    const buttons = document.querySelectorAll('[data-accordion-btn]');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('[data-accordion-icon]');
        if (!content) return;

        const isHidden = content.classList.contains('hidden');
        content.classList.toggle('hidden', !isHidden);
        if (icon) {
          icon.textContent = isHidden ? '-' : '+';
        }
      });
    });
  }

  /**
   * Bind Homescreen -> 3D Workspace transitions and keyboard shortcuts
   */
  bindHomescreenEvents() {
    const enterBtns = [
      document.getElementById('nav-enter-3d-btn'),
      document.getElementById('hero-enter-3d-btn')
    ];
    enterBtns.forEach((btn) => {
      if (btn) {
        btn.addEventListener('click', () => this.enter3DWorkspace('bundaran-hi'));
      }
    });

    const aerialBtn = document.getElementById('hero-aerial-btn');
    if (aerialBtn) {
      aerialBtn.addEventListener('click', () => this.enter3DWorkspace('aerial'));
    }

    const backHomeBtn = document.getElementById('back-to-home-btn');
    if (backHomeBtn) {
      backHomeBtn.addEventListener('click', () => this.openHomescreen());
    }

    // Bind all [data-home-jump] cards and buttons
    document.querySelectorAll('[data-home-jump]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-home-jump');
        this.enter3DWorkspace(targetId);
      });
    });

    // Keyboard shortcuts: ENTER to enter 3D map, ESC to close drawer or return to Homescreen
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && this.isHomeActive) {
        if (document.activeElement?.tagName === 'INPUT') return;
        this.enter3DWorkspace('bundaran-hi');
      } else if (e.key === 'Escape' && !this.isHomeActive) {
        if (this.currentLandmark) {
          this.hideLandmarkDetails();
        } else {
          this.openHomescreen();
        }
      }
    });
  }

  enter3DWorkspace(presetId = null) {
    this.isHomeActive = false;

    if (this.homescreen) {
      this.homescreen.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        if (!this.isHomeActive) {
          this.homescreen.style.display = 'none';
        }
      }, 450);
    }

    if (this.uiOverlay) {
      this.uiOverlay.style.display = 'flex';
      requestAnimationFrame(() => {
        this.uiOverlay.classList.remove('opacity-0');
      });
    }

    if (this.labelsContainer && this.labelsVisible) {
      this.labelsContainer.style.display = 'block';
    }

    if (presetId) {
      this.selectTourPreset(presetId);
    }
  }

  openHomescreen() {
    this.isHomeActive = true;
    this.hideLandmarkDetails();

    if (this.labelsContainer) {
      this.labelsContainer.style.display = 'none';
    }

    if (this.uiOverlay) {
      this.uiOverlay.classList.add('opacity-0');
      setTimeout(() => {
        if (this.isHomeActive) {
          this.uiOverlay.style.display = 'none';
        }
      }, 300);
    }

    if (this.homescreen) {
      this.homescreen.style.display = 'block';
      requestAnimationFrame(() => {
        this.homescreen.classList.remove('opacity-0', 'pointer-events-none');
      });
    }
  }

  /**
   * Create Cold Luxury & Dark Tech floating 3D spatial place labels
   */
  initMapLabels() {
    if (!this.labelsContainer) return;

    this.labelsContainer.innerHTML = '';
    this.labelElements = [];

    JAKARTA_LANDMARKS.forEach((landmark, index) => {
      const num = String(index + 1).padStart(2, '0');
      const el = document.createElement('button');
      el.type = 'button';
      el.className =
        'map-pin-label pointer-events-auto fixed top-0 left-0 -translate-x-1/2 -translate-y-full flex flex-col items-center group cursor-pointer transition-opacity duration-150';

      el.innerHTML = `
        <div class="px-2 py-0.5 rounded-md bg-zinc-950/85 backdrop-blur-md border border-white/15 group-hover:border-sky-400/70 group-hover:bg-sky-500/20 flex items-center gap-1.5 transition-colors shadow-lg">
          <span class="font-mono text-[9px] text-sky-400">${num}</span>
          <span class="text-[10px] font-display font-medium text-zinc-100 group-hover:text-white whitespace-nowrap tracking-tight">${landmark.shortName || landmark.name}</span>
        </div>
        <div class="w-px h-2.5 bg-sky-400/45"></div>
      `;

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        this.showLandmarkDetails(landmark);
        this.onSelectPreset(landmark);
      });

      this.labelsContainer.appendChild(el);
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
        if (!this.isHomeActive) {
          this.labelsContainer.style.display = this.labelsVisible ? 'block' : 'none';
        }
        toggleBtn.classList.toggle('active-time', this.labelsVisible);
      });
    }
  }

  /**
   * Project 3D world coordinates of each Jakarta place to 2D screen coordinates
   */
  updateMapLabels(camera) {
    if (this.isHomeActive || !this.labelsVisible || !this.labelElements.length) return;

    const widthHalf = window.innerWidth / 2;
    const heightHalf = window.innerHeight / 2;

    for (let i = 0; i < this.labelElements.length; i++) {
      const item = this.labelElements[i];
      this.tempVec.copy(item.worldPos);
      this.tempVec.project(camera);

      if (this.tempVec.z > 1.0 || this.tempVec.z < -1.0) {
        item.element.style.opacity = '0';
        item.element.style.pointerEvents = 'none';
        continue;
      }

      const x = this.tempVec.x * widthHalf + widthHalf;
      const y = -(this.tempVec.y * heightHalf) + heightHalf;

      const dist = camera.position.distanceTo(item.worldPos);
      if (dist > 1150) {
        item.element.style.opacity = '0';
        item.element.style.pointerEvents = 'none';
      } else {
        item.element.style.opacity = dist > 750 ? '0.68' : '1';
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
        badge.textContent = 'SATELIT ON';
        badge.className = 'px-2 py-0.5 rounded-md text-[9px] font-mono uppercase tracking-[0.12em] bg-sky-500/20 text-sky-300 border border-sky-400/35';
      } else if (info.status === 'loading') {
        badge.textContent = 'MEMUAT...';
        badge.className = 'px-2 py-0.5 rounded-md text-[9px] font-mono uppercase tracking-[0.12em] bg-zinc-800 text-zinc-300 border border-white/15';
      } else {
        badge.textContent = 'PETA 3D';
        badge.className = 'px-2 py-0.5 rounded-md text-[9px] font-mono uppercase tracking-[0.12em] bg-sky-500/15 text-sky-400 border border-sky-400/25';
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
      this.hideLandmarkDetails();
      this.onSelectPreset({
        cameraPosition: [340, 290, 360],
        cameraTarget: [0, 0, 10]
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

    window.addEventListener('model-imported', (e) => {
      this.showToast(`Model 3D berhasil dimuat: ${e.detail.name}`);
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
    if (this.drawerLocation) {
      const coords = data.coordinates ? ` // ${data.coordinates}` : '';
      this.drawerLocation.textContent = `${data.location || 'DKI Jakarta'}${coords}`;
    }
    if (this.drawerDesc) this.drawerDesc.textContent = data.description || '';

    if (this.drawerFacts && data.facts) {
      this.drawerFacts.innerHTML = data.facts
        .map((f) => `<li class="flex items-start gap-2.5 text-xs text-zinc-300"><span class="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span><span class="leading-relaxed">${f}</span></li>`)
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
