// Genera le grafiche del canale YouTube «Veleco Italia».
// Uso: node post-google/strumenti/youtube-grafiche.js [cartella-di-uscita]
// Senza argomenti scrive in bozze/youtube/.
//
// Produce tre file, nelle misure che chiede YouTube:
//   avatar-800.png         800×800   — l'immagine del canale (YouTube la ritaglia in cerchio)
//   banner-2048x1152.png   2048×1152 — la copertina; tutto il testo sta nell'area sicura
//                                       centrale di 1235×338, l'unica che si vede sul telefono
//   filigrana-150.png      150×150   — la filigrana in sovrimpressione nei video, su trasparente
//
// Colori e caratteri sono quelli del sito: verde #0F332D / #1B4B43, oro #DB9200, carta #FBF8F1,
// Zilla Slab per i titoli, Public Sans per il resto, IBM Plex Mono per l'occhiello.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = process.argv[2] || path.resolve(__dirname, '../../bozze/youtube');

// La «V» del marchio: lo stesso poligono di public_html/assets/favicon-source.svg.
const V = (colore, dim) => `<svg width="${dim}" height="${dim}" viewBox="0 0 100 100">
  <polygon points="16,21 30.5,21 50,63.5 69.5,21 84,21 50,83" fill="${colore}"/></svg>`;

const TESTA = `<link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@700&family=Public+Sans:wght@400;600&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  html,body{margin:0;padding:0;overflow:hidden}
  body{font-family:'Public Sans',sans-serif;-webkit-font-smoothing:antialiased}
  .fondo{position:absolute;inset:0;background:linear-gradient(135deg,#0F332D 0%,#1B4B43 55%,#0F332D 100%)}
</style>`;

const PAGINE = {
  'avatar-800.png': { width: 800, height: 800, html: `
    <div class="fondo"></div>
    <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">
      ${V("#DB9200", 520)}
    </div>` },

  // Area sicura: 1235×338 centrata, cioè x da 406 a 1641, y da 407 a 745.
  'banner-2048x1152.png': { width: 2048, height: 1152, html: `
    <div class="fondo"></div>
    <div style="position:absolute;left:406px;top:407px;width:1235px;height:338px;
                display:flex;align-items:center;justify-content:center;gap:52px">
      <div style="flex:0 0 auto;background:#FBF8F1;border-radius:44px;padding:30px 34px;line-height:0">
        ${V('#0F332D', 148)}
      </div>
      <div style="flex:0 1 auto;color:#fff">
        <p style="font-family:'IBM Plex Mono',monospace;font-size:26px;letter-spacing:.1em;
                  text-transform:uppercase;color:#DB9200;margin:0 0 14px">Concessionario ufficiale · Genova Nervi</p>
        <h1 style="font-family:'Zilla Slab',serif;font-weight:700;font-size:82px;line-height:1.04;margin:0">Veleco Italia</h1>
        <p style="font-size:36px;line-height:1.25;margin:16px 0 0;color:#FBF8F1;opacity:.95;white-space:nowrap">
          Scooter elettrici a 4 ruote per anziani</p>
        <p style="font-size:30px;line-height:1.25;margin:10px 0 0;color:#DB9200;white-space:nowrap">
          concessionariovelecoitalia.it · 328 975 4412</p>
      </div>
    </div>` },

  'filigrana-150.png': { width: 150, height: 150, trasparente: true, html: `
    <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">
      ${V('#FBF8F1', 150)}
    </div>` },
};

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  for (const [nome, p] of Object.entries(PAGINE)) {
    const pag = await b.newPage({ viewport: { width: p.width, height: p.height } });
    await pag.setContent(`<!doctype html><html lang="it"><head><meta charset="utf-8">${TESTA}</head>
      <body style="width:${p.width}px;height:${p.height}px;position:relative;${p.trasparente ? 'background:transparent' : ''}">${p.html}</body></html>`,
      { waitUntil: 'load' });
    await pag.evaluate(() => document.fonts.ready);
    await pag.waitForTimeout(400);
    const file = path.join(OUT, nome);
    await pag.screenshot({ path: file, type: 'png', omitBackground: !!p.trasparente });
    console.log('scritto', file, fs.statSync(file).size, 'byte');
    await pag.close();
  }
  await b.close();
})().catch(e => { console.error(e.message); process.exit(1); });
