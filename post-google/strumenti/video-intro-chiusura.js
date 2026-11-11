// Genera le due schermate 1280x720 dell'intro e della chiusura dei video Veleco.
// Uso: node post-google/strumenti/video-intro-chiusura.js CARTELLA   (dalla radice del repo)
// Scrive intro.png e chiusura.png. I filmati si montano poi con ffmpeg: vedi seo/youtube.md.
// Colori e caratteri del sito; la «V» è il poligono di public_html/assets/favicon-source.svg.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = process.argv[2] || path.resolve(__dirname, '../../bozze/video');

const V = (colore, dim) => `<svg width="${dim}" height="${dim}" viewBox="0 0 100 100">
  <polygon points="16,21 30.5,21 50,63.5 69.5,21 84,21 50,83" fill="${colore}"/></svg>`;

const logo = 'data:image/png;base64,' + fs.readFileSync(
  path.resolve('public_html/assets/post-google/foto/logo-veleco-italia-quadrato-crema.png')).toString('base64');

const TESTA = `<link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@700&family=Public+Sans:wght@400;600&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  html,body{margin:0;padding:0;width:1280px;height:720px;overflow:hidden;font-family:'Public Sans',sans-serif}
  body{background:linear-gradient(135deg,#0F332D 0%,#1B4B43 55%,#0F332D 100%);
       display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:26px}
  h1{font-family:'Zilla Slab',serif;font-weight:700;color:#fff;margin:0;line-height:1.08}
  .occhiello{font-family:'IBM Plex Mono',monospace;color:#DB9200;letter-spacing:.1em;text-transform:uppercase;margin:0}
  .testo{color:#FBF8F1;margin:0;line-height:1.4}
  .oro{color:#DB9200;margin:0}
</style>`;

const PAGINE = {
  'intro.png': `
    ${V('#DB9200', 190)}
    <h1 style="font-size:78px">Veleco Italia</h1>
    <p class="occhiello" style="font-size:26px">Concessionario ufficiale · Genova Nervi</p>`,

  'chiusura.png': `
    <img src="${logo}" style="width:168px;border-radius:26px" alt="">
    <h1 style="font-size:66px">Provalo a Genova Nervi</h1>
    <p class="testo" style="font-size:32px">Via Giuseppe Pessale 20r · da martedì a sabato, 10-20<br>
      La prova è gratuita e senza impegno</p>
    <p class="oro" style="font-size:34px">concessionariovelecoitalia.it · 328 975 4412</p>`,
};

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  for (const [nome, corpo] of Object.entries(PAGINE)) {
    const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
    await p.setContent(`<!doctype html><html lang="it"><head><meta charset="utf-8">${TESTA}</head><body>${corpo}</body></html>`,
      { waitUntil: 'load' });
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(400);
    const file = path.join(OUT, nome);
    await p.screenshot({ path: file, type: 'png' });
    console.log('scritto', file);
    await p.close();
  }
  await b.close();
})().catch(e => { console.error(e.message); process.exit(1); });
