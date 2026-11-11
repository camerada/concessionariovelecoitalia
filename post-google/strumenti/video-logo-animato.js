// Genera i fotogrammi dell'intro «il logo che si scrive»: la V si traccia come con una penna,
// diventa la V piena del marchio, poi il nome si scrive da sinistra e sotto compare l'occhiello.
// Uso: node post-google/strumenti/video-logo-animato.js CARTELLA-FOTOGRAMMI   (dalla radice del repo)
// Poi, per farne un filmato muto di 2,6 s:
//   ffmpeg -framerate 30 -i CARTELLA/%04d.png -f lavfi -t 2.6 -i anullsrc=channel_layout=stereo:sample_rate=48000 \
//     -filter_complex "[0:v]format=yuv420p,fade=t=out:st=2.35:d=0.25[v]" -map "[v]" -map 1:a -t 2.6 \
//     -c:v libx264 -crf 17 -preset medium -c:a aac -b:a 128k -movflags +faststart bozze/video/veleco-logo-animato.mp4
const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
const OUT = process.argv[2];
const FPS = 30, DUR = 2.6, N = Math.round(FPS * DUR);

const HTML = `<!doctype html><html lang="it"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@700&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  html,body{margin:0;padding:0;width:1280px;height:720px;overflow:hidden}
  body{background:linear-gradient(135deg,#0F332D 0%,#1B4B43 55%,#0F332D 100%);
       display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;
       font-family:'Zilla Slab',serif}
  #v{width:230px;height:230px;display:block}
  /* il tratto che «scrive» la V */
  #penna{fill:none;stroke:#DB9200;stroke-width:26;stroke-linecap:round;stroke-linejoin:round;
         stroke-dasharray:var(--len);stroke-dashoffset:calc(var(--len) * (1 - var(--p,0)));
         opacity:calc(1 - var(--riempi,0))}
  #pieno{fill:#DB9200;opacity:var(--riempi,0)}
  .nome{position:relative;font-size:84px;font-weight:700;color:#fff;line-height:1;
        clip-path:inset(0 calc(100% - var(--scrivi,0) * 100%) 0 0)}
  .occhiello{font-family:'IBM Plex Mono',monospace;font-size:25px;letter-spacing:.1em;
             text-transform:uppercase;color:#DB9200;opacity:var(--sotto,0)}
</style></head><body>
<svg id="v" viewBox="0 0 100 100">
  <path id="penna" d="M 23,22 L 50,79 L 77,22"/>
  <polygon id="pieno" points="16,21 30.5,21 50,63.5 69.5,21 84,21 50,83"/>
</svg>
<div class="nome">Veleco Italia</div>
<div class="occhiello">Concessionario ufficiale · Genova Nervi</div>
</body></html>`;

const fermo = (x) => x < 0 ? 0 : x > 1 ? 1 : x * x * (3 - 2 * x); // partenza e arrivo morbidi

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  await p.setContent(HTML, { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.ready);
  await p.evaluate(() => {
    const len = document.getElementById('penna').getTotalLength();
    document.documentElement.style.setProperty('--len', len);
  });
  await p.waitForTimeout(300);
  for (let i = 0; i < N; i++) {
    const t = i / FPS;
    await p.evaluate(({ pen, riempi, scrivi, sotto }) => {
      const s = document.documentElement.style;
      s.setProperty('--p', pen); s.setProperty('--riempi', riempi);
      s.setProperty('--scrivi', scrivi); s.setProperty('--sotto', sotto);
    }, {
      pen: fermo(t / 0.85),                 // 0 -> 0,85 s: la V si traccia
      riempi: fermo((t - 0.80) / 0.30),     // 0,80 -> 1,10 s: il tratto diventa la V piena
      scrivi: fermo((t - 1.05) / 0.55),     // 1,05 -> 1,60 s: il nome si scrive
      sotto: fermo((t - 1.70) / 0.40),      // 1,70 -> 2,10 s: l'occhiello in dissolvenza
    });
    await p.screenshot({ path: path.join(OUT, String(i).padStart(4, '0') + '.png'), type: 'png' });
  }
  await b.close();
  console.log('fotogrammi', N);
})().catch(e => { console.error(e.message); process.exit(1); });
