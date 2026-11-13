# YouTube — il canale da convertire

Scheda dell'11/11/2026. Stessa logica di `seo/instagram.md`: si prende il canale che c'è e lo si
converte al concessionario, senza perdere quello che ha già.

## Com'era, e cosa è già stato fatto

Il canale era **Easyscooter Genova** (`@easyscootergenova6963`, handle assegnato d'ufficio da
YouTube), 34 iscritti, 16 video fermi da due anni, descrizione «E-Mobility Store Genova», nessun
link, paese non impostato, nessuna parola chiave.

**L'11/11/2026, con Claude in Chrome** (prompt in `seo/prompt-youtube.md`, blocco 1), sono stati
cambiati: nome in «Veleco Italia – Concessionario ufficiale», handle in **`@velecoitalia`** (era
libero), descrizione, i tre link (Sito e prezzi, WhatsApp, Instagram), paese Italia e le nove
parole chiave. Email dei contatti commerciali lasciata vuota.

> Il vecchio handle resta prenotato 14 giorni, e YouTube consente **due cambi di handle ogni 14
> giorni**: da qui a fine novembre non se ne cambiano altri.

**Autorizzazioni**: c'è il pulsante «Invita» e nessun avviso sull'account del brand. Nell'elenco
una sola persona: *Easyscooter Genova*, `noleggioscootergenova@gmail.com`, ruolo **Proprietario**.
È l'account con cui si entra nel canale, quindi il collegamento a Metricool si può fare subito da
lì. Per collegarlo invece con l'account di Maurizio serve che quell'account lo inviti come
**Proprietario**: se la finestra «Invita» offre solo Gestore o Editor, non basta — Metricool
rifiuta i Gestori — e allora si collega con l'account del canale.

**Il canale non è morto: è solo fermo.** Con 34 iscritti e niente caricamenti da due anni, le
visualizzazioni che ha fatto non vengono dal seguito, vengono **dalla ricerca**. Sono le stesse
domande su cui lavoriamo per il sito.

| Video | Visualizzazioni | Età | Che farne |
|---|---|---|---|
| Come montare un bauletto sullo scooter | 6.000 | 5 anni | **da guardare**: se è uno scooter da noleggio, non in elenco |
| Come ti cambia la vita lo scooter elettrico | 2.500 | 5 anni | **tenere**, titolo e descrizione nuovi |
| Veleco Faster – Scooter Elettrico 4 Ruote in Azione | 2.300 | 5 anni | **tenere**: è il più prezioso che abbiamo |
| Eaasyscooter – noleggio e vendita scooter elettrici | 1.700 | 7 anni | **da guardare**: parla di noleggio, ma 1.700 visualizzazioni |
| Come funziona lo Scooter disabili | 1.400 | 5 anni | **tenere**, titolo e descrizione nuovi |
| Noleggio Scooter – ebike | 320 | 7 anni | non in elenco |
| Veleco scooter per anziani e disabili | 178 | 2 anni | **tenere** |
| Spot | 121 | 5 anni | da guardare |
| Easyscooter | 81 e 75 | 6-7 anni | non in elenco |
| Buoni motivi per passare all'elettrico | 26 | 5 anni | da guardare: se è generico si tiene |
| Salone Nautico 2021 | 62 | 5 anni | non in elenco |
| Easyscooter – Vivi La Natura | 58 | 4 anni | non in elenco |
| Bicicletta elettrica | 57 | 6 anni | non in elenco |

Mancano due video all'appello dei 16: si vedranno dal pannello.

**Regola: non si cancella niente.** «Non in elenco» toglie il video dal canale ma lascia vivo il
link, nel caso qualcuno l'avesse incorporato da qualche parte o servisse recuperarlo.

Da mettere in conto: convertendolo, il noleggio Easyscooter resta senza canale YouTube. Su
Instagram la stessa scelta è già stata fatta il 4/11/2026.

## Prima di tutto: chi può collegarlo a Metricool

