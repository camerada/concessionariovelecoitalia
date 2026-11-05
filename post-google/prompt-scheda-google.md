# Prompt per Claude in Chrome — riempire la scheda Google

Preparato il 5/11/2026. I contenuti vengono da `post-google/scheda-google.md`.

**Si lavora in cinque sedute, una per blocco.** Si incolla una seduta per volta, si guarda il
risultato e si passa alla successiva. Tutto in una volta no: la scheda Google salva campo per
campo, e se qualcosa va storto a metà non si capisce dove.

**Le foto sono già sul Mac**, scaricate il 5/11/2026 in **`~/Downloads/veleco-foto`**: tutte
e 16, con il nome che trovi indicato in ogni prodotto. Google chiede di caricare il file e non
accetta un indirizzo, per questo stanno lì.

Ne esiste anche una copia vuota di destinazione su Drive, in *1 -Siti-Funnel › easyscooter
veleco › concessionariovelecoitalia › Foto scheda Google*, se un giorno servisse averle anche
lì: https://drive.google.com/drive/folders/12QsU0yLiQVPB6KdCYxoaGbt7K_4NvqzV

Se servisse riscaricarle, gli indirizzi originali sono questi:

```
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-faster.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-gravis.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-sharpy.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-looper.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-jumpy.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-draco.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-turris.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-cristal.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-zt15.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-zt63.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-zt16.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-cosmo.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-faster-showroom.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/accessorio-borsa-bracciolo.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/accessorio-supporto-telefono.jpg
https://concessionariovelecoitalia.it/assets/post-google/foto/accessorio-copertura-impermeabile.jpg
```

Scorciatoia per rifarlo da capo, dal Terminale:

```bash
mkdir -p ~/Downloads/veleco-foto && cd ~/Downloads/veleco-foto && for f in veleco-faster veleco-faster-showroom veleco-gravis veleco-sharpy veleco-looper veleco-jumpy veleco-draco veleco-turris veleco-cristal veleco-zt15 veleco-zt63 veleco-zt16 veleco-cosmo accessorio-borsa-bracciolo accessorio-supporto-telefono accessorio-copertura-impermeabile; do curl -sO "https://concessionariovelecoitalia.it/assets/post-google/foto/$f.jpg"; done
```

Se Claude in Chrome non riesce ad aprire la finestra di scelta del file — è una finestra del
sistema, fuori dalla pagina — la foto la carichi tu a mano e lui fa il resto.

---

## Regole che valgono per tutte le sedute

Incollare questo blocco in testa a ogni seduta.

```
Stiamo riempiendo la scheda Google Business «Concessionario Veleco Italia Distributore
Ufficiale» (Genova Nervi), dal pannello del profilo. Sei tu a compilare i campi, io guardo.

Regole, valgono sempre:
- Usa SOLO i testi che ti do qui sotto. Non riscriverli, non accorciarli, non aggiungere
  niente di tuo: sono stati controllati uno per uno contro il sito.
- Se un campo è già compilato con qualcosa di diverso, NON sovrascrivere: fermati, dimmi
  cosa c'è scritto adesso e cosa dovrebbe esserci, e aspetta la mia risposta.
- Se un campo, una sezione o un'opzione non esiste o si chiama diversamente da come te la
  descrivo, non cercare un equivalente: fermati e dimmelo.
- Non toccare niente che non sia in questo elenco. In particolare non cambiare nome,
  indirizzo, telefono, orari e sito: sono già giusti.
- Le foto sono sul computer, nella cartella ~/Downloads/veleco-foto: quando ti indico il
  nome di un file, è lì dentro.
- Salva dopo ogni voce, non alla fine di tutte.
- Alla fine della seduta fammi l'elenco di cosa hai inserito, cosa hai saltato e perché.
```

---

## Seduta 1 — Categorie e descrizione

