# Veleco: cose da fare

Copia nel repo del doc «Veleco: cose da fare» (https://claude.ai/artifact/RbCKpSrnekSMHNBMbK8PtK), stato al 3/11/2026 sera, con le note di Maurizio.
Elenco delle cose approvate il 3 novembre, nell'ordine in cui si fanno. Niente parte senza il via: ogni blocco ha la sua casella.

## Ordine di esecuzione

Prima il sito, poi i post, poi la scheda Google. I post promettono consegna compresa e accessorio in regalo: il sito deve dirlo prima che esca il primo post.

| # | Blocco | Quando | Via libera |
|---|---|---|---|
| 1 | Sito, subito: recensioni, Francesca, banner e pagina Promo | 4–5 novembre | [ ] |
| 2 | Post: riscrittura dei 34 già programmati | 4–5 novembre (il primo esce giovedì 5/11 alle 10) | [ ] |
| 3 | Scheda Google: risposta a Francesca, prodotti | 4–6 novembre | [ ] |
| 4 | Pagine nuove: Promo, Prezzi e Senza patente | Promo subito; le altre entro il 17 novembre | [ ] |
| 5 | Titoli e link: Chi siamo, Modelli, home, piè | con le pagine nuove | [ ] |
| 6 | Merchant Center: Faster nei Negozi | dopo la pagina Prezzi | [ ] |
| 7 | Blog: un articolo a settimana | dal 20 novembre | [ ] |
| 8 | Report di novembre | 1–2 dicembre | approvato |

Se il blocco 1 non va online entro mercoledì 5, il post di giovedì va messo in bozza.

## 1. Sito, subito

Prima di giovedì 5 novembre. Si caricano via API Hostinger in un colpo solo, con copia dei file sostituiti.

- **Recensioni a 9.** Sospeso: la sera del 3 novembre la recensione di Francesca non compare più su Google (filtro di Google o cancellata da lei), quindi il conteggio resta 8. Si passa a 9 solo se ricompare.
- **Francesca Mazzarello in evidenza.** Sospeso per lo stesso motivo: entra tra le quattro schede di home e regionali (al posto di Asia Capello) e nei dati strutturati solo quando la recensione torna visibile. Testo: «Ho acquistato un Veleco Faster e la consegna è stata rapida, e i consigli della titolare hanno fatto sì che anche a distanza la scelta sia stata quella giusta.»
- **Promo «consegna compresa nel prezzo» come banner rimovibile.** Non si riscrivono i testi fissi del sito: si aggiunge una fascia sotto la testata, con il testo e una X per chiuderla, in un file a parte (promo.js) richiamato da tutte le pagine. Per toglierla a fine promo basta svuotare quel file. Testo proposto: «Fino al 31 dicembre: consegna a casa compresa nel prezzo e un accessorio Veleco in regalo con ogni Faster. Scopri il regalo della settimana.» con link alla pagina Promo del sito, non alla scheda Google.
- **Accessorio in regalo nella stessa fascia.** Un solo banner per le due promo; il regalo della settimana cambia nei post e nella pagina Promo.

Restano come sono: le condizioni di vendita e le frasi «tempi e costi si concordano» nelle pagine, perché la consegna compresa è un'offerta a termine, non una regola.

## 2. Sito, pagine nuove e titoli

Entro il 17 novembre (la Promo subito). Ogni pagina nuova: titolo e H1 con la frase cercata, descrizione sotto i 155 caratteri, cinque FAQ con dati strutturati, tre link in entrata e tre in uscita, sitemap e richiesta di scansione.

| Cosa | Frase cercata | Ricerche al mese |
|---|---|---|
| Pagina **Promo** (/promo/): le due offerte in chiaro, i tre accessori con foto e il regalo della settimana in evidenza, i prezzi del Faster, il numero. È la pagina a cui portano banner e post; a fine promo si toglie dal menu | — | — |
| Pagina **Prezzi**: «Scooter elettrico per anziani: prezzi 2026 e cosa è incluso» | scooter elettrico per anziani prezzi | 500 |
| Pagina **Senza patente**: «Scooter elettrico senza patente per anziani: come funziona» | scooter elettrico senza patente per anziani | 500 |
| **Chi siamo**: titolo «Chi siamo \| Valentina Colomba, concessionaria Veleco a Genova» | scooter elettrico genova | 500 |
| **Modelli**: «Mobility scooter è il nome inglese di questi mezzi»; richiesta di scansione | mobility scooter | 500 |
| **Home**: la frase «scooter elettrico 4 ruote per anziani»; link alle pagine nuove | scooter elettrico 4 ruote per anziani | 50 |
| **Piè di tutte le pagine**: link «Prezzi», «Senza patente», «Promo» finché dura | — | — |

FAQ Prezzi: quanto costa, differenza fra 2.200 e 2.850, cosa è compreso, perché più di Amazon, quanto costano gli altri modelli. FAQ Senza patente: serve la patente, bollo e assicurazione, dove si può guidare, chi può guidarlo, è come un motorino elettrico senza patente.

## 3. Blog, un articolo a settimana

Il giovedì, dal 20 novembre, in `/guida/`, 800–1.200 parole, solo fatti del sito o confermati da Valentina, FAQ in fondo, link al Faster e alla pagina Prezzi. Il post del giovedì rilancia l'articolo.

| Data | Titolo | Frase cercata |
|---|---|---|
| 20 nov | Scooter elettrico per anziani: normativa e Codice della Strada | normativa, codice della strada |
| 27 nov | Quanta autonomia ha uno scooter elettrico per anziani (in giorni) | autonomia scooter elettrico per anziani |
| 4 dic | Scooter per disabili: chi può guidarlo e serve la patente? | scooter per disabili (5.000) |
| 11 dic | Mobility scooter: cosa sono e quali modelli esistono | mobility scooter (500) |
| 18 dic | Scooter elettrico per anziani coperto: uscire anche quando piove | coperto, con tetto |
| 8 gen | La batteria in salotto: lo scooter elettrico per chi vive in condominio | litio estraibile |
| 15 gen | Scooter elettrico per anziani: nuovo o usato? | usato (500) |
| 22 gen | Quanto costa restare a casa | beneficio |

Lingua: frasi corte, «tu», immagini concrete, una sola idea per paragrafo, il risultato che ottieni e mai il difetto da evitare.

**Stato all'8/11/2026** (deciso da Maurizio: per i calendari vale questo file, non
`piano-operativo.md`). I primi **cinque** articoli sono già online in `/guida/`, pubblicati
in anticipo sulle date qui sopra: normativa, autonomia, scooter per disabili, mobility
scooter, coperto. Restano da scrivere i **tre di gennaio**: la batteria in salotto (8/1),
nuovo o usato (15/1), quanto costa restare a casa (22/1). I post del giovedì che
rilanciano un articolo vanno riletti con le date vere, non con quelle previste.

