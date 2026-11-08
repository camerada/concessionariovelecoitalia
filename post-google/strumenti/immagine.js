// Genera un'immagine 1200×900 per un post della scheda Google.
// Uso: node post-google/strumenti/immagine.js OUT.jpg "OCCHIELLO" "Titolo" [foto.jpg|-] [posizione] [sottotitolo] [formato]
// formato: vuoto o "google" = 1200x900 (scheda Google); "ig" = 1080x1350 (Instagram).
// foto: percorso di una foto del sito (public_html/assets/...). Con "-" niente foto: fondo verde con titolo e sottotitolo.
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const [out, occhiello, titolo, foto, pos, sotto, formato] = process.argv.slice(2);
const MIS = formato === 'ig' ? { width: 1080, height: 1350 } : { width: 1200, height: 900 };
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: MIS });
  await p.addInitScript(m => { window.__mis = m; }, MIS);
  await p.goto('file://' + path.resolve(__dirname, 'immagine.html'));
  const fotoUrl = foto && foto !== '-' ? 'file://' + path.resolve(foto) : null;
  // Logo vero (PNG con scritta verde scuro su trasparente), dentro la solita pastiglia crema.
  const logoUrl = 'file://' + path.resolve(__dirname,
    '../../public_html/assets/post-google/foto/logo-veleco-italia-orizzontale.png');
  await p.evaluate(({ occhiello, titolo, fotoUrl, pos, sotto, logoUrl }) => {
    const esc = s => (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
    const lung = (titolo || '').length;
    if (fotoUrl) {
      const h = lung > 70 ? 50 : lung > 48 ? 56 : 64;
      document.body.innerHTML = `<img class="foto" src="${fotoUrl}" style="--pos:${pos || 'center'}">
        <div class="logo"><img src="${logoUrl}" alt="Veleco Italia"></div>
        <div class="fascia"><p class="occhiello">${esc(occhiello)}</p><h1 style="--h:${h}px">${esc(titolo)}</h1><div class="pie"><span>concessionariovelecoitalia.it</span><span>328 975 4412</span></div></div>`;
    } else {
      const h = lung > 70 ? 60 : lung > 48 ? 68 : 76;
      document.body.innerHTML = `<div class="solo"><div class="logo"><img src="${logoUrl}" alt="Veleco Italia"></div>
        <p class="occhiello">${esc(occhiello)}</p><h1 style="--h:${h}px">${esc(titolo)}</h1>
        ${sotto ? `<p class="testo">${esc(sotto)}</p>` : ''}<div class="pie"><span>concessionariovelecoitalia.it</span><span>328 975 4412</span></div></div>`;
    }
  }, { occhiello, titolo, fotoUrl, pos, sotto, logoUrl });
  await p.evaluate(m => {
    document.body.style.width = m.width + 'px';
    document.body.style.height = m.height + 'px';
    const f = document.querySelector('.foto');
    if (f) { f.style.width = m.width + 'px'; f.style.height = m.height + 'px'; }
  }, MIS);
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  await p.screenshot({ path: out, type: 'jpeg', quality: 86 });
  await b.close(); console.log('scritto', out, fs.statSync(out).size, 'byte');
})().catch(e => { console.error(e.message); process.exit(1); });