```
Apri il pannello della scheda Google dell'attività «Concessionario Veleco Italia
Distributore Ufficiale».

1) CATEGORIE
Categoria principale: «Fornitore di ausili per la mobilità».
Categorie secondarie: «Fornitore di attrezzature mediche» e «Concessionario scooter».
Non mettere «Concessionaria di veicoli elettrici».
Se la principale è già impostata su qualcos'altro, fermati e dimmi quale.

2) DESCRIZIONE DELL'ATTIVITÀ
Incolla esattamente questo testo (676 caratteri, il limite è 750):

Concessionario ufficiale Veleco per l'Italia, a Genova Nervi. Vendiamo scooter elettrici a 3 e 4 ruote per anziani e per chi cammina con fatica: il Veleco Faster, il più scelto, da 2.200 €. Dispositivo medico CE: si guida senza patente, senza bollo e senza assicurazione obbligatoria, su marciapiedi e aree pedonali. Con i requisiti, IVA al 4% e detrazione del 19%: verifichiamo insieme prima dell'ordine. Prova gratuita nello showroom di Via Giuseppe Pessale 20r, consegna a casa in tutta Italia continentale, già montato. Garanzia 2 anni gestita da noi, ricambi originali in Italia e un numero diretto a cui risponde chi ti ha venduto lo scooter. Da martedì a sabato, 10-20.
```

---

## Seduta 2 — Servizi

```
Vai nella sezione «Servizi» della scheda. Crea i servizi qui sotto, uno per volta, con il
nome, il prezzo dove indicato e la descrizione. Dove scrivo «Gratis» metti il prezzo a zero
o l'opzione gratuita, se Google la offre; se non la offre lascia il prezzo vuoto.
Se Google chiede di scegliere un gruppo, usa quelli che ti indico in maiuscolo.

VENDITA
- Scooter elettrici per anziani Veleco · da 2.200 € · Tutta la gamma Veleco a 3 e 4 ruote, con o senza tetto, batteria al piombo gel o al litio estraibile. Rivenditore ufficiale: mezzi originali con garanzia gestita in Italia.
- Consulenza sulla scelta del modello · Gratis · Al telefono, su WhatsApp o in showroom: ti aiutiamo a scegliere in base a dove abiti (salite, condominio, garage con presa), a chi lo userà e a come vuoi ricaricarlo.
- Prova gratuita in showroom · Gratis · A Genova Nervi, su appuntamento: dieci minuti per capire se si sale e scende con comodità e se i comandi sono alla portata della mano.
- Verifica dei requisiti per l'IVA al 4% · Gratis · Con verbale di invalidità civile, Legge 104 o certificazione ASL sulla difficoltà a camminare, l'IVA scende dal 22% al 4% e la spesa si detrae al 19%. Controlliamo i requisiti e applichiamo l'IVA agevolata in fattura.

CONSEGNA
- Consegna a domicilio in tutta Italia · Lo scooter arriva a casa già montato, in tutta Italia continentale; Sicilia e Sardegna caso per caso. Prima di ordinare ti diciamo peso e misure esatte, per cancello, ascensore e porta del garage.
- Ritiro in showroom a Genova · Gratis · Consegna in negozio con spiegazione dei comandi e della ricarica.

ASSISTENZA
- Assistenza post-vendita · Numero diretto 328 975 4412: risponde chi conosce il tuo scooter. Nessun centralino, nessun ticket.
- Garanzia 2 anni gestita da noi · Compresa · Garanzia ufficiale Veleco gestita direttamente dal concessionario.
- Ricambi originali Veleco · Ricambi per tutti i modelli della gamma, ordinati direttamente da noi in Italia.
- Accessori Veleco · Borsa sul bracciolo, supporto per il telefono, copertura impermeabile fino a terra.
```

---

## Seduta 3 — Prodotti: i due Faster

Questi due sono i più importanti: hanno un prezzo e portano alla pagina Prezzi, la stessa
che usa Merchant Center. Si fanno da soli, per controllare bene com'è venuto il primo.

