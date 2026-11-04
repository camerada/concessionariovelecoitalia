/* Testata che si ritira — solo su telefono e tablet.
   Scendi: la testata esce dall'alto e ti lascia tutto lo schermo per leggere.
   Risali anche di poco: torna subito, con il numero e WhatsApp.
   Sul computer resta sempre visibile: lì non c'è la barra fissa in basso.
   Una riga nelle pagine: <script src="/assets/testata.js" defer></script>  */
(function () {
  'use strict';

  var testata = document.querySelector('header');
  if (!testata) return;

  var css = document.createElement('style');
  css.textContent = [
    '@media(max-width:900px){',
    '  header{transition:transform .28s ease;}',
    '  header.vt-su{transform:translateY(-100%);}',
    '}',
    '@media(prefers-reduced-motion:reduce){header{transition:none;}}',
    /* quando la testata si ritira resta solo il telefono, in alto a destra */
    '.vt-chiama{position:fixed;top:10px;right:14px;z-index:55;display:none;align-items:center;gap:8px;',
    '  background:#1B4B43;color:#fff;text-decoration:none;border-radius:999px;padding:11px 18px;',
    '  font-family:"Public Sans",sans-serif;font-weight:700;font-size:.95rem;',
    '  box-shadow:0 6px 18px rgba(15,51,45,.3);opacity:0;transform:translateY(-8px);',
    '  transition:opacity .22s ease, transform .22s ease;pointer-events:none;}',
    '@media(max-width:900px){.vt-chiama{display:flex;}}',
    '.vt-chiama.vt-vedi{opacity:1;transform:none;pointer-events:auto;}'
  ].join('\n');
  document.head.appendChild(css);

  // il pulsante del telefono che resta quando la testata se ne va
  var chiama = document.createElement('a');
  chiama.className = 'vt-chiama';
  chiama.href = 'tel:+393289754412';
  chiama.innerHTML = '\uD83D\uDCDE Chiama';
  document.body.appendChild(chiama);

  function mostraChiama(si) {
    chiama.classList.toggle('vt-vedi', si);
  }

  var ultimo = window.pageYOffset || 0;
  var soglia = 90;        // sotto questa quota la testata resta sempre
  var passo  = 6;         // movimento minimo, per non farla ballare
  var atteso = false;

  function guarda() {
    var ora = window.pageYOffset || 0;
    var delta = ora - ultimo;

    if (Math.abs(delta) > passo) {
      if (delta > 0 && ora > soglia) {
        testata.classList.add('vt-su');      // scendo: si ritira
        mostraChiama(true);                  // ...e compare il telefono
      } else if (delta < 0) {
        testata.classList.remove('vt-su');   // risalgo: torna la testata
        mostraChiama(false);                 // ...e il telefono si ritira
      }
      ultimo = ora;
    }
    if (ora <= soglia) { testata.classList.remove('vt-su'); mostraChiama(false); }
    atteso = false;
  }

  window.addEventListener('scroll', function () {
    if (!atteso) { atteso = true; window.requestAnimationFrame(guarda); }
  }, { passive: true });
})();