Metricool pretende il ruolo di **Proprietario** (Owner o Primary owner): i Gestori non possono
più collegare un canale, perché YouTube non dà loro accesso via API.

Valentina deve guardare in `studio.youtube.com` → Impostazioni → **Autorizzazioni**:

- compare **«Invita» / «Gestisci autorizzazioni»** con l'elenco delle persone → è un **Brand
  Account**: assegna a Maurizio il ruolo **Proprietario** e il collegamento si fa con il suo
  Google, senza scambiarsi password;
- compare l'avviso che per aggiungere persone **serve un account del brand** → è un **canale
  personale**: va prima spostato su un Brand Account (Impostazioni → Canale → Impostazioni
  avanzate), poi si assegna il ruolo.

Il collegamento vero e proprio: `app.metricool.com/brands/connections`, brand «Concessionario
Veleco» (7853509) → «Collega un canale YouTube» → **accettare tutti e sette i permessi**, se ne
manca uno non si collega.

Lo short della testimonianza si può comunque caricare a mano subito: Metricool serve a
programmare e a misurare, non a pubblicare il primo video.

## Le grafiche

Si generano con `node post-google/strumenti/youtube-grafiche.js` e finiscono in `bozze/youtube/`.
Colori e caratteri del sito.

| File | Misure | Dove va |
|---|---|---|
| `avatar-800.png` | 800×800 | immagine del canale (YouTube la ritaglia in cerchio) |
| `banner-2048x1152.png` | 2048×1152 | copertina; il testo sta tutto nell'area sicura centrale di 1235×338, l'unica che si vede sul telefono |
| `filigrana-150.png` | 150×150, sfondo trasparente | filigrana in sovrimpressione nei video, in basso a destra |

## Com'è il canale a fine giornata (11/11/2026)

Tre video orizzontali e uno Short, tutti Veleco:

| | Durata | Visualizzazioni |
|---|---|---|
| Scooter Veleco per anziani e disabili: si guidano senza patente — https://youtu.be/kHYQ9MZGEKw | 0:11 | nuovo |
| Veleco Faster: lo scooter elettrico a 4 ruote per anziani, in strada | 3:23 | 2.300 |
| Come funziona uno scooter elettrico per disabili: comandi, salita, discesa | 0:16 | 1.400 |
| «Lo consiglierebbe?» «Assolutamente» — https://youtube.com/shorts/95VsLG40llU | 0:18 | nuovo |

I due video storici sono stati **tagliati da Maurizio con l'editor di YouTube** (da 3:30 a 3:23 e
da 0:20 a 0:16) per togliere intro e code col marchio Easyscooter: l'editor taglia soltanto, ma
non ricarica il file, quindi indirizzo, visualizzazioni, commenti e data restano. Gli altri 13
video sono «Non in elenco». **Niente è stato cancellato.**

## Cosa è stato fatto ai video (11/11/2026)

**Nessun video cancellato**: solo visibilità portata a «Non in elenco».

Messi **non in elenco** (12): Easyscooter – Vivi La Natura, Spot, Salone Nautico 2021,
Bicicletta elettrica, Easyscooter (0:47), Easyscooter (1:37), Noleggio Scooter – ebike, i due
Short (Salone Nautico Genova 2020, Backstage in Easyscooter), e dopo averli guardati anche
**Come montare un bauletto sullo scooter** (6.083 visualizzazioni: sono scooter a due ruote in
negozio, «Assistenza Askoll» nella descrizione), **Eaasyscooter – noleggio e vendita** (1.707:
apre e chiude con il vecchio logo e `www.easy-scooter.it`) e **Buoni motivi per passare
all'elettrico** (26: nel fotogramma finale il vecchio numero 348 2905502 e la filigrana
«Created with WeVideo»).

Regola emersa: le visualizzazioni già fatte non si perdono nascondendo un video. Conta cosa
trova chi arriva sul canale oggi.

Restano pubblici i quattro Veleco. **Come ti cambia la vita lo scooter elettrico** (2.549) è da
riguardare: la sua miniatura mostra scooter a due ruote.

