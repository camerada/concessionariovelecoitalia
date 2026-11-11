# Prompt per Claude in Chrome — convertire il canale YouTube

Preparato l'11/11/2026. I contenuti vengono da `seo/youtube.md`.

**Si lavora in cinque sedute, una per volta.** Si incolla una seduta, si guarda il risultato, si
passa alla successiva. Tutto insieme no: YouTube Studio salva una sezione per volta e, se
qualcosa va storto a metà, non si capisce dove.

**Le grafiche devono essere già sul Mac.** Stanno nel repo, sul ramo
`claude/awesome-planck-yclzt2`, in `bozze/youtube/`. Dal Terminale:

```bash
cd ~/percorso/del/repo && git pull origin claude/awesome-planck-yclzt2 && open bozze/youtube
```

Tre file: `avatar-800.png`, `banner-2048x1152.png`, `filigrana-150.png`.

**Claude in Chrome non può aprire la finestra di scelta del file**: è una finestra del sistema,
fuori dalla pagina. Quando c'è da caricare un'immagine, il file lo scegli tu a mano e lui fa
tutto il resto.

## Regole valide per tutte le sedute

Da incollare insieme alla prima seduta.

> Lavori sul canale YouTube «Easyscooter Genova» (`@easyscootergenova6963`) dal pannello
> YouTube Studio, già aperto in questa finestra. Regole:
>
> 1. **Usa solo i testi che ti do.** Non inventare descrizioni, titoli o parole chiave, e non
>    tradurre o «migliorare» quello che ti passo: va incollato esattamente com'è.
> 2. **Non cancellare niente.** Nessun video, nessuna sezione, nessun link. Se una cosa va tolta,
>    si mette su «Non in elenco»: si cancella solo se te lo dico a voce.
> 3. **Non sovrascrivere un campo già compilato** con qualcosa di diverso senza avvisarmi: dimmi
>    cosa c'è scritto adesso e aspetta la mia risposta.
> 4. **Fermati e chiedi** se un campo non c'è, se si chiama diversamente da come te lo descrivo,
>    se YouTube chiede una conferma che non ti aspettavi o se compare un avviso.
> 5. **Non toccare** la monetizzazione, le impostazioni di pubblico «fatto per bambini», gli
>    avvisi sul copyright e niente che riguardi l'account Google.
> 6. Alla fine di ogni seduta **dimmi cosa hai cambiato**, campo per campo, e cosa non sei
>    riuscito a fare.

## Seduta 1 — Capire che tipo di canale è (solo guardare)

> Non cambiare niente in questa seduta: devi solo guardare e riferire.
>
> 1. Vai su Impostazioni → Autorizzazioni e dimmi **esattamente** cosa vedi: c'è un pulsante
>    «Invita» con l'elenco delle persone che hanno accesso, oppure un avviso che dice che per
>    aggiungere persone il canale deve essere collegato a un account del brand?
> 2. Se c'è l'elenco, dimmi quali indirizzi compaiono e con quale ruolo.
> 3. Vai su Impostazioni → Canale → Informazioni di base e dimmi: nome del canale, parole chiave
>    già presenti, paese di residenza.
> 4. Vai su Personalizzazione → Informazioni di base e dimmi: la descrizione attuale per intero,
>    i link già presenti con i loro titoli, e se c'è già un handle diverso da
>    `@easyscootergenova6963`.
> 5. Vai su Contenuti e dammi l'elenco di **tutti** i video: titolo, durata, visualizzazioni,
>    visibilità e data. Sono 16.

Serve a sapere se il canale è un Brand Account (e quindi se Valentina può nominare Maurizio
proprietario, che è la condizione per collegarlo a Metricool) e a vedere i due video che
mancano all'appello.

## Seduta 2 — Nome, handle, descrizione, link

> In Personalizzazione → Informazioni di base:
>
> 1. **Nome del canale**: sostituisci «Easyscooter Genova» con `Veleco Italia – Concessionario ufficiale`
> 2. **Handle**: prova `@velecoitalia`. Se è già preso prova `@velecoitaliagenova`. Se sono presi
>    tutti e due, fermati e dimmelo.
> 3. **Descrizione**: cancella quella attuale e incolla esattamente questa.
>
> ```
> Concessionario ufficiale Veleco in Italia, con showroom a Genova Nervi.
>
> Vendiamo scooter elettrici a quattro ruote per anziani e per chi fa fatica a camminare: il Veleco Faster e tutta la gamma Veleco. Si guidano senza patente, senza bollo e senza assicurazione obbligatoria, a passo d'uomo sui marciapiedi e nelle aree pedonali. Sono dispositivi medici di Classe 1 CE per la mobilità.
>
> Su questo canale: come si guidano, cosa chiede la legge, quanta autonomia fanno davvero, e le parole di chi li usa tutti i giorni.
>
> Lo showroom è in via Giuseppe Pessale 20r, 16167 Genova Nervi, aperto da martedì a sabato dalle 10 alle 20: la prova è gratuita e senza impegno. Consegniamo in tutta Italia continentale, con la consegna a casa compresa nel prezzo e il mezzo già montato.
>
> Sito: concessionariovelecoitalia.it
> Telefono e WhatsApp: 328 975 4412
> ```
>
> 4. **Link**: aggiungi questi quattro, in quest'ordine, con questi titoli. Se ce ne sono già
>    altri, non toglierli: dimmi quali sono e aspetta.
>
> | Titolo | Indirizzo |
> |---|---|
> | Sito e prezzi | `https://concessionariovelecoitalia.it/?utm_source=youtube&utm_medium=canale` |
> | WhatsApp | `https://wa.me/393289754412` |
> | Instagram | `https://www.instagram.com/easyscooter_scooterelettrici/` |
> | Showroom a Genova Nervi | il link alla scheda Google del negozio, se riesci a trovarlo dal profilo; altrimenti salta questo e dimmelo |
>
> 5. **Email dei contatti commerciali**: se il campo è vuoto, lascialo vuoto e dimmelo.
>
> Poi in Impostazioni → Canale → Informazioni di base:
>
> 6. **Paese di residenza**: Italia.
> 7. **Parole chiave**: aggiungi queste, senza togliere quelle che ci sono già.
>    `scooter elettrico per anziani, veleco, veleco faster, scooter 4 ruote anziani, mobility scooter, scooter elettrico senza patente, scooter per disabili, scooter elettrico anziani prezzi, genova`
>
> Alla fine salva e dimmi cosa è stato salvato.

