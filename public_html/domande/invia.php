<?php
// Riceve le risposte di domande/index.html e le manda per email a CAME Comunicazione.
// Una copia resta fuori dal sito (domains/concessionariovelecoitalia.it/domande-risposte/), nel caso l'email non arrivi.
const DESTINATARIO = 'info@camecomunicazione.it';
const MITTENTE = 'noreply@concessionariovelecoitalia.it';

date_default_timezone_set('Europe/Rome');
header('X-Robots-Tag: noindex, nofollow');
header('Referrer-Policy: no-referrer');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Location: ./', true, 303); exit; }

$testo = fn($k, $max = 300) => mb_substr(trim(str_replace(["\r", "\0"], '', (string)($_POST[$k] ?? ''))), 0, $max);
$elenco = fn($k) => array_map(fn($v) => mb_substr(trim((string)$v), 0, 80), is_array($_POST[$k] ?? null) ? $_POST[$k] : []);

$ok = true;
if ($testo('sito_web') === '') {   // campo trappola: lo riempiono solo i robot
  $righe = ["Risposte di Valentina (Concessionario Veleco Italia)", 'Inviate il ' . date('d/m/Y H:i'), ''];
  $righe[] = '1. I 7 scooter venduti da luglio';
  $citta = $elenco('citta'); $fonte = $elenco('fonte');
  for ($i = 0; $i < 7; $i++) {
    $c = $citta[$i] ?? ''; $f = $fonte[$i] ?? '';
    $righe[] = '   ' . ($i + 1) . ') ' . ($c !== '' ? $c : '—') . ' · ' . ($f !== '' ? $f : '—');
  }
  $righe[] = '';
  $righe[] = '2. Quanto resta su un Faster: ' . ($testo('margine') ?: '—');
  $righe[] = '   Piombo e Litio diversi: ' . ($testo('margine_diverso') ?: 'no') . ($testo('margine_nota') !== '' ? ' — ' . $testo('margine_nota') : '');
  $righe[] = '';
  $righe[] = '3. Su 10 che chiedono, comprano: ' . ($testo('comprano') ?: '—');
  $righe[] = '';
  $righe[] = '4. Risponde al telefono: ' . (implode(', ', $elenco('giorni')) ?: '—') . ', dalle ' . ($testo('ora_dalle', 5) ?: '?') . ' alle ' . ($testo('ora_alle', 5) ?: '?');
  $righe[] = '';
  $righe[] = '5. Budget mensile per la pubblicità: ' . ($testo('budget') ?: '—');
  $righe[] = '';
  $righe[] = 'Note: ' . ($testo('note', 3000) ?: '—');
  $corpo = implode("\n", $righe) . "\n";

  $cartella = dirname(__DIR__, 2) . '/domande-risposte';
  if (!is_dir($cartella)) @mkdir($cartella, 0700, true);
  @file_put_contents($cartella . '/' . date('Y-m-d_His') . '.txt', $corpo);

  $oggetto = '=?UTF-8?B?' . base64_encode('Risposte di Valentina – Veleco') . '?=';
  $intestazioni = "From: Concessionario Veleco Italia <" . MITTENTE . ">\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit";
  $ok = mail(DESTINATARIO, $oggetto, $corpo, $intestazioni, '-f' . MITTENTE);
}
?><!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title><?= $ok ? 'Grazie' : 'Invio non riuscito' ?></title>
<style>
body{margin:0;background:#FBF8F1;color:#20231F;font:17px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
main{max-width:560px;margin:0 auto;padding:64px 16px;text-align:center}
h1{font-family:Georgia,"Times New Roman",serif;color:#0F332D;font-size:30px;margin:0 0 12px}
a{color:#1B4B43;font-weight:700}
</style>
</head>
<body>
<main>
<?php if ($ok): ?>
<h1>Grazie, Valentina!</h1>
<p>Le risposte sono arrivate a Maurizio. Ti aggiorniamo noi con il piano.</p>
<?php else: ?>
<h1>Qualcosa non ha funzionato</h1>
<p>Le risposte sono state salvate, ma l'email non è partita. Avvisa Maurizio, oppure <a href="./">riprova</a>.</p>
<?php endif; ?>
</main>
</body>
</html>
