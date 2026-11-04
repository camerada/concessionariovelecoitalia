// Genera un'immagine 1200×900 per un post della scheda Google.
// Uso: node post-google/strumenti/immagine.js OUT.jpg "OCCHIELLO" "Titolo" [foto.jpg|-] [posizione] [sottotitolo]
// foto: percorso di una foto del sito (public_html/assets/...). Con "-" niente foto: fondo verde con titolo e sottotitolo.
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const [out, occhiello, titolo, foto, pos, sotto] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 900 } });
  await p.goto('file://' + path.resolve(__dirname, 'immagine.html'));
  const fotoUrl = foto && foto !== '-' ? 'file://' + path.resolve(foto) : null;
  await p.evaluate(({ occhiello, titolo, fotoUrl, pos, sotto }) => {
    const esc = s => (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
    const lung = (titolo || '').length;
    if (fotoUrl) {
      const h = lung > 70 ? 50 : lung > 48 ? 56 : 64;
      document.body.innerHTML = `<img class="foto" src="${fotoUrl}" style="--pos:${pos || 'center'}">
        <div class="logo">Veleco Italia · Genova Nervi</div>
        <div class="fascia"><p class="occhiello">${esc(occhiello)}</p><h1 style="--h:${h}px">${esc(titolo)}</h1><div class="pie"><span>concessionariovelecoitalia.it</span><span>328 975 4412</span></div></div>`;
    } else {
      const h = lung > 70 ? 60 : lung > 48 ? 68 : 76;
      document.body.innerHTML = `<div class="solo"><div class="logo">Veleco Italia · Genova Nervi</div>
        <p class="occhiello">${esc(occhiello)}</p><h1 style="--h:${h}px">${esc(titolo)}</h1>
        ${sotto ? `<p class="testo">${esc(sotto)}</p>` : ''}<div class="pie"><span>concessionariovelecoitalia.it</span><span>328 975 4412</span></div></div>`;
    }
  }, { occhiello, titolo, fotoUrl, pos, sotto });
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  await p.screenshot({ path: out, type: 'jpeg', quality: 86 });
  await b.close(); console.log('scritto', out, fs.statSync(out).size, 'byte');
})().catch(e => { console.error(e.message); process.exit(1); });
