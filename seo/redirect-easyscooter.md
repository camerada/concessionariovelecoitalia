# Reindirizzamenti da easyscootergenova.it — pagine Veleco

Preparato il 13/11/2026. **Da consegnare a Giorgio**, che gestisce easyscootergenova.it.

Sono **40 indirizzi**: le pagine e i prodotti **Veleco** del sito, cioè gli stessi mezzi che oggi
vende il concessionario Veleco Italia. Finché restano attivi, i due siti si contendono le stesse
ricerche su Google e si tolgono visite a vicenda.

**Non c'è altro da toccare.** Noleggio, biciclette, monopattini, i cabinati Vitale, le pagine
provincia e il blog restano dove sono: sono l'attività di Easyscooter.

## Come si fanno

Il sito è **WordPress su nginx**.

> **Niente `.htaccess`**: su nginx quel file non viene letto, le regole messe lì non funzionano.

Si usa il modulo **Redirections di Rank Math**, il plugin SEO già installato sul sito:

1. *Rank Math → Dashboard → Moduli* → accendere **Redirections**.
2. *Rank Math → Redirections → Aggiungi nuovo*.
3. Per ogni riga della tabella: **Source URL** = l'indirizzo della prima colonna, modalità
   **Exact**; **Destination URL** = l'indirizzo della seconda colonna; **Redirection Type** =
   **301 Permanent Move**.

Più veloce: *Rank Math → Redirections → Import/Export* accetta un **CSV**, allegato a questo
documento (`redirect-veleco.csv`).

In alternativa, se si preferisce lavorare sul server, le stesse 40 righe si mettono nel blocco
nginx del sito come `return 301`.

## Gli indirizzi

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
quindi portano alla pagina italiana corrispondente.

## I controlli, dopo

1. Aprire a mano tre o quattro indirizzi vecchi e verificare che si arrivi sulla pagina giusta
   **senza passaggi intermedi**. Per esempio
   `easyscootergenova.it/shop/veleco-faster-scooter-di-mobilita-a-4-ruote/` deve portare alla
   pagina Prezzi del concessionario.
2. Controllare che il codice sia **301** e non 302: con il 302 Google non passa niente.
3. Verificare che le pagine reindirizzate **escano dalla sitemap** del sito vecchio.
4. Non incatenare: se una di queste pagine era già reindirizzata altrove, il nuovo
   reindirizzamento deve partire dall'indirizzo originale.
5. Dopo una settimana, dare un'occhiata alla Search Console del sito vecchio: non devono
   comparire errori nuovi.

---

## Nota interna (non per Giorgio)

Il sito vecchio ha anche **190 pagine provincia** in due famiglie da 95
(`scooter-cabinati-elettrici-per-anziani-e-disabili-vitale-<provincia>` e
`scooter-e-cabinati-elettrici-disabili-anziani-<provincia>`), che coprono 101 province e sono
quelle viste uscire al posto nostro su Firenze e Savona.

**Il 13/11/2026 Maurizio ha deciso di non toccarle**: parlano di cabinati Vitale, che è un'altra
marca, e restano l'attività di Easyscooter. Il concessionario dovrà superarle con il proprio
lavoro. Se un giorno la decisione cambia, le sei regole regex già pronte sono nella versione
precedente di questo file (`git log seo/redirect-easyscooter.md`).
