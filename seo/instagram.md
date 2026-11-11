# Instagram — stato e proposta (4/11/2026)

## Com'è messo il profilo oggi

`@easyscooter_scooterelettrici`, collegato a Metricool nel brand «Concessionario Veleco»
(id 7853509). Numeri letti da Metricool sul periodo 5/8 → 4/11/2026:

| | |
|---|---|
| Follower | **656** (erano 659 il 26/10) |
| Contenuti pubblicati in 3 mesi | **nessuno** |
| Copertura | 0-5 persone al giorno |
| Interazioni | praticamente zero: due giorni con 1 |
| Follower guadagnati / persi | 0 guadagnati, circa 1 perso ogni due giorni |

**Il profilo non è messo male: è fermo.** Non pubblica da mesi, non raggiunge nessuno e
perde lentamente seguaci. Questo è un fatto importante per la decisione: non c'è nessuno
slancio da proteggere, quindi cambiarlo adesso non costa niente.

## Il problema vero

Non è che la bio sia scritta male. È che **il profilo è di un'altra attività**.

- Si chiama «Easyscooter», che è il nome dell'azienda (EasyScooter di Valentina Colomba),
  non del prodotto che vendiamo.
- Il link in bio porta a **easyscootergenova.it**, che è il sito del **noleggio** di scooter
  a Genova: titolo «Noleggio Scooter Genova - Easyscooter Scooter Elettrici».
- La bio apre con **«NOLEGGIO»**.
- I 656 follower vengono quasi certamente da lì: gente di Genova e turisti interessati a
  noleggiare un mezzo, non famiglie che cercano uno scooter a 2.200 € per un genitore che
  cammina con fatica.

Intanto dal **5 novembre** su questo profilo cominciano a uscire 17 post Veleco programmati
su Metricool. Cioè: contenuti da concessionario su un profilo da noleggio.

## Decisione: si converte (Maurizio, 4/11/2026)

Il profilo diventa quello del concessionario Veleco. Si tengono i 656 follower, si cambiano
nome, bio, link e impostazioni. Il noleggio non occupa più questo profilo.

**Scadenza: entro domani 5/11 alle 12:00.** A quell'ora esce il primo post Instagram del
calendario e dice «Link in bio»: il link deve già puntare al sito giusto, altrimenti manda
la gente sul sito del noleggio.

## Da incollare nel profilo

### Nome (il campo «Nome», non l'@) — massimo 30 caratteri
È il campo su cui Instagram fa la ricerca: oggi dice «Easyscooter», che nessuno cerca.

```
Scooter per anziani · Veleco
```
28 caratteri. Mette davanti la frase che la gente cerca e tiene la marca. Alternativa se si
preferisce la marca davanti: `Veleco Italia · per anziani` (27).

### Bio — massimo 150 caratteri
```
Concessionario ufficiale Veleco Italia
Scooter elettrici 4 ruote per anziani
Showroom Genova Nervi · prova gratuita
📞 328 975 4412
```
132 caratteri. Via «NOLEGGIO» dalla prima riga: la prima riga è quella che si legge sempre.

