#!/usr/bin/env python3
"""Estrae i dati di GA4 e Search Console di concessionariovelecoitalia.it per il report mensile.

Uso:  python3 -I report/strumenti/dati-google.py 2026-10-01 2026-10-31
      (senza date: il mese scorso)

Autenticazione: account di servizio claude-veleco@veleco-italia, chiave nella variabile
d'ambiente GOOGLE_SERVICE_ACCOUNT_JSON_B64 (JSON in base64, impostata nell'ambiente cloud;
mai nel repo). Il token si crea a mano (JWT firmato con openssl): non servono librerie Google.
Search Console pubblica i dati con 2-3 giorni di ritardo: l'ultimo giorno può mancare.
"""
import base64, collections, datetime, json, os, subprocess, sys, tempfile, urllib.parse, urllib.request

PROPRIETA_GA4 = "546703442"
SITO_GSC = "sc-domain:concessionariovelecoitalia.it"
AMBITI = "https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/webmasters.readonly"


def token():
    chiave = os.environ.get("GOOGLE_SERVICE_ACCOUNT_JSON_B64")
    if not chiave:
        sys.exit("Manca la variabile d'ambiente GOOGLE_SERVICE_ACCOUNT_JSON_B64.")
    sa = json.loads(base64.b64decode(chiave))
    b64 = lambda b: base64.urlsafe_b64encode(b).rstrip(b"=")
    adesso = int(datetime.datetime.now(datetime.timezone.utc).timestamp())
    testata = b64(json.dumps({"alg": "RS256", "typ": "JWT"}).encode())
    corpo = b64(json.dumps({"iss": sa["client_email"], "scope": AMBITI, "aud": sa["token_uri"],
                            "iat": adesso, "exp": adesso + 3600}).encode())
    messaggio = testata + b"." + corpo
    with tempfile.NamedTemporaryFile("w", suffix=".pem", delete=False) as f:
        f.write(sa["private_key"]); percorso = f.name
    try:
        firma = subprocess.run(["openssl", "dgst", "-sha256", "-sign", percorso], input=messaggio,
                               capture_output=True, check=True).stdout
    finally:
        os.remove(percorso)
    dati = urllib.parse.urlencode({"grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
                                   "assertion": (messaggio + b"." + b64(firma)).decode()}).encode()
    return json.load(urllib.request.urlopen(urllib.request.Request(sa["token_uri"], data=dati)))["access_token"]


