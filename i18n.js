// SAKA — i18n (ID / EN)
// Bahasa default: Indonesia (umum/santai, bukan bahasa baku formal)
// Catatan: pilihan bahasa disimpan di variabel JS (bukan localStorage/sessionStorage),
// jadi akan kembali ke default setiap kali halaman dimuat ulang.

var SAKA_I18N = {
  id: {
    // Navbar
    nav_home: "Beranda",
    nav_services: "Layanan",
    nav_about: "Tentang",
    nav_portfolio: "Portofolio",
    nav_contact: "Kontak",
    nav_getstarted: "Mulai Sekarang",

    // Hero
    hero_eyebrow: "Ekosistem Bisnis Futuristik",
    hero_title_pre: "Bangun bisnis masa depan bersama",
    hero_title_accent: "SAKA OMNI",
    hero_sub: "Satu platform yang menghubungkan website, penjualan, otomatisasi, dan support — dibuat untuk tim yang gerak cepat dan mikir ke depan.",
    hero_btn_start: "Mulai Sekarang",
    hero_btn_portfolio: "Lihat Portofolio",
    hero_panel_title: "OMNI Control Center",
    hero_panel_desc: "Semua produk, metrik, dan alur kerja yang dijalankan SAKA untuk bisnismu — jadi satu di satu panel kaca.",
    chip_1: "Analitik real-time",
    chip_2: "Alur kerja otomatis",
    chip_3: "Keamanan level enterprise",
    stat_1_label: "Bisnis Bergabung",
    stat_2_label: "% Uptime SLA",
    stat_3_label: "/7 Support Global",

    trusted_label: "Dipercaya tim yang lagi bangun bisnis generasi berikutnya",

    // Services
    services_tag: "Layanan",
    services_title: "Semua kebutuhan bisnismu, dalam satu tempat",
    services_sub: "SAKA gantiin tumpukan tools yang terpisah-pisah dengan satu platform yang nyambung, dibuat buat kecepatan dan skala.",
    card1_title: "Website & Toko Online",
    card1_desc: "Luncurin situs atau toko online yang cepat dan sesuai brand tanpa perlu ngoding infrastruktur.",
    card2_title: "Growth & Analitik",
    card2_desc: "Pantau tiap funnel dan channel secara real-time, dengan laporan yang emang dibuat buat ambil keputusan, bukan cuma dashboard.",
    card3_title: "Mesin Otomatisasi",
    card3_desc: "Sambungin alur kerja di support, billing, dan operasional biar kerjaan rutin jalan sendiri.",
    card4_title: "Keamanan & Kepatuhan",
    card4_desc: "Enkripsi, kontrol akses, dan audit log udah ada dari awal — bukan tempelan belakangan.",

    // About
    about_tag: "Tentang SAKA",
    about_title: "Dibangun oleh operator bisnis, untuk operator bisnis",
    about_desc: "SAKA awalnya cuma tools internal buat jalanin bisnis retail yang lagi berkembang, terus akhirnya jadi platform yang banyak diminta founder lain. Sekarang OMNI, sistem utama kami, jalanin keseharian tim yang lebih milih bangun bisnis ketimbang ngurusin software.",
    about_li1: "Satu platform, bukan belasan tools yang terpisah-pisah",
    about_li2: "Onboarding hitungannya jam, bukan bulan",
    about_li3: "Tim support yang beneran jawab, bukan cuma antrian tiket",
    about_btn: "Ngobrol Sama Tim Kami",

    // Portfolio
    portfolio_tag: "Portofolio",
    portfolio_title: "Bisnis yang jalan pakai SAKA OMNI",
    portfolio_sub: "Beberapa tim yang udah kita bantu pindah dari spreadsheet ke sistem operasional beneran.",
    folio1_tag: "Retail",
    folio1_desc: "Toko online + otomatisasi stok buat grup retail 40 cabang.",
    folio2_tag: "Fintech",
    folio2_desc: "Alur kepatuhan dan laporan buat startup pembayaran regional.",
    folio3_tag: "Logistik",
    folio3_desc: "Dashboard real-time yang nyambungin dispatch, armada, dan billing klien.",
    folio4_tag: "Hospitality",
    folio4_desc: "Situs booking dan otomatisasi tamu buat grup 8 properti.",
    folio5_tag: "SaaS",
    folio5_desc: "Otomatisasi support dan billing buat tim software B2B yang lagi tumbuh.",
    folio6_tag: "Pendidikan",
    folio6_desc: "Situs pendaftaran dan alur siswa buat akademi online.",

    // CTA band
    cta_title: "Siap jalanin bisnismu di satu platform?",
    cta_sub: "Bikin workspace gratis dalam hitungan menit, atau ngobrol sama tim kami soal migrasi terpandu.",
    cta_btn1: "Mulai Gratis",
    cta_btn2: "Jadwalin Demo",

    // Contact
    contact_tag: "Kontak",
    contact_title: "Yuk, ngobrolin bisnismu",
    contact_sub: "Ceritain kendala kamu, biar kita tunjukin gimana OMNI bisa bantu.",
    info_email_label: "Email",
    info_phone_label: "Telepon / WhatsApp",
    info_office_label: "Kantor",
    form_name_label: "Nama lengkap",
    form_name_ph: "Nama kamu",
    form_email_label: "Email",
    form_email_ph: "kamu@perusahaan.com",
    form_company_label: "Perusahaan",
    form_company_ph: "Nama perusahaan",
    form_message_label: "Pesan",
    form_message_ph: "Ceritain soal bisnismu",
    form_btn_send: "Kirim Pesan",
    form_note_html: "Dengan mengirim, kamu setuju sama <a href=\"terms.html\" style=\"color:var(--teal);\">Ketentuan Layanan</a> dan <a href=\"privacy.html\" style=\"color:var(--teal);\">Kebijakan Privasi</a> kami.",
    success_title: "Pesan Terkirim",
    success_desc: "Makasih udah menghubungi kami — tim kami bakal balas dalam 1 hari kerja.",
    form_sending: "Mengirim...",

    // Footer
    footer_desc: "Sistem operasional serba-ada buat bisnis modern — website, penjualan, otomatisasi, dan support dalam satu platform.",
    footer_company_h: "Perusahaan",
    footer_services_h: "Layanan",
    footer_legal_h: "Legal",
    footer_contact_support: "Hubungi Support",
    copyright_text: "Hak cipta dilindungi.",

    // Legal — shared
    legal_tag: "Legal",

    // Terms of Service
    terms_h1: "Ketentuan Layanan",
    terms_sub: "Ketentuan ini mengatur akses dan penggunaan kamu atas SAKA OMNI. Baca baik-baik sebelum pakai platform kami.",
    terms_updated: "Terakhir diperbarui: 27 Juli 2026",
    t1_h: "1. Persetujuan atas ketentuan",
    t1_p: "Dengan membuat akun, mengakses, atau menggunakan bagian mana pun dari SAKA OMNI (\"Layanan\"), kamu setuju untuk terikat dengan Ketentuan Layanan ini. Kalau kamu menggunakan Layanan atas nama organisasi, kamu memastikan punya wewenang untuk mengikat organisasi tersebut pada ketentuan ini.",
    t2_h: "2. Deskripsi layanan",
    t2_p: "SAKA OMNI menyediakan platform untuk membuat website dan toko online, memantau analitik bisnis, mengotomatisasi alur kerja, dan mengelola support pelanggan. Fitur bisa ditambah, diubah, atau dihapus kapan saja seiring berkembangnya platform.",
    t3_h: "3. Akun dan kelayakan pengguna",
    t3_li1: "Kamu wajib memberikan informasi yang akurat dan lengkap saat membuat akun.",
    t3_li2: "Kamu bertanggung jawab menjaga kerahasiaan kredensial login kamu.",
    t3_li3: "Kamu minimal berusia 18 tahun, atau usia dewasa menurut hukum di wilayahmu, untuk menggunakan Layanan.",
    t3_li4: "Kamu bertanggung jawab atas semua aktivitas yang terjadi di bawah akunmu.",
    t4_h: "4. Penggunaan yang wajar",
    t4_p: "Kamu setuju untuk tidak menggunakan Layanan untuk: melanggar hukum yang berlaku; melanggar hak kekayaan intelektual atau privasi pihak lain; menyebarkan malware atau mencoba mengakses sistem kami tanpa izin; atau mengganggu operasional normal Layanan bagi pengguna lain.",
    t5_h: "5. Langganan, penagihan, dan pembatalan",
    t5_p: "Paket berbayar ditagih di muka secara berkala sesuai yang tertera saat checkout. Kamu bisa membatalkan langganan kapan saja, berlaku efektif di akhir periode tagihan berjalan. Kecuali diwajibkan hukum, biaya yang sudah dibayar tidak dapat dikembalikan.",
    t6_h: "6. Konten pelanggan",
    t6_p: "Kamu tetap memiliki hak atas konten, data, dan materi yang kamu unggah ke Layanan (\"Konten Pelanggan\"). Kamu memberi SAKA lisensi terbatas untuk menyimpan, memproses, dan menampilkan Konten Pelanggan semata-mata untuk menyediakan dan meningkatkan Layanan. Kami tidak mengklaim kepemilikan atas data bisnismu.",
    t7_h: "7. Kekayaan intelektual",
    t7_p: "Layanan, termasuk perangkat lunak, desain, dan brandingnya, dimiliki oleh SAKA dan dilindungi undang-undang kekayaan intelektual. Tidak ada bagian dari ketentuan ini yang memberi kamu hak atas merek dagang, logo, atau teknologi milik SAKA di luar yang diperlukan untuk menggunakan Layanan sebagaimana mestinya.",
    t8_h: "8. Ketersediaan layanan",
    t8_p: "Kami berupaya menjaga Layanan tetap tersedia setiap saat, tapi tidak menjamin akses tanpa gangguan. Pemeliharaan terjadwal, gangguan pihak ketiga, atau kejadian di luar kendali wajar kami bisa memengaruhi ketersediaan.",
    t9_h: "9. Penghentian layanan",
    t9_p: "Kami dapat menangguhkan atau menghentikan aksesmu ke Layanan jika kamu melanggar ketentuan ini secara material dan tidak memperbaikinya dalam waktu yang wajar setelah pemberitahuan. Kamu bisa berhenti menggunakan Layanan dan menutup akun kapan saja.",
    t10_h: "10. Penyangkalan dan batasan tanggung jawab",
    t10_p: "Layanan disediakan \"apa adanya\" tanpa jaminan dalam bentuk apa pun, tersurat maupun tersirat. Sejauh diizinkan hukum, SAKA tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial akibat penggunaan Layanan.",
    t11_h: "11. Perubahan ketentuan",
    t11_p: "Kami bisa memperbarui Ketentuan Layanan ini dari waktu ke waktu. Perubahan material akan diinformasikan lewat Layanan atau email, dan penggunaan berkelanjutan setelah perubahan berarti kamu menyetujui ketentuan yang diperbarui.",
    t12_h: "12. Kontak",
    t12_p_html: "Pertanyaan soal ketentuan ini bisa dikirim ke <a href=\"mailto:hello@saka-ai.my.id\" style=\"color:var(--teal);\">hello@saka-ai.my.id</a>.",

    // Privacy Policy
    priv_h1: "Kebijakan Privasi",
    priv_sub: "Kebijakan ini menjelaskan data apa yang dikumpulkan SAKA OMNI, cara penggunaannya, dan pilihan yang kamu punya.",
    priv_updated: "Terakhir diperbarui: 27 Juli 2026",
    p1_h: "1. Informasi yang kami kumpulkan",
    p1_p: "Kami mengumpulkan informasi yang kamu berikan langsung, seperti nama, email, perusahaan, dan pesan yang kamu kirim ke kami. Kami juga mengumpulkan informasi otomatis saat kamu memakai Layanan, termasuk jenis perangkat, browser, alamat IP, dan pola penggunaan di workspace OMNI kamu.",
    p2_h: "2. Cara kami menggunakan informasi",
    p2_li1: "Untuk menyediakan, memelihara, dan meningkatkan Layanan",
    p2_li2: "Untuk merespons permintaan support dan berkomunikasi soal akunmu",
    p2_li3: "Untuk memantau performa, mendeteksi penyalahgunaan, dan menjaga keamanan platform",
    p2_li4: "Untuk mengirim update produk atau penawaran, kalau kamu memilih untuk menerimanya",
    p3_h: "3. Dasar hukum pemrosesan",
    p3_p: "Kalau diwajibkan hukum yang berlaku, kami memproses data pribadi berdasarkan persetujuanmu, kebutuhan pemrosesan untuk menjalankan kontrak kami denganmu, atau kepentingan sah kami dalam mengoperasikan dan mengamankan Layanan.",
    p4_h: "4. Pembagian informasi",
    p4_p: "Kami tidak menjual data pribadi. Kami mungkin membagikan informasi dengan penyedia layanan yang membantu kami menjalankan platform (seperti hosting dan pemroses pembayaran), dengan kontrak yang membatasi penggunaan data tersebut, atau saat diwajibkan untuk mematuhi hukum atau melindungi hak kami.",
    p5_h: "5. Penyimpanan data",
    p5_p: "Kami menyimpan data pribadi selama akunmu masih aktif atau selama diperlukan untuk menyediakan Layanan, mematuhi kewajiban hukum, menyelesaikan sengketa, dan menegakkan perjanjian kami. Kamu bisa minta penghapusan data seperti dijelaskan di bagian 7.",
    p6_h: "6. Keamanan",
    p6_p: "Kami menggunakan enkripsi saat transit dan penyimpanan, kontrol akses, dan review keamanan berkala untuk melindungi informasimu. Tidak ada metode transmisi atau penyimpanan yang benar-benar 100% aman, dan kami tidak bisa menjamin keamanan mutlak.",
    p7_h: "7. Hak dan pilihanmu",
    p7_p: "Tergantung lokasimu, kamu mungkin punya hak untuk mengakses, memperbaiki, mengekspor, atau menghapus data pribadimu, dan untuk menolak atau membatasi pemrosesan tertentu. Untuk menggunakan hak ini, hubungi kami di email di bawah; kami akan merespons dalam jangka waktu yang diwajibkan hukum yang berlaku.",
    p8_h: "8. Cookies",
    p8_p: "Kami menggunakan cookies dan teknologi serupa untuk menjaga kamu tetap login, mengingat preferensi, dan memahami cara Layanan digunakan. Kamu bisa mengatur cookies lewat pengaturan browser, meskipun beberapa fitur mungkin tidak berjalan normal kalau cookies dimatikan.",
    p9_h: "9. Transfer internasional",
    p9_p: "Informasimu mungkin diproses di negara selain negaramu sendiri. Kalau kami mentransfer data pribadi secara internasional, kami menggunakan perlindungan yang sesuai sebagaimana diwajibkan hukum perlindungan data yang berlaku.",
    p10_h: "10. Privasi anak-anak",
    p10_p: "Layanan ini tidak ditujukan untuk individu di bawah 18 tahun, dan kami tidak dengan sengaja mengumpulkan data pribadi dari anak-anak. Kalau kamu merasa seorang anak sudah memberikan data pribadi ke kami, hubungi kami supaya bisa kami hapus.",
    p11_h: "11. Perubahan kebijakan ini",
    p11_p: "Kami bisa memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memposting kebijakan yang direvisi dengan tanggal \"Terakhir diperbarui\" yang baru, dan untuk perubahan material, kami akan memberi pemberitahuan tambahan.",
    p12_h: "12. Hubungi kami",
    p12_p_html: "Untuk pertanyaan soal kebijakan ini atau untuk menggunakan hak privasimu, hubungi kami di <a href=\"mailto:hello@saka-ai.my.id\" style=\"color:var(--teal);\">hello@saka-ai.my.id</a>.",
  },

  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    nav_getstarted: "Get Started",

    hero_eyebrow: "Futuristic Business Ecosystem",
    hero_title_pre: "Build tomorrow's business on",
    hero_title_accent: "SAKA OMNI",
    hero_sub: "One connected platform for websites, commerce, automation, and support — designed for teams who move fast and think ahead.",
    hero_btn_start: "Get Started",
    hero_btn_portfolio: "View Portfolio",
    hero_panel_title: "OMNI Control Center",
    hero_panel_desc: "Every product, metric, and workflow SAKA runs for your business — unified in a single glass panel.",
    chip_1: "Real-time analytics",
    chip_2: "Automated workflows",
    chip_3: "Enterprise-grade security",
    stat_1_label: "Businesses Onboarded",
    stat_2_label: "% Uptime SLA",
    stat_3_label: "/7 Global Support",

    trusted_label: "Trusted by teams building the next generation of business",

    services_tag: "Services",
    services_title: "Everything your business runs on, in one place",
    services_sub: "SAKA replaces a stack of disconnected tools with one coherent platform built for speed and scale.",
    card1_title: "Website & Storefront",
    card1_desc: "Launch a fast, on-brand site or storefront without touching a line of infrastructure code.",
    card2_title: "Growth & Analytics",
    card2_desc: "Track every funnel and channel in real time, with reports built for decisions, not just dashboards.",
    card3_title: "Automation Engine",
    card3_desc: "Wire up workflows across support, billing, and operations so routine work runs itself.",
    card4_title: "Security & Compliance",
    card4_desc: "Encryption, access controls, and audit logs built in from day one — not bolted on later.",

    about_tag: "About SAKA",
    about_title: "Built by operators, for operators",
    about_desc: "SAKA started as an internal tool for running a fast-growing retail business, then became the platform other founders kept asking to use. Today OMNI, our core system, powers the day-to-day of teams who'd rather build their business than babysit their software.",
    about_li1: "One platform instead of a dozen disconnected tools",
    about_li2: "Onboarding measured in hours, not quarters",
    about_li3: "A support team that answers, not a ticket queue",
    about_btn: "Talk to Our Team",

    portfolio_tag: "Portfolio",
    portfolio_title: "Businesses running on SAKA OMNI",
    portfolio_sub: "A few of the teams we've helped move from spreadsheets to a real operating system.",
    folio1_tag: "Retail",
    folio1_desc: "Storefront + inventory automation for a 40-store retail group.",
    folio2_tag: "Fintech",
    folio2_desc: "Compliance workflows and reporting for a regional payments startup.",
    folio3_tag: "Logistics",
    folio3_desc: "Real-time dashboards connecting dispatch, fleet, and client billing.",
    folio4_tag: "Hospitality",
    folio4_desc: "Booking site and guest automation across an eight-property group.",
    folio5_tag: "SaaS",
    folio5_desc: "Support and billing automation for a growing B2B software team.",
    folio6_tag: "Education",
    folio6_desc: "Enrollment site and student workflows for an online academy.",

    cta_title: "Ready to run your business on one platform?",
    cta_sub: "Set up a free workspace in minutes, or talk to our team about a guided migration.",
    cta_btn1: "Get Started Free",
    cta_btn2: "Book a Demo",

    contact_tag: "Contact",
    contact_title: "Let's talk about your business",
    contact_sub: "Tell us where you're stuck and we'll show you how OMNI fits in.",
    info_email_label: "Email",
    info_phone_label: "Phone / WhatsApp",
    info_office_label: "Office",
    form_name_label: "Full name",
    form_name_ph: "Your name",
    form_email_label: "Email",
    form_email_ph: "you@company.com",
    form_company_label: "Company",
    form_company_ph: "Company name",
    form_message_label: "Message",
    form_message_ph: "Tell us about your business",
    form_btn_send: "Send Message",
    form_note_html: "By submitting, you agree to our <a href=\"terms.html\" style=\"color:var(--teal);\">Terms of Service</a> and <a href=\"privacy.html\" style=\"color:var(--teal);\">Privacy Policy</a>.",
    success_title: "Message sent",
    success_desc: "Thanks for reaching out — our team will reply within one business day.",
    form_sending: "Sending...",

    footer_desc: "The all-in-one operating system for modern businesses — websites, commerce, automation, and support in one platform.",
    footer_company_h: "Company",
    footer_services_h: "Services",
    footer_legal_h: "Legal",
    footer_contact_support: "Contact Support",
    copyright_text: "All rights reserved.",

    legal_tag: "Legal",

    terms_h1: "Terms of Service",
    terms_sub: "These terms govern your access to and use of SAKA OMNI. Please read them carefully before using our platform.",
    terms_updated: "Last updated: 27 July 2026",
    t1_h: "1. Acceptance of terms",
    t1_p: "By creating an account, accessing, or using any part of SAKA OMNI (\"the Service\"), you agree to be bound by these Terms of Service. If you are using the Service on behalf of an organization, you confirm you have authority to bind that organization to these terms.",
    t2_h: "2. Description of service",
    t2_p: "SAKA OMNI provides a platform for building websites and storefronts, tracking business analytics, automating workflows, and managing customer support. Features may be added, changed, or removed at any time as the platform evolves.",
    t3_h: "3. Accounts and eligibility",
    t3_li1: "You must provide accurate and complete information when creating an account.",
    t3_li2: "You are responsible for maintaining the confidentiality of your login credentials.",
    t3_li3: "You must be at least 18 years old, or the age of majority in your jurisdiction, to use the Service.",
    t3_li4: "You are responsible for all activity that occurs under your account.",
    t4_h: "4. Acceptable use",
    t4_p: "You agree not to use the Service to: violate any applicable law; infringe the intellectual property or privacy rights of others; distribute malware or attempt to gain unauthorized access to our systems; or interfere with the normal operation of the Service for other users.",
    t5_h: "5. Subscription, billing, and cancellation",
    t5_p: "Paid plans are billed in advance on a recurring basis as described at checkout. You may cancel your subscription at any time, effective at the end of the current billing period. Except where required by law, fees already paid are non-refundable.",
    t6_h: "6. Customer content",
    t6_p: "You retain ownership of the content, data, and materials you upload to the Service (\"Customer Content\"). You grant SAKA a limited license to host, process, and display Customer Content solely to provide and improve the Service. We do not claim ownership over your business data.",
    t7_h: "7. Intellectual property",
    t7_p: "The Service, including its software, design, and branding, is owned by SAKA and protected by intellectual property laws. Nothing in these terms grants you rights to SAKA's trademarks, logos, or proprietary technology beyond what is necessary to use the Service as intended.",
    t8_h: "8. Service availability",
    t8_p: "We aim to keep the Service available at all times but do not guarantee uninterrupted access. Scheduled maintenance, third-party outages, or events outside our reasonable control may affect availability.",
    t9_h: "9. Termination",
    t9_p: "We may suspend or terminate your access to the Service if you materially breach these terms and do not remedy the breach within a reasonable period after notice. You may stop using the Service and close your account at any time.",
    t10_h: "10. Disclaimers and limitation of liability",
    t10_p: "The Service is provided \"as is\" without warranties of any kind, express or implied. To the maximum extent permitted by law, SAKA will not be liable for indirect, incidental, or consequential damages arising from your use of the Service.",
    t11_h: "11. Changes to these terms",
    t11_p: "We may update these Terms of Service from time to time. Material changes will be communicated through the Service or by email, and continued use after such changes constitutes acceptance of the updated terms.",
    t12_h: "12. Contact",
    t12_p_html: "Questions about these terms can be sent to <a href=\"mailto:hello@saka-ai.my.id\" style=\"color:var(--teal);\">hello@saka-ai.my.id</a>.",

    priv_h1: "Privacy Policy",
    priv_sub: "This policy explains what data SAKA OMNI collects, how it's used, and the choices you have.",
    priv_updated: "Last updated: 27 July 2026",
    p1_h: "1. Information we collect",
    p1_p: "We collect information you provide directly, such as your name, email, company, and any messages you send us. We also collect information automatically when you use the Service, including device type, browser, IP address, and usage patterns within your OMNI workspace.",
    p2_h: "2. How we use information",
    p2_li1: "To provide, maintain, and improve the Service",
    p2_li2: "To respond to support requests and communicate about your account",
    p2_li3: "To monitor performance, detect abuse, and keep the platform secure",
    p2_li4: "To send product updates or offers, where you have opted in to receive them",
    p3_h: "3. Legal basis for processing",
    p3_p: "Where applicable law requires it, we process personal data on the basis of your consent, the necessity of processing to perform our contract with you, or our legitimate interest in operating and securing the Service.",
    p4_h: "4. Sharing of information",
    p4_p: "We do not sell personal data. We may share information with service providers who help us operate the platform (such as hosting and payment processors), under contracts that limit their use of the data, or when required to comply with law or protect our rights.",
    p5_h: "5. Data retention",
    p5_p: "We retain personal data for as long as your account is active or as needed to provide the Service, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your data as described in section 7.",
    p6_h: "6. Security",
    p6_p: "We use encryption in transit and at rest, access controls, and regular security reviews to protect your information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    p7_h: "7. Your rights and choices",
    p7_p: "Depending on your location, you may have the right to access, correct, export, or delete your personal data, and to object to or restrict certain processing. To exercise these rights, contact us at the email below; we will respond within the timeframe required by applicable law.",
    p8_h: "8. Cookies",
    p8_p: "We use cookies and similar technologies to keep you signed in, remember preferences, and understand how the Service is used. You can control cookies through your browser settings, though some features may not work correctly if cookies are disabled.",
    p9_h: "9. International transfers",
    p9_p: "Your information may be processed in countries other than your own. Where we transfer personal data internationally, we use appropriate safeguards required by applicable data protection law.",
    p10_h: "10. Children's privacy",
    p10_p: "The Service is not directed to individuals under 18, and we do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us so we can remove it.",
    p11_h: "11. Changes to this policy",
    p11_p: "We may update this Privacy Policy from time to time. We will post the revised policy with an updated \"Last updated\" date, and where changes are material, we will provide additional notice.",
    p12_h: "12. Contact us",
    p12_p_html: "For questions about this policy or to exercise your privacy rights, contact us at <a href=\"mailto:hello@saka-ai.my.id\" style=\"color:var(--teal);\">hello@saka-ai.my.id</a>.",
  },
};

var SAKA_LANG = "id"; // default: Bahasa Indonesia

function sakaSetLang(lang) {
  if (!SAKA_I18N[lang]) return;
  SAKA_LANG = lang;
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (SAKA_I18N[lang][key] !== undefined) el.textContent = SAKA_I18N[lang][key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-html");
    if (SAKA_I18N[lang][key] !== undefined) el.innerHTML = SAKA_I18N[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-placeholder");
    if (SAKA_I18N[lang][key] !== undefined) el.setAttribute("placeholder", SAKA_I18N[lang][key]);
  });
  document.querySelectorAll(".lang-toggle").forEach(function (btn) {
    btn.classList.toggle("is-en", lang === "en");
    btn.setAttribute("aria-checked", lang === "en" ? "true" : "false");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".lang-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      sakaSetLang(SAKA_LANG === "id" ? "en" : "id");
    });
  });
  sakaSetLang(SAKA_LANG);
});
