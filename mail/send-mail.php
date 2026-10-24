<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

require __DIR__ . '/smtp-mailer.php';
$config = require __DIR__ . '/config.php';

$name = trim(strip_tags($_POST['name'] ?? ''));
$email = trim($_POST['email'] ?? '');
$company = trim(strip_tags($_POST['company'] ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));
$lang = (($_POST['lang'] ?? 'id') === 'en') ? 'en' : 'id';

if (empty($config['host']) || empty($config['username']) || empty($config['password']) || empty($config['from_email']) || empty($config['to_email'])) {
    http_response_code(503);
    echo json_encode([
        'success' => false,
        'message' => $lang === 'en'
            ? 'SMTP configuration is not complete. Please configure the mail settings before production deployment.'
            : 'Konfigurasi SMTP belum lengkap. Silakan isi pengaturan email sebelum deployment produksi.',
    ]);
    exit;
}

$errors = [];
if ($name === '' || mb_strlen($name) > 120) $errors[] = 'name';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if ($message === '' || mb_strlen($message) > 5000) $errors[] = 'message';

if (!empty($_POST['website'])) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Invalid submission.']);
    exit;
}

if ($errors) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => $lang === 'en'
            ? 'Please fill in all required fields correctly.'
            : 'Mohon lengkapi semua kolom yang wajib diisi dengan benar.',
        'fields' => $errors,
    ]);
    exit;
}

$subject = "[SAKA OMNI Website] Pesan baru dari {$name}";
$body = "Pesan baru masuk dari form kontak website SAKA OMNI:\n\n" .
    "Nama        : {$name}\n" .
    "Email       : {$email}\n" .
    "Perusahaan  : " . ($company !== '' ? $company : '-') . "\n" .
    "Bahasa form : " . strtoupper($lang) . "\n" .
    "Waktu       : " . date('Y-m-d H:i:s') . "\n\n" .
    "Pesan:\n{$message}\n";

try {
    $mailer = new SmtpMailer($config);
    $mailer->send(
        $config['from_email'],
        $config['from_name'],
        $config['to_email'],
        $config['to_name'],
        $config['cc_email'] ?? null,
        $email,
        $subject,
        $body
    );

    echo json_encode([
        'success' => true,
        'message' => $lang === 'en'
            ? 'Thanks — your message has been sent. We will reply within one business day.'
            : 'Terima kasih — pesan kamu sudah terkirim. Tim kami akan membalas dalam 1 hari kerja.',
    ]);
} catch (Exception $e) {
    http_response_code(500);
    error_log('[SAKA contact form] SMTP error: ' . $e->getMessage());
    echo json_encode([
        'success' => false,
        'message' => $lang === 'en'
            ? 'Something went wrong while sending your message. Please try again later.'
            : 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.',
    ]);
}
