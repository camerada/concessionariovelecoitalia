/* ============================================================
   Concessionario Veleco Italia — gestione consenso cookie
   Consent Mode v2 + banner conforme alle linee guida Garante 2021
   Va caricato in <head> PRIMA dello snippet Google Tag Manager.
   ============================================================ */
(function () {
  'use strict';

  var NOME_COOKIE = 'veleco_consenso';
  var DURATA_GIORNI = 180; // sei mesi: oltre, il banner torna a chiedere

  /* ---------- Consent Mode: tutto negato finché la persona sceglie ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });

  /* ---------- Lettura e scrittura della scelta ---------- */
  function leggiScelta() {
    var m = document.cookie.match(new RegExp('(?:^|; )' + NOME_COOKIE + '=([^;]*)'));
    if (m) {
      try { return JSON.parse(decodeURIComponent(m[1])); } catch (e) { return null; }
    }
    return null;
  }

  function salvaScelta(statistiche) {
    var v = { statistiche: !!statistiche, data: new Date().toISOString(), versione: 1 };
    var scad = new Date();
    scad.setTime(scad.getTime() + DURATA_GIORNI * 864e5);
    document.cookie = NOME_COOKIE + '=' + encodeURIComponent(JSON.stringify(v)) +
      ';expires=' + scad.toUTCString() + ';path=/;SameSite=Lax' +
      (location.protocol === 'https:' ? ';Secure' : '');
    applica(v);
    window.dataLayer.push({
      event: 'consenso_cookie',
      consenso_statistiche: v.statistiche ? 'granted' : 'denied'
    });
  }

  function applica(v) {
    var stato = v && v.statistiche ? 'granted' : 'denied';
    gtag('consent', 'update', {
      analytics_storage: stato,
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }

  var sceltaEsistente = leggiScelta();
  if (sceltaEsistente) applica(sceltaEsistente);

  /* ---------- Stili del banner ---------- */
  var CSS =
  '#vk-banner,#vk-pref{position:fixed;z-index:2147483000;font-family:"Public Sans",system-ui,-apple-system,sans-serif;color:#20231F;box-sizing:border-box}' +
  '#vk-banner *,#vk-pref *{box-sizing:border-box}' +
  '#vk-banner{left:0;right:0;bottom:0;background:#FBF8F1;border-top:3px solid #1B4B43;box-shadow:0 -8px 28px rgba(15,51,45,.18);padding:20px 24px}' +
  '#vk-banner .vk-in{max-width:1140px;margin:0 auto;display:flex;gap:24px;align-items:center;flex-wrap:wrap}' +
  '#vk-banner .vk-txt{flex:1 1 380px;min-width:280px;font-size:15px;line-height:1.55}' +
  '#vk-banner h2{font-family:"Zilla Slab",Georgia,serif;font-size:18px;color:#0F332D;margin:0 0 6px;font-weight:700}' +
  '#vk-banner p{margin:0}' +
  '#vk-banner a{color:#1B4B43;font-weight:600}' +
  '.vk-btns{display:flex;gap:12px;flex-wrap:wrap;align-items:center}' +
  '.vk-b{font-family:inherit;font-size:15px;font-weight:700;padding:13px 26px;border-radius:999px;border:2px solid #1B4B43;cursor:pointer;background:#fff;color:#1B4B43;min-width:132px;transition:transform .12s ease}' +
  '.vk-b:hover{transform:translateY(-1px)}' +
  '.vk-b.vk-ok{background:#1B4B43;color:#fff}' +
  '.vk-link{background:none;border:none;font-family:inherit;font-size:14px;color:#5B6660;text-decoration:underline;cursor:pointer;padding:6px}' +
  '#vk-pref{inset:0;background:rgba(15,51,45,.55);display:flex;align-items:center;justify-content:center;padding:20px;overflow:auto}' +
  '#vk-pref .vk-card{background:#fff;border-radius:16px;max-width:560px;width:100%;padding:28px;box-shadow:0 20px 50px rgba(0,0,0,.3)}' +
  '#vk-pref h2{font-family:"Zilla Slab",Georgia,serif;font-size:21px;color:#0F332D;margin:0 0 14px;font-weight:700}' +
  '.vk-row{border:1px solid #E4DBC4;border-radius:10px;padding:16px;margin-bottom:14px}' +
  '.vk-row h3{font-family:"Zilla Slab",Georgia,serif;font-size:16px;color:#1B4B43;margin:0 0 4px;display:flex;justify-content:space-between;align-items:center;gap:12px;font-weight:700}' +
  '.vk-row p{margin:0;font-size:14px;line-height:1.5;color:#5B6660}' +
  '.vk-fisso{font-family:"IBM Plex Mono",monospace;font-size:11px;color:#8F5E00;text-transform:uppercase;letter-spacing:.05em;white-space:nowrap}' +
  '.vk-sw{position:relative;width:50px;height:28px;flex-shrink:0}' +
  '.vk-sw input{opacity:0;width:100%;height:100%;margin:0;cursor:pointer;position:absolute;z-index:2}' +
  '.vk-sw span{position:absolute;inset:0;background:#C9C4B8;border-radius:999px;transition:background .2s}' +
  '.vk-sw span:after{content:"";position:absolute;width:22px;height:22px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .2s}' +
  '.vk-sw input:checked+span{background:#1B4B43}' +
  '.vk-sw input:checked+span:after{transform:translateX(22px)}' +
  '.vk-sw input:focus-visible+span{outline:3px solid #DB9200;outline-offset:2px}' +
  '#vk-banner :focus-visible,#vk-pref :focus-visible{outline:3px solid #DB9200;outline-offset:2px}' +
  '@media(max-width:760px){#vk-banner{padding:18px 18px calc(18px + env(safe-area-inset-bottom))}' +
  '#vk-banner .vk-in{gap:16px}.vk-btns{width:100%}.vk-b{flex:1 1 45%;min-width:0;padding:14px 12px}' +
  '#vk-banner h2{font-size:17px}#vk-banner .vk-txt{font-size:14.5px}}';

  function stili() {
    var s = document.createElement('style');
    s.id = 'vk-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ---------- Banner ---------- */
  function mostraBanner() {
    if (document.getElementById('vk-banner')) return;
    var d = document.createElement('div');
    d.id = 'vk-banner';
    d.setAttribute('role', 'dialog');
    d.setAttribute('aria-live', 'polite');
    d.setAttribute('aria-label', 'Preferenze cookie');
    d.innerHTML =
      '<div class="vk-in">' +
        '<div class="vk-txt">' +
          '<h2>Usiamo i cookie</h2>' +
          '<p>Alcuni servono a far funzionare il sito. Altri ci dicono quali pagine leggi, e ci aiutano a scrivere meglio quello che ti interessa. Scegli tu. ' +
          '<a href="/cookie-policy/">Leggi la cookie policy</a>.</p>' +
        '</div>' +
        '<div class="vk-btns">' +
          '<button type="button" class="vk-b" id="vk-no">Rifiuta</button>' +
          '<button type="button" class="vk-b vk-ok" id="vk-si">Accetta</button>' +
          '<button type="button" class="vk-link" id="vk-pf">Preferenze</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(d);
    document.getElementById('vk-si').addEventListener('click', function () { salvaScelta(true); chiudiBanner(); });
    document.getElementById('vk-no').addEventListener('click', function () { salvaScelta(false); chiudiBanner(); });
    document.getElementById('vk-pf').addEventListener('click', function () { apriPreferenze(); });
  }

  function chiudiBanner() {
    var d = document.getElementById('vk-banner');
    if (d) d.parentNode.removeChild(d);
  }

  /* ---------- Pannello preferenze ---------- */
  function apriPreferenze() {
    if (document.getElementById('vk-pref')) return;
    var attuale = leggiScelta();
    var acceso = attuale ? attuale.statistiche : false;
    var d = document.createElement('div');
    d.id = 'vk-pref';
    d.setAttribute('role', 'dialog');
    d.setAttribute('aria-modal', 'true');
    d.setAttribute('aria-label', 'Preferenze cookie');
    d.innerHTML =
      '<div class="vk-card">' +
        '<h2>Preferenze cookie</h2>' +
        '<div class="vk-row">' +
          '<h3>Cookie tecnici <span class="vk-fisso">Sempre attivi</span></h3>' +
          '<p>Tengono in piedi il sito: il modulo di contatto e la memoria di questa scelta. Senza, il sito smette di funzionare.</p>' +
        '</div>' +
        '<div class="vk-row">' +
          '<h3>Cookie statistici <label class="vk-sw"><input type="checkbox" id="vk-stat"' + (acceso ? ' checked' : '') + ' aria-label="Attiva i cookie statistici"><span></span></label></h3>' +
          '<p>Google Analytics, in forma aggregata: quante persone leggono una pagina e da dove arrivano. Ci serve per capire cosa funziona.</p>' +
        '</div>' +
        '<div class="vk-btns" style="margin-top:20px;justify-content:flex-end">' +
          '<button type="button" class="vk-b" id="vk-annulla">Annulla</button>' +
          '<button type="button" class="vk-b vk-ok" id="vk-salva">Salva</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(d);
    document.getElementById('vk-salva').addEventListener('click', function () {
      salvaScelta(document.getElementById('vk-stat').checked);
      chiudiPreferenze();
      chiudiBanner();
    });
    document.getElementById('vk-annulla').addEventListener('click', chiudiPreferenze);
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') chiudiPreferenze(); });
    var primo = document.getElementById('vk-stat');
    if (primo) primo.focus();
  }

  function chiudiPreferenze() {
    var d = document.getElementById('vk-pref');
    if (d) d.parentNode.removeChild(d);
  }

  /* ---------- Avvio ---------- */
  function avvia() {
    stili();
    if (!leggiScelta()) mostraBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', avvia);
  } else {
    avvia();
  }

  // Riapertura da un link nel footer: <a href="#" onclick="velecoPreferenzeCookie();return false">
  window.velecoPreferenzeCookie = function () {
    if (!document.getElementById('vk-css')) stili();
    apriPreferenze();
  };
})();