def main():
    if len(sys.argv) >= 3:
        inizio, fine = sys.argv[1], sys.argv[2]
    else:
        oggi = datetime.date.today()
        ultimo = oggi.replace(day=1) - datetime.timedelta(days=1)
        inizio, fine = ultimo.replace(day=1).isoformat(), ultimo.isoformat()
    print(f"# Dati Google {inizio} → {fine}")
    testate = {"Authorization": "Bearer " + token(), "Content-Type": "application/json"}

    def post(url, corpo):
        r = urllib.request.Request(url, data=json.dumps(corpo).encode(), headers=testate)
        return json.load(urllib.request.urlopen(r))

    def ga(dimensioni, metriche, limite=25, ordina=None, filtro=None):
        corpo = {"dateRanges": [{"startDate": inizio, "endDate": fine}],
                 "dimensions": [{"name": d} for d in dimensioni], "metrics": [{"name": m} for m in metriche],
                 "limit": limite}
        corpo["orderBys"] = ([{"metric": {"metricName": ordina}, "desc": True}] if ordina
                             else [{"dimension": {"dimensionName": dimensioni[0]}}])
        if filtro:
            corpo["dimensionFilter"] = filtro
        r = post(f"https://analyticsdata.googleapis.com/v1beta/properties/{PROPRIETA_GA4}:runReport", corpo)
        print(f"\n## GA4 {' + '.join(dimensioni)} | {' | '.join(metriche)}")
        for riga in r.get("rows", []):
            print(" | ".join([v["value"] for v in riga["dimensionValues"]] + [v["value"] for v in riga["metricValues"]]))

    def gsc(dimensioni, limite=50, filtro_pagina=None):
        corpo = {"startDate": inizio, "endDate": fine, "dimensions": dimensioni, "rowLimit": limite}
        if filtro_pagina:
            corpo["dimensionFilterGroups"] = [{"filters": [{"dimension": "page", "operator": "contains",
                                                            "expression": filtro_pagina}]}]
        r = post(f"https://searchconsole.googleapis.com/webmasters/v3/sites/{urllib.parse.quote(SITO_GSC, safe='')}"
                 "/searchAnalytics/query", corpo)
        righe = r.get("rows", [])
        print(f"\n## GSC {' + '.join(dimensioni)}" + (f" (pagina contiene {filtro_pagina})" if filtro_pagina else "")
              + " | clic | impressioni | CTR | posizione")
        for x in righe:
            print(" | ".join(x["keys"]), "|", x["clicks"], "|", x["impressions"], "|",
                  f"{x['ctr']*100:.1f}%", "|", f"{x['position']:.1f}")
        return righe

    # GA4: pubblico, canali, pagine, zone, contatti
    ga(["yearMonth"], ["sessions", "totalUsers", "newUsers", "engagedSessions", "engagementRate",
                       "averageSessionDuration", "keyEvents"])
    ga(["yearWeek"], ["sessions", "totalUsers", "keyEvents"])
    ga(["sessionDefaultChannelGroup"], ["sessions", "totalUsers", "engagedSessions", "keyEvents"], ordina="sessions")
    ga(["sessionSourceMedium"], ["sessions", "engagedSessions", "keyEvents"], limite=15, ordina="sessions")
    ga(["landingPage"], ["sessions", "engagedSessions", "engagementRate", "keyEvents"], ordina="sessions")
    ga(["pagePath"], ["screenPageViews", "totalUsers"], ordina="screenPageViews")
    ga(["region"], ["sessions", "totalUsers"], limite=15, ordina="sessions")
    ga(["city"], ["sessions", "totalUsers"], limite=15, ordina="sessions")
    ga(["deviceCategory"], ["sessions", "engagementRate", "keyEvents"], ordina="sessions")
    ga(["eventName", "isKeyEvent"], ["eventCount", "totalUsers"], limite=30, ordina="eventCount")
    solo_chiave = {"filter": {"fieldName": "isKeyEvent", "stringFilter": {"value": "true"}}}
    ga(["sessionSourceMedium", "eventName"], ["eventCount"], limite=20, ordina="eventCount", filtro=solo_chiave)
    ga(["region", "eventName"], ["eventCount"], limite=20, ordina="eventCount", filtro=solo_chiave)

    # Search Console: totali, settimane, query, pagine, dispositivi
    giorni = gsc(["date"], 400)
    clic = sum(x["clicks"] for x in giorni); impr = sum(x["impressions"] for x in giorni)
    print(f"\n## GSC totale periodo: clic {clic} | impressioni {impr} | CTR {clic/impr*100:.1f}%" if impr else "")
    settimane = collections.defaultdict(lambda: [0, 0])
    for x in giorni:
        s = datetime.date.fromisoformat(x["keys"][0]).isocalendar()[1]
        settimane[s][0] += x["clicks"]; settimane[s][1] += x["impressions"]
    print("\n## GSC per settimana ISO | clic | impressioni")
    for s in sorted(settimane):
        print(s, "|", settimane[s][0], "|", settimane[s][1])
    if giorni:
        print("ultimo giorno con dati:", max(x["keys"][0] for x in giorni))
    query = gsc(["query"], 200)
    marca = [x for x in query if "veleco" in x["keys"][0].lower()]
    if query:
        print(f"\nQuery di marca (contengono «veleco»): {len(marca)} su {len(query)}; "
              f"clic {sum(x['clicks'] for x in marca)}/{sum(x['clicks'] for x in query)}, "
              f"impressioni {sum(x['impressions'] for x in marca)}/{sum(x['impressions'] for x in query)}")
    gsc(["page"], 30)
    gsc(["device"])
    gsc(["query"], 15, filtro_pagina="guida-scooter-elettrico-anziani")


if __name__ == "__main__":
    main()
