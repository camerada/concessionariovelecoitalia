#!/bin/sh
# Pubblica un post sulla scheda Google di Veleco tramite il workflow Pabbly
# «Post scheda Google Veleco» (Webhook → Google Business Profile, Create Call to Action Post).
# Uso:  PABBLY_WEBHOOK_VELECO='https://connect.pabbly.com/...' sh post-google/pubblica.sh N
# dove N è il numero del post in LEGGIMI.md (1-4). Le immagini stanno in
# https://concessionariovelecoitalia.it/assets/post-google/ (cartella non collegata).
set -e
[ -n "$PABBLY_WEBHOOK_VELECO" ] || { echo "Manca PABBLY_WEBHOOK_VELECO (indirizzo del webhook, sta nel workflow Pabbly)"; exit 1; }
BASE=https://concessionariovelecoitalia.it
case "$1" in
  1) IMG=1-prova-gratuita.jpg; LINK=$BASE/; PULS=CALL
     TESTO="Prima di decidere, provalo. Nello showroom di Genova Nervi, in Via Giuseppe Pessale 20r, puoi provare gratis il Veleco Faster, lo scooter elettrico a 4 ruote per anziani e per chi cammina con fatica. Siamo aperti da martedì a sabato, dalle 10 alle 20: chiamaci per fissare la prova." ;;
  2) IMG=2-recensione-roberto.jpg; LINK=$BASE/; PULS=LEARN_MORE
     TESTO="«Grazie a lei sono tornato indipendente nei miei spostamenti.» È quello che ci ha scritto Roberto dopo l'acquisto. Ogni scooter che consegniamo è una persona che torna a uscire da sola. Grazie, Roberto!" ;;
  3) IMG=3-consegna-italia.jpg; LINK=$BASE/rivenditori-veleco-italia/; PULS=LEARN_MORE
     TESTO="Non sei a Genova? Il Veleco Faster arriva a casa tua già montato, in tutta Italia continentale: si scarica, si carica la batteria e si parte. Per Sicilia e Sardegna valutiamo caso per caso. Ti aiutiamo a scegliere al telefono o in videochiamata." ;;
  4) IMG=4-iva-agevolata.jpg; LINK=$BASE/; PULS=CALL
     TESTO="Con i requisiti della Legge 104, lo scooter elettrico può avere l'IVA agevolata al 4%, e in più la detrazione del 19%. Verifichiamo insieme la tua situazione prima dell'acquisto, senza impegno. Chiama il 328 975 4412." ;;
  *) echo "Uso: sh post-google/pubblica.sh 1|2|3|4"; exit 1 ;;
esac
# il workflow Pabbly ha il pulsante fisso «Scopri di più» (LEARN_MORE) con il campo link;
# «pulsante» viene inviato comunque, per quando il workflow lo mapperà.
python3 - "$TESTO" "$BASE/assets/post-google/$IMG" "$LINK" "$PULS" <<'PY' | curl -sS -X POST "$PABBLY_WEBHOOK_VELECO" -H 'Content-Type: application/json' --data @- -w '\nHTTP %{http_code}\n'
import json,sys
print(json.dumps({"testo":sys.argv[1],"immagine":sys.argv[2],"link":sys.argv[3],"pulsante":sys.argv[4]}, ensure_ascii=False))
PY
