# Merchant Center — scheda prodotto Veleco Faster

Aggiornato il 4/11/2026. Account «Concessionario Veleco», sito concessionariovelecoitalia.it.

## Premesse decise

- **Niente «Promozioni» registrate.** Le promozioni di Merchant Center (il bollino «Omaggio»)
  chiedono che il regalo sia confermato nel carrello o alla cassa. Noi non abbiamo carrello,
  quindi quella funzione non ci è accessibile. I tre accessori si scrivono dentro la
  descrizione del prodotto: si vedono lo stesso, senza chiedere niente a Google.
- **Niente tempi di consegna dichiarati.** Dalla fabbrica entro 90 giorni, ma si concordano
  al telefono: non si scrivono né sul sito né nel feed.
- **Tutte e due disponibili** (4/11/2026): un Piombo Gel pronto in magazzino e un Litio in
  arrivo il 5/11. Tutte e due `in stock`, che è l'unico stato che non chiede una *data di
  disponibilità*. **Quando Valentina vende l'ultimo pezzo di una versione, quella torna
  `backorder`** — qui e nei dati della pagina Prezzi.
- **Due prodotti, un gruppo solo**: stesso `item group id`, perché sono due versioni dello
  stesso scooter. Serve anche perché condividono lo stesso codice produttore.

---

## Prodotto 1 — Faster Piombo Gel

| Campo | Valore |
|---|---|
| ID | `faster-piombo` |
| Titolo | Veleco Faster 4 ruote — scooter elettrico per anziani senza patente, batteria piombo gel |
| Descrizione | vedi sotto |
| Link | `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/#piombo` |
| Link immagine | `https://concessionariovelecoitalia.it/assets/post-google/foto/veleco-faster.jpg` |
| Immagini aggiuntive | `…/veleco-faster-hero.jpg` · `…/veleco-faster-showroom.jpg` |
| Condizione | Nuovo |
| Disponibilità | In stock |
| Prezzo | 2200.00 EUR |
| Marca | Veleco |
| Codice produttore (MPN) | FASTER-PB |
| GTIN | *vuoto. NON «identificatore esistente = no»: abbiamo marca e MPN — vedi la nota qui sotto* |
| Gruppo di prodotti | `veleco-faster` |
| Categoria Google | Salute e bellezza > Assistenza sanitaria > Mobilità e accessibilità > Scooter per la mobilità |
| Tipo di prodotto | Scooter elettrici > Scooter per anziani > Veleco Faster |
| Spedizione | Italia — 0.00 EUR |
| Paese di vendita | IT |

**Descrizione (da incollare così):**

> Scooter elettrico a quattro ruote per anziani e per chi cammina con fatica. Si guida senza patente, senza assicurazione e senza casco: è un dispositivo medico di Classe 1 CE.
>
> Autonomia 45-60 km con una carica. Portata 160 kg. Velocità 12 km/h, regolabile. Supera pendenze fino al 30%. Lunghezza 160 cm, larghezza 67 cm, raggio di sterzata 220 cm, peso 133 kg. Telecomando e allarme di serie.
>
> Batteria al piombo gel: si ricarica direttamente sul mezzo, in circa 8 ore.
>
> Il prezzo è quello che paghi: consegna a casa compresa in tutta Italia continentale fino al 31 dicembre 2026, scooter già montato e collaudato. Fino al 31 dicembre ricevi anche tre accessori originali Veleco in regalo: borsa da bracciolo, supporto per il telefono e copertura impermeabile.
>
> Due anni di garanzia gestiti direttamente da noi, con un numero diretto a cui risponde chi te l'ha venduto. Concessionario ufficiale Veleco per l'Italia, showroom a Genova Nervi: la prova è gratuita.

---

## Prodotto 2 — Faster Litio estraibile

Uguale al primo, tranne:

