# Da fare adesso — aggiornato il 4/11/2026, notte

Il lavoro di contenuto è finito e unito in `main`. Resta il caricamento sul server, ancora
bloccato, e lo scambio delle immagini su Metricool, che dipende da quello.

**Stato del 4/11 notte (sessione cloud):** il connettore Hostinger risulta *da riconnettere*
(`needs_reconnect`): non è tornato nemmeno in una sessione nuova. Nessuna chiave SSH e nessun
token API nell'ambiente. Verificato sul server: `/guida/` e le 16 grafiche nuove danno 404,
quindi niente è stato caricato. Va riconnesso a mano su
https://claude.ai/customize/connectors e poi aperta una sessione nuova (i connettori si
leggono all'avvio).

---
## 1. Caricare 39 file sul server

Il metodo è quello di CLAUDE.md (API Hostinger, `hosting_files_generate-upload-url` per
`u745278502` / `concessionariovelecoitalia.it`, poi `POST` con `Upload-Length` e `PATCH`
con i byte). **Attenzione: l'intestazione giusta è `X-Auth-Rest`, non `X-Rest-Auth`.**
Le due chiavi vanno in `X-Auth` (auth_key) e `X-Auth-Rest` (rest_auth_key).

L'elenco dei file è in `seo/da-caricare.txt`.

**Il controllo di sicurezza è già stato fatto il 4/11**: per ognuno dei 26 file da
sovrascrivere è stato verificato che la versione online corrisponda a una versione
presente nella storia di git. Zero anomalie. Se passano ore o se qualcuno tocca il
server nel frattempo, rifarlo: confrontare l'md5 online con le versioni in
`git log -- <file>`.

Dopo il caricamento, verificare che online sia uguale al locale, e **unire il ramo in
`main`** (è già unito: non ci sono modifiche in sospeso, serve solo se se ne aggiungono).

### Cosa c'è dentro
- **21 pagine**: nel piè di pagina i link nuovi *Spedizioni* e *Resi e recesso*
- **pagina Prezzi**: blocco «Come si compra e come si paga» + dati prodotto allineati al feed
- **`guida/index.html`**: pagina nuova, toglie il 403 su `/guida/`
- **`sitemap.xml`**: tolte 5 date di modifica nel futuro, aggiunta `/guida/`
- **16 grafiche** dei post in `assets/post-google/` e `assets/post-google/ig/`

## 2. Riallineare Metricool — TESTI FATTI, restano le immagini

Brand «Concessionario Veleco», id **7853509**.

**Fatto il 4/11 notte: 32 post su 48 riscritti** secondo `seo/post-riscritti-nov-dic-2026.md`.
Non serviva aspettare il caricamento: le immagini dei post sono già sul CDN di Metricool
(`static.metricool.com`), quindi si può cambiare il testo lasciando la media com'è.

- **8 sabati riscritti da capo** (7/11, 14/11, 21/11, 28/11, 5/12, 12/12, 19/12, 26/12):
  via la rotazione «il regalo della settimana», dentro i testi nuovi dei tre accessori.
  Sparite anche le scadenze finte (15/11, 29/11, 13/12).
- **24 post corretti sul conto dei regali**: «un accessorio / un accessorio a scelta» →
  «tre accessori». Dove il documento era rimasto al singolare (alcuni testi Instagram) ho
  messo il plurale per coerenza con il fatto: **da segnalare a Maurizio.**
- Lasciati come sono i due post «Presenta un amico» del 24/12: lì «un accessorio a testa»
  è il programma passaparola, non la promo.
- Verificato dopo: nessun post parla più di rotazione o di scadenze intermedie.

**Resta da fare, dopo il punto 1:** scambiare le grafiche degli 8 sabati. I post portano
ancora l'immagine vecchia (per esempio il 7/11 mostra la borsa mentre il testo parla dei tre
regali) e il testo alternativo descrive quell'immagine. Le nuove sono in
`public_html/assets/post-google/` e `.../ig/` e Metricool le prende dall'indirizzo del sito:
prima devono essere online.

Da sapere: `updateScheduledPost` cambia l'id ma tiene l'uuid — per ritoccare lo stesso post
serve l'id nuovo (o si rilegge con `getScheduledPosts`). L'errore «Failed to normalize media»
non si è presentato: 32 chiamate di fila senza attese, perché la media era già su Metricool.
Con **immagini nuove** da scaricare serve invece l'attesa di 60 secondi fra una chiamata e
l'altra (il `sleep` semplice è bloccato: usare un ciclo di attesa).

## 3. Il post del 5 dicembre vuole un controllo

`sab 5/12 · Due pronti, in magazzino` dice che ci sono due Faster pronti (piombo 2.200 €,
litio 2.850 €) e che sono gli unici che arrivano per Natale. **Se Valentina li vende prima,
quel post non deve uscire.** Da controllare il venerdì prima. È l'unico post legato al
magazzino.

## 4. Merchant Center, in attesa

Due prodotti caricati da un foglio Google collegato, tutti e due «Non approvati» per:
- **immagine in elaborazione** — normale, si sblocca da solo (2-3 giorni, fino a 30)
- **«il sito o il negozio online deve essere migliorato»** — è il motivo per cui sono state
  fatte le quattro correzioni del punto 1

Dopo il caricamento, aspettare le 24-48 ore di scansione che Google dichiara, poi chiedere
il riesame da Merchant Center (Routing ID `GEWB`, Reference ID `644395007|faster-litio`).

Il terzo avviso, **«Personalized advertising: personal hardships»**, si lascia stare: è
informativo (icona blu, «click potential» vuoto), limita solo gli annunci personalizzati e
per uno scooter per anziani è inevitabile. Toglierlo vorrebbe dire levare «per anziani» e
«per chi cammina con fatica» dalla descrizione.

## 5. Aperte, da decidere con Maurizio

- **`condizioni-vendita` dice ancora «isole escluse»**, mentre la pagina Promo dice che per
  Sicilia e Sardegna si fa il conto al telefono. Due cose diverse sullo stesso sito, ed è
  una pagina legale: serve il via prima di toccarla.
- **Il codice a barre (GTIN) del Faster**, da chiedere a Valentina (scatola o fattura).
- **Instagram**: il profilo @easyscooter_scooterelettrici ha il link alla bio verso
  easyscootergenova.it, il nome «Easyscooter» non si trova cercando, e la bio apre con
  «NOLEGGIO». Maurizio ha detto «dobbiamo modificare tutto», non ancora affrontato.
