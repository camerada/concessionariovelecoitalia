#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Legge lo stato della scheda Merchant Center di Concessionario Veleco (644395007).

Serve l'account di servizio `claude-veleco@veleco-italia` (chiave in base64 nella variabile
d'ambiente GOOGLE_SERVICE_ACCOUNT_JSON_B64), con accesso Admin alla scheda.
Il token si crea a mano (JWT firmato con openssl): non servono librerie Google.

Due cose fatte il 13/11/2026 sul progetto Cloud `veleco-italia` (279492594965):
accese `merchantapi.googleapis.com` e `shoppingcontent.googleapis.com`.
La Content API for Shopping e' stata dismessa il 18/8/2026, quindi si usa la Merchant API,
che pero' vuole il progetto Cloud REGISTRATO nella scheda Merchant: si fa una volta sola
da Merchant Center (Impostazioni -> Accesso API / sviluppatori). Finche' non e' fatto,
questo comando lo dice e si ferma.

Uso:
    python3 -I report/strumenti/merchant.py
"""
import base64, datetime, json, os, subprocess, sys, tempfile, urllib.error, urllib.parse, urllib.request

CONTO = "644395007"
AMBITI = "https://www.googleapis.com/auth/content"
ACCOUNTS = "https://merchantapi.googleapis.com/accounts/v1/"
PRODOTTI = "https://merchantapi.googleapis.com/products/v1/"


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


def chiedi(t, url):
    try:
        return json.load(urllib.request.urlopen(
            urllib.request.Request(url, headers={"Authorization": "Bearer " + t})))
    except urllib.error.HTTPError as e:
        return {"_errore": e.code, "_testo": e.read().decode()[:500]}


def non_registrato(d):
    return "_errore" in d and d["_errore"] == 401 and "not registered" in d["_testo"]


def spiega_registrazione():
    print("Il progetto Cloud `veleco-italia` (279492594965) non e' ancora registrato nella")
    print("scheda Merchant 644395007. Si fa una volta sola, da Merchant Center:")
    print("  Impostazioni -> Accesso API / sviluppatori -> collega il progetto Cloud.")
    print("Fatto quello, questo comando legge stato del conto, avvisi e prodotti.")


def main():
    t = token()

    conto = chiedi(t, ACCOUNTS + "accounts/%s" % CONTO)
    if non_registrato(conto):
        spiega_registrazione(); return
    print("=== CONTO ===")
    if "_errore" in conto:
        print("  errore %s: %s" % (conto["_errore"], conto["_testo"].replace("\n", " ")[:300]))
    else:
        print("  nome: %s" % conto.get("accountName"))
        print("  paese: %s   fuso: %s" % (conto.get("languageCode"), conto.get("timeZone", {}).get("id")))

    print("")
    print("=== AVVISI DEL CONTO ===")
    av = chiedi(t, ACCOUNTS + "accounts/%s/issues" % CONTO)
    if "_errore" in av:
        print("  errore %s: %s" % (av["_errore"], av["_testo"].replace("\n", " ")[:300]))
    else:
        voci = av.get("accountIssues", []) or []
        if not voci:
            print("  nessun avviso")
        for v in voci:
            print("  [%s] %s" % (v.get("severity"), v.get("title")))
            if v.get("detail"):        print("        %s" % v["detail"])
            if v.get("documentationUri"): print("        %s" % v["documentationUri"])
            for i in v.get("impactedDestinations", []) or []:
                reg = ", ".join(x.get("regionCodes", [""])[0] for x in i.get("impacts", []) or [])
                print("        %s: %s" % (i.get("reportingContext"), reg or "-"))

    print("")
    print("=== PRODOTTI ===")
    pr = chiedi(t, PRODOTTI + "accounts/%s/products?pageSize=50" % CONTO)
    if "_errore" in pr:
        print("  errore %s: %s" % (pr["_errore"], pr["_testo"].replace("\n", " ")[:300])); return
    voci = pr.get("products", []) or []
    if not voci:
        print("  nessun prodotto")
    for p in voci:
        a = p.get("productAttributes", {}) or {}
        print("")
        print("  %s  (%s)" % (a.get("title", "?"), p.get("offerId", "?")))
        st = p.get("productStatus", {}) or {}
        for d in st.get("destinationStatuses", []) or []:
            print("    %-24s approvato: %-10s respinto: %-10s in attesa: %s" % (
                d.get("reportingContext", "?"),
                ",".join(d.get("approvedCountries") or []) or "-",
                ",".join(d.get("disapprovedCountries") or []) or "-",
                ",".join(d.get("pendingCountries") or []) or "-"))
        for q in st.get("itemLevelIssues", []) or []:
            print("    [%s] %s" % (q.get("resolution"), q.get("description")))
            if q.get("detail"): print("          %s" % q["detail"])


if __name__ == "__main__":
    main()