| Campo | Valore |
|---|---|
| ID | `faster-litio` |
| Titolo | Veleco Faster 4 ruote — scooter elettrico per anziani senza patente, batteria al litio estraibile |
| Link | `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/#litio` |
| Prezzo | 2850.00 EUR |
| Codice produttore (MPN) | FASTER-LI |
| Gruppo di prodotti | `veleco-faster` (lo stesso) |

**Nella descrizione cambia solo il paragrafo della batteria e il peso:**

> …peso 117 kg…
>
> Batteria al litio estraibile: si sgancia dal mezzo e si ricarica in casa, alla presa di corrente. È la scelta di chi vive in condominio o non ha un garage con la presa.

---

## Da chiedere a Valentina

1. **Il codice a barre (GTIN/EAN)** del Faster: è sulla scatola o in fattura. Senza, si dichiara
   il campo vuoto tenendo marca e MPN, e funziona lo stesso, ma con il codice il prodotto si
   aggancia meglio alle ricerche.
2. **Avvisarci quando vende i pezzi pronti.** È l'unica manutenzione che chiede questa scheda:
   finito il magazzino di una versione, quella passa a `backorder`.

## Il messaggio di Natale

In magazzino ci sono **due Faster pronti**: un Piombo Gel a 2.200 € e un Litio a 2.850 €
(in arrivo il 5/11). Con 90 giorni dalla fabbrica, sono **gli unici due che possono arrivare
prima di Natale**. È vero, non costa niente e ha una scadenza sua: quando sono venduti, il
messaggio si spegne da solo. Vale per i post, per la scheda Google e per una riga sulla
pagina Promo.


## GTIN: i tre codici trovati NON sono di Veleco (verificato il 4/11/2026)

Maurizio aveva trovato su eBay e u-buy tre EAN-13 attribuiti al Veleco Faster, distinti per
colore: Rosso `5060463912314`, Blu `5060463912321`, Grigio `5060463912345`. Tutti e tre con
cifra di controllo corretta.

**La verifica sul registro ufficiale GS1 («Verified by GS1») li ha smentiti.** L'ha fatta
Maurizio, perché il sito chiede di accettare le proprie condizioni d'uso:

| | Risultato |
|---|---|
| Chi ha licenziato `5060463912314` | **Lunex Technology Limited** — Unit 9D Shefford Industrial Estate, Shefford SG17 5HQ, Regno Unito. Licenza `506046391`, GS1 UK. Il sito `lunextechnology.co.uk` oggi rimanda a autolamp.com |
| Licenza GS1 di Veleco | **VELECO SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ** — ul. Bernarda Ludwika Hantkego 7, 42-202 Częstochowa, Polonia. Licenza **`59045539942`**, GS1 **Poland**. GLN 5904553994210 |

L'indirizzo polacco è lo stesso che il manuale indica come produttore: è Veleco, senza dubbi.

**Conclusione: quei tre codici appartengono a una società britannica, non a Veleco.** Sono
i codici con cui un rivenditore o importatore inglese ha messo a catalogo lo scooter. Non
sono i GTIN del produttore.

**Perché non vanno usati.** Nel feed dichiariamo marca «Veleco». Google confronta il GTIN
con il registro GS1: troverebbe un codice intestato a Lunex Technology e una marca Veleco,
cioè la non corrispondenza fra identificativo e marca. È precisamente il motivo di rifiuto
che stiamo cercando di togliere di mezzo con il riesame in corso.

**Come si riconosce un GTIN vero di Veleco:** comincia per **`590`** (GS1 Polonia) e
precisamente per uno dei prefissi licenziati a Veleco. Dalla ricerca per nome sul registro
GS1 (Maurizio, 4/11/2026) ne sono emersi tre, tutti con sede in ul. Bernarda Ludwika
Hantkego 7, 42-202 Częstochowa, tutti GS1 Poland:

