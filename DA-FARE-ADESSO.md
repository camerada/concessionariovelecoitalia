# Da fare adesso — 4/11/2026, notte

I punti 1 e 2 sono **finiti**. Quello che resta è elencato sotto.

## Fatto il 4/11 notte (sessione cloud)

**39 file caricati sul server** con l'API Hostinger (connettore riconnesso dall'utente;
prima risultava `needs_reconnect`). Controllo di sicurezza rifatto subito prima: per ognuno
dei 26 file da sovrascrivere la versione online corrispondeva a una versione presente nella
storia di git, zero anomalie; 13 erano nuovi. Dopo il caricamento verificato che online e
locale coincidano su tutti e 39.

Controlli sul sito: `/guida/` risponde 200 (prima dava 404), la sitemap non ha più date di
modifica nel futuro e contiene `/guida/`, i link *Spedizioni* e *Resi e recesso* sono nel
piè di pagina.

**Metricool riallineato** (brand «Concessionario Veleco», id 7853509), dai testi di
`seo/post-riscritti-nov-dic-2026.md`:

- **32 testi su 48**: gli 8 post del sabato riscritti da capo (via la rotazione «il regalo
  della settimana» e le scadenze intermedie del 15/11, 29/11 e 13/12) e 24 post corretti da
  «un accessorio» a «tre accessori».
- **16 immagini scambiate**: le grafiche nuove degli 8 sabati, nei due formati, con il testo
  alternativo rifatto.
- Lasciati come erano i due post «Presenta un amico» del 24/12: lì «un accessorio a testa» è
  il programma passaparola, non la promo.
- Riletto il calendario dopo: 48 post, nessun residuo di rotazione o di scadenze intermedie.

**Post del 5 dicembre riscritto** (indicazione di Maurizio, 4/11 notte): diceva che c'erano
due Faster pronti in magazzino e che erano gli unici che arrivavano per Natale. Tolto: il
magazzino non si dichiara e non si promettono arrivi entro una data; i tempi di consegna si
dicono al telefono. Adesso è «Tutto quello che c'è nel prezzo», con grafica nuova
(`2026-12-05-nel-prezzo.jpg` nei due formati, generata con `post-google/strumenti/immagine.js`
e caricata sul server). Il calendario non ha più nessun post legato alle scorte: non serve
più il controllo del venerdì prima.

**Da far confermare a Maurizio**: in alcuni testi Instagram il documento era rimasto al
singolare («consegna compresa e accessorio in regalo»); ho messo il plurale per non avere lo
stesso giorno il post Google che dice tre e Instagram che dice uno.

### Note tecniche
- Caricamento: operazione `hosting_files_generate-upload-url` per `u745278502` /
  `concessionariovelecoitalia.it`, poi TUS: `POST .../<percorso>?override=true` con
  `Upload-Length` (201) e `PATCH` con i byte (204). Intestazioni **`X-Auth`** (auth_key) e
  **`X-Auth-Rest`** (rest_auth_key); `X-Rest-Auth` dà 403. L'URL di caricamento scade in
  circa 6 ore. Il connettore Hostinger adesso espone `search` / `execute` invece degli
  strumenti con il nome dell'operazione: si cerca l'operazione e si esegue.
- Metricool: `updateScheduledPost` cambia l'id e tiene l'uuid — per ritoccare lo stesso post
  serve l'id nuovo. L'attesa di 60 secondi fra una chiamata e l'altra **non è servita**: 48
  chiamate di fila senza un solo errore «Failed to normalize media», sia con media già sul
  CDN di Metricool sia con immagini nuove da scaricare dal sito.

---

## 1. Merchant Center, in attesa

Due prodotti caricati da un foglio Google collegato, tutti e due «Non approvati» per:
- **immagine in elaborazione** — normale, si sblocca da solo (2-3 giorni, fino a 30)
- **«il sito o il negozio online deve essere migliorato»** — è il motivo per cui sono state
  fatte le quattro correzioni caricate il 4/11

Adesso che i file sono online: aspettare le 24-48 ore di scansione che Google dichiara, poi
chiedere il riesame da Merchant Center (Routing ID `GEWB`, Reference ID
`644395007|faster-litio`).

Il terzo avviso, **«Personalized advertising: personal hardships»**, si lascia stare: è
informativo (icona blu, «click potential» vuoto), limita solo gli annunci personalizzati e
per uno scooter per anziani è inevitabile. Toglierlo vorrebbe dire levare «per anziani» e
«per chi cammina con fatica» dalla descrizione.

## 2. Aperte, da decidere con Maurizio

- **Il plurale nei testi Instagram** di cui sopra.
- **`condizioni-vendita` dice ancora «isole escluse»**, mentre la pagina Promo dice che per
  Sicilia e Sardegna si fa il conto al telefono. Due cose diverse sullo stesso sito, ed è
  una pagina legale: serve il via prima di toccarla.
- **Il codice a barre (GTIN) del Faster**, da chiedere a Valentina (scatola o fattura).
- **Instagram**: il profilo @easyscooter_scooterelettrici ha il link alla bio verso
  easyscootergenova.it, il nome «Easyscooter» non si trova cercando, e la bio apre con
  «NOLEGGIO». Maurizio ha detto «dobbiamo modificare tutto», non ancora affrontato.
