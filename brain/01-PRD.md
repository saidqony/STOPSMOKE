# Product Requirements Document (PRD)

## Website Layanan Konsultasi Kesehatan Berhenti Merokok

**Versi:** 1.0
**Tanggal:** 27 April 2026
**Status:** Draft

---

## 1. Executive Summary

Website ini adalah platform layanan konsultasi kesehatan yang fokus membantu perokok untuk berhenti merokok secara permanen. Platform menawarkan nilai proposisi yang sangat kuat: **gratis bertanya dengan dokter ahli** dan **gratis 2 kali pertemuan langsung dengan dokter ahli**. Website dirancang dengan estetika minimalis yang memancarkan kredibilitas medis, kehangatan empati, dan harapan positif bagi perokok yang ingin mengubah hidupnya.

**Target Pengguna:**
- Perokok aktif yang ingin berhenti (usia 25-55 tahun)
- Keluarga perokok yang ingin membantu anggota keluarganya berhenti
- Mantan perokok yang butuh dukungan pencegahan kambuh

**Nilai Proposisi Utama:**
1. Konsultasi online gratis dengan dokter ahli
2. Dua kali pertemuan langsung gratis dengan dokter ahli
3. Pendekatan medis profesional yang personal dan non-judgmental

---

## 2. Tujuan Bisnis

### 2.1 Tujuan Utama
- Mengkonversi pengunjung menjadi pengguna aktif layanan konsultasi gratis
- Membangun kepercayaan melalui transparansi layanan medis
- Mendorong pertemuan langsung dengan dokter ahli setelah konsultasi online awal
- Menciptakan basis pengguna loyal untuk program berhenti merokok berkelanjutan

### 2.2 Metrik Keberhasilan (KPI)
- **Konversi Rate:** Minimal 8% pengunjung yang mengklik CTA "Tanya Dokter Gratis"
- **Bounce Rate:** Kurang dari 40% pada halaman utama
- **Time on Page:** Minimal 3 menit rata-rata per halaman konten edukasi
- **CTR Menu Pricing:** Minimal 5% pengunjung yang melihat halaman pricing
- **Kontak WhatsApp:** Minimal 50 pesan masuk per minggu

---

## 3. Skop Fitur

### 3.1 Halaman yang Dibutuhkan

| No | Halaman | Tujuan Utama | Prioritas |
|---|---|---|---|
| 1 | **Home** | Menarik perhatian, menyampaikan nilai proposisi, CTA utama | P0 - Must Have |
| 2 | **About** | Membangun kredibilitas, perkenalan tim dokter ahli | P0 - Must Have |
| 3 | **Service** | Detail layanan yang tersedia, alur program berhenti merokok | P0 - Must Have |
| 4 | **Pricing** | Informasi biaya pertemuan langsung dengan dokter ahli | P0 - Must Have |
| 5 | **Blog** | Konten edukasi, tips berhenti merokok, testimoni | P1 - Should Have |
| 6 | **Contact** | Formulir kontak, WhatsApp direct, informasi lokasi | P0 - Must Have |

### 3.2 Fitur Detail per Halaman

#### Home
- Hero section dengan headline inspiratif dan statistik keberhasilan
- Value proposition cards (3 benefit utama)
- Profile singkat dokter ahli
- Testimoni pasien (carousel)
- CTA utama: "Tanya Dokter Gratis Sekarang"
- CTA sekunder: "Klaim 2x Pertemuan Gratis"
- Section blog preview (3 artikel terbaru)
- Footer dengan navigasi cepat dan kontak WhatsApp

#### About
- Visi & Misi organisasi
- Sejarah dan pendiri
- Profil lengkap dokter ahli (foto, spesialisasi, pengalaman)
- Sertifikasi dan akreditasi medis
- Foto tim/klinik
- Nilai-nilai perusahaan

#### Service
- Detail 3 layanan utama:
  1. Konsultasi Online Gratis (chat/video call)
  2. Pertemuan Langsung Gratis (2x sesi)
  3. Program Pendampingan Berhenti Merokok
- Alur program dari pendaftaran sampai selesai (visual timeline)
- Metode pengobatan yang digunakan
- Durasi dan jadwal tiap layanan
- FAQ section

#### Pricing
- Tabel perbandingan layanan gratis vs layanan premium
- Detail 2x pertemuan gratis yang didapatkan
- Biaya untuk sesi tambahan setelah 2x gratis
- Paket program lengkap (jika ada)
- Informasi pembayaran dan klaim
- Disclaimer transparan

#### Blog
- Kategori artikel: Edukasi, Tips, Cerita Sukses, Penelitian
- Artikel unggulan (featured post)
- Grid artikel dengan thumbnail, judul, tanggal, ringkasan
- Filter kategori
- Search functionality
- CTA pada setiap artikel ke layanan gratis

#### Contact
- Informasi kontak utama: **WhatsApp 08572773969**
- Formulir kontak (nama, email, nomor telepon, pesan)
- Tombol WhatsApp direct click-to-chat
- Peta lokasi klinik (jika ada)
- Jam operasional
- FAQ kontak

---

## 4. Persyaratan Fungsional (Functional Requirements)

