import { useEffect, useRef } from 'react';

/**
 * Banner de MeatKlaw en pixel art: marco ornate dorado, el corazon de Karcinn como protagonista, titulo y
 * "Go to itch.io". Con `href`, el banner entero es el boton. Todo se dibuja en un canvas de 480x150 px de arte y se muestra escalado sin filtro.
 * Las fuentes (Black Ops One y Lato) se piden a Google Fonts una sola vez para pixelar el texto.
 */
const FONT_LINK_ID = 'meatklaw-banner-fonts';

const MeatKlawBanner = ({ style, href }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let rafId = 0;
    if (!document.getElementById(FONT_LINK_ID)) {
      const link = document.createElement('link');
      link.id = FONT_LINK_ID;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Lato:ital,wght@1,700;1,900&display=swap';
      document.head.appendChild(link);
    }

    const W = 480, H = 150;
      var art = canvasRef.current;
      art.width = W; art.height = H;
      var ctx = art.getContext('2d');
      ctx.imageSmoothingEnabled = false;

      // ---------- paleta (la del juego) ----------
      function hex(s) { return [parseInt(s.slice(1, 3), 16), parseInt(s.slice(3, 5), 16), parseInt(s.slice(5, 7), 16)]; }
      var GOLD = hex('#cca15c');
      var G_OUT = GOLD.map(function (c) { return c * 0.36; });
      var G_DARK = GOLD.map(function (c) { return c * 0.62; });
      var G_MID = GOLD.map(function (c) { return c * 0.92; });
      var G_HI = GOLD.map(function (c, i) { return c * 0.5 + [255, 242, 204][i] * 0.5; });
      var RAMP = ['#822823', '#af362f', '#d95030', '#d9633f', '#ffd4c9'].map(hex);
      var EMPTY = hex('#170f12');
      var FLESH = hex('#232634'), FLESH2 = hex('#2f2a34'), CRACK = hex('#ac3232'), EMBER = hex('#d95030'), HOT = hex('#d9633f');
      var LIGHT = [-0.6, -0.8];

      function fract(x) { return x - Math.floor(x); }
      function hash(a, b) { return fract(Math.sin(a * 127.1 + b * 311.7) * 43758.5453); }
      function mix(a, b, t) { return a + (b - a) * t; }
      function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

      function putter(img) {
        var d = img.data;
        return function (x, y, c, a) {
          x |= 0; y |= 0;
          if (x < 0 || y < 0 || x >= W || y >= H) return;
          var i = (y * W + x) * 4;
          if (a === undefined || a >= 1) { d[i] = c[0]; d[i + 1] = c[1]; d[i + 2] = c[2]; d[i + 3] = 255; return; }
          var base = d[i + 3] / 255;
          d[i] = mix(d[i], c[0], a); d[i + 1] = mix(d[i + 1], c[1], a); d[i + 2] = mix(d[i + 2], c[2], a);
          d[i + 3] = Math.max(d[i + 3], 255 * Math.max(a, base));
        };
      }

      // ---------- capa fija: fondo, montañas, marco, textos ----------
      var baseImg = new ImageData(W, H);
      var put = putter(baseImg);

      function scene() {
        for (var y = 0; y < H; y++) {
          for (var x = 0; x < W; x++) {
            var t = y / H;
            var c = [mix(34, 12, t), mix(24, 8, t), mix(10, 3, t)];
            var vx = (x - W / 2) / (W / 2), vy = (y - H / 2) / (H / 2);
            var vig = 1 - 0.55 * clamp(vx * vx * 0.55 + vy * vy * 0.45, 0, 1);
            put(x, y, [c[0] * vig, c[1] * vig, c[2] * vig]);
          }
        }
        // dos crestas de montañas (la Patagonia oscura) con neblina punteada entre ellas
        function ridge(x, base, amp, seed) {
          return base + amp * Math.sin(x * 0.037 + seed) + amp * 0.55 * Math.sin(x * 0.091 + seed * 2.3)
            + amp * 0.3 * Math.sin(x * 0.23 + seed * 3.1) + (hash(Math.floor(x / 3), seed) - 0.5) * 3.2;
        }
        for (var rx = 0; rx < W; rx++) {
          var r1 = ridge(rx, 104, 9, 1.7), r2 = ridge(rx, 120, 7, 4.2);
          for (var ry = Math.floor(r1); ry < H; ry++) {
            var fog = clamp(1 - (ry - r1) / 14, 0, 1);
            var dither = ((rx + ry) & 1) === 0 && fog > 0.25;
            put(rx, ry, dither ? [48, 33, 17] : [22, 15, 8]);
          }
          for (var y2 = Math.floor(r2); y2 < H; y2++) put(rx, y2, [11, 8, 4]);
        }
      }

      var MEANDER = ['11111111', '10000001', '10111101', '10100101', '10101101', '10100001', '10111111', '10000000'];

      function frameD(x, y) {
        var cx = W / 2, cy = H / 2, hx = W / 2 - 3, hy = H / 2 - 3, cut = 9;
        var dx = Math.abs(x + 0.5 - cx), dy = Math.abs(y + 0.5 - cy);
        return Math.max(dx - hx, dy - hy, (dx + dy - (hx + hy - cut)) * 0.7071);
      }

      function frame() {
        var cx = W / 2, cy = H / 2, hx = W / 2 - 3, hy = H / 2 - 3;
        for (var y = 0; y < H; y++) {
          for (var x = 0; x < W; x++) {
            var d = frameD(x, y);
            if (d > 0) { var i = (y * W + x) * 4; baseImg.data[i + 3] = 0; continue; }
            if (d <= -13) continue;
            var nx = (x + 0.5 - cx) / hx, ny = (y + 0.5 - cy) / hy;
            var len = Math.hypot(nx, ny) || 1;
            var facing = (nx / len) * LIGHT[0] + (ny / len) * LIGHT[1];
            var face = facing > 0.2 ? G_HI : (facing < -0.3 ? G_DARK : G_MID);
            if (d > -1) put(x, y, G_OUT);
            else if (d > -3) put(x, y, face);
            else if (d > -4) put(x, y, G_DARK);
            else if (d > -11) {
              var on = MEANDER[y & 7][x & 7] === '1';
              put(x, y, on ? [112, 88, 48] : [22, 15, 9]);
            } else if (d > -12) put(x, y, G_MID);
            else put(x, y, G_OUT);
          }
        }
      }

      function diamond(cx, cy, r, core) {
        for (var dy = -r; dy <= r; dy++) {
          for (var dx = -r; dx <= r; dx++) {
            var m = Math.abs(dx) + Math.abs(dy);
            if (m > r) continue;
            var c;
            if (m === r) c = G_OUT;
            else if (m >= r - 1) c = (dx + dy < 0) ? G_HI : G_MID;
            else if (m >= r - 2 && r > 3) c = G_DARK;
            else c = core ? EMBER : [20, 14, 8];
            put(cx + dx, cy + dy, c);
          }
        }
      }

      function pearls(x0, y0, x1, y1, n) {
        for (var i = 1; i < n; i++) {
          var t = i / n;
          var px = Math.round(mix(x0, x1, t)), py = Math.round(mix(y0, y1, t));
          put(px, py, G_HI); put(px + 1, py, G_MID); put(px, py + 1, G_DARK);
        }
      }

      // texto en pixel art: Lato se dibuja chico, se umbraliza y se le da relieve (luz arriba, sombra abajo)
      function pixelText(str, px, size, weight, spacing, family, italic) {
        var off = document.createElement('canvas');
        off.width = W; off.height = 80;
        var o = off.getContext('2d', { willReadFrequently: true });
        o.font = (italic === false ? '' : 'italic ') + weight + ' ' + size + 'px ' + (family ? family + ', ' : '') + 'Lato, "Segoe UI", sans-serif';
        o.letterSpacing = spacing + 'px';
        o.textBaseline = 'alphabetic';
        var w = Math.ceil(o.measureText(str).width);
        o.fillStyle = '#fff';
        o.fillText(str, 4, 60);
        var data = o.getImageData(0, 0, W, 80).data;
        var mask = [];
        for (var y = 0; y < 80; y++) { mask.push([]); for (var x = 0; x < W; x++) mask[y].push(data[(y * W + x) * 4 + 3] > 110); }
        return { mask: mask, w: w };
      }

      function blitText(t, cx, baseline, hi, mid, dark, outline) {
        var left = Math.round(cx - t.w / 2) - 4;
        var top = baseline - 60;
        function on(x, y) { return y >= 0 && y < 80 && x >= 0 && x < W && t.mask[y][x]; }
        if (outline) {
          for (var y = 0; y < 80; y++) for (var x = 0; x < W; x++) {
            if (on(x, y)) continue;
            if (on(x - 1, y) || on(x + 1, y) || on(x, y - 1) || on(x, y + 1) || on(x, y - 2) || on(x - 1, y - 1) || on(x + 1, y - 1)) put(left + x, top + y + 1, outline);
          }
        }
        for (var y2 = 0; y2 < 80; y2++) for (var x2 = 0; x2 < W; x2++) {
          if (!on(x2, y2)) continue;
          var c = mid;
          if (!on(x2, y2 - 1) || (!on(x2 - 1, y2 - 1) && !on(x2 - 1, y2))) c = hi;
          else if (!on(x2, y2 + 1)) c = dark;
          put(left + x2, top + y2, c);
        }
      }

      function hline(x0, x1, y, c) { for (var x = x0; x <= x1; x++) put(x, y, c); }

      var TX = 322; // centro del bloque de texto (a la derecha del corazon)

      function buildStatic() {
        scene();
        frame();
        // rombos de las esquinas, de los lados y de abajo (los del ornate), con perlas entre ellos
        diamond(9, 9, 5, false); diamond(W - 10, 9, 5, false); diamond(9, H - 10, 5, false); diamond(W - 10, H - 10, 5, false);
        diamond(10, H / 2, 8, true); diamond(W - 11, H / 2, 8, true);
        diamond(W / 2, H - 9, 6, false);
        pearls(18, 9, W / 2 - 80, 9, 10); pearls(W / 2 + 80, 9, W - 19, 9, 10);
        pearls(20, H - 9, W / 2 - 10, H - 9, 9); pearls(W / 2 + 10, H - 9, W - 21, H - 9, 9);

        // título
        var title = pixelText('MEATKLAW', 0, 34, 400, 2, '"Black Ops One"', false);
        var SOLID = [237, 204, 143]; // color sólido, sin relieve
        blitText(title, TX, 66, SOLID, SOLID, SOLID, G_OUT);
        // subtítulo con filetes a los lados
        var sub = pixelText('GO TO ITCH.IO', 0, 12, 700, 3);
        blitText(sub, TX, 85, [210, 180, 128], [158, 128, 82], [96, 74, 40], [20, 14, 8]);
        var sx0 = Math.round(TX - sub.w / 2) - 14, sx1 = Math.round(TX + sub.w / 2) + 14;
        hline(TX - 112, sx0 - 6, 79, G_DARK); hline(sx1 + 6, TX + 112, 79, G_DARK);
        hline(TX - 112, sx0 - 6, 80, G_OUT); hline(sx1 + 6, TX + 112, 80, G_OUT);
        diamond(sx0, 80, 3, true); diamond(sx1, 80, 3, true);
        diamond(TX - 114, 79, 2, false); diamond(TX + 114, 79, 2, false);
      }

      // ---------- capa viva: la cadena de corazones ----------
      function sdHeart(px, py) {
        var x = Math.abs(px), y = py;
        if (y + x > 1) {
          return Math.hypot(x - 0.25, y - 0.75) - Math.SQRT2 / 4;
        }
        var a = Math.hypot(x, y - 1);
        var m = 0.5 * Math.max(x + y, 0);
        var b = Math.hypot(x - m, y - m);
        return Math.min(a, b) * (x - y > 0 ? 1 : -1);
      }

      function kheartX(vx, vy, seed, beat, now) {
        var best = 99, glow = 0;
        for (var j = 0; j < 4; j++) {
          var ang = 0.7854 + 1.5708 * j + (hash(seed + j, 3.1) - 0.5) * 0.28;
          var dx = Math.cos(ang), dy = Math.sin(ang);
          var t = vx * dx + vy * dy;
          if (t < -1.2) continue;
          var len = 6.2 + hash(seed + j, 7.7) * 2.6;
          var u = clamp(t / len, 0, 1);
          var stepOff = (hash(Math.floor(t / 2.5), j + seed) - 0.5) * 0.9;
          var perp = Math.abs(vx * dy - vy * dx) + stepOff * u;
          var width = mix(1.0, 0.45, u) + beat * 0.45 * (1 - u);
          var a = perp / width + Math.max(t - len, 0) * 1.5;
          if (a < best) {
            best = a;
            var run = fract(now * 0.7 + hash(j, seed));
            glow = (Math.abs(u - run) < 0.16 ? 1 : 0) * (a < 0.45 ? 1 : 0);
          }
        }
        if (best < 0.4) {
          if (Math.hypot(vx, vy) < 1.6 + beat * 0.9) return HOT;
          return glow > 0.4 ? HOT : EMBER;
        }
        if (best < 0.8) return CRACK;
        if (best < 1.5) return FLESH;
        return FLESH2;
      }

      function kbeat(now) {
        var period = 0.95;
        var t = (now % period) / period;
        return clamp(Math.exp(-Math.pow(t / 0.09, 2)) + 0.55 * Math.exp(-Math.pow((t - 0.27) / 0.09, 2)), 0, 1);
      }

      function vnoise2(x, y) {
        var ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
        var ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
        return mix(mix(hash(ix, iy), hash(ix + 1, iy), ux), mix(hash(ix, iy + 1), hash(ix + 1, iy + 1), ux), uy);
      }

      // llama del KHeart afuera de su contorno (la del juego): null si no hay, si no un color
      function flame(px, py, cy, gw, d, ls, now) {
        var up = clamp((cy - py) / (gw * 0.5), -1, 1);
        var n = vnoise2(px / ls * 0.6, py / ls * 0.42 + now * 9);
        var reach = (2 + 4 * 0.29) * (0.55 + 0.65 * up) * ls * 1.5;
        var v = n - d / Math.max(reach, 0.3);
        if (v > 0.6) return [255, 209, 122];
        if (v > 0.36) return EMBER;
        if (v > 0.18) return CRACK;
        return null;
      }

      // kind: 'full' | 'part' | 'empty' | 'k'
      function heart(put2, cx, cy, gw, towards, kind, seed, now) {
        var hs = gw / 1.2071;
        var beat = kind === 'k' ? kbeat(now) : 0;
        var sc = 1 + 0.1 * beat;
        var ls = Math.max(1, gw / 22.5 * 0.7); // grosor de las capas del borde: crece con el corazón
        var bezel = 2.4 * ls;
        var R = Math.ceil(gw * 0.75) + 3 + (kind === 'k' ? Math.ceil(14 * ls) : 0);
        for (var y = Math.floor(cy - R); y <= Math.ceil(cy + R); y++) {
          for (var x = Math.floor(cx - R); x <= Math.ceil(cx + R); x++) {
            var px = x + 0.5, py = y + 0.5;
            var qx = (px - cx) / (hs * sc), qy = (py - cy) / (hs * sc);
            var hqx = qx, hqy = towards ? qy + 0.5518 : -qy + 0.5518;
            var d = sdHeart(hqx, hqy) * hs * sc;
            if (d >= bezel) {
              if (kind === 'k') {
                var fc = flame(px, py, cy, gw, d - bezel * 0.5 + beat * 1.5, ls, now);
                if (fc) put2(x, y, fc);
              }
              continue;
            }
            var dirx = px - cx, diry = py - cy, dl = Math.hypot(dirx, diry) || 1;
            var facing = (dirx / dl) * LIGHT[0] + (diry / dl) * LIGHT[1];
            if (d >= 0) {
              if (d > bezel - ls) put2(x, y, G_OUT);
              else put2(x, y, facing > 0.2 ? G_HI : (facing < -0.2 ? G_DARK : G_MID));
              continue;
            }
            var t = -d / ls;
            var col;
            if (kind === 'k') {
              if (t < 1) col = FLESH;
              else if (t < 2) col = EMBER;
              else if (t < 3) col = CRACK;
              else col = kheartX((px - cx) / sc * (22.5 / gw), (py - cy) / sc * (22.5 / gw), seed * 7, beat, now);
              if (t >= 1 && t < 2 && facing > 0.75) col = HOT;
            } else {
              var a = (Math.atan2(hqx, hqy - 0.6) + Math.PI) / (2 * Math.PI);
              var piece = Math.floor(a * 5) % 5;
              var units = kind === 'part' ? 3 : (kind === 'empty' ? 0 : 5);
              var order = (piece + 3) % 5; // desde la muesca, en sentido horario
              if (order >= units) col = EMPTY;
              else {
                var tone = [3, 2, 4, 2, 1][piece];
                if (t < 1) tone = 0;
                else if (t < 3 && facing > 0.55) tone = Math.min(tone + 1, 4);
                col = RAMP[tone];
              }
            }
            put2(x, y, col);
          }
        }
      }

      // el protagonista: un KHeart enorme a la izquierda; a la derecha, bajo el título, una cadenita del HUD como contexto
      var BIG = { x: 112, y: 80, gw: 70 };
      var chain = (function () {
        var out = [], gw = 13, sp = 9.6, x0 = TX - 1.5 * sp, yUp = 103, yDown = 109;
        var kinds = ['full', 'full', 'part', 'empty'];
        for (var k = 0; k < 4; k++) out.push({ x: x0 + k * sp, y: k % 2 ? yDown : yUp, towards: k % 2 === 1, kind: kinds[k], gw: gw });
        return out;
      })();

      function render(now) {
        var live = new ImageData(new Uint8ClampedArray(baseImg.data), W, H);
        var p2 = putter(live);
        var beat = kbeat(now);
        // resplandor ember detrás del corazón, que late con él
        var GR = BIG.gw * 1.25;
        for (var gy = Math.floor(BIG.y - GR); gy <= Math.ceil(BIG.y + GR); gy++) {
          for (var gx = Math.floor(BIG.x - GR); gx <= Math.ceil(BIG.x + GR); gx++) {
            if (frameD(gx, gy) > -13) continue;
            var r = Math.hypot(gx - BIG.x, (gy - BIG.y) * 1.1) / GR;
            if (r >= 1) continue;
            var amt = Math.pow(1 - r, 2.2) * (0.32 + 0.2 * beat);
            if (((gx + gy) & 1) === 0 && amt < 0.12) continue; // dither en el borde del resplandor
            p2(gx, gy, EMBER, amt);
          }
        }
        // remates de la cadena chica
        function dia(cx, cy, r) { for (var dy = -r; dy <= r; dy++) for (var dx = -r; dx <= r; dx++) { var m = Math.abs(dx) + Math.abs(dy); if (m <= r) p2(cx + dx, cy + dy, m === r ? G_OUT : (dx + dy < 0 ? G_HI : G_MID)); } }
        var cf = chain[0], cl = chain[chain.length - 1];
        dia(Math.round(cf.x - 11), Math.round(cf.y + 3), 3);
        dia(Math.round(cl.x + 11), Math.round(cl.y + 3), 3);
        for (var i = 0; i < chain.length; i++) {
          var h = chain[i];
          heart(p2, h.x, h.y, h.gw, h.towards, h.kind, i + 1, now);
        }
        // el KHeart grande, con un rombo de oro en la muesca
        heart(p2, BIG.x, BIG.y, BIG.gw, false, 'k', 3, now);
        var notchY = Math.round(BIG.y - 0.4482 * (BIG.gw / 1.2071) * (1 + 0.1 * beat)) - 6;
        dia(BIG.x, notchY, 5);
        // chispas que suben del KHeart
        for (var s = 0; s < 16; s++) {
          var life = fract(now * 0.5 + s * 0.0625 + hash(s, 2.3) * 0.2);
          var sx = BIG.x + (hash(s, 9.1) - 0.5) * BIG.gw * 0.9 + Math.sin(now * 2 + s) * 2;
          var sy = BIG.y - BIG.gw * 0.55 - life * 34;
          p2(sx, sy, life < 0.5 ? HOT : EMBER, 1 - life);
        }
        ctx.putImageData(live, 0, 0);
      }



    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let last = 0;
    const t0 = performance.now();
    function loop(ts) {
      if (cancelled) return;
      if (ts - last > 83) { last = ts; render((ts - t0) / 1000); }
      rafId = requestAnimationFrame(loop);
    }
    function start() {
      if (cancelled) return;
      buildStatic();
      render(0.3);
      if (!reduce) rafId = requestAnimationFrame(loop);
    }
    const ready = (document.fonts && document.fonts.load)
      ? Promise.all([document.fonts.load('34px "Black Ops One"'), document.fonts.load('italic 700 12px Lato')]).catch(() => {})
      : Promise.resolve();
    ready.then(start);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, []);

  const canvas = (
    <canvas
      ref={canvasRef}
      aria-label="MeatKlaw: marco ornate dorado y el corazon de Karcinn, con el titulo y Go to itch.io"
      style={{ width: '100%', height: 'auto', display: 'block', imageRendering: 'pixelated', ...style }}
    />
  );
  if (!href) return canvas;
  // El banner entero es el boton: lleva a la pagina del juego.
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="MeatKlaw en itch.io"
      className="meatklaw-banner-link"
      style={{ display: 'block', lineHeight: 0, transition: 'filter 0.15s, transform 0.15s' }}
      onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = ''; e.currentTarget.style.transform = ''; }}
    >
      {canvas}
    </a>
  );
};

export default MeatKlawBanner;
