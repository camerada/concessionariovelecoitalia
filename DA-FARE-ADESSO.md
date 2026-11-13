# Da fare adesso — 4/11/2026, sera

Il lavoro è tutto finito e unito in `main`. Mancano due gesti meccanici, tutti e due
bloccati perché il connettore Hostinger si è staccato dalla sessione del 4/11 e non è
più rientrato (l'autorizzazione è a posto: è il server MCP che è caduto a metà sessione).

**In una sessione nuova il connettore c'è. Si riparte da qui.**

---

## 0. URGENTE — Verifica dell'attività su Merchant Center (13/11/2026)

**Solo Maurizio può farla.** Google chiede di confermare i dati dell'attività; finché non è
fatta **i due Faster non compaiono su Google in nessun Paese**.

- Mail di Google del 13/11/2026 alle 02:45, oggetto «Concessionario Veleco, fix issues that
  prevent your products from showing» → pulsante **View Issue**
- Oppure: Merchant Center → Impostazioni → Informazioni sull'attività → Verifica
- Dati: EasyScooter di Valentina Colomba, Via Giuseppe Pessale 20r, 16167 Genova,
  P.IVA 02612650990. Probabile richiesta di visura o documento di Valentina.
- Promemoria fissato per **venerdì 13/11 alle 17:10**.

**Nota buona, dello stesso giro:** il problema «il sito o il negozio online deve essere
migliorato» **è stato risolto**. Google ha riesaminato il 10/11 e l'ha tolto dall'account:
le correzioni del 4/11 (blocco «Come si compra e come si paga», pagina `/guida/`, link
Spedizioni e Resi nel pie', sitemap) hanno funzionato. Vedi anche il punto 4, superato in
questa parte.

**Altre mail di Merchant Center da sapere:** l'8/11 «una persona nuova ha accesso»
(da controllare se non l'ha aggiunta Maurizio); il 6/11 invito a impostare il monitoraggio
delle conversioni (senza carrello non si applica).

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

## 2. Riallineare Metricool

Brand «Concessionario Veleco», id **7853509**. Dipende dal punto 1: Metricool prende le
immagini dall'indirizzo del sito, quindi prima devono essere online.

I testi definitivi sono in **`seo/post-riscritti-nov-dic-2026.md`**. È quello il documento
da cui copiare.

**URGENTE**: su Metricool c'è ancora il calendario vecchio con la pubblicazione automatica
accesa. **Sabato 7 novembre alle 10:00 esce «il regalo della settimana: la borsa»**, che
non è più vero: i regali adesso sono tutti e tre.

Da sapere: `updateScheduledPost` cambia l'id ma tiene l'uuid. Metricool va in errore
«Failed to normalize media» se lo si chiama troppo in fretta: **aspettare 60 secondi fra
una chiamata e l'altra** (non è un problema dei file). Il `sleep` semplice è bloccato:
usare un ciclo di attesa.

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