```
Vai nella sezione «Prodotti». Crea la categoria di prodotto «Scooter a 4 ruote» se non
c'è, poi inserisci questi due prodotti. Per ognuno: nome, categoria, prezzo, descrizione,
foto (te la carico io se non riesci ad aprire la finestra dei file) e pulsante «Scopri di
più» con il link.

PRODOTTO 1
Nome: Veleco Faster, batteria Piombo Gel
Categoria: Scooter a 4 ruote
Prezzo: 2200 EUR
Foto: veleco-faster.jpg
Link del pulsante: https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/#piombo
Descrizione:
Il più scelto. Quattro ruote stabili, sospensioni complete, sale pendenze fino al 30%, porta fino a 160 kg, 45-60 km con una carica, 12 km/h. Si ricarica direttamente sul mezzo: ideale se hai un garage o un box con una presa. Disponibile anche con tetto e parabrezza. Dispositivo medico CE: senza patente, senza bollo, assicurazione non obbligatoria. Con i requisiti IVA al 4% e detrazione del 19%.

PRODOTTO 2
Nome: Veleco Faster, batteria Litio estraibile
Categoria: Scooter a 4 ruote
Prezzo: 2850 EUR
Foto: veleco-faster-showroom.jpg
Link del pulsante: https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/#litio
Descrizione:
Lo stesso Faster con la batteria al litio che si stacca e si porta in casa a ricaricare, anche in salotto: ideale se vivi in condominio e non hai una presa vicino a dove lo lasci. Quattro ruote, sospensioni complete, 45-60 km di autonomia, 160 kg di portata. Con i requisiti IVA al 4% e detrazione del 19%.

Quando hai finito, fammi vedere come sono venuti prima di andare avanti.
```

---

## Seduta 4 — Prodotti: il resto della gamma

Tredici voci. Tutte senza prezzo: sul sito non ce l'hanno, e inventarlo non si fa. Se Google
obbliga a mettere un prezzo, fermarsi e chiedere.

```
Continuiamo con i Prodotti. Crea le categorie «Scooter a 3 ruote», «Pieghevoli e
carrozzine» e «Accessori» se non ci sono. Tutti questi prodotti NON hanno prezzo: lascia il
campo vuoto, o usa «Prezzo su richiesta» se Google lo permette. Se Google obbliga a inserire
un prezzo, fermati e dimmelo: non inventarlo.
Il pulsante «Scopri di più» di tutti porta a https://concessionariovelecoitalia.it/modelli-veleco/
tranne dove scrivo diversamente. La foto è il file con il nome che ti indico.

SCOOTER A 4 RUOTE
- Veleco Gravis · foto veleco-gravis.jpg · Il 4 ruote più robusto della gamma: motore da 1000 W, sedile comodo e luci LED ben visibili anche di sera. Autonomia 45-60 km, portata 160 kg, 12 km/h. Disponibile anche con tetto e parabrezza.
- Veleco Sharpy · foto veleco-sharpy.jpg · Sedile girevole con poggiatesta, sospensioni complete e la portata più alta della gamma: fino a 200 kg. Autonomia 50 km, 15 km/h.
- Veleco Looper · foto veleco-looper.jpg · Taglia media, sedile girevole per salire e scendere con facilità, cestino anteriore removibile. Autonomia 45 km, portata 180 kg, 12 km/h.
- Veleco Jumpy · foto veleco-jumpy.jpg · Compatto e agile, gira in 119 cm: comodo in città e nei passaggi stretti. Autonomia 40 km, portata 160 kg, 10 km/h.

SCOOTER A 3 RUOTE
- Veleco Draco · foto veleco-draco.jpg · Si accelera con un pulsante invece della manopola: pensato per chi fa fatica a girare il polso. Autonomia 45-50 km, portata 160 kg, 12 km/h, batteria piombo o litio. Disponibile anche con tetto e parabrezza.
- Veleco Turris · foto veleco-turris.jpg · Acceleratore a pulsante, ruotine antiribaltamento e bauletto capiente con serratura. Autonomia 45-50 km, portata 160 kg, 12 km/h. Disponibile anche con tetto e parabrezza.
- Veleco Cristal · foto veleco-cristal.jpg · Motore da 1000 W e sospensioni complete: il 3 ruote per strade irregolari e salite. Autonomia 40-60 km, portata 160 kg, 12 km/h.
- Veleco ZT15 · foto veleco-zt15.jpg · Uno dei primi modelli Veleco, semplice da usare: adatto a chi guida uno scooter per la prima volta. Autonomia 45-60 km, portata 160 kg, 12 km/h, cestino posteriore.
- Veleco ZT63 · foto veleco-zt63.jpg · Linea retrò in stile scooter italiano, per chi vuole un mezzo che non sembri un ausilio. Autonomia 40-60 km, portata 199 kg, 12 km/h.

PIEGHEVOLI E CARROZZINE
- Veleco ZT16 · foto veleco-zt16.jpg · Il più leggero della gamma, 51 kg, con manubrio pieghevole e cestino: ideale per la spesa e i giri brevi, entra in auto. Autonomia 25-30 km.
- Veleco Cosmo, carrozzina elettrica pieghevole · foto veleco-cosmo.jpg · Si piega e pesa 30 kg: la soluzione per chi deve portarla in auto o in treno.

ACCESSORI
- Borsa sul bracciolo Veleco · foto accessorio-borsa-bracciolo.jpg · Si aggancia al bracciolo: documenti, telefono e piccoli acquisti a portata di mano.
- Supporto per il telefono Veleco · foto accessorio-supporto-telefono.jpg · Il telefono sempre visibile sul manubrio.
- Copertura impermeabile Veleco · foto accessorio-copertura-impermeabile.jpg · Copre lo scooter fino a terra, con elastico e cinghia con fibbia: resta ferma anche col vento. Pioggia, neve e umidità della notte restano fuori.
```

