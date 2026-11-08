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
