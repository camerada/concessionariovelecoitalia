# Prompt per Claude in Chrome — verifica di Merchant Center

Scritto l'8/11/2026. Serve a **leggere** lo stato dei due prodotti prima di decidere se
chiedere il riesame. Da qui (sessione cloud) Merchant Center non si legge: l'account di
servizio `claude-veleco@veleco-italia` ha il token valido, ma l'API Content for Shopping è
spenta sul progetto `veleco-italia` (279492594965) e l'account di servizio non è ancora
utente della scheda Merchant `644395007`.

**Si incolla in una sola seduta.** È tutto in lettura: niente clic che cambiano stato.

---

Sei in Merchant Center, account **Concessionario Veleco** (ID `644395007`), sito
concessionariovelecoitalia.it. Il tuo compito è **solo guardare e riferire**: non cliccare
«Richiedi riesame», non modificare prodotti, impostazioni, prezzi o spedizioni, non caricare
niente. Se una schermata chiede di confermare qualcosa, fermati e dimmelo.

Riferisci **le parole esatte** che Google scrive, in italiano, senza riassumerle e senza
interpretarle. Dove c'è un ID (routing ID, reference ID) copialo.

### 1. I due prodotti

Vai all'elenco dei prodotti e apri, uno per uno, questi due:

- `faster-piombo` — Veleco Faster, batteria piombo gel, 2.200 €
- `faster-litio` — Veleco Faster, batteria al litio estraibile, 2.850 €

Per ognuno dimmi:

1. Lo **stato** (Approvato / Non approvato / In fase di revisione / Scaduto), per le schede
   gratuite e, se compare separato, per gli annunci.
2. **Ogni avviso o problema**, uno per riga, con il testo esatto e l'icona (rossa, gialla,
   blu). In particolare: **c'è ancora «immagine in elaborazione»?** È la domanda più
   importante di tutta questa verifica.
3. Se Google mostra una **data** accanto a un problema (rilevato il…, scade il…), copiala.
4. I valori che Google ha ricevuto dal foglio: prezzo, disponibilità, link della pagina di
   destinazione, link dell'immagine, marca, MPN, GTIN, gruppo di prodotti.

### 2. Cosa deve risultare (confrontalo e dimmi se non torna)

| Campo | Piombo | Litio |
|---|---|---|
| Prezzo | 2200,00 EUR | 2850,00 EUR |
| Disponibilità | Disponibile (in stock) | Disponibile (in stock) |
| Pagina | `…/scooter-elettrico-anziani-prezzi/#piombo` | `…/scooter-elettrico-anziani-prezzi/#litio` |
| Marca | Veleco | Veleco |
| MPN | FASTER-PB | FASTER-LI |
| GTIN | vuoto | vuoto |
| Gruppo | veleco-faster | veleco-faster |

Il GTIN **deve** essere vuoto e «identificatore esistente» **non** deve essere impostato su
«no»: abbiamo marca e MPN, dichiarare il contrario sarebbe falso. Se vedi «no», dimmelo e
non toccare niente.

### 3. Lo stato del sito

Cerca la sezione dei problemi dell'account (Diagnostica, «Necessità di intervento», o come
si chiama nella tua schermata) e dimmi:

1. Se c'è ancora **«il sito o il negozio online deve essere migliorato»**, con il testo
   esatto e il routing ID (l'ultimo che conosciamo è `GEWB`, reference ID
   `644395007|faster-litio`).
2. Se Google dice **quando ha letto l'ultima volta** la pagina di destinazione, o mostra
   una data di ultima verifica del sito.
