#!/usr/bin/env python3
"""Pubblica un post sulla scheda Google di Veleco tramite il workflow Pabbly
«Post scheda Google Veleco» (Webhook → Google Business Profile, Create Call to Action Post).

Uso:
  python3 -I post-google/strumenti/pubblica.py FILE.md DATA [--prova]
  FILE.md  = post-google/calendario.md oppure post-google/notizie/AAAA-MM-GG.md
  DATA     = AAAA-MM-GG del blocco «## DATA · Titolo» da pubblicare, oppure «oggi»
  --prova  = stampa il post senza inviarlo

Serve la variabile d'ambiente PABBLY_WEBHOOK_VELECO (indirizzo del webhook: sta nel workflow su
connect.pabbly.com e nell'ambiente cloud; chi lo ha può pubblicare sulla scheda, non va nel repo).
Formato di un blocco:
  ## 2026-11-05 · Titolo
  immagine: nome-file.jpg          (in public_html/assets/post-google/)
  link: https://concessionariovelecoitalia.it/...
  testo:
  ...righe di testo fino al blocco successivo...
Nei file delle notizie i blocchi possono avere anche «stato: approvato» / «stato: scartato»:
con DATA si pubblica solo il blocco approvato di quel giorno."""
import sys, os, re, json, datetime, urllib.request

BASE = "https://concessionariovelecoitalia.it"
def blocchi(testo):
    out = []
    for m in re.finditer(r"^## (\d{4}-\d{2}-\d{2})\s*·\s*(.+?)\s*$([\s\S]*?)(?=^## |\Z)", testo, flags=re.M):
        data, titolo, corpo = m.group(1), m.group(2), m.group(3)
        campi = dict(re.findall(r"^(immagine|link|stato|fonte):\s*(.+?)\s*$", corpo, flags=re.M))
        t = re.search(r"^testo:\s*$([\s\S]*)", corpo, flags=re.M)
        campi["testo"] = re.sub(r"\n{3,}", "\n\n", t.group(1)).strip() if t else ""
        campi.update(data=data, titolo=titolo); out.append(campi)
    return out

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]; prova = "--prova" in sys.argv
    if len(args) != 2: sys.exit(__doc__)
    percorso, data = args
    if data == "oggi": data = datetime.date.today().isoformat()
    candidati = [b for b in blocchi(open(percorso, encoding="utf-8").read()) if b["data"] == data]
    approvati = [b for b in candidati if b.get("stato", "").lower().startswith("approv")]
    if any("stato" in b for b in candidati) and not approvati:
        sys.exit(f"Nessun post approvato per il {data} in {percorso}: niente da pubblicare.")
    scelti = approvati or candidati
    if not scelti: sys.exit(f"Nessun post con data {data} in {percorso}.")
    if len(scelti) > 1: sys.exit(f"Più di un post per il {data}: segna «stato: approvato» su uno solo.")
    b = scelti[0]
    if not b.get("testo") or not b.get("link"): sys.exit("Blocco incompleto: servono testo e link.")
    if not (1 <= len(b["testo"]) <= 1500): sys.exit(f"Testo di {len(b['testo'])} caratteri: Google accetta al massimo 1500.")
    if "http" in b["testo"]: sys.exit("Nel testo non vanno link: la fonte si cita per nome.")
    payload = {"testo": b["testo"], "immagine": f"{BASE}/assets/post-google/{b['immagine']}" if b.get("immagine") else "",
               "link": b["link"], "pulsante": "LEARN_MORE", "titolo": b["titolo"], "data": b["data"]}
    print(json.dumps(payload, ensure_ascii=False, indent=1))
    if prova: print("(prova: non inviato)"); return
    hook = os.environ.get("PABBLY_WEBHOOK_VELECO")
    if not hook: sys.exit("Manca la variabile d'ambiente PABBLY_WEBHOOK_VELECO.")
    if payload["immagine"]:
        with urllib.request.urlopen(payload["immagine"], timeout=30) as r:
            if r.status != 200: sys.exit("Immagine non raggiungibile online: " + payload["immagine"])
    req = urllib.request.Request(hook, data=json.dumps(payload, ensure_ascii=False).encode("utf-8"), headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as r:
        print("Pabbly:", r.status, r.read().decode("utf-8", "replace"))

if __name__ == "__main__": main()
