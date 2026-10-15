#!/bin/sh
# Carica il sito su Hostinger via SSH, con l'alias «came» di ~/.ssh/config (lo stesso dei siti su misura).
#   sh carica.sh                  → domains/concessionariovelecoitalia.it/public_html
#   sh carica.sh <cartella>       → altra cartella sul server (es. per una prova)
# Usa solo ssh, tar e cksum: niente rsync, va anche su Mac Intel.
# Carica solo i file cambiati (confronto con cksum), mostra l'elenco e chiede conferma. Non cancella MAI niente sul server:
# prima di sovrascrivere salva i file che cambiano in ~/backup-velecoitalia/<data>.tar (fuori dal sito).
set -e
QUI=$(cd "$(dirname "$0")" && pwd)
SORGENTE="$QUI/public_html"
CARTELLA="${1:-domains/concessionariovelecoitalia.it/public_html}"
SSH_ALIAS="${SSH_ALIAS:-came}"
[ -f "$SORGENTE/index.html" ] || { echo "Non trovo $SORGENTE/index.html"; exit 1; }
remoto() { ssh -o ConnectTimeout=20 "$SSH_ALIAS" "$@"; }

LAVORO=$(mktemp -d)
trap 'rm -rf "$LAVORO"' EXIT
# Mai i file nascosti del Mac (.DS_Store, ._*)
( cd "$SORGENTE" && find . -type f | sed 's#^\./##' ) | grep -v -E '(^|/)(\.DS_Store$|\._)' | sort > "$LAVORO/file"

echo "Controllo cosa cambia su $SSH_ALIAS:$CARTELLA ..."
remoto "test -d '$CARTELLA'" || { echo "ERRORE: collegamento non riuscito o cartella $CARTELLA inesistente. Non ho caricato niente."; exit 1; }
( cd "$SORGENTE" && xargs cksum < "$LAVORO/file" ) | sort > "$LAVORO/qui"
remoto "cd '$CARTELLA' && { xargs cksum 2>/dev/null; true; }" < "$LAVORO/file" | sort > "$LAVORO/la"
# Da caricare = i file il cui «cksum dimensione nome» qui non coincide con quello sul server
comm -23 "$LAVORO/qui" "$LAVORO/la" | awk '{ $1=""; $2=""; sub(/^  /, ""); print }' | sort > "$LAVORO/cambiati"
if [ ! -s "$LAVORO/cambiati" ]; then echo "Niente da caricare: sul server è già tutto aggiornato."; exit 0; fi
cat "$LAVORO/cambiati"
printf "Carico questi %s file in %s? [s/N] " "$(wc -l < "$LAVORO/cambiati" | tr -d ' ')" "$CARTELLA"
read -r ok
[ "$ok" = "s" ] || [ "$ok" = "S" ] || { echo "Annullato, non ho caricato niente."; exit 0; }
COPIA="backup-velecoitalia/$(date +%Y%m%d-%H%M%S).tar"
remoto "mkdir -p ~/backup-velecoitalia && cd '$CARTELLA' && { xargs sh -c 'for f; do [ -f \"\$f\" ] && echo \"\$f\"; done; true' x | tar -cf ~/$COPIA -T - 2>/dev/null; true; }" < "$LAVORO/cambiati"
echo "Copia dei file sostituiti: ~/$COPIA"
# COPYFILE_DISABLE: il tar del Mac non aggiunge i file nascosti ._ con i metadati
# shellcheck disable=SC2046
if ! ( cd "$SORGENTE" && COPYFILE_DISABLE=1 tar -cf - $(cat "$LAVORO/cambiati") ) | remoto "cd '$CARTELLA' && tar -xmf -"; then
  echo "ERRORE: caricamento non riuscito (alcuni file potrebbero essere già stati copiati). Riprova."; exit 1
fi
echo "Fatto. Se una modifica non si vede: Hostinger → Svuota la cache."
