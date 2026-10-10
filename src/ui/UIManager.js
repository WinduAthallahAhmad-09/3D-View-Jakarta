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

    this.init();
  }

  init() {
    this.bindTourButtons();
    this.bindTimeButtons();
    this.bindDrawerEvents();
    this.bindImportEvents();
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
        cameraPosition: [120, 180, 120],
        cameraTarget: [0, 0, 30]
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
      this.showToast(`Berhasil memuat model 3D: ${e.detail.name}! Model diletakkan di dekat Bundaran HI.`);
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
        .map((f) => `<li class="flex items-start gap-2"><span class="text-amber-400 mt-1">✦</span><span>${f}</span></li>`)
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
