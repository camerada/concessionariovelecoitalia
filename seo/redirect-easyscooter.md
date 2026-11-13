# Reindirizzamenti da easyscootergenova.it al sito del concessionario

Preparato il 13/11/2026 per Giorgio, che gestisce easyscootergenova.it.
Nasce dalla verifica del 12/11: su «scooter per anziani» in Toscana e in Liguria, al posto del
concessionario compare il sito vecchio.

## Come è fatto il sito vecchio

WordPress con WooCommerce e il plugin **Rank Math**, servito da **nginx**.

> **Attenzione: niente `.htaccess`.** Su nginx quel file non viene letto, quindi le regole non si
> mettono lì. Due strade, in ordine di comodità:
>
> 1. **Rank Math → Redirections** (il plugin c'è già: la sitemap è sua). Va acceso in
>    *Rank Math → Dashboard → Moduli → Redirections*. Accetta indirizzi esatti e **espressioni
>    regolari**, e importa anche un CSV.
> 2. **Regole nginx** nel blocco del sito, se Giorgio ha accesso al server. Più veloci, ma
>    serve riavviare nginx a ogni modifica.

Tutti i reindirizzamenti vanno fatti con codice **301** (spostato in modo permanente): è quello
che passa al sito nuovo il valore accumulato in anni.

## Cosa c'è nel sito vecchio

Nella sitemap ci sono **413 indirizzi**. Quelli che riguardano noi si dividono in tre gruppi.

| Gruppo | Quanti | Che fare |
|---|---|---|
| Pagine e prodotti **Veleco** | 40 | reindirizzare, senza dubbi |
| Pagine **provincia per provincia** | 190 | decide Valentina (vedi sotto) |
| Noleggio, bici, monopattini, cabinati Vitale, blog | il resto | non toccare |

## Gruppo 1 — Le pagine Veleco

Sono prodotti, categorie e pagine di marca che vendono **gli stessi mezzi** che oggi vende il
concessionario. Finché restano, il sito vecchio e quello nuovo si contendono le stesse ricerche.

| Pagina del sito vecchio | Dove deve portare |
|---|---|
| `/categoria-prodotto/scooter-elettrico/veleco/` | `https://concessionariovelecoitalia.it/modelli-veleco/` |
| `/come-funziona-lo-scooter-disabili/` | `https://concessionariovelecoitalia.it/guida/scooter-per-disabili-chi-puo-guidarlo/` |
| `/en/product-categories/veleco-en/` | `https://concessionariovelecoitalia.it/modelli-veleco/` |
| `/en/shop/veleco-faster-4-ruote-anziani-disabili/` | `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/` |
| `/es/categoria-prodotto/veleco-es/` | `https://concessionariovelecoitalia.it/modelli-veleco/` |
| `/es/shop/scooter-veleco-draco-3-ruote-anziani-disabile-2/` | `https://concessionariovelecoitalia.it/modelli-veleco/#draco` |
| `/es/shop/veleco-crista-3-ruote-anziani-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#cristal` |
| `/es/shop/veleco-faster-4-ruote-anziani-disabili/` | `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/` |
| `/es/shop/veleco-zt15-3-ruote-per-anziani-e-disabili-2/` | `https://concessionariovelecoitalia.it/modelli-veleco/#zt15` |
| `/es/shop/veleco-zt6-3-ruote-anziani-disabili-2/` | `https://concessionariovelecoitalia.it/modelli-veleco/` |
| `/es/shop/veleco-zt63-3-ruote-anziani-disabili-2/` | `https://concessionariovelecoitalia.it/modelli-veleco/#zt63` |
| `/es/veleco/` | `https://concessionariovelecoitalia.it/modelli-veleco/` |
| `/guida-pratica-veleco/` | `https://concessionariovelecoitalia.it/guida-scooter-elettrico-anziani/` |
| `/guida-pratica-veleco/` | `https://concessionariovelecoitalia.it/modelli-veleco/` |
| `/rivenditore-ufficiale-veleco/` | `https://concessionariovelecoitalia.it/modelli-veleco/` |
| `/scooter-disabili-anziani-milano/` | `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-lombardia/` |
| `/scooter-disabili-anziani-napoli/` | `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-campania/` |
| `/scooter-disabili-anziani-roma/` | `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-lazio/` |
| `/shop/scooter-veleco-draco-3-ruote-anziani-disabile/` | `https://concessionariovelecoitalia.it/modelli-veleco/#draco` |
| `/shop/veleco-cosmo-sedia-con-motore-elettrico-pieghevole-per-anziani-e-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#cosmo` |
| `/shop/veleco-cristal-3-ruote-anziani-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#cristal` |
| `/shop/veleco-draco-capitain-seat-scooter-3-ruote-elettrico-per-anziani-e-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#draco` |
| `/shop/veleco-faster-capitain-seat-veicoli-per-anziani-e-disabili-concessionario/` | `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/` |
| `/shop/veleco-faster-roof-4-ruote-per-anziani/` | `https://concessionariovelecoitalia.it/modelli-veleco/#con-tetto` |
| `/shop/veleco-faster-roof-capitain-seat-4-veicoli-per-anziani-e-disabili-concessionario/` | `https://concessionariovelecoitalia.it/modelli-veleco/#con-tetto` |
| `/shop/veleco-faster-scooter-di-mobilita-a-4-ruote/` | `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/` |
| `/shop/veleco-gravis-4-ruote-per-anziani-e-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#gravis` |
| `/shop/veleco-gravis-capitain-seat-4-ruote-per-anziani-e-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#gravis` |
| `/shop/veleco-gravis-roof-4-ruote-per-anziani-e-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#con-tetto` |
| `/shop/veleco-gravis-roof-capitain-seat-4-ruote-per-anziani-e-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#con-tetto` |
| `/shop/veleco-jumpy-scooter-per-disabili-e-anziani-concessionario-italia/` | `https://concessionariovelecoitalia.it/modelli-veleco/#jumpy` |
| `/shop/veleco-looper-scooter-per-diabili-e-anziani-concessionario-italia/` | `https://concessionariovelecoitalia.it/modelli-veleco/#looper` |
| `/shop/veleco-sharpy-scooter-per-diabili-concessionario-italia/` | `https://concessionariovelecoitalia.it/modelli-veleco/#sharpy` |
| `/shop/veleco-turris-capitain-seat-luci-led-scooter-elettrico-per-anziani-e-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#turris` |
| `/shop/veleco-turris-luci-led-scooter-elettrico-per-anziani-e-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#turris` |
| `/shop/veleco-turris-roof-capitain-seat-scooter-elettrico-luci-led-per-anziani-e-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#con-tetto` |
| `/shop/veleco-turris-roof-scooter-elettrico-luci-led-e-tettuccio-anziani-e-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#con-tetto` |
| `/shop/veleco-zt15-scooter-3-ruote-per-anziani-e-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#zt15` |
| `/shop/veleco-zt16-3-ruote-anziani-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#zt16` |
| `/shop/veleco-zt63-3-ruote-anziani-disabili/` | `https://concessionariovelecoitalia.it/modelli-veleco/#zt63` |

**40 indirizzi.** Tutti con codice **301** (spostato in modo permanente).

Le pagine `/en/` e `/es/` sono le versioni inglese e spagnola: il sito nuovo è solo in italiano,
quindi portano alla pagina italiana corrispondente. Fanno pochissimo traffico, ma lasciarle vive
significa tenere in piedi un negozio Veleco parallelo.

## Gruppo 2 — Le 190 pagine provincia (serve una decisione di Valentina)

Sono due famiglie da 95 pagine ciascuna, una per provincia:

- `scooter-cabinati-elettrici-per-anziani-e-disabili-vitale-<provincia>`
- `scooter-e-cabinati-elettrici-disabili-anziani-<provincia>`

**Parlano di «cabinati Vitale», che è un'altra marca**, non Veleco. Sono le pagine che abbiamo
visto uscire al posto nostro su Firenze e Savona: coprono 101 province, cioè tutta Italia.

La domanda per Valentina è una sola: **Easyscooter continua a vendere scooter e cabinati per
anziani?**

- **Sì** → queste pagine sono il suo lavoro e si lasciano stare. Il concessionario dovrà
  superarle, e ci vorrà tempo.
- **No, adesso quel mercato è del concessionario** → si reindirizzano, e il valore di 190 pagine
  passa al sito nuovo in un colpo solo. È la mossa che vale di più di tutto quello che abbiamo
  fatto in questi giorni.

Se la risposta è no, queste sono le regole, già pronte.

**Regole da inserire (una per regione, poi quella di scorta).** Sorgente in modalità
«Regex», destinazione, codice 301.

**Campania** — 5 pagine
```
^/?(?:scooter-cabinati-elettrici-per-anziani-e-disabili-vitale|scooter-e-cabinati-elettrici-disabili-anziani)-(napoli|salerno|caserta|avellino|benevento)/?$
```
→ `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-campania/`

**Lazio** — 6 pagine
```
^/?(?:scooter-cabinati-elettrici-per-anziani-e-disabili-vitale|scooter-e-cabinati-elettrici-disabili-anziani)-(roma|latina|frosinone|rieti|viterbo|fiumicino)/?$
```
→ `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-lazio/`

**Lombardia** — 14 pagine
```
^/?(?:scooter-cabinati-elettrici-per-anziani-e-disabili-vitale|scooter-e-cabinati-elettrici-disabili-anziani)-(milano|milano-2|brescia|bergamo|como|cremona|lecco|lodi|mantova|monza-e-brianza|pavia|sondrio|varese|busto-arsizio)/?$
```
→ `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-lombardia/`

**Piemonte** — 9 pagine
```
^/?(?:scooter-cabinati-elettrici-per-anziani-e-disabili-vitale|scooter-e-cabinati-elettrici-disabili-anziani)-(torino|alessandria|asti|biella|cuneo|novara|vercelli|verbano-cusio-ossola|verbania)/?$
```
→ `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-piemonte/`

**Toscana** — 11 pagine
```
^/?(?:scooter-cabinati-elettrici-per-anziani-e-disabili-vitale|scooter-e-cabinati-elettrici-disabili-anziani)-(firenze|arezzo|grosseto|livorno|lucca|massa-carrara|pisa|pistoia|prato|siena|viareggio)/?$
```
→ `https://concessionariovelecoitalia.it/scooter-elettrico-anziani-toscana/`

**Tutte le altre province** — 56 pagine, nessuna pagina regionale nostra
```
^/?(?:scooter-cabinati-elettrici-per-anziani-e-disabili-vitale|scooter-e-cabinati-elettrici-disabili-anziani)-(ancona|aosta|ascoli-piceno|bari|barletta-andria-trani|belluno|bologna|bologna-2|bolzano|brindisi|campobasso|catanzaro|chieti|cosenza|crotone|fermo|ferrara|foggia|forli-cesena|genova|gorizia|imperia|isernia|l-aquila|la-spezia|laquila|lecce|macerata|matera|modena|padova|parma|perugia|pesaro-e-urbino|pescara|piacenza|pordenone|potenza|ravenna|reggio-calabria|reggio-emilia|rimini|rovigo|rovigo-2|savona|taranto|teramo|terni|trento|treviso|trieste|udine|venezia|verona|vibo-valentia|vicenza)/?$
```
→ `https://concessionariovelecoitalia.it/rivenditori-veleco-italia/`

In tutto: 45 + 56 = 101 province, 190 indirizzi.

Ogni provincia va alla **pagina regionale che la contiene**, dove ne abbiamo una. Le 56 province
che non rientrano in Campania, Lazio, Lombardia, Piemonte o Toscana vanno a
«Dove comprare Veleco in Italia», che è la pagina giusta per chi cerca in che città si compra.

> Non mandarle tutte alla home. Un reindirizzamento verso una pagina che non c'entra Google lo
> tratta come una pagina mancante, e il valore si perde lo stesso.

## Gruppo 3 — Da non toccare

Noleggio scooter, biciclette, monopattini, i prodotti **Vitale** (`mob26`, `mob30a`, `mob50`), il
blog e tutto ciò che riguarda il noleggio a Genova. Sono l'attività di Easyscooter e devono
restare dove sono.

## Dopo, i controlli

1. Provarne tre o quattro a mano: aprendo `easyscootergenova.it/shop/veleco-faster-scooter-di-mobilita-a-4-ruote/`
   si deve finire sulla pagina Prezzi del concessionario, **senza passaggi intermedi**.
2. In Search Console del sito vecchio, controllare dopo una settimana che non compaiano errori
   nuovi.
3. Le pagine reindirizzate vanno **tolte dalla sitemap** del sito vecchio (Rank Math lo fa da
   solo quando la pagina è in redirect, ma vale la pena verificarlo).
4. Non incatenare: se una pagina era già reindirizzata altrove, il nuovo redirect deve partire
   dall'indirizzo originale.

## Una cosa da dire a Giorgio

Questo lavoro **toglie visite al sito che gestisce lui** e le sposta su un altro. È bene che
glielo dica Valentina, non noi, e che sia chiaro che è una decisione sua: non una correzione a
qualcosa che lui ha sbagliato.