3. Se accanto all'avviso c'è un **elenco di cose da sistemare** (pagamento, contatti,
   resi, informazioni sull'azienda): copialo punto per punto.
4. Se il pulsante «Richiedi riesame» è **disponibile**, oppure grigio con una spiegazione
   (per esempio un'attesa in corso o un riesame già chiesto). Copia la spiegazione.
   **Non cliccarlo comunque.**
5. Se c'è ancora l'avviso informativo **«Personalized advertising: personal hardships»**
   (icona blu). Quello si lascia stare, serve solo sapere che è ancora lì.

### 4. Due cose da guardare di sfuggita

- **Spedizione**: nelle impostazioni, il servizio per l'Italia esiste e costa 0 €? Non
  cambiare niente, dimmi solo cosa c'è.
- **Il foglio collegato**: quando è stato letto l'ultima volta e se la lettura è andata a
  buon fine.

### 5. Come concludi

Finisci con tre righe secche:

1. «Immagine in elaborazione: c'è ancora / è sparita» per ciascun prodotto.
2. «Il riesame si può chiedere / non si può chiedere / si può ma conviene aspettare», con il
   perché in una riga.
3. Qualunque cosa che non corrisponde alla tabella del punto 2.

Niente conclusioni oltre a queste: alle decisioni ci pensiamo noi.

---

## Perché la verifica arriva prima del riesame

Dal controllo fatto l'8/11 in Search Console (ispezione URL con l'account di servizio),
l'ultima scansione della pagina Prezzi è del **4/11 alle 16:58 UTC**, mentre i file corretti
sono andati online verso le 22 di quel giorno. Nei risultati avanzati della pagina Google
vede ancora soltanto il Breadcrumb e nessun `Product`: segno che ha in mano la versione
precedente. La scansione di Merchant Center è un'altra cosa da quella dell'indice di
ricerca, quindi non è una prova — ma è l'unico indizio che abbiamo, e dice di aspettare.

---

# Seduta 2 — le correzioni (8/11/2026)

Dalla verifica dell'8/11 sono uscite due cose da correggere **in Merchant Center**, più
una pagina nuova da caricare sul sito. L'ordine conta: prima le due correzioni, poi il
caricamento del sito, **e solo alla fine il riesame**, perché il riesame guarda il negozio
dal vivo e può includere l'intero sito.

## 2a — Togliere «identifier exists = no» dal foglio

Nei dati grezzi dei due prodotti («Raw data source attributes: PRODUCTS SOURCE 2») compare
`identifier exists: no`. È sbagliato: quel campo si mette a «no» solo per i prodotti che
non hanno **né GTIN né MPN né marca**. I nostri hanno marca «Veleco» e MPN FASTER-PB /
FASTER-LI, quindi dichiarare «no» è dichiarare il falso e può generare un avviso di
identificativo incoerente.

Nel foglio Google collegato (origine dati «PRODUCTS SOURCE 2»):

1. trova la colonna `identifier_exists` (o «identificatore esistente»);
2. **cancella l'intera colonna**, intestazione compresa — non metterci «yes», si toglie e
   basta: senza quella colonna Google usa marca e MPN, che è quello che vogliamo;
3. lascia la colonna `gtin` vuota se c'è, o toglila: il GTIN non ce l'abbiamo e non si
   inventa (i codici che circolano in rete sono di un importatore inglese, non di Veleco);
4. torna in Merchant Center, origini dati, e **rileggi il foglio** («Fetch now» o
   «Aggiorna»);
5. controlla nei dati grezzi dei due prodotti che `identifier exists` sia sparito e che
   marca e MPN siano ancora lì.

## 2b — Allargare il tempo di transito della spedizione

Il servizio `[2748] Google Listings and Ads generated service - IT` dichiara **15 - 15
business days**. È una promessa che non possiamo mantenere: dalla fabbrica il Faster arriva
entro 90 giorni, e i tempi si concordano al telefono.

Nelle impostazioni di spedizione, apri quel servizio e porta il tempo di transito a una
forbice onesta: **da 10 a 90 giorni lavorativi** (se il campo accetta solo giorni di
calendario, usa lo stesso intervallo in giorni di calendario). Il costo resta **0,00 €** e
il paese resta l'Italia: quelli sono giusti e non si toccano.

Se Merchant Center permette di **non dichiarare** il tempo di transito, meglio ancora:
lascialo vuoto. Se è obbligatorio, usa 10-90.

Dimmi cosa hai impostato e come si chiamava esattamente il campo.

## 2c — Quando chiedere il riesame

**Non cliccare «Request review» finché non ti dico che il sito nuovo è online.** Sul sito
stiamo aggiungendo la pagina `/contatti/` (telefono, WhatsApp, email, indirizzo e orari
dello showroom, ragione sociale e P.IVA, link a condizioni, spedizioni e resi) e il link
nel piè di tutte le pagine: è il primo dei tre requisiti che Google elenca, ed è l'unico
che ci mancava davvero.

Quando il sito è online, il riesame si chiede dalla pagina del problema, pulsante
**«Request review»** (routing ID `RDAX`, reference `644395007`). Chiedilo **una volta sola**:
vale per tutti e due i prodotti, Google lo dice esplicitamente.

Non contestare l'avviso «Personalized advertising: personal hardships»: limita solo gli
annunci personalizzati e il remarketing dinamico, che non usiamo, e per uno scooter «per
anziani» è inevitabile. Lascia stare anche `veleco-faster-showroom.jpg` con la scritta
«In progress»: è un'immagine aggiuntiva in elaborazione, si sblocca da sé.
