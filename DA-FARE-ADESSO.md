# Da fare adesso — aggiornato il 10/11/2026

Questo file dice **solo quello che è ancora aperto**. Quello che è stato fatto sta in
`CLAUDE.md`, che è la memoria lunga del progetto. Se trovi qui una cosa già fatta, toglila.

---

## 1. Cose con una data: se nessuno le fa, scadono male

### 1° gennaio — il link in bio di Instagram
Porta a `/promo/`. Dal 1° gennaio promette una promozione finita. Va spostato sulla pagina
Prezzi, con il titolo «Prezzi del Veleco Faster». Si fa **solo a mano** dall'app o da Meta
Business: nessuno strumento di questa sessione può farlo. Indirizzo con gli UTM già pronto in
`seo/instagram.md` e in `seo/fine-promo-31-dicembre.md`.

### 31 dicembre / 1° gennaio — fine degli omaggi
Lista di controllo completa in **`seo/fine-promo-31-dicembre.md`**: 6 punti sul sito, la
descrizione dei prodotti su Merchant Center, il link in bio. La regola che conta: **scadono
solo i tre accessori, non la consegna compresa**, che non si tocca da nessuna parte.
La decisione su cosa fare della pagina `/promo/` (spegnerla con un 301 o riscriverla) è
meglio prenderla a dicembre, con calma.

### Entro Natale — i post di gennaio
Il calendario di Metricool finisce il 31/12. I testi di gennaio sono già scritti in
**`seo/calendario-gennaio-2027.md`** (12 date, 24 post): mancano le grafiche e
l'inserimento nel planner, che si fa col via di Maurizio.

### 8, 15 e 22 gennaio — i tre articoli della guida
Sono gli ultimi rimasti del piano: la batteria in salotto (chi vive in condominio), nuovo o
usato, quanto costa restare a casa. Gli altri cinque sono già online. Il post del sabato li
rilancia, quindi vanno pubblicati il venerdì.

### 1–2 dicembre — report di novembre
`python3 -I report/strumenti/dati-google.py 2026-11-01 2026-11-30`. Nello stesso report si
valuta il titolo nuovo della home del 29/10: la home aveva CTR 2,5% contro il 5–5,6% delle
pagine interne.

---

## 2. Da chiudere, senza una data

- **Merchant Center**: il riesame è passato il 10/11, ma l'approvazione dei due prodotti non
  è immediata. Da ricontrollare fra qualche giorno che siano usciti da «Not approved».
- **Content API for Shopping** da accendere sul progetto Cloud `veleco-italia`
  (279492594965). L'account di servizio `claude-veleco@veleco-italia` ha già accesso Admin
  alla scheda Merchant: acceso quello, stato e avvisi dei prodotti si leggono da qui senza
  aprire il browser.
- **Scheda Google, ultima seduta**: attributi, domande e risposte, e il servizio «Garanzia
  2 anni» con «Nessun prezzo» (non «Senza costi»: due anni sono un obbligo di legge, non un
  omaggio). Testi pronti dal 29/10 in `post-google/scheda-google.md`, prompt in
  `post-google/prompt-scheda-google.md`.
- **Instagram**: cambio del nome utente (`@easyscooter_scooterelettrici` non contiene
  «veleco») — da fare a calendario avviato, riverificando subito il collegamento con
  Metricool — e archiviazione dei vecchi post del noleggio, se Valentina vuole.

---

## 3. Domande ferme, in attesa di Valentina

1. **Il codice a barre** sull'etichetta dell'imballo, per piombo e litio. Se comincia per
   `590` è Veleco e si mette nel feed; se comincia per `5060463` è l'importatore inglese e
   non serve. Finché non arriva si va avanti senza GTIN, che non blocca niente.
2. **Un avviso quando finisce il magazzino**: venduto l'ultimo pezzo di una versione, quella
   torna `backorder` su Merchant Center e nei dati strutturati della pagina Prezzi.
3. **Le frasi legali della guida**, scritte il 29/10 e mai confermate: «carreggiata: no»,
   «strada senza marciapiede, come un pedone sul margine», la sezione sull'usato.
4. **Lo scooter lo passa l'ASL?** È fra le domande che Google mostra come correlate e il
   sito non risponde. Senza la risposta di Valentina non si scrive.
5. **Il peso**: corretto a 116/100 kg come dice il manuale. Se Valentina tira fuori un
   documento Veleco con 133/117 (peso con imballo?), si torna indietro.
6. **Il budget pubblicitario**. L'account Google Ads «Concessionario Veleco» è aperto dal
   3/11 e vuoto. Stima di Google con 10 €/giorno: circa 707 clic e 11 contatti al mese, cioè
   due vendite con il rapporto di 2 su 10 che ci ha dato Valentina.

---

## Come si lavora, in breve

- Niente va online senza il via di Maurizio, blocco per blocco.
- Caricamento dalla sessione cloud: API Hostinger (connettore), intestazioni TUS `X-Auth` e
  `X-Auth-Rest`, URL valido circa 6 ore. Prima di sovrascrivere si verifica che i file online
  corrispondano a una versione presente in git; dopo, che online e locale coincidano.
- Dopo ogni caricamento, unire subito il ramo in `main`: altrimenti `git pull` + `carica.sh`
  dal Mac rimette online la versione vecchia.
- Dove le date dei post non coincidono fra i documenti, vale il planner Metricool, fotografato
  in `seo/calendario-metricool.md`.
