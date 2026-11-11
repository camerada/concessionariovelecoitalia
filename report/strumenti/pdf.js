// Stampa in PDF un report HTML di questa cartella, con la grafica CAME.
// Uso: node report/strumenti/pdf.js report/NOME.html report/Nome_File.pdf   (dalla radice del repo)
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const [src, out] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('file://' + path.resolve(src), { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(600);
  await p.pdf({ path: out, printBackground: true, preferCSSPageSize: true });
  await b.close();
  console.log('scritto', out, Math.round(fs.statSync(out).size / 1024) + ' kB');
})().catch(e => { console.error(e.message); process.exit(1); });
