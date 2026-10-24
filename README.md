# SAKA OMNI

<div align="center">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen" alt="Status" />
  <img src="https://img.shields.io/badge/Stack-HTML%2FCSS%2FJS%2FPHP-blue" alt="Stack" />
  <img src="https://img.shields.io/badge/Focus-Business%20Ecosystem-orange" alt="Focus" />
</div>

<p align="center">
  <strong>Futuristic Business Ecosystem</strong>
</p>

## Indonesia

SAKA OMNI adalah landing page startup yang menghadirkan tampilan futuristik untuk bisnis modern. Project ini menampilkan brand positioning, layanan digital, studi kasus, dan formulir kontak yang siap terhubung ke backend email SMTP.

### Fitur utama
- Desain landing page premium dengan gaya glassmorphism futuristic
- Navigasi responsif untuk desktop dan mobile
- Toggle bahasa Indonesia/English
- Section layanan, tentang perusahaan, portofolio, CTA, dan kontak
- Form kontak yang mengirim email melalui SMTP
- Struktur front-end ringan dan mudah dikembangkan

### Struktur project
```text
.
├── index.html
├── styles.css
├── script.js
├── i18n.js
├── privacy.html
├── terms.html
├── LICENSE
├── mail/
│   ├── config.php
│   ├── send-mail.php
│   ├── smtp-mailer.php
│   ├── README-SMTP.md
│   ├── .htaccess
│   └── x.txt
└── README.md
```

### Teknologi yang digunakan
- HTML5
- CSS3
- JavaScript
- PHP (untuk form kontak dan pengiriman email SMTP)

### Cara menjalankan secara lokal
1. Clone repo ini:
```bash
git clone https://github.com/mlevdev364-dev/web.git
cd web
```

2. Jalankan server lokal sederhana:
```bash
php -S localhost:8000
```

3. Buka di browser:
```text
http://localhost:8000
```

### Deployment produksi
Project ini cocok di-hosting di server dengan dukungan PHP, karena form kontak membutuhkan proses backend untuk mengirim email melalui SMTP.

- Upload seluruh file ke hosting Anda
- Pastikan folder `mail/` tersedia di root project
- Sesuaikan konfigurasi SMTP di `mail/config.php`
- Untuk Gmail, gunakan App Password, bukan password akun utama

> Catatan: GitHub Pages tidak mendukung eksekusi PHP, jadi form kontak tidak akan berfungsi di hosting statis murni.

### Konfigurasi email SMTP
File konfigurasi tersedia di:
- `mail/config.php`
- `mail/send-mail.php`
- `mail/smtp-mailer.php`

Panduan lebih detail tersedia di:
- `mail/README-SMTP.md`

---

## English

SAKA OMNI is a startup landing page designed for a modern business ecosystem. This project presents a futuristic brand identity, digital services, portfolio highlights, and a contact form ready to connect with an SMTP email backend.

### Key features
- Premium futuristic landing page design with glassmorphism styling
- Responsive navigation for desktop and mobile devices
- Indonesian/English language toggle
- Services, about, portfolio, CTA, and contact sections
- Contact form that sends emails through SMTP
- Lightweight front-end architecture that is easy to extend

### Project structure
```text
.
├── index.html
├── styles.css
├── script.js
├── i18n.js
├── privacy.html
├── terms.html
├── LICENSE
├── mail/
│   ├── config.php
│   ├── send-mail.php
│   ├── smtp-mailer.php
│   ├── README-SMTP.md
│   ├── .htaccess
│   └── x.txt
└── README.md
```

### Tech stack
- HTML5
- CSS3
- JavaScript
- PHP (for contact form and SMTP delivery)

### Run locally
1. Clone the repository:
```bash
git clone https://github.com/mlevdev364-dev/web.git
cd web
```

2. Start a local PHP server:
```bash
php -S localhost:8000
```

3. Open the website in your browser:
```text
http://localhost:8000
```

### Production deployment
This project is suitable for hosting on a PHP-enabled server because the contact form requires backend processing to send emails via SMTP.

- Upload all project files to your hosting environment
- Ensure the `mail/` folder is present in the project root
- Update SMTP settings in `mail/config.php`
- For Gmail, use an App Password instead of the account password

> Note: GitHub Pages does not execute PHP, so the contact form will not work on a pure static hosting setup.

### SMTP email configuration
Configuration files are available in:
- `mail/config.php`
- `mail/send-mail.php`
- `mail/smtp-mailer.php`

For a more detailed setup guide, see:
- `mail/README-SMTP.md`

---

## Project overview
SAKA OMNI is positioned as a modern business operating system that helps companies unify websites, commerce, automation, analytics, and customer support in one digital experience.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
- Email: hello@saka-ai.my.id
- WhatsApp: +62 851-1133-0391

## About the project
This repository is a polished startup-style landing page for a business ecosystem brand. It is built to communicate credibility, scalability, and a premium digital presence for a modern company.