## «Veleco scooter per anziani e disabili»: rimontato (11/11/2026)

Il video di 0:19 non aveva solo la miniatura sbagliata: **era tutto dentro una cornice rossa
Easyscooter**, con logo, «Via Pessale, 18/R», «tel. 348 2905502», `www.easyscootergenova.it` e
didascalie come «NOLEGGIO AUTO» e «NOLEGGIO SCOOTER A BENZINA». E **la voce fuori campo nomina
Easy Scooter due volte** (al secondo 5 e al secondo 8), quindi cambiare la grafica non bastava.

Trascrizione dell'originale (faster-whisper, `large-v3`):

| Tempo | Testo |
|---|---|
| 0,0 – 4,3 | «Non ti senti più libero nei movimenti? Vuoi ritrovare la tua indipendenza?» |
| 5,1 – 6,9 | «**Easy Scooter** ha la soluzione per te!» |
| 8,6 – 11,8 | «**Easy Scooter**, la tua scelta vincente!» |
| 15,0 – 17,7 | «Ti aspetto per la tua prova gratuita!» |

Il filmato vero stava in una finestra di **614×347** dentro il fotogramma 848×480: ritagliandola
si perdono cornice e didascalie, e restano le riprese pulite.

**Rimontato** in `bozze/video/veleco-anziani-disabili-rimontato.mp4` (1280×720, 10,6 s):

| Nel montato | Dall'originale | Didascalia |
|---|---|---|
| 0,0 – 4,3 | 0,0 – 4,3, le due domande | SCOOTER ELETTRICI PER ANZIANI E DISABILI |
| 4,3 – 5,3 | 12,0 – 13,0, il Faster rosso a 4 ruote in strada | IL VELECO FASTER A QUATTRO RUOTE |
| 5,3 – 7,8 | 4,4 – 6,9, la consulenza in negozio | TI SEGUIAMO NELLA SCELTA |
| 7,8 – 10,6 | 15,0 – 17,7, «ti aspetto per la tua prova gratuita» | PROVA GRATUITA IN SHOWROOM |

L'audio tiene 0-4,3 e 11,9-18,1: le due frasi che nominano Easy Scooter sono fuori. Sono fuori
anche tutte le riprese di scooter a due ruote e di noleggio auto.

La cornice la genera `node post-google/strumenti/cornice-video.js USCITA.png`: barra sinistra con
logo, showroom, telefono e sito, bande sopra e sotto, finestra del filmato trasparente. Si
sovrappone al filmato con ffmpeg a `330,58` su `950x538`, e le didascalie si scrivono con
`drawtext` nella banda bassa a `y=645`.

> **YouTube non permette di sostituire il file di un video già pubblicato.** Il rimontato va
> caricato come video nuovo e il vecchio messo «Non in elenco»: si perdono le 178 visualizzazioni
> dell'originale.

Caricato l'11/11/2026: https://youtu.be/kHYQ9MZGEKw (0:11). Il vecchio, dell'11/11/2023 — tre
anni esatti prima — è «Non in elenco».

## Le miniature

Le vecchie miniature sono ancora quelle di Easyscooter. La peggiore è quella di «Veleco scooter
per anziani e disabili»: logo vecchio, indirizzo **Via Pessale 18/R** (oggi è il 20r), telefono
**348 2905502** (oggi 328 975 4412) e la scritta «NOLEGGIO AUTO».

`immagine.js` accetta ora anche il formato **`miniatura`** (1280×720). Le tre pronte sono in
`bozze/youtube/miniature/`:

| File | Per il video | Foto |
|---|---|---|
| `faster-in-azione.jpg` | Veleco Faster – Scooter Elettrico 4 Ruote in Azione | fermo immagine del cliente sul Faster blu |
| `come-funziona.jpg` | Come funziona lo Scooter disabili | cruscotto del Faster |
| `anziani-e-disabili.jpg` | Veleco scooter per anziani e disabili | Faster rosso |

