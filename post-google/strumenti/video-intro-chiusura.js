// Genera le due schermate 1280x720 dell'intro e della chiusura dei video Veleco.
// Uso: node post-google/strumenti/video-intro-chiusura.js CARTELLA [verticale]
//      (dalla radice del repo). Senza il secondo argomento escono 1280x720; con «verticale» 1080x1920.
// Scrive intro.png e chiusura.png. I filmati si montano poi con ffmpeg: vedi seo/youtube.md.
// Colori e caratteri del sito; la «V» è il poligono di public_html/assets/favicon-source.svg.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = process.argv[2] || path.resolve(__dirname, '../../bozze/video');
const VERT = process.argv[3] === 'verticale';
const MIS = VERT ? { width: 1080, height: 1920 } : { width: 1280, height: 720 };
const K = VERT ? 1.22 : 1;  // i caratteri crescono un po' nel formato alto
const px = n => Math.round(n * K) + 'px';

const V = (colore, dim) => `<svg width="${dim}" height="${dim}" viewBox="0 0 100 100">
  <polygon points="16,21 30.5,21 50,63.5 69.5,21 84,21 50,83" fill="${colore}"/></svg>`;

const logo = 'data:image/png;base64,' + fs.readFileSync(
  path.resolve('public_html/assets/post-google/foto/logo-veleco-italia-quadrato-crema.png')).toString('base64');

const TESTA = `<link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@700&family=Public+Sans:wght@400;600&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  html,body{margin:0;padding:0;width:${MIS.width}px;height:${MIS.height}px;overflow:hidden;font-family:'Public Sans',sans-serif}
  body{background:linear-gradient(135deg,#0F332D 0%,#1B4B43 55%,#0F332D 100%);
       display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;
       gap:${px(26)};padding:0 ${VERT ? '72px' : '0'};box-sizing:border-box}
  h1{font-family:'Zilla Slab',serif;font-weight:700;color:#fff;margin:0;line-height:1.08}
  .occhiello{font-family:'IBM Plex Mono',monospace;color:#DB9200;letter-spacing:.1em;text-transform:uppercase;margin:0}
  .testo{color:#FBF8F1;margin:0;line-height:1.4}
  .oro{color:#DB9200;margin:0}
</style>`;

const PAGINE = {
  'intro.png': `
    ${V('#DB9200', Math.round(190 * K))}
    <h1 style="font-size:${px(78)}">Veleco Italia</h1>
    <p class="occhiello" style="font-size:${px(26)}">Concessionario ufficiale · Genova Nervi</p>`,

  'chiusura.png': `
    <img src="${logo}" style="width:${px(168)};border-radius:${px(26)}" alt="">
    <h1 style="font-size:${px(66)}">Provalo a Genova Nervi</h1>
    <p class="testo" style="font-size:${px(32)}">Via Giuseppe Pessale 20r<br>da martedì a sabato, 10-20<br>
      La prova è gratuita e senza impegno</p>
    <p class="oro" style="font-size:${px(34)}">concessionariovelecoitalia.it<br>328 975 4412</p>`,
};

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  for (const [nome, corpo] of Object.entries(PAGINE)) {
    const p = await b.newPage({ viewport: MIS });
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
