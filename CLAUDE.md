# concessionariovelecoitalia.it

Sito statico (HTML scritto a mano) di Concessionario Veleco Italia — EasyScooter di Valentina Colomba, showroom a Genova Nervi. Testi e commenti in italiano.

## Struttura
- `public_html/` = cartella `domains/concessionariovelecoitalia.it/public_html` su Hostinger (importata dal backup ZIP il 15/10/2026).
- Pagine in cartelle con `index.html` (URL puliti): home, `chi-siamo/`, `modelli-veleco/`, `assistenza-ricambi/`, `guida-scooter-elettrico-anziani/`, `presenta-un-amico/`, pagine regionali `scooter-elettrico-anziani-<regione>/` (campania, lazio, lombardia, piemonte, toscana), `condizioni-vendita/`, `privacy-policy/`, `cookie-policy/`; pagine d'errore 400/401/403/404/500.
- `assets/` immagini (in `assets/modelli/` i modelli Veleco), favicon, `consenso-cookie.js` (banner del consenso; GTM-MZBP64KK).
- `.htaccess`: pagine d'errore (blocchi ERRORPAGEID di Hostinger, non toglierli), www → senza www, vecchie `indexN.html` e `/en` in 301.
- `llms.txt` (e una variante `llms1.txt`), `robots.txt`, `sitemap.xml` (lastmod a mano: aggiornarla se cambiano le pagine).
- `default.php` è la pagina predefinita di Hostinger.

## Regole
- Sul Mac `.htaccess` è nascosto: in uno ZIP di consegna metterne anche una copia `htaccess.txt`.
- Non affermare sedi diverse da Genova: per le regioni ci sono solo pagine informative su consegna e uso.

## Pubblicazione
- `sh carica.sh` carica `public_html/` in `domains/concessionariovelecoitalia.it/public_html` via SSH con l'alias `came` di ~/.ssh/config (lo stesso dei siti su misura; altro alias con `SSH_ALIAS=...`). Solo ssh, tar, cksum. Mostra i file cambiati e chiede conferma; copia dei sostituiti in `~/backup-velecoitalia/` sul server, fuori dal sito; non cancella mai niente (i file da togliere si tolgono a mano).
- `public_html/domande/` (15/10/2026): pagina privata per Valentina (5 domande per la campagna Google: vendite e fonti, margine, quanti comprano, orari, budget), noindex, non collegata, niente cookie/Analytics. `invia.php` manda le risposte con `mail()` a info@camecomunicazione.it e ne salva una copia in `domains/concessionariovelecoitalia.it/domande-risposte/` (fuori dal sito). Tolta dal server e dal repo il 21/10/2026 (risposte salvate in `domande-risposte/` sul server).
- `rivenditori-veleco-italia/` (16/10/2026): pagina «Dove comprare Veleco in Italia» per le ricerche «veleco rivenditori», «veleco store», «veleco sito ufficiale»; creata dal modello di assistenza-ricambi (stessi stili, testata, piè, tracciamento), solo fatti già presenti nel sito. Link «Dove comprare Veleco» nel piè di tutte le pagine. Consegna: Italia continentale; Sicilia e Sardegna caso per caso (confermato dall'utente il 16/10/2026; condizioni-vendita dice ancora «isole escluse»).
- Recensioni (16/10/2026): 8 su Google, voto 5,0; sul sito 4 schede (Roberto Scotti, Gemma Piras, Andrea Moderini, Asia Capello) su home e regionali. Foto dei clienti: solo con permesso e con il Faster (quelle su Google mostrano uno Sharpy e uno scooter a 2 ruote).
- Link recensioni (16/10/2026): «Hai già il tuo Veleco? Lascia una recensione →» (https://g.page/r/CcP-5oF7kAJGEB0/review) sotto le recensioni di home e regionali, accanto a «Leggi tutte le recensioni su Google». Indirizzo breve da stampare `/recensione` → stesso link (302 in .htaccess).
- `post-google/` (16/10/2026, fuori da public_html, non si carica): 4 immagini 1200×900 + testi in LEGGIMI.md per gli aggiornamenti della scheda Google (si pubblicano a mano: le API di Business Profile richiedono approvazione di Google). Fatte con Playwright da un modello HTML (foto del sito + fascia verde con occhiello e titolo).
- Risposte di Valentina (20/10/2026): vendite da luglio (6 indicate su 7): Varazze e Loano da passaparola; Verona, Rapallo, Voghera, Genova da Google/sito. Margine su un Faster 300–500 € (diverso tra Piombo e Litio). Comprano 2 su 10 di chi chiede informazioni. Telefono lun–sab 10–20. Budget pubblicità: «ne parliamo».
