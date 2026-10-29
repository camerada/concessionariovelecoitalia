#!/usr/bin/env python3
"""Raccoglie le notizie della settimana che interessano chi ha più di 70 anni e chi assiste un genitore.
Fonte: Google News in italiano (RSS), ultimi N giorni, con un elenco fisso di ricerche.
Uso:  python3 -I post-google/strumenti/notizie.py [giorni] [max per ricerca]
Stampa un elenco Markdown: data | fonte | titolo | link, raggruppato per tema, senza doppioni.
Le fonti si citano per nome nei post; i link servono solo per leggere l'articolo e non vanno nei post."""
import sys, html, re, urllib.request, urllib.parse, xml.etree.ElementTree as ET, time
giorni = int(sys.argv[1]) if len(sys.argv) > 1 else 7
maxr = int(sys.argv[2]) if len(sys.argv) > 2 else 6
TEMI = {
  "Agevolazioni e Legge 104": ["legge 104 novità", "invalidità civile INPS novità", "IVA agevolata disabili", "detrazione spese sanitarie anziani"],
  "Caregiver e famiglia": ["caregiver familiare", "assistenza genitore anziano", "badante contributi"],
  "Pensioni e bonus": ["pensionati bonus", "pensioni dicembre", "bonus anziani"],
  "Casa e barriere": ["barriere architettoniche contributi", "montascale bonus", "anziani casa sicura"],
  "Muoversi e trasporti": ["anziani mobilità", "trasporto pubblico anziani sconti", "patente anziani rinnovo", "sicurezza stradale pedoni anziani", "marciapiedi accessibilità"],
  "Salute e movimento": ["anziani camminare salute", "cadute anziani prevenzione", "anziani freddo consigli", "anziani solitudine uscire"],
  "Liguria e Genova": ["Genova anziani", "Liguria anziani servizi", "Genova mobilità pedoni"],
}
BLOCCA = re.compile(r"docenti|scuola|concorso|calcio|serie a|oroscopo|gossip|omicid|arrest|truffa", re.I)
visti = set()
print(f"# Notizie degli ultimi {giorni} giorni ({time.strftime('%d/%m/%Y')})\n")
for tema, ricerche in TEMI.items():
    righe = []
    for q in ricerche:
        url = "https://news.google.com/rss/search?q=" + urllib.parse.quote(f"{q} when:{giorni}d") + "&hl=it&gl=IT&ceid=IT:it"
        for tentativo in range(3):
            try:
                data = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=20).read()
                break
            except Exception as e:
                data = None; time.sleep(2 + 2 * tentativo)
        if not data: righe.append(f"- (ricerca «{q}» non disponibile)"); continue
        for it in ET.fromstring(data).findall(".//item")[:maxr]:
            t = html.unescape(it.findtext("title") or ""); src = it.find("source"); s = src.text if src is not None else ""
            t = re.sub(r"\s+-\s+" + re.escape(s) + r"$", "", t) if s else t
            chiave = re.sub(r"\W+", " ", t.lower())[:60]
            if chiave in visti or BLOCCA.search(t): continue
            visti.add(chiave)
            d = it.findtext("pubDate") or ""
            try: d = time.strftime("%d/%m", time.strptime(d[:16], "%a, %d %b %Y"))
            except Exception: d = d[:10]
            righe.append(f"- {d} | {s} | {t} | {it.findtext('link')}")
    print(f"## {tema}\n" + ("\n".join(righe) if righe else "- niente") + "\n")
