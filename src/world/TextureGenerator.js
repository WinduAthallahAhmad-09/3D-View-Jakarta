import * as THREE from 'three';

/**
 * Procedural texture generator for Jakarta architecture and urban elements.
 * Generates high-res textures entirely in code (no external image assets needed).
 */
export class TextureGenerator {
  /**
   * Facade texture for modern glass/office skyscrapers.
   * Generates both diffuse map and emissive night window map.
   */
  static createFacadeTexture({
    style = 'modern-blue',
    floors = 30,
    windowsAcross = 12,
    litWindowRatio = 0.65
  } = {}) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const emissiveCanvas = document.createElement('canvas');
    emissiveCanvas.width = 512;
    emissiveCanvas.height = 1024;
    const eCtx = emissiveCanvas.getContext('2d');

    // Base building color palette
    let baseColor = '#102238';
    let mullionColor = '#1e334a';
    let windowColor = '#1e3a5f';
    let warmLight = '#ffd97d';
    let coolLight = '#e0f2fe';

    if (style === 'wisma-teal') {
      baseColor = '#0b2e36';
      mullionColor = '#e2e8f0';
      windowColor = '#0f4c5c';
    } else if (style === 'bronze-glass') {
      baseColor = '#2b2118';
      mullionColor = '#423325';
      windowColor = '#3d2e1e';
      warmLight = '#ffc078';
    } else if (style === 'dark-minimal') {
      baseColor = '#111827';
      mullionColor = '#1f2937';
      windowColor = '#182234';
    }

    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    eCtx.fillStyle = '#000000';
    eCtx.fillRect(0, 0, emissiveCanvas.width, emissiveCanvas.height);

    const winW = canvas.width / windowsAcross;
    const winH = canvas.height / floors;

    for (let f = 0; f < floors; f++) {
      const y = f * winH;
      // Floor slab line
      ctx.fillStyle = mullionColor;
      ctx.fillRect(0, y, canvas.width, 2);

      for (let w = 0; w < windowsAcross; w++) {
        const x = w * winW;
        // Window frame
        ctx.fillStyle = windowColor;
        ctx.fillRect(x + 2, y + 2, winW - 4, winH - 4);

        // Randomly lit windows
        const isLit = Math.random() < litWindowRatio;
        if (isLit) {
          const isWarm = Math.random() > 0.35;
          const lightCol = isWarm ? warmLight : coolLight;
          
          eCtx.fillStyle = lightCol;
          // Soft interior variation
          const brightness = 0.5 + Math.random() * 0.5;
          eCtx.globalAlpha = brightness;
          eCtx.fillRect(x + 3, y + 3, winW - 6, winH - 6);
          eCtx.globalAlpha = 1.0;

          // Day facade tint
          ctx.fillStyle = lightCol;
          ctx.globalAlpha = 0.4;
          ctx.fillRect(x + 3, y + 3, winW - 6, winH - 6);
          ctx.globalAlpha = 1.0;
        }
      }
    }

    const diffuseTexture = new THREE.CanvasTexture(canvas);
    diffuseTexture.wrapS = THREE.RepeatWrapping;
    diffuseTexture.wrapT = THREE.RepeatWrapping;

    const emissiveTexture = new THREE.CanvasTexture(emissiveCanvas);
    emissiveTexture.wrapS = THREE.RepeatWrapping;
    emissiveTexture.wrapT = THREE.RepeatWrapping;

    return { diffuseTexture, emissiveTexture };
  }

  /**
   * Procedural road texture for Sudirman-Thamrin corridor:
   * Asphalt + yellow median + white dashed lane markers + TransJakarta busway lane.
   */
  static createRoadTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Asphalt base
    ctx.fillStyle = '#1c1f24';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle noise on asphalt
    for (let i = 0; i < 4000; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#272b32' : '#14161a';
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }

    const mid = canvas.width / 2;

    // Center divider / median barrier
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(mid - 12, 0, 24, canvas.height);
    // Yellow double line near median
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(mid - 16, 0, 3, canvas.height);
    ctx.fillRect(mid + 13, 0, 3, canvas.height);

    // TransJakarta Busway special painted lane (distinctive red/orange-tinted lane)
    const buswayLeft = mid - 140;
    ctx.fillStyle = 'rgba(185, 28, 28, 0.45)';
    ctx.fillRect(buswayLeft, 0, 50, canvas.height);

    const buswayRight = mid + 90;
    ctx.fillStyle = 'rgba(185, 28, 28, 0.45)';
    ctx.fillRect(buswayRight, 0, 50, canvas.height);

    // TransJakarta solid separator line
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(buswayLeft - 2, 0, 4, canvas.height);
    ctx.fillRect(buswayRight + 50, 0, 4, canvas.height);

    // Regular vehicle dashed white lane markings
    ctx.fillStyle = '#e2e8f0';
    const lanes = [mid - 80, mid - 200, mid - 320, mid + 200, mid + 320];
    const dashLength = 40;
    const dashGap = 35;

    lanes.forEach(x => {
      for (let y = 0; y < canvas.height; y += dashLength + dashGap) {
        ctx.fillRect(x, y, 4, dashLength);
      }
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 12);
    return texture;
  }

  /**
   * Sidewalk texture with interlocking pavers and tactile yellow tiles
   */
  static createSidewalkTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Modern grey granite paver base (revitalized Jakarta pedestrian walkway)
    ctx.fillStyle = '#64748b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid paver pattern
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    const step = 32;
    for (let x = 0; x < canvas.width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Yellow guiding line (tactile paving)
    ctx.fillStyle = '#eab308';
    ctx.fillRect(200, 0, 32, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 16);
    return texture;
  }

  /**
   * Monas marble texture with stone blocks
   */
  static createMarbleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Stone joints
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1;
    const step = 40;
    for (let y = 0; y < canvas.height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }
}