## Seduta 3 — Le immagini

> In Personalizzazione → Branding. I file sono sul Mac, in `bozze/youtube/` dentro il repo.
> Per ciascuna immagine: aprimi la schermata di caricamento giusta, dimmi quando è pronta, e
> quando ti dico «fatto» continua con il ritaglio e il salvataggio.
>
> 1. **Immagine del profilo**: `avatar-800.png` (800×800). Nel ritaglio tieni la V centrata e
>    più grande possibile.
> 2. **Immagine del banner**: `banner-2048x1152.png` (2048×1152). Nell'anteprima controlla che
>    su **telefono** si leggano per intero «Veleco Italia», la riga «Scooter elettrici a 4 ruote
>    per anziani» e la riga con il sito e il numero: se qualcosa è tagliato, fermati e dimmelo
>    invece di salvare.
> 3. **Filigrana del video**: `filigrana-150.png` (150×150, sfondo trasparente), e imposta
>    «Tutto il video» come momento in cui compare.
>
> Salva e dimmi com'è andata.

## Seduta 4 — Mettere ordine fra i video

> In Contenuti. **Non cancellare nessun video**: si usa solo «Non in elenco».
>
> 1. Metti su **Non in elenco** questi, uno per uno:
>    - Easyscooter – Vivi La Natura
>    - Salone Nautico 2021
>    - Bicicletta elettrica
>    - Easyscooter (ce ne sono due, di 6 e 7 anni fa: tutti e due)
>    - Noleggio Scooter – ebike
>
> 2. **Non toccare** questi, che restano pubblici:
>    - Veleco Faster – Scooter Elettrico 4 Ruote in Azione.
>    - Come funziona lo Scooter disabili
>    - Come ti cambia la vita lo scooter elettrico
>    - Veleco scooter per anziani e disabili
>
> 3. Per questi quattro **aprimi solo l'anteprima** e dimmi cosa si vede nei primi secondi, senza
>    cambiare niente: «Come montare un bauletto sullo scooter», «Eaasyscooter – noleggio e
>    vendita scooter elettrici», «Spot», «Buoni motivi per passare all'elettrico». Decido io dopo
>    se tenerli pubblici: i primi due hanno 6.000 e 1.700 visualizzazioni e non li butto via
>    senza guardarli.

## Seduta 5 — Titoli e descrizioni dei video che restano

> In Contenuti, uno alla volta, questi quattro video. Per ognuno: cambia il titolo come indicato,
> **lascia la descrizione che c'è** e **aggiungi in fondo**, dopo una riga vuota, il blocco qui
> sotto. Se la descrizione è vuota, metti solo il blocco.
>
> | Titolo di adesso | Titolo nuovo |
> |---|---|
> | Veleco Faster – Scooter Elettrico 4 Ruote in Azione. | `Veleco Faster: lo scooter elettrico a 4 ruote per anziani, in strada` |
> | Come funziona lo Scooter disabili | `Come funziona uno scooter elettrico per disabili: comandi, salita, discesa` |
> | Come ti cambia la vita lo scooter elettrico | `Scooter elettrico per anziani: come cambia la giornata di chi lo usa` |
> | Veleco scooter per anziani e disabili | `Scooter Veleco per anziani e disabili: si guidano senza patente` |
>
> Blocco da aggiungere in fondo a tutte e quattro le descrizioni:
>
> ```
> Veleco Italia è il concessionario ufficiale Veleco in Italia, con showroom a Genova Nervi, in via Giuseppe Pessale 20r. Prova gratuita da martedì a sabato, dalle 10 alle 20.
>
> Si guidano senza patente, senza bollo e senza assicurazione obbligatoria. Dispositivo medico di Classe 1 CE per la mobilità.
>
> Prezzi e modelli: https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/?utm_source=youtube&utm_medium=video
> Telefono e WhatsApp: 328 975 4412
> ```
>
> Se un video ha già un link al sito nella descrizione, **non toglierlo**: dimmi quale indirizzo
> c'è e aspetta la mia risposta.
>
> Salva uno per uno e alla fine riassumi cosa hai cambiato.