## I testi del canale

**Nome**: `Veleco Italia – Concessionario ufficiale` — *fatto l'11/11/2026*

**Handle**: **`@velecoitalia`** — *fatto l'11/11/2026*. Il vecchio indirizzo
`@easyscootergenova6963` non funziona più; i link dei singoli video sì, perché dipendono
dall'identificativo del video e non dal canale.

**Descrizione** (il limite è 1000 caratteri):

> Concessionario ufficiale Veleco in Italia, con showroom a Genova Nervi.
>
> Vendiamo scooter elettrici a quattro ruote per anziani e per chi fa fatica a camminare: il
> Veleco Faster e tutta la gamma Veleco. Si guidano senza patente, senza bollo e senza
> assicurazione obbligatoria, a passo d'uomo sui marciapiedi e nelle aree pedonali. Sono
> dispositivi medici di Classe 1 CE per la mobilità.
>
> Su questo canale: come si guidano, cosa chiede la legge, quanta autonomia fanno davvero, e le
> parole di chi li usa tutti i giorni.
>
> Lo showroom è in via Giuseppe Pessale 20r, 16167 Genova Nervi, aperto da martedì a sabato dalle
> 10 alle 20: la prova è gratuita e senza impegno. Consegniamo in tutta Italia continentale, con
> la consegna a casa compresa nel prezzo e il mezzo già montato.
>
> Sito: concessionariovelecoitalia.it
> Telefono e WhatsApp: 328 975 4412

**Link** (Impostazioni → Personalizzazione → Informazioni di base):

| Titolo | Indirizzo |
|---|---|
| Sito e prezzi | `https://concessionariovelecoitalia.it/?utm_source=youtube&utm_medium=canale` |
| WhatsApp | `https://wa.me/393289754412` |
| Instagram | `https://www.instagram.com/easyscooter_scooterelettrici/` — **da aggiornare quando cambia il nome utente di Instagram** (vedi `seo/instagram.md`) |
| Showroom su Maps | il collegamento alla scheda Google |

**Paese**: Italia. **Parole chiave del canale** (Impostazioni → Canale → Informazioni di base):

```
scooter elettrico per anziani, veleco, veleco faster, scooter 4 ruote anziani, mobility scooter,
scooter elettrico senza patente, scooter per disabili, scooter elettrico anziani prezzi, genova
```

## I titoli nuovi dei video che restano

Il titolo vecchio dice poco a chi cerca. Questi ripetono le parole che la gente scrive davvero
nella ricerca (sono le stesse di `seo/parole-chiave.md`).

| Oggi | Nuovo titolo |
|---|---|
| Veleco Faster – Scooter Elettrico 4 Ruote in Azione. | **Veleco Faster: lo scooter elettrico a 4 ruote per anziani, in strada** |
| Come funziona lo Scooter disabili | **Come funziona uno scooter elettrico per disabili: comandi, salita, discesa** |
| Come ti cambia la vita lo scooter elettrico | **Scooter elettrico per anziani: come cambia la giornata di chi lo usa** |
| Veleco scooter per anziani e disabili | **Scooter Veleco per anziani e disabili: si guidano senza patente** |

**Blocco da mettere in fondo alla descrizione di ogni video** (uguale per tutti):

> Veleco Italia è il concessionario ufficiale Veleco in Italia, con showroom a Genova Nervi, in
> via Giuseppe Pessale 20r. Prova gratuita da martedì a sabato, dalle 10 alle 20.
>
> Si guidano senza patente, senza bollo e senza assicurazione obbligatoria. Dispositivo medico di
> Classe 1 CE per la mobilità.
>
> Prezzi e modelli: https://concessionariovelecoitalia.it/scooter-elettrico-anziani-prezzi/?utm_source=youtube&utm_medium=video
> Telefono e WhatsApp: 328 975 4412

## Intro e chiusura per i video nuovi

