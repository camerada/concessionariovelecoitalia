# Video testimonianza di un cliente — novembre 2026

Materiale arrivato su Drive (cartella «Foto e video nuovi») il 10-11/11/2026 e lavorato l'11/11.
**Uso autorizzato da Maurizio l'11/11/2026.**

## Che cos'è

Un cliente anziano guida il suo **Veleco Faster blu a 4 ruote** su una strada di collina
(Genova Nervi). Gli viene chiesto se lo consiglierebbe e risponde:

> «Assolutamente. Per le persone disabili e per le persone non disabili.»

È la prima testimonianza **video** che abbiamo: le altre sono recensioni scritte su Google.

Trascrizione completa dei 14,6 secondi (fatta con faster-whisper, modello `large-v3`, in locale
nella sessione cloud: l'audio non è uscito da lì):

| Tempo | Chi | Testo |
|---|---|---|
| 0,4 – 5,7 s | voce femminile | «Lo consiglierebbe, lei, questo scooter?» *(ricostruita: c'è vento sul microfono)* |
| 5,8 – 12,0 s | il cliente | «Assolutamente. Per le persone disabili e per le persone non disabili.» |
| 13,1 – 14,5 s | voce femminile | «Bene, sono contenta.» |

## I file

| File | Che cos'è |
|---|---|
| `bozze/video/reel-testimonianza-faster.mp4` | il montato finito: 1080×1920, 18,0 s, sottotitoli impressi, logo, chiusura |
| `bozze/video/testimonianza-faster.srt` | i sottotitoli separati, per YouTube o per rifare il video |
| `bozze/video/testimonianza-chiusura.jpg` | la schermata di chiusura, 1080×1920 |
| `public_html/assets/post-google/testimonianza-faster.jpg` | grafica 1200×900 per la scheda Google |
| `public_html/assets/post-google/ig/testimonianza-faster.jpg` | grafica 1080×1350 per Instagram |
| `public_html/assets/post-google/foto/cliente-faster-blu-nervi.jpg` | fermo immagine, il cliente di fronte (1080×1920) |
| `public_html/assets/post-google/foto/faster-blu-strada-nervi.jpg` | fermo immagine, lo scooter di spalle sulla stradina (1080×1920) |

L'originale (`video veleco blu-pulito.mp4`, 9 MB) resta su Drive: nel repo c'è solo il montato.

### Com'è montato

1. **0 – 7,1 s** ripresa originale, frontale.
2. **7,1 – 10,4 s** primo piano: è lo stesso fotogramma ingrandito sulla parte alta
   dell'inquadratura. Serve a **togliere la scritta «…eco Confo…»** che scorreva a metà
   schermo in quei secondi e non era nostra. Sfocarla non bastava: restava leggibile in
   trasparenza. Stringendo sopra la fascia sparisce del tutto, l'audio non si tocca e il
   labiale resta sincronizzato perché è la stessa ripresa.
3. **10,4 – 14,6 s** di nuovo l'originale, fino allo scooter che si allontana.
4. **14,6 – 18,0 s** chiusura in dissolvenza: logo, «Provalo a Genova Nervi», indirizzo,
   sito e telefono.

Il logo sta in alto a sinistra per tutta la durata, dentro la solita pastiglia crema.
I sottotitoli sono al 45-70% dell'altezza: sopra la zona che l'interfaccia di Instagram copre
con pulsanti e didascalia.

La chiusura **non nomina la promozione**: così il video resta valido anche dopo il 31 dicembre.

### Rifare il video

`post-google/strumenti/immagine.js` adesso accetta anche il formato **`reel`** (1080×1920),
oltre a `google` (1200×900) e `ig` (1080×1350): serve per le schermate di chiusura dei video
verticali. La chiusura si rigenera così:

```
node post-google/strumenti/immagine.js bozze/video/testimonianza-chiusura.jpg \
  "VELECO FASTER · 4 RUOTE" "Provalo a Genova Nervi" "-" "" "Showroom in via Giuseppe Pessale 20r, da martedì a sabato dalle 10 alle 20. Consegna a casa compresa nel prezzo." reel
```

## I testi

### Instagram — reel

> «Lo consiglierebbe?» «Assolutamente. Per le persone disabili e per le persone non disabili.»
>
> Non l'abbiamo scritto noi. È la risposta di un cliente, sulla sua strada, sul suo Veleco Faster.
>
> Quattro ruote a terra e una sospensione su ognuna: sta fermo sul marciapiede, sulla rampa, sul
> selciato. Si guida senza patente, senza bollo e senza assicurazione obbligatoria.
>
> La prova nello showroom di Genova Nervi è gratuita, in via Giuseppe Pessale 20r, da martedì a
> sabato dalle 10 alle 20. Al telefono risponde Valentina: 328 975 4412. Il sito è nel link in bio.
>
> #scooterperanziani #scooterelettrico #veleco #velecofaster #genova #nervi #mobilità #quattroruote

### YouTube — short

**Titolo**: `«Lo consiglierebbe?» «Assolutamente» — un cliente prova il Veleco Faster #shorts`

**Descrizione**:

> Un cliente di Concessionario Veleco Italia guida il suo Veleco Faster a 4 ruote a Genova Nervi.
> Gli chiediamo se lo consiglierebbe: «Assolutamente. Per le persone disabili e per le persone
> non disabili».
>
> Il Veleco Faster è uno scooter elettrico a 4 ruote per anziani e per chi ha difficoltà a
> camminare. Si guida senza patente, senza bollo e senza assicurazione obbligatoria, a passo
> d'uomo sui marciapiedi e nelle aree pedonali. Dispositivo medico di Classe 1 CE per la mobilità.
>
> Showroom e prova gratuita a Genova Nervi, via Giuseppe Pessale 20r, da martedì a sabato dalle
> 10 alle 20. Consegna a casa in tutta Italia continentale, compresa nel prezzo.
>
> Prezzi e modelli: https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/?utm_source=youtube&utm_medium=short&utm_campaign=testimonianza
>
> Telefono e WhatsApp: 328 975 4412

**Tag**: scooter elettrico anziani, veleco, veleco faster, mobility scooter, scooter 4 ruote,
scooter senza patente, scooter per disabili, genova

### Scheda Google — post con la grafica 1200×900

Senza numero di telefono (regola del 5/11/2026). Pulsante «Scopri di più» verso il sito.

> «Lo consiglierebbe?» «Assolutamente. Per le persone disabili e per le persone non disabili.»
>
> Così ha risposto un cliente, sul suo Veleco Faster, su una strada di Genova Nervi. Non gli
> abbiamo suggerito niente: è la sua risposta.
>
> Il Faster ha quattro ruote a terra e una sospensione su ognuna, si guida senza patente e a
> passo d'uomo sui marciapiedi. Nello showroom di Genova Nervi lo provi gratis, da martedì a
> sabato dalle 10 alle 20.
>
> Fino al 31 dicembre con ogni Faster arrivano tre accessori Veleco in regalo, e la consegna a
> casa è sempre compresa nel prezzo.

Link del pulsante:
`https://concessionariovelecoitalia.it/promo/?utm_source=google-business&utm_medium=post&utm_campaign=testimonianza&utm_content=<data del post>`

### Instagram — immagine singola (se il reel va altrove)

> «Lo consiglierebbe?» «Assolutamente. Per le persone disabili e per le persone non disabili.»
>
> Le parole di un cliente, sul suo Veleco Faster, a Genova Nervi. Quattro ruote a terra, si guida
> senza patente. Prova gratuita in showroom, via Giuseppe Pessale 20r. 328 975 4412. Link in bio.
>
> #scooterperanziani #veleco #genova #testimonianza

## Da decidere

- ✅ **YouTube: fatto.** Lo Short è online dall'11/11/2026:
  https://youtube.com/shorts/95VsLG40llU — 28 visualizzazioni nei primi minuti.
- **Dove mettere il reel nel calendario.** Il planner Metricool è pieno fino al 31/12 e i post
  programmati non si modificano (regola dell'8/11). Quindi o si aggiunge uno slot nuovo, o il
  reel esce a gennaio. Il reel è il contenuto più forte che abbiamo: starebbe meglio adesso,
  in uno slot in più.
- **YouTube.** Il canale c'è ed è convertito (`@velecoitalia`, vedi `seo/youtube.md`); lo Short
  è stato caricato a mano. Resta da **collegarlo a Metricool** (brand 7853509), che oggi ha solo
  Instagram e la scheda Google: serve il ruolo Proprietario, che l'account del canale ha.
- **La scheda Google non accetta video nei post** dall'integrazione Metricool: lì va la grafica
  1200×900, non il filmato. Il video, se si vuole, si carica a mano fra le foto del profilo.
