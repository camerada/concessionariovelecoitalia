// Genera la cornice Veleco 1280x720 per rimontare i vecchi video del canale YouTube.
// Uso: node post-google/strumenti/cornice-video.js USCITA.png   (dalla radice del repo)
// Il PNG ha la barra sinistra (logo, showroom, telefono, sito) e le bande sopra e sotto;
// la finestra del filmato resta trasparente: si sovrappone in ffmpeg a 330,58 su 950x538.
// Le didascalie della banda bassa si scrivono con drawtext: vedi seo/youtube.md.
const { chromium } = require('playwright'); const path = require('path');
const out = process.argv[2];
const fs = require('fs');
// setContent crea un documento about:blank, che non puo' caricare file:// — il logo va incorporato
const logo = 'data:image/png;base64,' + fs.readFileSync(
  path.resolve('public_html/assets/post-google/foto/logo-veleco-italia-quadrato-crema.png')).toString('base64');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  await p.setContent(`<!doctype html><html lang="it"><head><meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@700&family=Public+Sans:wght@400;600&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
  <style>
    html,body{margin:0;padding:0;width:1280px;height:720px;overflow:hidden;background:transparent;font-family:'Public Sans',sans-serif}
    .sx{position:absolute;left:0;top:0;width:330px;height:720px;background:linear-gradient(160deg,#0F332D,#1B4B43);
        display:flex;flex-direction:column;justify-content:center;align-items:center;gap:26px;padding:0 26px;box-sizing:border-box;text-align:center}
    .sx img{width:188px;height:auto;border-radius:22px}
    .sx .riga{color:#FBF8F1;font-size:21px;line-height:1.45}
    .sx .oro{color:#DB9200;font-family:'IBM Plex Mono',monospace;font-size:19px;letter-spacing:.02em;line-height:1.7}
    .sx .oro .sito{font-size:15px;letter-spacing:0}
    .alto{position:absolute;left:330px;top:0;width:950px;height:56px;background:#0F332D}
    .basso{position:absolute;left:330px;bottom:0;width:950px;height:112px;background:#0F332D}
    .dx{position:absolute;right:0;top:0;width:0;height:720px}
  </style></head><body>
    <div class="sx">
      <img src="${logo}" alt="">
      <div class="riga"><strong>Showroom a Genova Nervi</strong></div>
      <div class="riga">via Giuseppe Pessale 20r<br>da martedì a sabato, 10-20</div>
      <div class="oro">328 975 4412<br><span class="sito">concessionariovelecoitalia.it</span></div>
    </div>
    <div class="alto"></div><div class="basso"></div>
  </body></html>`, { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  await p.screenshot({ path: out, type: 'png', omitBackground: true });
  await b.close();
})().catch(e => { console.error(e.message); process.exit(1); });