Due spezzoni **muti**, 1280×720, 30 fps, in `bozze/video/`: `veleco-intro.mp4` (1,5 s: la V, il
nome, l'occhiello) e `veleco-chiusura.mp4` (4 s: logo, «Provalo a Genova Nervi», indirizzo, sito
e numero). Si incollano in testa e in coda a un video nuovo da qualunque programma di montaggio.
Hanno una traccia audio silenziosa, così i montatori non si lamentano della traccia mancante.

Le schermate le genera `node post-google/strumenti/video-intro-chiusura.js CARTELLA`
(scrive `intro.png` e `chiusura.png`); l'animazione è una dissolvenza con uno zoom lentissimo
fatta con ffmpeg (`zoompan` + `fade`, con `trim=duration=` altrimenti `zoompan` moltiplica i
fotogrammi e il filmato dura minuti).

C'è anche `veleco-logo-animato.mp4` (2,6 s, muto): **la V si traccia come con una penna**, diventa
la V piena del marchio, poi «Veleco Italia» si scrive da sinistra e sotto compare l'occhiello. La
generano `node post-google/strumenti/video-logo-animato.js CARTELLA` (un PNG per fotogramma) più
la riga di ffmpeg scritta in testa a quel file. È la versione «logo che si scrive» dell'intro: si
usa al posto di `veleco-intro.mp4`, non insieme.

**Anche in verticale, 1080×1920**, per i Short e i reel: `veleco-intro-verticale.mp4`,
`veleco-chiusura-verticale.mp4` e `veleco-logo-animato-verticale.mp4`. Si ottengono passando
`verticale` come secondo argomento ai due strumenti, e montando con `s=1080x1920` in `zoompan`.
Incollare uno spezzone orizzontale in testa a un video verticale lascia due bande nere: per ogni
formato si usa la sua versione.

> Sui **Short** l'intro non si mette comunque: si decide tutto nel primo secondo, e due secondi e
> mezzo di logo su diciotto sono un settimo del video speso a far vedere una V a chi non sa
> ancora di cosa si parla. Il marchio lo portano la pastiglia col logo in sovrimpressione e la
> chiusura.

Perché non con un generatore di video: i modelli sbagliano le lettere (escono «Velecco»,
«Veleko») e ridisegnano il marchio a modo loro. Qui la V è lo stesso poligono del favicon del
sito, quindi il segno è identico a quello di tutto il resto.

