<?php
/**
 * =========================================================
 * SAKA OMNI — Konfigurasi SMTP untuk form kontak
 * =========================================================
 * Isi semua nilai di bawah sesuai akun email/SMTP kamu.
 * File ini TIDAK boleh bisa diakses langsung lewat browser —
 * folder mail/ sudah diberi .htaccess untuk memblokirnya di Apache.
 * Kalau hosting kamu pakai Nginx / LiteSpeed tanpa .htaccess,
 * pastikan admin server juga memblokir akses publik ke folder ini,
 * atau pindahkan file ini ke luar document root (di luar public_html).
 *
 * Contoh nilai umum:
 * - Email hosting cPanel biasa   : host = mail.namadomainmu.com, port 465, ssl
 * - Gmail (pakai App Password)   : host = smtp.gmail.com,       port 587, tls
 * - Zoho Mail                    : host = smtp.zoho.com,        port 587, tls
 */

return [
    // Alamat server SMTP kamu
    'host'       => 'mail.saka-ai.my.id',

    // Port SMTP: 465 untuk SSL, 587 untuk STARTTLS
    'port'       => 587,

    // Jenis enkripsi: 'tls' (STARTTLS, port 587) atau 'ssl' (port 465)
    'encryption' => 'tls',

    // Kredensial login SMTP (biasanya sama dengan alamat "From")
    'username'   => 'hello@saka-ai.my.id',
    'password'   => 'GANTI_DENGAN_PASSWORD_SMTP_ATAU_APP_PASSWORD',

    // Identitas pengirim yang muncul di email
    'from_email' => 'hello@saka-ai.my.id',
    'from_name'  => 'SAKA OMNI Website',

    // Penerima utama pesan dari form kontak
    'to_email'   => 'hello@saka-ai.my.id',
    'to_name'    => 'SAKA OMNI Team',

    // Tembusan (Cc) otomatis untuk setiap pesan masuk
    'cc_email'   => 'mlevian@protonmail.com',

    // Timeout koneksi SMTP (detik)
    'timeout'    => 15,
];