### 4.1 Sistem Navigasi
- Sticky header dengan logo dan menu utama
- Hamburger menu untuk mobile view
- Breadcrumb pada halaman dalam
- Smooth scroll untuk anchor links
- Back-to-top button pada halaman panjang

### 4.2 Sistem CTA (Call to Action)
- Tombol WhatsApp direct pada setiap halaman
- Formulir pengambilan layanan gratis pada hero section
- Floating WhatsApp button (fixed position, bottom-right)
- CTA contextual pada artikel blog

### 4.3 Responsivitas
- Mobile-first design approach
- Breakpoint: Mobile (<768px), Tablet (768px-1024px), Desktop (>1024px)
- Touch-friendly interface dengan ukuran tap minimal 44px
- Optimasi loading time < 3 detik pada koneksi 3G

### 4.4 Aksesibilitas
- Kontras warna memenuhi standar WCAG 2.1 Level AA
- Semantic HTML structure
- Alt text pada semua gambar
- Keyboard navigation support
- Screen reader compatible

---

## 5. Persyaratan Non-Fungsional

### 5.1 Performa
- **Page Load Time:** < 2.5 detik (First Contentful Paint)
- **Time to Interactive:** < 4 detik
- **Lighthouse Score:** > 90 untuk Performance, Accessibility, SEO
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1

### 5.2 Keamanan
- SSL/HTTPS wajib
- Formulir dilindungi dari spam (reCAPTCHA v3)
- Tidak menyimpan data sensitif tanpa enkripsi
- Privacy policy dan terms of service
- GDPR compliance ready

### 5.3 SEO
- Meta tags, Open Graph, Twitter Cards
- Schema.org markup untuk medical organization
- Sitemap XML
- robots.txt optimized
- URL structure yang bersih dan deskriptif
- Heading hierarchy yang semantik

### 5.4 Analytics
- Google Analytics 4 integration
- Event tracking untuk CTA clicks
- Conversion tracking untuk WhatsApp click
- Heatmap tracking (Hotjar/Microsoft Clarity)
- A/B testing readiness

---

## 6. Konten dan Messaging

### 6.1 Tone of Voice
- **Empatik:** Memahami perjuangan perokok, tidak menghakimi
- **Profesional:** Kredibel secara medis, berbasis bukti
- **Motivasi:** Memberikan harapan dan dorongan positif
- **Transparan:** Jujur tentang proses, tidak ada janji instan

### 6.2 Key Messages
1. "Anda tidak sendiri — kami ada di sini untuk membantu Anda berhenti merokok."
2. "Gratis konsultasi dengan dokter ahli, tanpa syarat, tanpa biaya tersembunyi."
3. "Dua kali pertemuan langsung gratis untuk memulai perjalanan Anda."
4. "Pendekatan medis yang terbukti, didampingi oleh dokter berpengalaman."

### 6.3 Copy Guidelines
- Hindari kata-kata yang menyalahkan: "Anda harus berhenti"
- Gunakan kata positif: "mulai perjalanan", "langkah pertama", "hidup baru"
- Tekankan kemudahan dan dukungan, bukan kesulitan
- Sertakan statistik keberhasilan yang realistis

---

## 7. Integrasi Teknologi

| Integrasi | Tujuan | Prioritas |
|---|---|---|
| WhatsApp Business API | Direct chat dengan tim konsultasi | P0 |
| Google Analytics 4 | Tracking perilaku pengunjung | P0 |
| Google Maps Embed | Menampilkan lokasi klinik | P1 |
| reCAPTCHA v3 | Proteksi formulir dari spam | P0 |
| CDN (Cloudflare/Imgix) | Optimasi asset gambar | P1 |
| Email Service (SendGrid/Resend) | Notifikasi formulir kontak | P1 |

---

## 8. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Pengunjung curiga dengan layanan "gratis" | Rendahnya konversi | Transparansi total pada halaman About dan Pricing, tampilkan sertifikasi |
| Tanya jawab gratis membebani tim | Overload operasional | Limitasi jam operasional WhatsApp, formulir screening awal |
| Bounce rate tinggi di mobile | Kehilangan pengguna | Prioritaskan mobile-first, test di berbagai perangkat |
| Konten medis salah interpretasi | Masalah hukum | Disclaimer pada setiap konten, review oleh tim medis |

---

## 9. Roadmap Pengembangan

| Fase | Timeline | Deliverable |
|---|---|---|
| Phase 1 | Minggu 1-2 | Wireframe, Design System, Copywriting |
| Phase 2 | Minggu 3-4 | Frontend Development (6 halaman) |
| Phase 3 | Minggu 5 | Integrasi (WhatsApp, Analytics, Form) |
| Phase 4 | Minggu 6 | QA, Testing, Performance Optimization |
| Phase 5 | Minggu 7 | Soft Launch, User Testing, Feedback |
| Phase 6 | Minggu 8 | Full Launch, Marketing Integration |

---

## 10. Persetujuan

| Peran | Nama | Tanda Tangan | Tanggal |
|---|---|---|---|
| Product Owner | | | |
| UI/UX Lead | | | |
| Medical Advisor | | | |
| Tech Lead | | | |

---

*Dokumen ini bersifat hidup dan dapat diperbarui sesuai perkembangan proyek.*
