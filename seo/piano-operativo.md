# Piano operativo SEO — novembre 2026 → gennaio 2027

> **Per i calendari vale `seo/cose-da-fare.md`** (deciso da Maurizio l'8/11/2026): è
> l'aggiornamento più recente, con le sue note del 3/11 sera. Questo file resta valido per
> l'analisi, le parole chiave, i testi delle pagine e la lista di controllo; dove le due
> tabelle degli articoli non coincidono (qui uno ogni due settimane, là uno a settimana dal
> 20/11), vince l'altro file. I primi cinque articoli sono comunque già online.

Base: `seo/parole-chiave.md` (volumi del 3/11/2026). Obiettivo: entrare in prima pagina sulla fascia da 500 ricerche al mese
(«scooter elettrico per anziani prezzi», «scooter elettrico senza patente per anziani», «scooter per anziani»,
«scooter elettrico per disabili», «mobility scooter») e portare «scooter elettrico per anziani» dalla posizione 57 sotto la 20.
Misura: ogni fine mese con `report/strumenti/dati-google.py`, confronto delle posizioni di queste 7 frasi e dei clic non di marca.

Regole fisse: solo fatti già nel sito o confermati da Valentina; l'IVA al 4% si cita ma non si spinge; sede solo Genova;
easyscootergenova.it non si tocca; nei testi si descrive il prodotto, non la persona (vale anche per Google Ads).

## 1. Pagine nuove (settimane 1–2, entro il 17/11)

### A. `/scooter-elettrico-anziani-prezzi/` — parola chiave «scooter elettrico per anziani prezzi» (500/mese)
- Titolo: «Scooter elettrico per anziani: prezzi 2026 e cosa è incluso» (54 caratteri). H1 uguale.
- Descrizione: «Prezzi degli scooter elettrici per anziani Veleco: Faster da 2.200 €, litio 2.850 €. Cosa è compreso, consegna, garanzia 2 anni. Prezzi chiari, senza sorprese.»
- Contenuto: tabella Faster Piombo Gel 2.200 € / Litio 2.850 € con cosa comprende (montaggio, telecomando, allarme, garanzia 2 anni);
  cosa cambia fra piombo e litio; confronto Amazon 1.880 € (già in home); consegna e tempi; gli altri modelli «prezzo su richiesta»
  con link alle ancore di Modelli; una riga sull'IVA al 4% con link alla sezione della home (senza svilupparla); FAQ (5) con dati strutturati.
- Creata dal modello di `rivenditori-veleco-italia/` (stessa testata, piè, tracciamento, consenso).

### B. `/scooter-elettrico-senza-patente-anziani/` — «scooter elettrico senza patente per anziani» (500/mese) e «scooter elettrico senza patente» (5.000, intenzione mista)
- Titolo: «Scooter elettrico senza patente per anziani: come funziona» (57). H1 uguale.
- Descrizione: «Scooter elettrico senza patente per anziani: perché non serve la patente, dove si guida, chi può usarlo. Il Veleco Faster a 4 ruote, prova gratuita a Genova.»
- Contenuto: perché non serve la patente (dispositivo medico CE, non veicolo a motore); niente bollo, assicurazione, revisione;
  dove si guida (marciapiedi, aree pedonali, ciclopedonali) e dove no; chi può guidarlo; differenza con i «scooter elettrici senza patente»
  a due ruote (ciclomotori: servono patentino, casco, targa) per intercettare la ricerca ampia e chiarire subito; Faster e modelli; FAQ (5).
- Le affermazioni legali già nella guida («carreggiata: no», «senza marciapiede come un pedone») restano da confermare con Valentina prima della pubblicazione.

### C. Modifiche alle pagine esistenti (stesse settimane)
- Home: nella sezione «Scooter a 4 ruote per anziani» aggiungere la frase esatta «scooter elettrico 4 ruote per anziani» e, una volta, «mobility scooter a 4 ruote»;
  link alle due pagine nuove dai blocchi Prezzi e Normativa.
- Modelli: nel primo capoverso «Mobility scooter è il nome inglese di questi mezzi…» (500 ricerche, parola oggi assente); descrizione già aggiornata il 29/10: chiedere la reindicizzazione in Search Console.
- Chi siamo: titolo «Chi siamo | Valentina Colomba, concessionaria Veleco a Genova» (copre «scooter elettrico genova» senza altro lavoro).
- Guida: titolo invariato; aggiungere in fondo «Approfondimenti» con i link agli articoli man mano che escono; nel testo una citazione di «mobility scooter».
- Piè di pagina di tutte le 13 pagine: link «Prezzi» e «Senza patente» con la frase esatta come testo; regionali: un capoverso che rimanda a Prezzi.
- sitemap.xml e llms.txt aggiornati; richiesta di scansione per ogni pagina nuova o modificata.

## 2. Articoli della guida (cartella `/guida/`, uno ogni due settimane, giovedì)
Stesso modello HTML del sito, 800–1.200 parole, titolo ≤ 60 caratteri con la frase in testa, FAQ con dati strutturati,
almeno 3 link interni (Faster, Modelli, una delle pagine nuove), elencati nella guida e nel piè sotto «Guida».

| Data | Articolo | Frase obiettivo | Fonte del dato |
|---|---|---|---|
| 20/11 | Scooter elettrico per anziani: normativa e Codice della Strada | …normativa, …codice della strada | 12 impr., pos. 31; domanda frequente |
| 4/12 | Quanta autonomia ha uno scooter elettrico per anziani | autonomia scooter elettrico per anziani | 7 impr., pos. 70 |
| 18/12 | Scooter per disabili: chi può guidarlo e serve la patente? | scooter per disabili (5.000), chi può guidare | «Le persone hanno chiesto anche» |
| 8/1 | Mobility scooter: cosa sono e quali modelli esistono | mobility scooter (500) | parola assente dal sito |
| 22/1 | Scooter elettrico per anziani coperto: i modelli con tetto | …coperto, …con tetto (50) | Faster, Gravis, Draco, Turris con tetto |
| 5/2 | Scooter elettrico per anziani: nuovo o usato? | …usato (500, solo informativo) | sezione già nella guida, da ampliare |
| da definire | Lo scooter elettrico lo passa l'ASL? | scooter per disabili ASL / gratis | solo dopo la risposta di Valentina |

## 3. Post: scheda Google e Instagram
- Giovedì, scheda Google: resta il calendario in `post-google/calendario.md`, con due cambi: ogni post prende una frase dell'elenco e porta
  alla pagina corrispondente; il post del 3/12 «IVA al 4%» diventa «Quanto costa uno scooter elettrico per anziani» con link alla pagina Prezzi.
  Mappa: 5/11 prova gratuita → home; 12/11 recensione Gemma → home; 19/11 consegna → Dove comprare; 26/11 salite e autonomia → articolo autonomia (uscito il 4/12: spostare il post al 10/12 e anticipare «recensione di Andrea» al 26/11);
  17/12 dove si può guidare → pagina Senza patente; 7/1 assistenza → Assistenza; 14/1 piombo o litio → Prezzi; 21/1 freddo e batteria → articolo autonomia.
- Martedì, scheda Google: la notizia della settimana, invariata.
- Instagram (`easyscooter_scooterelettrici`, collegato in Metricool): lo stesso post del giovedì, immagine rifatta 1080×1350 con `immagine.js`,
  testo più corto (massimo 300 caratteri) e la frase obiettivo nelle prime parole; programmato da Metricool con la data del giovedì alle 12.
  Il martedì una storia con la notizia. Niente link cliccabili nei post: il link del sito sta nella bio, con la pagina Prezzi.
- Ogni post nuovo (pagina o articolo) ha un post Google e uno Instagram dedicati nella settimana di uscita.

## 4. Fuori dal sito (Valentina / Maurizio)
- Merchant Center gratuito per il Faster (due varianti, prezzo, foto, link alla pagina Prezzi): oggi nel riquadro «Negozi» di Google ci sono solo rivenditori terzi.
- Link da veleco.it: Valentina chiede a Veleco l'inserimento nella pagina rivenditori con link a concessionariovelecoitalia.it.
- Risposta di Valentina su: ASL e fornitura gratuita; conferma delle frasi legali della guida; se i modelli con tetto sono ordinabili e con che tempi.
- Instagram: verificare che il profilo abbia il sito in bio e il numero di telefono.

## 5. Calendario riassuntivo
| Settimana | Sito | Post Google (gio) | Instagram |
|---|---|---|---|
| 4–10/11 | pagina Prezzi online, piè e sitemap | 5/11 prova gratuita | stesso post |
| 11–17/11 | pagina Senza patente, modifiche home/Modelli/Chi siamo, reindicizzazioni | 12/11 recensione Gemma | stesso post + storia «Prezzi» |
| 18–24/11 | articolo normativa (20/11) | 19/11 consegna in Italia | stesso post + storia articolo |
| 25/11–1/12 | controllo Search Console (prime impressioni delle pagine nuove) | 26/11 recensione Andrea | stesso post |
| 2–8/12 | articolo autonomia (4/12); report di novembre | 3/12 quanto costa → Prezzi | stesso post |
| 9–15/12 | — | 10/12 salite e autonomia → articolo | stesso post |
| 16–22/12 | articolo scooter per disabili (18/12) | 17/12 dove si può guidare → Senza patente | stesso post |
| 23/12–5/1 | pausa; report di dicembre il 2/1 | 24/12 presenta un amico; 31/12 recensione Asia | stessi post |
| 6–12/1 | articolo mobility scooter (8/1) | 7/1 assistenza | stesso post |
| 13–19/1 | — | 14/1 piombo o litio → Prezzi | stesso post |
| 20–26/1 | articolo con tetto (22/1); nuovo calendario post | 21/1 freddo e batteria | stesso post |
| fine gennaio | report di gennaio: prima verifica vera delle posizioni | | |

## 6. Lista di controllo per ogni pagina o articolo
titolo ≤ 60 con la frase in testa · descrizione 130–155 · H1 = titolo · frase nel primo capoverso · FAQ con dati strutturati ·
3 link interni in entrata e in uscita · immagine con alt · sitemap e llms.txt · scansione richiesta · controllo in Search Console dopo 14 giorni.