---

## Seduta 5 — Attributi e domande

```
Due cose.

1) ATTRIBUTI
Spunta questi, ma SOLO fra quelli che Google propone davvero; se uno non c'è, saltalo e
dimmelo.
- Accessibilità: ingresso accessibile in sedia a rotelle
- Servizi: consegna · ritiro in negozio · acquisti in negozio · appuntamento consigliato
- Pianificazione: NON attivare gli appuntamenti online (si prenota per telefono o WhatsApp)
Non spuntare «Attività gestita da donne»: su quello serve il consenso della titolare.

2) DOMANDE E RISPOSTE
Nella sezione «Domande e risposte» inserisci queste sei domande con la relativa risposta.
Le inserisce il proprietario dell'attività, quindi vanno poste e risposte dallo stesso
account.

- Serve la patente?
No. Lo scooter è un dispositivo medico di Classe 1 CE: circola come un pedone (art. 46 e 190 del Codice della Strada), senza patente, targa, bollo o revisione. L'assicurazione non è obbligatoria.

- Quanto costa il Veleco Faster?
2.200 € con batteria Piombo Gel, 2.850 € con batteria al Litio estraibile. Con i requisiti per l'IVA al 4% il prezzo scende, e la detrazione del 19% si aggiunge.

- Consegnate fuori Genova?
Sì, in tutta Italia continentale, già montato. Sicilia e Sardegna caso per caso.

- Si può provare prima di comprare?
Sì, gratis, nello showroom di Genova Nervi in Via Giuseppe Pessale 20r, su appuntamento al 328 975 4412.

- Quanta strada fa con una carica?
Il Faster 45-60 km. D'inverno, in salita e con più peso l'autonomia scende: conviene scegliere un'autonomia doppia rispetto al giro più lungo.

- Chi fa l'assistenza?
Noi: numero diretto, garanzia di 2 anni gestita dal concessionario e ricambi originali in Italia.
```

---

## Dopo

Quando le cinque sedute sono finite, segnarlo qui e in `DA-FARE-ADESSO.md`. Da ricontrollare
dopo qualche giorno: Google a volte mette in revisione descrizione e prodotti, e qualcosa può
tornare indietro senza avvisare.

Una cosa che resta aperta: i prezzi «su richiesta». Se Valentina dà i prezzi degli altri
modelli, si mettono e le schede rendono molto di più — un prodotto con il prezzo si fa
guardare, uno senza no.