| Ragione sociale | Licenza GS1 | Lunghezza | Codici possibili | GLN |
|---|---|---|---|---|
| VELECO sp. z o.o. | `5905525308` | 10 cifre | 100 | 5904553994210 |
| VELECO sp. z o.o. | `59045539942` | 11 cifre | 10 | 5904553994210 |
| VELECO Jakub Marek | `59054136526` | 11 cifre | 10 | 5909000836716 |

«VELECO Jakub Marek» è la ditta individuale, stessa sede: probabilmente la forma originaria
dell'attività, con le licenze più vecchie rimaste intestate lì. Il prefisso più capiente è
`5905525308`, che da solo permette cento articoli: è il candidato più probabile per la gamma
di scooter.

La ricerca restituisce **7 voci** in tutto per «veleco»: quattro non sono state aperte, quindi
potrebbero esserci altri prefissi. Per il nostro scopo basta la regola del `590`.

**Il GLN non è un GTIN.** `5904553994210` (cifra di controllo corretta) identifica azienda e
sede, non l'articolo: serve in fatture, documenti di trasporto e scambi EDI. Nel campo GTIN
di Merchant Center non si può usare.

**Domanda per Valentina:** *«Sulla scatola del Faster c'è un'etichetta con un codice a barre
e 13 cifre sotto. Me le mandi, per il piombo gel e per il litio?»* Lo scooter di Valentina arriva dalla
Polonia, quindi l'etichetta dovrebbe portare un codice che comincia per `590`, e in
particolare per uno dei tre prefissi della tabella qui sopra. Se comincia per `5060463` è
l'etichetta dell'importatore inglese e non ci serve.

Resta poi da capire, se il codice arriva, se Veleco ne assegna uno diverso per le due
batterie: i nostri due prodotti a feed si distinguono per quello, e due prodotti con prezzi
diversi non possono portare lo stesso GTIN.


## Il GTIN si può lasciare vuoto (deciso il 4/11/2026)

**Sì, e non è quello che ci blocca.** I due prodotti sono «Non approvati» per l'immagine in
elaborazione e per «il sito o il negozio online deve essere migliorato»: nessuno dei due
avvisi parla di identificativi. Il GTIN non c'entra con il riesame in corso.

Google chiede il GTIN **solo se il produttore ne ha assegnato uno** e noi lo conosciamo.
Non conoscendolo, la scheda resta valida.

**Come va configurato, però, non è come avevo scritto prima.** `identifier_exists = no` è
per i prodotti che non hanno **né GTIN né MPN né marca**. Il nostro ha marca («Veleco») e un
MPN, quindi la configurazione giusta è:

- **GTIN**: vuoto
- **Marca**: `Veleco`
- **MPN**: `FASTER-PB` / `FASTER-LI`
- **`identifier_exists`**: *non impostarlo a «no»*

Mettere «no» avendo marca e MPN è dichiarare il falso a Google e può generare un avviso di
identificativo incoerente — l'opposto di quello che vogliamo adesso.

**Nota onesta sull'MPN**: `FASTER-PB` e `FASTER-LI` li abbiamo inventati noi, non sono codici
di Veleco (il manuale non riporta nessun codice articolo, solo il numero di serie, diverso per
ogni pezzo). Google non verifica gli MPN contro un registro esterno come fa con i GTIN, quindi
il rischio è basso ed è una pratica diffusa fra i rivenditori. Se Veleco dà un codice articolo
vero, si sostituisce.

**Cosa si perde senza GTIN**: il prodotto si aggancia peggio al catalogo di Google, quindi
niente pagina di prodotto condivisa, niente recensioni aggregate, confronto prezzi più debole
e in generale un po' meno visibilità. Per un concessionario che vende un modello di nicchia a
2.200 € la perdita è contenuta: non vale il rischio di un identificativo sbagliato.

**Conclusione operativa**: si va avanti senza GTIN. Se un giorno arriva il codice dall'etichetta
di Valentina, si aggiunge e si guadagna qualcosa. Non è una porta chiusa.