**Sui video già online non si mette niente** (deciso da Maurizio l'11/11/2026): né intro, né
chiusura, né schermate finali. Sono video con anni di visualizzazioni alle spalle: si tagliano le
estremità col marchio vecchio e basta. Il marchio lo portano già la filigrana con la V, le
miniature nuove e il canale intorno. Intro e chiusura valgono **solo per i video nuovi**.

**Dove non vanno messe**: su un video già pubblicato, perché l'editor di YouTube taglia soltanto
e rimontarlo significherebbe ricaricarlo e perdere le visualizzazioni; e sui video corti, dove
un'intro si mangia un terzo della durata. Su YouTube le intro fanno scappare la gente nei primi
secondi: meglio nessuna intro che una lunga. Per chiudere un video già online ci sono le
**Schermate finali** di Studio, che si aggiungono senza ricaricare niente (servono almeno 25
secondi di durata).

## Da fare dopo

- **Filigrana**: Personalizzazione → Branding → Filigrana del video, con `filigrana-150.png`,
  «Tutto il video».
- **Caricamenti predefiniti** (Impostazioni → Caricamenti predefiniti): categoria, descrizione
  standard e tag già pronti, così ogni video nuovo parte con il piè di pagina giusto.
- **Trailer del canale** per chi non è iscritto: per ora nessuno dei video va bene, serve un
  orizzontale di 30-60 secondi. Da fare quando ci saranno riprese nuove.
- **Short**: pubblicato l'11/11/2026 — https://youtube.com/shorts/95VsLG40llU. **1.200
  visualizzazioni in due giorni** (28 nei primi minuti), con 34 iscritti: le porta il flusso degli
  Short, non il seguito. Per confronto, i due video storici hanno fatto 3.700 visualizzazioni in
  cinque anni.
  **Ma zero visite al sito**: dall'11 al 13/11 in GA4 non risulta nessuna sessione da YouTube,
  nonostante il link con gli UTM nella descrizione. È il comportamento normale degli Short — chi
  guarda resta nel flusso e non esce — e vuol dire che **gli Short non si misurano in GA4**: si
  misurano in visualizzazioni, iscritti e commenti, e si valutano sul telefono che squilla. Miniatura
  presa dal video, fra i tre fotogrammi che YouTube propone: il secondo 2-4 col sottotitolo
  «Lo consiglierebbe, lei, questo scooter?». Categoria «Auto e motori» (la voce «Auto e veicoli»
  non esiste). YouTube lo ha classificato come Short da solo, perché è verticale.

## Il prossimo Short: «Niente patente, niente bollo» (13/11/2026)

File: `bozze/video/reel-senza-patente.mp4` — 1080×1920, 18 s, muto di parlato (solo scritte).
È uno dei quattro reel montati settimane fa e mai usciti. Scelto per primo perché risponde alla
domanda con più ricerche fra quelle che il sito copre («scooter elettrico senza patente per
anziani», 500 ricerche al mese, pagina già online).

**Attenzione al formato**: i quattro reel sono *cartoline* — cornice verde, titolo in alto,
finestrella di filmato al centro per circa un terzo dell'altezza, testo sotto. Nel feed di
Instagram funzionano; su Shorts, dove il video riempie lo schermo, una striscia di filmato in una
cornice sembra una slide. Se questo Short va male non sapremo se è il tema, la mancanza di una
persona che parla o il formato a cartolina: le tre cose cambiano insieme.

### YouTube — Short

**Titolo**: `Lo scooter per anziani si guida senza patente? #shorts`

**Descrizione**:

> Il Veleco Faster è uno scooter elettrico a quattro ruote per anziani e per chi fa fatica a
> camminare. Non serve la patente, non si paga il bollo e l'assicurazione non è obbligatoria: per
> il Codice della Strada non è un veicolo, è un dispositivo medico di Classe 1 CE per la mobilità.
> Si va a passo d'uomo sui marciapiedi e nelle aree pedonali.
>
> Showroom e prova gratuita a Genova Nervi, via Giuseppe Pessale 20r, da martedì a sabato dalle
> 10 alle 20. Consegna a casa in tutta Italia continentale, compresa nel prezzo.
>
> Tutte le regole, spiegate per bene: https://concessionariovelecoitalia.it/scooter-elettrico-senza-patente-anziani/?utm_source=youtube&utm_medium=short&utm_campaign=senza-patente
>
> Telefono e WhatsApp: 328 975 4412

**Tag**: scooter senza patente, scooter elettrico anziani, veleco, veleco faster, mobility
scooter, scooter per disabili, codice della strada, genova

**Dove si carica**: a mano. Il canale **non è collegato a Metricool** (il brand 7853509 ha solo
Instagram e la scheda Google).

### Instagram — reel

> Serve la patente? No.
>
> Il Veleco Faster non è un veicolo per il Codice della Strada: è un dispositivo medico di Classe
> 1 CE. Niente patente, niente bollo, assicurazione non obbligatoria. Si va a passo d'uomo, sui
> marciapiedi e nelle aree pedonali, dove va un pedone.
>
> Quattro ruote a terra e una sospensione su ognuna: sta fermo sulla rampa e sul selciato.
>
> Prova gratuita nello showroom di Genova Nervi, via Giuseppe Pessale 20r, da martedì a sabato
> dalle 10 alle 20. 328 975 4412. Il sito è nel link in bio.
>
> #scooterperanziani #scooterelettrico #senzapatente #veleco #velecofaster #genova #nervi

### Cosa guardare dopo

Visualizzazioni a 48 ore, da confrontare con le **1.200** della testimonianza. Non le visite al
sito: gli Short non ne portano (vedi sopra).
