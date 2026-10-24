# Setup Form Kontak SMTP — SAKA OMNI

Folder ini berisi backend PHP yang membuat form kontak di `index.html`
benar-benar mengirim email lewat SMTP (bukan simulasi).

## Yang perlu di-hosting

Fitur ini butuh **hosting yang mendukung PHP** (shared hosting, VPS, dsb).
Tidak bisa jalan kalau situs hanya dihost sebagai file statis
(misalnya GitHub Pages atau semacamnya) karena butuh proses PHP di server.

## Langkah setup

1. **Isi `config.php`** dengan kredensial SMTP kamu:
   - `host`, `port`, `encryption` — dari penyedia email/SMTP kamu
   - `username`, `password` — akun SMTP (untuk Gmail, pakai **App Password**,
     bukan password akun biasa)
   - `to_email` — sudah diisi `hello@saka-ai.my.id`
   - `cc_email` — sudah diisi `mlevian@protonmail.com`

2. **Upload seluruh folder `mail/`** (termasuk `.htaccess`) ke server,
   sejajar dengan `index.html`, `styles.css`, dll.

3. **Test kirim pesan** lewat form di halaman Contact. Kalau gagal:
   - Cek log error PHP di hosting (baris error dari SMTP akan tercatat
     lewat `error_log()` di `send-mail.php`)
   - Pastikan port SMTP (465/587) tidak diblokir firewall hosting
   - Pastikan kredensial SMTP benar dan akun tidak memerlukan
     verifikasi 2 langkah tambahan (untuk Gmail, App Password wajib)

## Keamanan

- `.htaccess` di folder ini memblokir akses langsung ke `config.php`
  dan `smtp-mailer.php` dari browser (khusus server **Apache**).
- Kalau hosting kamu pakai **Nginx / LiteSpeed**, `.htaccess` tidak berlaku —
  minta admin hosting menambahkan aturan block untuk file tersebut,
  atau pindahkan `config.php` ke luar folder yang bisa diakses publik
  dan `require` dengan path absolut dari `send-mail.php`.
- Jangan commit `config.php` yang sudah berisi password asli ke
  repository publik (GitHub, dll).

## Mengganti dengan PHPMailer (opsional)

`smtp-mailer.php` di sini adalah implementasi SMTP minimal tanpa dependency,
supaya bisa langsung jalan tanpa Composer. Kalau kamu butuh fitur lebih
lengkap (HTML email, lampiran file, dsb), kamu bisa ganti dengan
[PHPMailer](https://github.com/PHPMailer/PHPMailer):

```bash
composer require phpmailer/phpmailer
```

lalu sesuaikan pemanggilannya di `send-mail.php`.