### Link in bio
Con gli UTM, così le visite da Instagram si distinguono in Analytics (verificato il 5/11:
risponde 200, nessun redirect, i parametri arrivano interi):
```
https://concessionariovelecoitalia.it/promo/?utm_source=instagram&utm_medium=bio&utm_campaign=promo-nov-dic-2026
```
Dal 1° gennaio:
```
https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/?utm_source=instagram&utm_medium=bio&utm_campaign=prezzi
```
Il titolo del link copre l'indirizzo, quindi la bio non si imbruttisce. Da ricordare quando si
leggeranno i numeri: GA4 vede circa metà delle visite reali (chi rifiuta i cookie non c'è), e
prima di fine novembre non c'è niente da leggere — il profilo è stato convertito il 4/11.
Fino al 31 dicembre, perché è la pagina della promozione.

**Titolo del link** (il campo che sostituisce l'URL nudo; è corto, intorno ai 30 caratteri,
e l'app indica il limite mentre si scrive):
```
Promo fino al 31 dicembre
```
25 caratteri. Concreto e con la scadenza dentro: chi lo legge a metà dicembre sa che sta per
finire. Alternative: `Consegna e 3 accessori inclusi` (30 esatti, al limite) oppure
`Prezzi, promo e contatti` (24, più generico ma non scade).

Da evitare «Sito ufficiale» o «Scopri di più»: occupano lo spazio senza dire niente, e chi
arriva da un post che parla di tre accessori in regalo si aspetta di ritrovarli.

**Secondo link: WhatsApp** (8/11/2026, chiesto da Maurizio). Instagram accetta fino a 5 link
in bio: il sito resta il primo, perché i post dicono «Link in bio» e intendono la promo, e
WhatsApp va subito sotto.
```
https://wa.me/393289754412?text=Ciao%20Valentina%2C%20ho%20visto%20Instagram%20e%20vorrei%20informazioni%20sul%20Veleco%20Faster
```
Titolo: `Scrivi su WhatsApp` (18 caratteri). Il numero va con il prefisso `39` e senza spazi:
senza, il link è rotto fuori dall'Italia (era l'errore trovato sulla scheda Google il 5/11).
Gli UTM su `wa.me` non servono: non è il nostro sito e in GA4 non arriva niente. Il messaggio
precompilato dice «ho visto Instagram» ed è l'unico modo per riconoscere da dove arriva il
contatto. Dal 1° gennaio cambia solo il primo link, questo resta.

**Dal 1° gennaio** il link si sposta su `/scooter-elettrico-anziani-prezzi/` e il titolo
cambia insieme, altrimenti promette una promozione finita:
```
Prezzi del Veleco Faster
```

### Resto del profilo
- **Categoria**: «Negozio di articoli medicali» o «Concessionario» (non «Noleggio»).
- **Pulsanti di contatto**: telefono `328 975 4412` e WhatsApp sullo stesso numero — sono i
  due canali da cui arrivano i contatti veri (37 clic telefono e 30 WhatsApp in 3 mesi).
- **Indirizzo**: Via Giuseppe Pessale 20r, Genova Nervi, così compare la mappa.
- **Foto profilo**: il logo Veleco Italia, in `public_html/assets/post-google/foto/`.

### Sul nome utente (@) — da fare dopo, e con calma
`@easyscooter_scooterelettrici` non contiene «veleco», quindi chi cerca la marca non lo
trova. Cambiarlo aiuta, ma è l'unica modifica con un rischio: i link già in giro verso il
vecchio @ si rompono, e il collegamento con Metricool va riverificato subito dopo, perché i
post programmati passano da lì.

**Quindi si fa in un secondo momento, non insieme al resto**, e non prima che il calendario
di novembre sia partito. Candidati in ordine di preferenza: `velecoitalia`, `veleco_italia`,
`velecoitalia.genova`. Se sono liberi si vede solo dall'app: scrivendoli nel campo, Instagram
dice subito se sono presi (da fuori non è verificabile, Instagram rimanda al login).

### Ordine delle operazioni
1. **Subito, entro domani alle 12**: nome, bio, link, categoria, pulsanti, indirizzo, foto.
   Sono tutte modifiche immediate e reversibili, e non toccano il collegamento con Metricool.
2. **Dopo**: controllare in Metricool che il brand 7853509 risulti ancora collegato e che i
   post programmati siano intatti.
3. **Più avanti, a calendario avviato**: l'eventuale cambio di @, con la riverifica del
   collegamento Metricool subito dopo.

### I post vecchi del noleggio
Restano nel feed e raccontano un'altra attività. Si possono **archiviare** (si nascondono dal
profilo ma non si perdono, e si ripristinano quando si vuole) senza toccare i follower.
Consiglio: archiviare quelli esplicitamente sul noleggio, tenere quelli che mostrano mezzi e
showroom, che reggono anche adesso. È materiale di Valentina: decide lei quanto indietro
andare.

## Cosa non posso fare io

Il profilo Instagram si modifica solo dall'app o da Meta Business: non ho uno strumento che
lo faccia. Metricool programma i post e legge i numeri, ma non cambia nome, bio e link.
Quindi questi testi vanno incollati a mano da chi ha accesso all'account.

> **Quando si cambia il nome utente** (11/11/2026): oltre a riverificare Metricool, va aggiornato
> anche il **link Instagram del canale YouTube** (Personalizzazione → Profilo → Link), che oggi
> punta a `https://www.instagram.com/easyscooter_scooterelettrici/`. Altrimenti resta un link
> morto sul canale.

## Fatto dal telefono la sera dell'11/11

- **Categoria**: da «Prodotto/servizio» a **«Fornitore di attrezzature mediche»**. Le voci
  sanitarie cercate (ausili, mobilità, ortopedia) non esistono nell'elenco di Instagram; le
  alternative proposte erano «Concessionario di moto» e «Concessionario di veicoli elettrici»,
  scartate perché riportano al noleggio e perché il Faster non è un veicolo.
