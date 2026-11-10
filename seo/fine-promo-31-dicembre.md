# Fine della promozione — lista di controllo per il 1° gennaio 2027

Scritta il 10/11/2026, quando tutto è ancora fresco. Serve a non lasciare in giro,
a gennaio, la promessa di un regalo che non facciamo più.

## La regola, prima di tutto

**Due cose diverse, e una sola scade.**

| | Scade il 31/12? |
|---|---|
| **Consegna a casa compresa nel prezzo** (Italia continentale) | **No.** È come lavoriamo, non è una promozione |
| **I tre accessori Veleco in regalo** (borsa da bracciolo, supporto per il telefono, copertura impermeabile) | **Sì**, con ogni Faster ordinato entro il 31/12/2026 |

Quindi il 1° gennaio **non si tocca niente che riguardi la consegna**: né le frasi del sito,
né `shippingRate` nei dati strutturati, né «Free shipping» su Merchant Center. Chi lo fa per
abitudine toglie una cosa vera.

Vale anche l'altra condizione, che non scade: Sicilia e Sardegna si valutano caso per caso.

---

## 1. Sito (6 posti, verificati il 10/11/2026)

Si caricano insieme, in un colpo solo, con l'API Hostinger.

### a) `public_html/assets/promo.js` — la fascia in cima a tutte le pagine
Oggi dice: «🎁 **Consegna a casa compresa nel prezzo, sempre.** E fino al 31 dicembre, tre
accessori Veleco in regalo con ogni Faster. *Guarda cosa ricevi*».

**Il modo più pulito di chiuderla: svuotare il file**, che è il motivo per cui la fascia è
stata messa in un file a parte. Niente fascia, niente da riscrivere.
Se invece si vuole tenere una fascia, togliere gli accessori e lasciare solo la consegna, con
il link alla pagina Prezzi invece che a Promo.

C'è anche una data dentro al file: `var FINE = new Date(2026, 11, 31, 23, 59)`. Se non si
svuota il file, spostarla.

### b) `public_html/promo/index.html` — la pagina della promozione
È la pagina costruita **tutta** sull'offerta: 12 punti con «31 dicembre», fra titolo, FAQ,
dati strutturati, meta e Open Graph. Non ha senso riscriverla a pezzi.

**Decisione da prendere** (meglio prenderla a dicembre, non il 1° gennaio di corsa):
- **Spegnerla e reindirizzare** `/promo/` → `/scooter-elettrico-anziani-prezzi/` con un 301
  in `.htaccess`, togliendola dalla sitemap e dal piè. È la scelta più netta e non lascia
  niente di falso online.
- **Oppure riscriverla** come pagina della prossima offerta, se a gennaio ce n'è una.

Attenzione: `/promo/` è il link in bio di Instagram fino al 31/12 (vedi punto 3) ed è il link
dentro ai post della scheda Google già pubblicati. Un 301 li tiene in piedi; cancellare la
pagina no.

### c) `public_html/scooter-elettrico-anziani-prezzi/index.html`
Cinque punti con «31 dicembre», tutti sugli accessori. Da togliere la frase degli accessori,
**lasciando intatte** le frasi sulla consegna («sempre compresa nel prezzo», «0 € di
consegna, sempre»). Controllare anche la FAQ «Cosa è compreso nel prezzo», che sta sia nel
testo visibile sia nei dati strutturati: vanno cambiate tutte e due.

### d) `public_html/presenta-un-amico/index.html`
Una scheda: «Tre accessori Veleco in regalo, fino al 31 dicembre». Da sostituire con un'altra
destinazione (per esempio «Prezzi e cosa comprende la cifra»).
**Nota**: in questa pagina «un accessorio a testa» del programma passaparola **non è** la
promozione e non si tocca.

### e) `public_html/guida/scooter-elettrico-anziani-coperto/index.html`
Due punti: una frase nel testo («La copertura, fino al 31 dicembre, è uno degli accessori che
regaliamo») e un link «La promozione fino al 31 dicembre» in fondo. Da togliere tutti e due.

### f) `sitemap.xml`
`lastmod` al giorno del caricamento per le pagine toccate; se `/promo/` viene spenta, toglierla.

**Controllo finale**, da fare dopo il caricamento:
```sh
grep -rn "31 dicembre\|accessori in regalo\|in regalo" public_html --include="*.html" --include="*.js"
```
Quello che resta dev'essere solo il passaparola di `presenta-un-amico`.

---

## 2. Merchant Center

La descrizione dei due prodotti (`faster-piombo` e `faster-litio`) finisce con:

> «Fino al 31 dicembre ricevi anche tre accessori originali Veleco in regalo: borsa da
> bracciolo, supporto per il telefono e copertura impermeabile.»

Si toglie quella frase **dal foglio Google collegato** («Feed Merchant Center - Concessionario
Veleco», origine dati «PRODUCTS SOURCE 2»), poi si rilegge l'origine dati con «Update» e si
controlla nei dati grezzi che la descrizione nuova sia arrivata.

**Non toccare**: «Free shipping», il transito 10–90 giorni lavorativi, marca, MPN, GTIN vuoto.
Testo completo della scheda in `seo/merchant-center.md`.

---

## 3. Instagram — e questo va fatto il 1° gennaio, non dopo

Il link in bio porta a `/promo/`. Dal 1° gennaio:

```
https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/?utm_source=instagram&utm_medium=bio&utm_campaign=prezzi
```
Titolo del link: `Prezzi del Veleco Faster` (sostituisce «Promo fino al 31 dicembre»).

Il secondo link, quello di WhatsApp, resta com'è. Il profilo si cambia **solo a mano**
dall'app o da Meta Business: Metricool non lo tocca. Testi pronti in `seo/instagram.md`.

---

## 4. Post

L'ultimo post programmato è del 31/12. Nessun post di gennaio deve nominare gli accessori né
la promozione: il calendario nuovo è in `seo/calendario-gennaio-2027.md` ed è già scritto
senza. I post **già pubblicati** restano come sono: sono datati, si capisce.

---

## L'ordine giusto, il 31 dicembre sera o il 1° gennaio mattina

1. Sito: i 6 punti qui sopra, un caricamento solo, poi il `grep` di controllo.
2. Merchant Center: descrizione nel foglio, poi «Update» e verifica nei dati grezzi.
3. Instagram: link in bio e titolo.
4. Unire il ramo in `main` subito dopo il caricamento, come sempre.
