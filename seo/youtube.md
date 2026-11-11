# YouTube — il canale da convertire

Scheda dell'11/11/2026. Stessa logica di `seo/instagram.md`: si prende il canale che c'è e lo si
converte al concessionario, senza perdere quello che ha già.

## Com'è adesso

| | |
|---|---|
| Canale | **Easyscooter Genova** — `@easyscootergenova6963` |
| Indirizzo | https://youtube.com/@easyscootergenova6963 |
| Iscritti | 34 |
| Video | 16, l'ultimo di 2 anni fa |
| Descrizione | «E-Mobility Store Genova» |

L'handle finisce con `6963` perché gliel'ha assegnato YouTube d'ufficio: nessuno ne ha mai scelto uno.

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

## I testi del canale

**Nome**: `Veleco Italia – Concessionario ufficiale`

**Handle**: `@velecoitalia` se libero; altrimenti `@velecoitaliagenova`. Cambiandolo, il vecchio
indirizzo `@easyscootergenova6963` smette di funzionare, mentre i link dei singoli video restano
validi: quelli dipendono dall'identificativo del video, non dal canale.

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
| Instagram | `https://www.instagram.com/easyscooter_scooterelettrici/` |
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

## Da fare dopo

- **Filigrana**: Personalizzazione → Branding → Filigrana del video, con `filigrana-150.png`,
  «Tutto il video».
- **Caricamenti predefiniti** (Impostazioni → Caricamenti predefiniti): categoria, descrizione
  standard e tag già pronti, così ogni video nuovo parte con il piè di pagina giusto.
- **Trailer del canale** per chi non è iscritto: per ora nessuno dei video va bene, serve un
  orizzontale di 30-60 secondi. Da fare quando ci saranno riprese nuove.
- **Short**: il primo è `bozze/video/reel-testimonianza-faster.mp4`, titolo e descrizione in
  `seo/testimonianza-video-nov-2026.md`.
