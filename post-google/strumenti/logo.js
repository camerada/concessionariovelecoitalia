// Genera i file del logo «Veleco Italia» (quadrato per la scheda Google e orizzontale per il sito).
const { chromium } = require('playwright'); const path = require('path');
const out = process.argv[2] || 'public_html/assets/post-google/foto';
const versioni = [
  { file: 'logo-veleco-italia-quadrato.png', w: 720, h: 720, html: `<div class="q"><div class="v">V</div><div class="nome">Veleco Italia</div><div class="sotto">Concessionario ufficiale</div></div>` },
  { file: 'logo-veleco-italia-quadrato-crema.png', w: 720, h: 720, html: `<div class="q crema"><div class="v">V</div><div class="nome">Veleco Italia</div><div class="sotto">Concessionario ufficiale</div></div>` },
  { file: 'logo-veleco-italia-orizzontale.png', w: 1400, h: 420, trasparente: true, html: `<div class="o"><div class="mark"><div class="v">V</div></div><div class="testi"><div class="nome">Veleco Italia</div><div class="sotto">Concessionario ufficiale · Genova Nervi</div></div></div>` },
  { file: 'logo-veleco-italia-orizzontale-verde.png', w: 1400, h: 420, html: `<div class="o verde"><div class="mark"><div class="v">V</div></div><div class="testi"><div class="nome">Veleco Italia</div><div class="sotto">Concessionario ufficiale · Genova Nervi</div></div></div>` },
];
(async () => {
  const b = await chromium.launch();
  for (const v of versioni) {
    const p = await b.newPage({ viewport: { width: v.w, height: v.h } });
    await p.goto('file://' + path.resolve(__dirname, 'logo.html'));
    await p.evaluate(h => { document.body.innerHTML = h; }, v.html);
    await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
    await p.screenshot({ path: path.join(out, v.file), type: 'png', omitBackground: !!v.trasparente });
    console.log('scritto', v.file); await p.close();
  }
  await b.close();
})().catch(e => { console.error(e.message); process.exit(1); });
