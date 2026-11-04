# Post per la scheda Google di Veleco

Due post a settimana sulla scheda Google Business, pubblicati dal workflow Pabbly Connect «Post scheda Google Veleco»
(Webhook → Google Business Profile «Create Call to Action Post», pulsante «Scopri di più» + link). Regole:
- il pulsante porta sempre a una pagina del sito, mai a una fonte esterna;
- le fonti delle notizie si citano per nome nel testo, senza link;
- solo fatti già presenti nel sito per i post «nostri»; per le notizie, solo quello che dice la fonte, letta per intero;
- testo tra 300 e 900 caratteri (Google accetta fino a 1500), niente politica, niente consigli medici oltre la fonte.

## Martedì alle 10: la notizia della settimana
Argomenti che interessano chi ha più di 70 anni e chi assiste un genitore: Legge 104 e invalidità, caregiver,
pensioni e bonus, barriere architettoniche, trasporti e mobilità, salute e movimento, sicurezza stradale, Liguria.
- Il lunedì mattina l'attività pianificata «Post scheda Google: notizie» apre una sessione che lancia
  `python3 -I post-google/strumenti/notizie.py 7` (Google News in italiano, ultimi 7 giorni, ricerche fisse),
  sceglie 3 notizie, legge gli articoli, scrive 3 proposte in `post-google/notizie/AAAA-MM-GG.md` (data del martedì),
  fa le immagini con `immagine.js`, le carica sul sito e manda le proposte a Maurizio.
- Maurizio risponde con il numero della proposta scelta; la sessione segna `stato: approvato` e pubblica il martedì alle 10.
  Senza risposta non esce nulla.
- Ogni blocco ha: `stato` (proposta / approvato / scartato), `fonte` (nome e data), `immagine`, `link`, `testo`.
  L'ultimo capoverso del testo è sempre il ponte verso il sito (la pagina del link).

## Giovedì alle 10: il post «nostro»
`post-google/calendario.md`: 12 post già scritti (prodotto, clienti, servizio, agevolazioni), uno per giovedì dal
5/11/2026 al 21/1/2027. L'attività pianificata «Post scheda Google: giovedì» lancia
`python3 -I post-google/strumenti/pubblica.py post-google/calendario.md oggi`. Quando il calendario finisce, se ne scrive un altro.

## Strumenti (`strumenti/`)
- `pubblica.py FILE DATA [--prova]`: manda il post con quella data al webhook (variabile d'ambiente `PABBLY_WEBHOOK_VELECO`).
- `notizie.py [giorni] [max]`: elenco delle notizie recenti per tema.
- `immagine.js OUT "OCCHIELLO" "Titolo" [foto|-] [posizione] [sottotitolo]`: immagine 1200×900 con Playwright
  (foto del sito + fascia verde, oppure solo testo su fondo verde per le notizie). Le foto degli articoli non si usano mai.
- Le immagini vanno in `public_html/assets/post-google/` (cartella non collegata, non in sitemap) e online con
  `carica.sh` o con l'API Hostinger (vedi CLAUDE.md). Pabbly le prende da lì.

## Immagini e post già fatti
- 1-prova-gratuita, 2-recensione-roberto (pubblicato il 29/10/2026 come prova, con l'anteprima del video),
  3-consegna-italia, 4-iva-agevolata: i 4 post del 16/10/2026.
- 05…13: le immagini dei post del calendario. n-AAAA-MM-GG-N: le immagini delle notizie proposte.
