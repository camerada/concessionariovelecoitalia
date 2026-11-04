/* Promo Veleco — fascia in cima, pastiglia fissa (computer) e striscia fissa (telefono).
   Una riga sola nelle pagine: <script src="/assets/promo.js" defer></script>
   Per chiudere la promozione: svuotare questo file (o lasciare scadere la data).  */
(function () {
  'use strict';

  var FINE = new Date(2026, 11, 31, 23, 59);           // 31 dicembre 2026
  var PAGINA = '/promo/';

  // Il regalo cambia da solo: niente da aggiornare a mano alle scadenze.
  var GIRO = [
    { fino: new Date(2026, 10, 15, 23, 59), nome: 'la borsa da bracciolo' },
    { fino: new Date(2026, 10, 29, 23, 59), nome: 'il supporto per il telefono' },
    { fino: new Date(2026, 11, 13, 23, 59), nome: 'la copertura impermeabile' },
    { fino: FINE,                           nome: 'quello che scegli tu' }
  ];

  var oggi = new Date();
  if (oggi > FINE) return;                              // promozione finita: non compare niente

  var regalo = '';
  for (var i = 0; i < GIRO.length; i++) {
    if (oggi <= GIRO[i].fino) { regalo = GIRO[i].nome; break; }
  }

  var inPromo = location.pathname.indexOf(PAGINA) === 0;

  var css = document.createElement('style');
  css.textContent = [
    '.vp-fascia{background:#DB9200;color:#0F332D;font-weight:600;font-size:.95rem;position:relative;}',
    '.vp-fascia .vp-in{max-width:1140px;margin:0 auto;padding:11px 56px 11px 24px;text-align:center;}',
    '.vp-fascia a{color:#0F332D;font-weight:800;text-underline-offset:3px;}',
    '.vp-fascia .vp-x{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:0;font-size:1.3rem;line-height:1;color:#0F332D;opacity:.6;cursor:pointer;padding:6px 10px;}',
    /* computer: pastiglia in basso a destra */
    '.vp-pastiglia{position:fixed;right:22px;bottom:22px;z-index:70;display:flex;align-items:center;gap:12px;',
    '  background:#DB9200;color:#0F332D;text-decoration:none;border-radius:999px;padding:13px 22px 13px 17px;',
    '  box-shadow:0 10px 28px rgba(15,51,45,.3);font-family:"Public Sans",sans-serif;max-width:310px;',
    '  transition:transform .15s ease,box-shadow .15s ease;}',
    '.vp-pastiglia:hover{transform:translateY(-3px);box-shadow:0 14px 34px rgba(15,51,45,.38);}',
    '.vp-pastiglia .vp-ico{font-size:1.5rem;line-height:1;}',
    '.vp-pastiglia b{display:block;font-size:1rem;font-weight:800;line-height:1.2;}',
    '.vp-pastiglia span{display:block;font-size:.8rem;opacity:.85;line-height:1.3;margin-top:2px;}',
    '@media(max-width:900px){.vp-pastiglia{display:none;}}',
    /* telefono: linguetta in basso a destra, con WhatsApp dentro */
    '.vp-linguetta{position:fixed;right:0;bottom:0;z-index:70;display:none;align-items:center;gap:11px;',
    '  background:#DB9200;color:#0F332D;text-decoration:none;border-radius:22px 0 0 0;',
    '  padding:16px 22px 16px 22px;box-shadow:-4px -4px 20px rgba(15,51,45,.18);',
    '  font-family:"Public Sans",sans-serif;font-weight:800;font-size:1rem;line-height:1.2;}',
    '.vp-linguetta .vp-ico{font-size:1.3rem;line-height:1;}',
    '.vp-linguetta .vp-freccia{font-size:1.25rem;line-height:1;margin-left:2px;transition:transform .15s ease;}',
    '.vp-linguetta:active .vp-freccia{transform:translateX(3px);}',
    /* la linguetta prende il posto della barra piena; se la promo finisce, la barra torna da sola */
    '@media(max-width:900px){.vp-linguetta{display:flex;} .mobile-cta{display:none !important;}',
    '  body{padding-bottom:24px !important;}}',
    '@media(prefers-reduced-motion:no-preference){',
    '  @keyframes vp-entra{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:none;}}',
    '  .vp-pastiglia,.vp-striscia{animation:vp-entra .45s ease .8s both;}}'
  ].join('\n');
  document.head.appendChild(css);

  // 1. fascia in cima (si chiude con la X, per questa visita)
  if (!sessionStorage.getItem('vp-fascia-chiusa')) {
    var f = document.createElement('div');
    f.className = 'vp-fascia';
    f.innerHTML = '<div class="vp-in">🎁 <b>Fino al 31 dicembre:</b> consegna a casa compresa nel prezzo e un accessorio Veleco in regalo con ogni Faster. ' +
                  '<a href="' + PAGINA + '">Scopri il regalo della settimana</a></div>' +
                  '<button class="vp-x" aria-label="Chiudi l\'avviso">&times;</button>';
    document.body.insertBefore(f, document.body.firstChild);
    f.querySelector('.vp-x').addEventListener('click', function () {
      try { sessionStorage.setItem('vp-fascia-chiusa', '1'); } catch (e) {}
      f.remove();
    });
  }

  // 2 e 3. nella pagina Promo non serve rimandare alla pagina Promo
  if (inPromo) return;

  var p = document.createElement('a');
  p.className = 'vp-pastiglia';
  p.href = PAGINA;
  p.innerHTML = '<span class="vp-ico">🎁</span><span><b>Il regalo per te</b>' +
                '<span>Questa settimana ' + regalo + '</span></span>';
  document.body.appendChild(p);

  var l = document.createElement('a');
  l.className = 'vp-linguetta';
  l.href = PAGINA;
  l.innerHTML = '<span class="vp-ico">\uD83C\uDF81</span>Il regalo per te<span class="vp-freccia">\u203A</span>';
  document.body.appendChild(l);
})();
