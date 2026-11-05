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

**`condizioni-vendita` allineato al resto del sito** (4/11 notte, su tua indicazione):
l'articolo 9 diceva «in tutta Italia (isole escluse)», adesso dice «in tutta Italia
continentale. Per Sicilia e Sardegna la consegna si valuta caso per caso: contattaci e ti
indichiamo tempi e costi precisi prima dell'ordine», la stessa cosa che dicono home, Promo e
modelli. Resto dell'articolo intatto. Caricato sul server con la sitemap (lastmod al 4/11).
Sul sito non resta nessun «isole escluse».

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

**Quando chiedere il riesame: lunedì 9 novembre.** I file sono andati online il 4/11 verso
le 22; Google dichiara 24-48 ore per rileggere il sito, quindi la finestra si apre venerdì
sera. Si aspetta lunedì perché l'avviso dell'immagine in elaborazione si sblocca da solo in
2-3 giorni e, finché c'è, i prodotti restano «Non approvati» comunque: una richiesta fatta
prima verrebbe sprecata, e dopo un riesame fallito c'è un periodo di attesa prima di poterne
chiedere un altro.

**Controllo prima di cliccare**: aprire i due prodotti e vedere se l'avviso «immagine in
elaborazione» è sparito. Se c'è ancora, aspettare un altro paio di giorni.

Poi chiedere il riesame da Merchant Center (Routing ID `GEWB`, Reference ID
`644395007|faster-litio`).

Si può verificare in Search Console, con l'account di servizio, quando Google ha ripassato
davvero la pagina Prezzi, invece di fidarsi della finestra dichiarata.

Il terzo avviso, **«Personalized advertising: personal hardships»**, si lascia stare: è
informativo (icona blu, «click potential» vuoto), limita solo gli annunci personalizzati e
per uno scooter per anziani è inevitabile. Toglierlo vorrebbe dire levare «per anziani» e
«per chi cammina con fatica» dalla descrizione.

## 2. Scheda Google: i contenuti pronti, mai inseriti

`post-google/scheda-google.md` contiene categorie, descrizione, 10 servizi, 15 prodotti,
attributi e 6 domande e risposte, preparati il 29/10 e mai messi nella scheda. È la scheda
che riceve già i post due volte a settimana, e le ricerche di marca valgono il 73% delle
impressioni: è visibilità gratuita ferma in un file.

**Avanzamento (5/11, seduta 1 finita)**: categorie ✔ (approvate subito; prima ce n'era una
sola, senza secondarie), descrizione ✔ (salvata, in revisione), campo Chat ✔
(`wa.me/393289754412`, in revisione; il link precedente era senza prefisso 39, quindi rotto).
**Da ricontrollare**: che descrizione e WhatsApp risultino approvati. Se la descrizione torna
indietro, il sospetto è «da 2.200 €» letto come contenuto promozionale.
Servizi ✔ (9 su 10; la garanzia va creata con «Nessun prezzo»). Prodotti ✔ (16 pubblicati,
categorie create). Il rifiuto del Faster Litio come
«Veicoli» è **risolto**: mancava nel testo la qualifica di dispositivo medico, che il Piombo
Gel aveva. Aggiunta al Litio e agli altri undici, il Litio è stato riapprovato senza bisogno
di contestare; i 17 prodotti sono tutti senza etichetta. Restano gli attributi e le domande
(seduta 5) e il servizio «Garanzia 2 anni» da creare con «Nessun prezzo».

**Il prompt per Claude in Chrome è in `post-google/prompt-scheda-google.md`**, diviso in
cinque sedute (categorie e descrizione · servizi · i due Faster · il resto della gamma ·
attributi e domande). Si incolla una seduta per volta.

Prima della seduta sui prodotti servono le foto scaricate sul computer: Google chiede il
file, non l'indirizzo. Gli indirizzi delle 16 JPG sono nel prompt, tutte verificate online
il 5/11.

Aggiornato il 5/11: i due Faster puntano alla pagina Prezzi (`#piombo` e `#litio`) invece che
a Modelli, e le foto sono le JPG online invece dei WEBP locali.

## 3. Aperte, da decidere con Maurizio

- **Il plurale nei testi Instagram** di cui sopra.
- **Il codice a barre (GTIN o EAN) del Faster.** Chiuso il filone dei codici trovati in
  rete: la verifica sul registro GS1 (fatta da Maurizio il 4/11) dice che `5060463912314` e
  gli altri due sono licenziati a **Lunex Technology Limited**, Regno Unito — non a Veleco,
  la cui licenza GS1 è polacca (prefisso visto: `59045539942`; ce ne sono altri, la ricerca
  per nome sul registro dà 7 voci). Un codice Veleco comincia per `590`. Usarli significherebbe
  dichiarare marca Veleco con un identificativo di un'altra società: è il rifiuto che
  stiamo cercando di evitare. Il manuale ufficiale non riporta nessun EAN. Si va avanti **senza GTIN**: non è
  quello che blocca il riesame (i due avvisi sono l'immagine in elaborazione e il sito da
  migliorare). Campo GTIN vuoto tenendo marca e MPN, **senza** impostare
  `identifier_exists = no`, che vale solo per i prodotti privi anche di marca e MPN.
  A Valentina si chiede comunque il codice sull'etichetta
  dell'imballo, per tutte e due le batterie: se comincia per `590` è Veleco, se comincia per `5060463` è l'importatore inglese.
  Dettagli in `seo/merchant-center.md`.
- **Il peso del Faster sulla pagina Prezzi.** Diciamo 133 kg (piombo) e 117 kg (litio); il
  manuale del produttore dice 116 kg e 100 kg. Da chiarire con Valentina prima di
  correggere: vedi `seo/specifiche-faster-manuale.md`. La pagina Prezzi è quella di
  destinazione di Merchant Center.
- **Instagram: profilo convertito** ✔ (4/11 sera, fatto da Maurizio). Nome, bio, link,
  titolo del link, categoria, pulsanti, indirizzo e foto passati dal noleggio al
  concessionario Veleco, tenendo i 656 follower. Verificato subito dopo che il collegamento
  con Metricool regge: i post del 5/11 e del 7/11 risultano in attesa con la pubblicazione
  automatica attiva, su Instagram e sulla scheda Google. Testi e impostazioni restano in
  `seo/instagram.md`.
  Restano tre code, nessuna urgente:
  - **Nome utente**: `@easyscooter_scooterelettrici` non contiene «veleco». Si cambia a
    calendario avviato, non adesso, e subito dopo si riverifica il collegamento Metricool.
    Candidati: `velecoitalia`, `veleco_italia`, `velecoitalia.genova` (la disponibilità si
    vede solo dall'app).
  - **Post vecchi del noleggio**: si possono archiviare senza perderli né toccare i
    follower. Decide Valentina quanto indietro andare.
  - **1° gennaio**: il link in bio passa da `/promo/` a `/scooter-elettrico-anziani-prezzi/`
    e il titolo da «Promo fino al 31 dicembre» a «Prezzi del Veleco Faster», altrimenti
    promette una promozione finita.