- **Storie in evidenza: da 10 a 1.** Tolte Feliz Navidad, 300s, PROMO HORWIN (conteneva la promo
  «Horwin Warm Winter» del 15/12/2022-31/01/2023, un'altra marca, scaduta da tre anni), NGS 3,
  RAY 7.7, E-Scooter, 🚨NOVITÁ🚨, 💥OFFERTE💥 e una delle due «Storie in evidenza». Resta
  **«Veleco Cosmo»**, l'unica che mostra un mezzo nostro. Il titolo sta in 15 caratteri: «Carrozzina
  Cosmo» non ci entra.
- **Archiviato** il reel della passeggiata a mare del 13/9/2024.
- **Email pubblica**: era `info@easyscootergenova.it`, il dominio del noleggio. Ora è
  `info@concessionariovelecoitalia.it`, come sul sito. Il telefono `+393289754412` era già giusto.
- **Link WhatsApp riparato**. Era davvero codificato due volte: WhatsApp precompilava
  «Ciao%20Valentina%2C%20ho%20visto…». **Non era l'involucro `l.instagram.com`**, come avevo
  supposto: la schermata dei link dentro l'app mostra il valore salvato, e lì il `%2520` c'era.
  Causa: **Instagram codifica lui il testo quando si salva**, quindi un indirizzo già codificato
  diventa doppio. Instagram però **rifiuta gli spazi** nel campo, quindi la via di mezzo non
  esiste: il link ora è `https://wa.me/393289754412` senza messaggio precompilato. Da riprovare,
  un giorno, con gli spazi scritti come `+`.

## Ancora da fare: la scheda «Reel»

È quasi tutta Easyscooter noleggio: «NOLEGGIO scooter, biciclette, monopattini a 15 € al giorno»,
«NOLEGGIAMI», monopattini Ninebot, bici Italwin, scooter Askoll, e parecchie grafiche con **il
vecchio numero 348 290 5502 e Via Pessale 18R**. Alcuni hanno numeri veri: 1.449, 1.491, 1.824,
2.769 visualizzazioni.

Non è lavoro da fare di sera e di fretta: sono decine di reel, uno per uno dall'app, ed è
materiale di Valentina. Serve una sessione a parte con una regola decisa con lei — per esempio:
via quelli che pubblicizzano **prezzi e offerte scadute**, che oltre a essere fuori tema sono
anche ingannevoli; restano quelli che mostrano solo mezzi e showroom. Intanto lavora il tempo: il
calendario pubblica tre volte a settimana e i reel nuovi scendono davanti ai vecchi da soli.

## Da fare dal telefono, venerdì 13/11

Tutto insieme, in una volta sola, perché venerdì è un giorno senza post programmati.

1. **Cambio del nome utente**: provare `velecoitalia`, poi `veleco_italia`, poi
   `velecoitalia.genova`. Il campo dice subito se è libero.
2. **Subito dopo, Metricool** (brand 7853509): profilo ancora collegato? I post programmati sono
   tutti lì con la pubblicazione automatica attiva? *(questo controllo si può fare da qui)*
3. **Aggiornare il link Instagram sul canale YouTube** (Personalizzazione → Profilo → Link).
4. **Sabato mattina**: controllare che i post delle 10 e delle 12 siano usciti.

*(I punti su categoria, storie in evidenza, archiviazione, email e link WhatsApp sono stati
fatti la sera dell'11/11: vedi sopra.)*

## Controllo del profilo dell'11/11/2026 (con Claude in Chrome, da computer)

Confermati a posto: **nome** «Scooter per anziani - Veleco», **bio** nelle quattro righe
concordate (131 caratteri), **i due link** con i titoli e gli UTM giusti, **foto profilo** con
il logo Veleco, account professionale. 403 post, **656 follower**, 1.250 seguiti.

**Fatto l'11/11 da computer**: tolti dalla griglia i due post di TuoSito.si con «Interrompi
condivisione» (403 post → 401). Non erano post del concessionario: li ha pubblicati
`@tuosito.si` con il concessionario come **collaboratore**, quindi non si potevano archiviare da
qui. «Interrompi condivisione» li lascia intatti su `@tuosito.si` e li toglie da questo profilo;
per rimetterli basta un nuovo invito, e `@tuosito.si` è nostro.

Dal computer **non si possono** togliere le storie in evidenza (il menu offre solo Modifica,
Insight e Promuovi), archiviare un post, cambiare la categoria e correggere i link: tutto questo
è solo nell'app.

Trovate quattro cose da sistemare, tutte dall'app:

1. **Categoria: «Prodotto/servizio»**, non quella concordata. Va messa «Negozio di articoli
   medicali» o «Concessionario».
2. **Storie in evidenza ancora del noleggio**, e stanno sotto la bio, cioè nel punto più visto
   del profilo: *Feliz Navidad, 🚨NOVITÁ🚨, 💥OFFERTE💥, PROMO HORWIN, NGS 3, RAY 7.7,
   E-Scooter* e due gruppi «Storie in evidenza». Horwin, NGS e Ray sono marche di scooter a due
   ruote: in vetrina ci sono i prodotti di altri. Si nascondono una per una, senza perdere
   niente. **È la modifica che cambia di più l'aspetto del profilo.**
3. **Due post di TuoSito.si nella griglia** (il reel «TuoSito.si, il sito per la tua attività» e
   il carosello «Ho la scheda Google: mi serve anche un sito?»): da archiviare, non c'entrano
   con il concessionario.
4. **Un post rimanda ancora a `easyscootergenova.it`** (il reel della passeggiata a mare): la
   didascalia si corregge senza toccare il post.

**Falso allarme da non rincorrere**: letto dal codice della pagina, il link WhatsApp sembra
codificato due volte (`%2520` invece di `%20`). È l'involucro `l.instagram.com` con cui
Instagram riscrive tutti i link in uscita, non il nostro indirizzo. Si verifica solo aprendolo
dal telefono: se WhatsApp precompila «Ciao Valentina, ho visto Instagram…» è a posto.

**Da computer non si vedono**: pulsanti di contatto, campi Nome utente e Nome (stanno nelle
impostazioni Meta) e i post programmati. Tutto questo si guarda dall'app.