## 4. Post Google e Instagram

Tre uscite a settimana per canale fino al 31 dicembre, Faster al centro, benefici prima delle caratteristiche. I 34 post già nel planner di Metricool vengono riscritti con questo schema.

| Giorno | Scheda Google (ore 10) | Instagram (ore 12) |
|---|---|---|
| Martedì | **Lo dice chi l'ha comprato**: una delle 9 recensioni, due righe di Valentina, rimando alla pagina Promo. Nove martedì fino al 29 dicembre | Post nel feed con la recensione sull'immagine |
| Giovedì | Un beneficio del Faster; quando c'è l'articolo, il post lo rilancia | Post nel feed, stessa immagine, testo corto |
| Sabato | Il regalo della settimana: foto dell'accessorio e il beneficio che porta, link alla pagina Promo | Reel con le foto che abbiamo |

Giro dei regali: borsa da bracciolo 5–15/11, supporto per il telefono 16–29/11, copertura impermeabile 30/11–13/12, «scegli tu» 14–31/12. A cavallo di due settimane decide il cliente.

Benefici del giovedì: torni a uscire da solo · quattro ruote a terra, non cadi · chi ti vuole bene dorme tranquillo · niente patente, bollo, assicurazione · arriva a casa già montato, consegna compresa · prezzo chiaro, 2.200 € tutto compreso · le salite non ti fermano · una settimana di giri con una carica · la batteria la ricarichi in salotto · esci anche quando piove · se qualcosa non va risponde Valentina · «anche a distanza la scelta è stata quella giusta» · quanto costa restare a casa · perché non su Amazon · provalo, se passi da Genova (una sola volta) · regala un'uscita a Natale.

Fuori: la notizia della settimana, lo showroom, la rassegna dei modelli (resta il Gravis con tetto), le storie. I link dei post portano alla pagina Promo finché dura l'offerta, poi alla pagina Prezzi.

## 5. Scheda Google e Merchant Center

- **Risposte alle recensioni**: fatto il 3/11 con Claude in Chrome, 6 riscritte (Gemma, Lucifero, Emiliana, Stefania, Asia, La Guerriera di Polaris), Roberto e Andrea lasciate. Francesca in attesa che la recensione ricompaia; testo pronto in `recensioni/google-2026-11-03.md`.
- **Sezione Prodotti della scheda**, con Claude in Chrome: Faster Piombo Gel 2.200 € e Litio 2.850 €, foto, descrizione, link; gli altri modelli senza prezzo. Testi in `post-google/scheda-google.md`.
- **Merchant Center**, dopo la pagina Prezzi: stesso Google della scheda, sito già verificato, due prodotti Faster con link alla pagina Prezzi, spedizione gratuita, resi 14 giorni, promozione «accessorio in regalo» fino al 31/12. Controllo di Google 3–5 giorni, costo zero.

## 6. Cosa serve da Maurizio e cosa resta fuori

Il via a ogni blocco; la scelta fra «post programmati» e «tutti in bozza» fino alla riscrittura; i video per i reel quando ci sono.

Fuori, per scelta: le condizioni di vendita, la notizia del martedì e le storie, il link da veleco.it, la risposta sull'ASL, i reel con video.

Misura (approvato): report a fine novembre e fine dicembre con `report/strumenti/dati-google.py`, confronto sulle sette frasi chiave e sui contatti dal sito. Prima verifica vera delle posizioni a fine gennaio.
