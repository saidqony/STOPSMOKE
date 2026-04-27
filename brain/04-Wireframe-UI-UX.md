# Wireframe UI/UX Design

## Website Layanan Konsultasi Kesehatan Berhenti Merokok

**Versi:** 1.0
**Tanggal:** 27 April 2026
**Gaya:** Minimalis Medical dengan Makna Kuat
**Format:** Wireframe Deskriptif ASCII + Spesifikasi Detail

---

## Sistem Desain (Design System)

### Warna (60-30-10 Rule)

| Token | Hex | Peran | Penggunaan |
|---|---|---|---|
| **Clean Cloud** | `#F8FAFC` | 60% Dominan | Background utama, whitespace, kartu, card backgrounds |
| **Medical Trust** | `#1E3A8A` | 30% Sekunder | Teks utama, heading, navigasi, ikon, footer |
| **Recovery Green** | `#10B981` | 10% Aksen | CTA buttons, highlights, progress indicators, hover states |

**Variasi Warna:**
- `Clean Cloud Dark`: `#E2E8F0` — borders, dividers, subtle backgrounds
- `Medical Trust Light`: `#3B82F6` — links, secondary headings
- `Medical Trust Dark`: `#0F172A` — body text utama
- `Recovery Green Dark`: `#059669` — button hover state
- `Recovery Green Light`: `#34D399` — success messages, badges

### Tipografi (3 Font Family)

| Font | Peran | Ukuran | Berat | Line-Height | Letter-Spacing |
|---|---|---|---|---|---|
| **Nunito** | Headlines CTA, Navigasi, Motivasi | H1: 52px, H2: 40px, H3: 28px | 700 (Bold) | 1.2 | -0.02em |
| **Lora** | Judul Otoritas Medis, Quotes | H1: 48px, H2: 36px, Blockquote: 22px | 600 (SemiBold) | 1.3 | 0 |
| **Open Sans** | Body text, deskripsi, UI labels | Body: 16px, Small: 14px, Lead: 18px | 400 (Regular) | 1.7 | 0 |
| **Lato** | Paragraf medis detail, testimoni | Body: 16px, Caption: 14px | 400 (Regular) | 1.6 | 0.01em |

**Aturan Penggunaan Font:**
- **Nunito**: Gunakan untuk headline yang butuh kesan empati dan warmth — "Mulai Perjalanan Sehat Anda", CTA buttons, menu navigasi
- **Lora + Lato**: Gunakan pada section yang butuh kredibilitas tinggi — nama program, kutipan dokter, section sertifikasi
- **Open Sans**: Default untuk seluruh body text, deskripsi layanan, artikel blog, footer

### Spacing System

| Token | Nilai | Penggunaan |
|---|---|---|
| `space-xs` | 4px | Tight gaps, icon padding |
| `space-sm` | 8px | Button padding Y, tight margins |
| `space-md` | 16px | Standard padding, card gaps |
| `space-lg` | 24px | Section internal padding |
| `space-xl` | 32px | Between components |
| `space-2xl` | 48px | Section sub-spacing |
| `space-3xl` | 64px | Between major sections (mobile) |
| `space-4xl` | 80px | Between major sections (desktop) |
| `space-5xl` | 100px | Hero padding, major section separators |

**Container:**
- Max-width: 1200px
- Padding: 16px (mobile), 24px (tablet), 32px (desktop)

### Komponen Dasar (Atomic)

```
┌─────────────────────────────────────────┐
│           BUTTON: PRIMARY CTA           │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │    Tanya Dokter Gratis          │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   Background: #10B981 (Recovery Green)    │
│   Text: #FFFFFF                          │
│   Font: Nunito 700, 16px                 │
│   Padding: 16px 32px                     │
│   Border-radius: 12px (rounded-xl)         │
│   Shadow: 0 4px 14px rgba(16,185,129,0.3)│
│   Hover: #059669, scale(1.02), shadow↑   │
│   Active: scale(0.98)                    │
│   Icon: WhatsApp icon (left, 20px)       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         BUTTON: SECONDARY CTA           │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │    Lihat Program Lengkap        │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   Background: transparent              │
│   Border: 2px solid #1E3A8A            │
│   Text: #1E3A8A                         │
│   Font: Nunito 700, 16px                 │
│   Padding: 14px 30px                     │
│   Border-radius: 12px                    │
│   Hover: bg #1E3A8A, text #FFFFFF       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│              CARD: VALUE PROP           │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  ┌─────┐                        │   │
│   │  │ 👨‍⚕️ │  Konsultasi Gratis      │   │
│   │  └─────┘                        │   │
│   │                                 │   │
│   │  Chat langsung dengan dokter    │   │
│   │  ahli kapan saja, tanpa biaya   │   │
│   │                                 │   │
│   │  → Pelajari Lebih Lanjut        │   │
│   └─────────────────────────────────┘   │
│                                         │
│   Background: #FFFFFF                    │
│   Border: 1px solid #E2E8F0             │
│   Border-radius: 16px                    │
│   Padding: 32px                          │
│   Shadow: 0 1px 3px rgba(0,0,0,0.05)   │
│   Hover: shadow↑, translateY(-4px)       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│           SECTION HEADER                │
│                                         │
│   ───────────────┐                      │
│   LABEL PILIHAN  │  ← Recovery Green   │
│   ───────────────┘   bg, white text     │
│                                         │
│   Heading Utama Section                 │
│   Font: Lora 600, 40px                   │
│   Color: #1E3A8A                        │
│                                         │
│   Deskripsi pendek section              │
│   Font: Open Sans 400, 18px              │
│   Color: #334155                        │
│   Max-width: 600px                       │
│   Line-height: 1.7                       │
└─────────────────────────────────────────┘
```

---

## Wireframe Halaman: HOME

### Section 1: Navigation (Sticky Header)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC  ░  Border-bottom: 1px solid #E2E8F0 (on scroll)   │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│  ┌─────────┐                                                    ┌────────┐│
│  │  LOGO   │  Beranda  Layanan  Harga  Blog  Tentang  Kontak    │💬 Gratis││
│  │ (icon+  │   Open Sans 14px 600                    Nunito    │ WhatsApp││
│  │  text)  │   Medical Trust #1E3A8A                  14px 700  │#10B981  ││
│  │#1E3A8A │   Hover: underline Recovery Green                  │rounded  ││
│  └─────────┘                                                    └────────┘│
│                                                                            │
│  Mobile (<768px): Hamburger menu ☰  (Nunito, Medical Trust)              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

**Behavior:**
- Sticky top: 0, z-index: 50
- Backdrop blur saat scroll (8px)
- Logo: SVG icon (lungs/leaf motif) + "Berhenti Merokok" text (Nunito 700, 18px, #1E3A8A)
- WhatsApp CTA: Fixed visible di desktop, mungkin disingkat jadi icon saja di mobile
- Transition: padding shrink saat scroll (24px → 16px)

---

### Section 2: Hero

```
┌────────────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC dengan subtle gradient radial dari top-left:        │
│ ░  radial-gradient(circle at 10% 20%, rgba(16,185,129,0.08) 0%,           │
│ ░  transparent 50%)                                                        │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│                                                                            │
│   ┌──────────────────────────────┐    ┌────────────────────────────────┐    │
│   │                              │    │                                │    │
│   │   BERHENTI MEROKOK           │    │                                │    │
│   │   ADALAH PERJALANAN,         │    │   ┌────────────────────────┐   │    │
│   │   BUKAN DESTINASI.           │    │   │                        │   │    │
│   │                              │    │   │   Ilustrasi Minimalis   │   │    │
│   │   Font: Lora 600, 52px       │    │   │   Dokter + Pasien      │   │    │
│   │   Color: #1E3A8A             │    │   │   Line art, Medical     │   │    │
│   │   Line-height: 1.2          │    │   │   Trust + Recovery      │   │    │
│   │   Letter-spacing: -0.02em    │    │   │   Green accents        │   │    │
│   │                              │    │   │                        │   │    │
│   │   ─────────────────────      │    │   │   SVG Illustration     │   │    │
│   │                              │    │   │   (60% width)          │   │    │
│   │   Konsultasi gratis dengan   │    │   │                        │   │    │
│   │   dokter ahli. Dua kali      │    │   └────────────────────────┘   │    │
│   │   pertemuan langsung gratis. │    │                                │    │
│   │                              │    │                                │    │
│   │   Font: Open Sans 400, 18px  │    │                                │    │
│   │   Color: #334155               │    │                                │    │
│   │   Max-width: 480px             │    │                                │    │
│   │                              │    │                                │    │
│   │   ┌────────────────────┐     │    │                                │    │
│   │   │ 💬 Tanya Dokter    │     │    │                                │    │
│   │   │    Gratis Sekarang │     │    │                                │    │
│   │   └────────────────────┘     │    │                                │    │
│   │   #10B981                    │    │                                │    │
│   │                              │    │                                │    │
│   │   ┌────────────────────┐     │    │                                │    │
│   │   │ → Lihat Program    │     │    │                                │    │
│   │   │    Berhenti Merokok│     │    │                                │    │
│   │   └────────────────────┘     │    │                                │    │
│   │   Secondary button           │    │                                │    │
│   │                              │    │                                │    │
│   │   ✓ 500+ Pasien Berhasil    │    │                                │    │
│   │   ✓ 4.9 Rating Google       │    │                                │    │
│   │   ✓ Dokter Spesialis Paru   │    │                                │    │
│   │   (Open Sans 14px, #475569) │    │                                │    │
│   │                              │    │                                │    │
│   └──────────────────────────────┘    └────────────────────────────────┘    │
│                                                                            │
│   Mobile: Stacked (text di atas, ilustrasi di bawah)                       │
│   Padding: 100px top (desktop), 60px top (mobile)                         │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### Section 3: Value Propositions

```
┌────────────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #FFFFFF                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│                     ┌──────────┐                                           │
│                     │ 3 LANGKAH  │ ← Label pill, bg #10B981,               │
│                     │ MUDAH     │    text #FFFFFF, Nunito 12px 700         │
│                     └──────────┘                                           │
│                                                                            │
│            Mulai Perjalanan Sehat Anda                                     │
│            Font: Nunito 700, 40px, #1E3A8A                                │
│                                                                            │
│         Kami hadir untuk menemani setiap langkah Anda                    │
│         Font: Open Sans 400, 18px, #334155, max-width 560px               │
│                                                                            │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐          │
│   │                 │  │                 │  │                 │          │
│   │   ┌─────┐       │  │   ┌─────┐       │  │   ┌─────┐       │          │
│   │   │  01 │       │  │   │  02 │       │  │   │  03 │       │          │
│   │   │     │       │  │   │     │       │  │   │     │       │          │
│   │   └─────┘       │  │   └─────┘       │  │   └─────┘       │          │
│   │                 │  │                 │  │                 │          │
│   │ Konsultasi      │  │ 2x Pertemuan    │  │ Program         │          │
│   │ Online Gratis   │  │ Langsung Gratis │  │ Pendampingan    │          │
│   │                 │  │                 │  │                 │          │
│   │ Chat atau       │  │ Bertemu dokter  │  │ Dukungan        │          │
│   │ video call      │  │ secara langsung │  │ berkelanjutan   │          │
│   │ dengan dokter   │  │ di klinik kami  │  │ untuk mencegah  │          │
│   │ tanpa biaya     │  │ tanpa dipungut  │  │ kambuh          │          │
│   │                 │  │ biaya sama sekali│  │                 │          │
│   │ → Tanya Sekarang│  │ → Daftar Gratis │  │ → Pelajari      │          │
│   │                 │  │                 │  │   Program       │          │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘          │
│                                                                            │
│   Card specs:                                                              │
│   - bg: #F8FAFC, border: 1px solid #E2E8F0                              │
│   - border-radius: 16px, padding: 40px 32px                               │
│   - Number badge: 48px circle, bg #1E3A8A, text #FFFFFF                   │
│   - Heading: Nunito 700, 22px, #1E3A8A                                   │
│   - Body: Open Sans 400, 16px, #475569                                     │
│   - Link: #10B981, Nunito 600, 14px + arrow icon                          │
│   - Hover: translateY(-6px), shadow↑                                      │
│                                                                            │
│   Mobile: 1 column stack, full width cards                                │
│   Tablet: 2 columns (1+2 atau 2+1)                                       │
│   Desktop: 3 columns equal width                                          │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### Section 4: Doctor Preview

```
┌────────────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░  Subtle pattern: dots grid 24px, #E2E8F0, opacity 0.3                   │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│   ┌──────────────────────────┐    ┌────────────────────────────────────┐  │
│   │                          │    │                                    │  │
│   │   Di Dampingi Dokter   │    │    ┌────────────────────────────┐   │  │
│   │   Ahli Berpengalaman   │    │    │                            │   │  │
│   │                          │    │    │   [Foto Dokter]            │   │  │
│   │   Font: Lora 600,      │    │    │   400×500px               │   │  │
│   │   40px, #1E3A8A         │    │    │   Rounded-2xl             │   │  │
│   │                          │    │    │   Object-fit: cover       │   │  │
│   │   Tim dokter spesialis  │    │    │                            │   │  │
│   │   paru dan ahli         │    │    │   ┌────────────────────┐   │   │  │
│   │   kesehatan berhenti    │    │    │   │ dr. Andi Wijaya,   │   │   │  │
│   │   merokok siap          │    │    │   │ Sp.P               │   │   │  │
│   │   membantu Anda.        │    │    │   │                    │   │   │  │
│   │                          │    │    │   │ "Setiap perokok    │   │   │  │
│   │   Font: Open Sans        │    │    │   │ berhak mendapat    │   │   │  │
│   │   400, 18px, #334155     │    │    │   │ kesempatan untuk   │   │   │  │
│   │                          │    │    │   │ hidup lebih sehat" │   │   │  │
│   │   ┌────────────────┐    │    │    │   │                    │   │   │  │
│   │   │ Kenali Tim Kami │    │    │    │   │ — dr. Andi         │   │   │  │
│   │   └────────────────┘    │    │    │   └────────────────────┘   │   │  │
│   │   Secondary button      │    │    │                            │   │  │
│   │                          │    │    │    Quote: Lora italic      │   │  │
│   │   ┌────────────────┐    │    │    │    16px, #1E3A8A           │   │  │
│   │   │ Sertifikasi ↗  │    │    │    └────────────────────────────┘   │  │
│   │   └────────────────┘    │    │                                    │  │
│   │   Text link style       │    │    Card bg: #FFFFFF                │  │
│   │                          │    │    Border: 1px solid #E2E8F0       │  │
│   └──────────────────────────┘    │    Shadow: soft                     │  │
│                                  └────────────────────────────────────┘  │
│                                                                            │
│   Mobile: Stacked (foto di atas, text di bawah)                           │
│   Desktop: 50/50 split, foto slightly overlapping right edge (bleed)      │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### Section 5: Testimonials

```
┌────────────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #1E3A8A (Medical Trust) — INVERTED SECTION                   │
│ ░  Color scheme inverted untuk kontras visual                             │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│                     ┌──────────┐                                           │
│                     │ TESTIMONI│ ← Pill, bg #10B981                      │
│                     │ PASIEN   │    text #FFFFFF                         │
│                     └──────────┘                                           │
│                                                                            │
│              Cerita Keberhasilan Mereka                                  │
│              Font: Nunito 700, 40px, #FFFFFF                               │
│                                                                            │
│         Dari perokok aktif menjadi non-perokok,                          │
│         ini adalah kisah nyata mereka.                                     │
│         Font: Open Sans 400, 18px, rgba(255,255,255,0.85)                  │
│                                                                            │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  ◀  │                                                            │ ▶ │  │
│   │     │    ┌────────────────────────────────────────────┐            │   │  │
│   │     │    │  "                                           │            │   │  │
│   │     │    │  Saya merokok 15 tahun. Setelah konsultasi  │            │   │  │
│   │     │    │  dengan dr. Andi dan 2x pertemuan gratis,   │            │   │  │
│   │     │    │  saya berhasil berhenti total. Sekarang      │            │   │  │
│   │     │    │  sudah 8 bulan bebas rokok."               │            │   │  │
│   │     │    │                                               │            │   │  │
│   │     │    │  ─────────────────────────────────            │            │   │  │
│   │     │    │  ┌────┐  Ahmad, 42 tahun                     │            │   │  │
│   │     │    │  │ 👤 │  Mantan perokok 1 bungkus/hari       │            │   │  │
│   │     │    │  └────┘  ★★★★★                              │            │   │  │
│   │     │    └────────────────────────────────────────────┘            │   │  │
│   │     │                                                             │   │  │
│   │     │    Quote: Lora 400 italic, 20px, #FFFFFF                    │   │  │
│   │     │    Author: Nunito 600, 16px, #FFFFFF                         │   │  │
│   │     │    Detail: Open Sans 400, 14px, rgba(255,255,255,0.7)        │   │  │
│   │     │                                                             │   │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│   Carousel:                                                                │
│   - 1 visible card (mobile), 2 (tablet), 3 (desktop)                       │
│   - Auto-play: 5 detik (pause on hover)                                   │
│   - Dot indicators bottom center                                          │
│   - Cards: bg rgba(255,255,255,0.1), backdrop-blur, border-radius 20px   │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### Section 6: Blog Preview

```
┌────────────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│                     ┌──────────┐                                           │
│                     │ EDUKASI  │                                           │
│                     │ KESEHATAN│                                           │
│                     └──────────┘                                           │
│                                                                            │
│              Wawasan untuk Perjalanan Anda                                │
│              Font: Lora 600, 40px, #1E3A8A                                 │
│                                                                            │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐          │
│   │                 │  │                 │  │                 │          │
│   │  ┌───────────┐  │  │  ┌───────────┐  │  │  ┌───────────┐  │          │
│   │  │           │  │  │  │           │  │  │  │           │  │          │
│   │  │  Thumbnail│  │  │  │  Thumbnail│  │  │  │  Thumbnail│  │          │
│   │  │  16:9     │  │  │  │  16:9     │  │  │  │  16:9     │  │          │
│   │  │  Rounded  │  │  │  │  Rounded  │  │  │  │  Rounded  │  │          │
│   │  │  top      │  │  │  │  top      │  │  │  │  top      │  │          │
│   │  └───────────┘  │  │  └───────────┘  │  │  └───────────┘  │          │
│   │                 │  │                 │  │                 │          │
│   │  Tips Praktis   │  │  Dampak Merokok │  │  Cerita Sukses  │          │
│   │  Berhenti       │  │  pada Paru-paru │  │  Pak Budi       │          │
│   │                 │  │                 │  │                 │          │
│   │  5 strategi     │  │  Penjelasan     │  │  Dari 2 bungkus │          │
│   │  praktis yang   │  │  medis tentang  │  │  per hari ke    │          │
│   │  bisa langsung  │  │  kerusakan...   │  │  bebas total... │          │
│   │  diterapkan...  │  │                 │  │                 │          │
│   │                 │  │                 │  │                 │          │
│   │  ┌──────────┐   │  │  ┌──────────┐   │  │  ┌──────────┐   │          │
│   │  │Tips      │   │  │  │Edukasi   │   │  │  │Cerita    │   │          │
│   │  │#10B981   │   │  │  │#1E3A8A   │   │  │  │Sukses    │   │          │
│   │  └──────────┘   │  │  └──────────┘   │  │  └──────────┘   │          │
│   │                 │  │                 │  │                 │          │
│   │  Baca Selengkapnya →                                               │
│   │  Open Sans 600, 14px, #10B981                                      │
│   │                 │  │                 │  │                 │          │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘          │
│                                                                            │
│   Card: bg #FFFFFF, border-radius 16px, overflow hidden                   │
│   Thumbnail: object-fit cover, hover scale(1.05) with overflow hidden   │
│   Category badge: pill, small, sesuai warna kategori                      │
│   Heading: Nunito 700, 20px, #1E3A8A                                    │
│   Excerpt: Open Sans 400, 15px, #475569, 3 lines max (line-clamp)       │
│                                                                            │
│   ┌────────────────────────────────────────┐                              │
│   │         Lihat Semua Artikel →          │                              │
│   └────────────────────────────────────────┘                              │
│        Centered, secondary button style                                    │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### Section 7: Bottom CTA

```
┌────────────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                    │
│ ░  Large Recovery Green accent shape di kanan bawah, opacity 0.1           │
│ ░  (circle 400px, absolute positioned)                                    │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│                                                                            │
│                    Siap untuk Langkah Pertama?                            │
│                    Font: Nunito 700, 40px, #1E3A8A                         │
│                                                                            │
│         Konsultasi gratis, tanpa syarat, tanpa biaya tersembunyi.         │
│         Font: Open Sans 400, 18px, #334155, max-width 520px               │
│                                                                            │
│              ┌────────────────────────────────────┐                       │
│              │  💬 Chat WhatsApp Sekarang           │                       │
│              │  0857 2773 969                      │                       │
│              └────────────────────────────────────┘                       │
│              #10B981, Nunito 700, 18px, padding 20px 40px                  │
│              Shadow: large, green glow                                      │
│              Pulse animation ring (subtle)                                │
│                                                                            │
│              Atau kirim pesan melalui formulir                              │
│              Open Sans 400, 14px, #64748B, underline link                  │
│                                                                            │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### Section 8: Footer

```
┌────────────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #0F172A (Medical Trust Dark)                                 │
│ ░  Color: #F8FAFC                                                          │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐ │
│   │             │  │             │  │             │  │                 │ │
│   │  LOGO       │  │  NAVIGASI   │  │  LAYANAN    │  │  KONTAK         │ │
│   │  + Tagline  │  │             │  │             │  │                 │ │
│   │             │  │  Beranda    │  │  Konsultasi  │  │  📱 0857 2773 969│ │
│   │  "Misi kami │  │  Tentang    │  │  Online      │  │                 │ │
│   │  membantu   │  │  Layanan    │  │  Pertemuan   │  │  💬 WhatsApp    │ │
│   │  Anda hidup  │  │  Harga      │  │  Langsung    │  │  (klik untuk    │ │
│   │  lebih sehat"│  │  Blog       │  │  Program      │  │  chat langsung) │ │
│   │             │  │  Kontak     │  │  Pendampingan │  │                 │ │
│   │  Font:      │  │             │  │             │  │  🕐 Sen-Sab     │ │
│   │  Open Sans  │  │  Font:      │  │  Font:      │  │     08.00-17.00 │ │
│   │  400, 14px  │  │  Open Sans  │  │  Open Sans  │  │                 │ │
│   │  rgba(255,  │  │  400, 15px  │  │  400, 15px  │  │                 │ │
│   │  255,0.7)   │  │             │  │             │  │                 │ │
│   │             │  │  Hover:     │  │  Hover:     │  │                 │ │
│   │             │  │  #10B981     │  │  #10B981     │  │                 │ │
│   └─────────────┘  └─────────────┘  └─────────────┘  └─────────────────┘ │
│                                                                            │
│   ─────────────────────────────────────────────────────────────────────   │
│                                                                            │
│   © 2026 Layanan Konsultasi Berhenti Merokok          Privasi | Syarat   │
│   Font: Open Sans 400, 13px, rgba(255,255,255,0.5)                       │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Wireframe Halaman: ABOUT

```
┌────────────────────────────────────────────────────────────────────────────┐
│ HEADER (sama seperti Home)                                                 │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ HERO ABOUT (Compact, 60% height dari Home hero)                            │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│                    ┌──────────┐                                           │
│                    │TENTANG   │                                           │
│                    │KAMI      │                                           │
│                    └──────────┘                                           │
│                                                                            │
│              Kredibilitas di Balik Layanan Kami                          │
│              Font: Lora 600, 44px, #1E3A8A                                 │
│                                                                            │
│         Tim dokter ahli dengan pengalaman puluhan tahun                    │
│         menangani pasien yang ingin berhenti merokok.                      │
│         Font: Open Sans 400, 18px, #475569                                 │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ VISI & MISI                                                                │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #FFFFFF                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│   ┌─────────────────────────────┐    ┌─────────────────────────────┐      │
│   │                             │    │                             │      │
│   │   🎯 VISI                   │    │   🚀 MISI                   │      │
│   │                             │    │                             │      │
│   │   Menjadikan Indonesia      │    │   Memberikan akses konsultasi│      │
│   │   bebas dari ketergantungan │    │   kesehatan berhenti merokok │      │
│   │   rokok melalui edukasi     │    │   yang terjangkau, empati,   │      │
│   │   dan layanan medis         │    │   dan berbasis bukti medis   │      │
│   │   berkualitas.              │    │   kepada seluruh masyarakat. │      │
│   │                             │    │                             │      │
│   │   Font: Nunito 700, 24px    │    │   Font: Nunito 700, 24px    │      │
│   │   Body: Open Sans 400, 16px │    │   Body: Open Sans 400, 16px │      │
│   │                             │    │                             │      │
│   └─────────────────────────────┘    └─────────────────────────────┘      │
│                                                                            │
│   Card: bg #F8FAFC, border-radius 16px, padding 40px                       │
│   Icon: 40px, #1E3A8A, dibungkus circle bg rgba(30,58,138,0.1)            │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ DOKTER AHLI                                                                │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│              Tim Dokter Berpengalaman                                     │
│              Font: Lora 600, 40px, #1E3A8A                                 │
│                                                                            │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
│   │                 │  │                 │  │                 │        │
│   │  ┌───────────┐  │  │  ┌───────────┐  │  │  ┌───────────┐  │        │
│   │  │           │  │  │  │           │  │  │  │           │  │        │
│   │  │   Foto    │  │  │  │   Foto    │  │  │  │   Foto    │  │        │
│   │  │   Dokter  │  │  │  │   Dokter  │  │  │  │   Dokter  │  │        │
│   │  │   300×350 │  │  │  │   300×350 │  │  │  │   300×350 │  │        │
│   │  │           │  │  │  │           │  │  │  │           │  │        │
│   │  └───────────┘  │  │  └───────────┘  │  │  └───────────┘  │        │
│   │                 │  │                 │  │                 │        │
│   │  dr. Andi W.    │  │  dr. Budi S.    │  │  dr. Citra M.   │        │
│   │  Spesialis Paru │  │  Spesialis      │  │  Dokter Umum    │        │
│   │                 │  │  Kesehatan      │  │  & Konselor     │        │
│   │  15 tahun       │  │  Masyarakat     │  │  Kesehatan      │        │
│   │  pengalaman     │  │  12 tahun       │  │  8 tahun        │        │
│   │                 │  │  pengalaman     │  │  pengalaman     │        │
│   │  ┌──────────┐   │  │  ┌──────────┐   │  │  ┌──────────┐   │        │
│   │  │Lihat     │   │  │  │Lihat     │   │  │  │Lihat     │   │        │
│   │  │Profil    │   │  │  │Profil    │   │  │  │Profil    │   │        │
│   │  │#10B981   │   │  │  │#10B981   │   │  │  │#10B981   │   │        │
│   │  └──────────┘   │  │  └──────────┘   │  │  └──────────┘   │        │
│   │                 │  │                 │  │                 │        │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘        │
│                                                                            │
│   Card: bg #FFFFFF, border-radius 16px                                     │
│   Photo: rounded-xl top, object-fit cover                                  │
│   Name: Nunito 700, 20px, #1E3A8A                                         │
│   Title: Open Sans 600, 15px, #3B82F6                                      │
│   Bio: Open Sans 400, 14px, #475569                                        │
│   Exp badge: pill, bg #F8FAFC, text #1E3A8A, small                        │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ SERTIFIKASI & AKREDITASI                                                   │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #FFFFFF                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│              Diakui oleh Institusi Medis Indonesia                        │
│              Font: Lora 600, 36px, #1E3A8A                                 │
│                                                                            │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐    │
│   │        │ │        │ │        │ │        │ │        │ │        │    │
│   │ Logo   │ │ Logo   │ │ Logo   │ │ Logo   │ │ Logo   │ │ Logo   │    │
│   │ IDI    │ │ PDPI   │ │ KKI    │ │ Logo   │ │ Logo   │ │ Logo   │    │
│   │ 120px  │ │ 120px  │ │ 120px  │ │ 120px  │ │ 120px  │ │ 120px  │    │
│   │        │ │        │ │        │ │        │ │        │ │        │    │
│   │ Ikatan │ │ Perhimpunan│ │ Konsil │ │ Logo   │ │ Logo   │ │ Logo   │    │
│   │ Dokter │ │ Dokter   │ │ Kedokteran│ │     │ │     │ │     │    │
│   │ Indon. │ │ Paru     │ │ Indonesia │ │     │ │     │ │     │    │
│   │        │ │ Indonesia│ │           │ │     │ │     │ │     │    │
│   └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘    │
│                                                                            │
│   Logo container: bg #F8FAFC, border-radius 12px, padding 24px             │
│   Grayscale default, hover: full color + scale(1.05)                     │
│   Label: Open Sans 400, 13px, #475569, center aligned                     │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ NILAI-NILAI KAMI                                                         │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #1E3A8A (Inverted)                                          │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐          │
│   │                 │  │                 │  │                 │          │
│   │   💚 EMPATI     │  │   🔬 ILMIAH     │  │   🤝 TERBUKA    │          │
│   │                 │  │                 │  │                 │          │
│   │   Kami          │  │   Setiap        │  │   Tidak ada     │          │
│   │   mendengarkan  │  │   rekomendasi   │  │   biaya         │          │
│   │   tanpa         │  │   berbasis      │  │   tersembunyi.  │          │
│   │   menghakimi.   │  │   bukti dan     │  │   Semua         │          │
│   │                 │  │   riset terkini.│  │   informasi     │          │
│   │                 │  │                 │  │   transparan.   │          │
│   │                 │  │                 │  │                 │          │
│   │   Font: Nunito  │  │   Font: Nunito  │  │   Font: Nunito  │          │
│   │   700, 22px     │  │   700, 22px     │  │   700, 22px     │          │
│   │   #FFFFFF       │  │   #FFFFFF       │  │   #FFFFFF       │          │
│   │   Body: Open Sans│  │   Body: Open   │  │   Body: Open   │          │
│   │   400, 15px     │  │   Sans 400, 15px│  │   Sans 400, 15px│          │
│   │   rgba(255,255, │  │   rgba(255,255, │  │   rgba(255,255, │          │
│   │   255,0.85)     │  │   255,0.85)     │  │   255,0.85)     │          │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘          │
│                                                                            │
│   Icon: 48px, #10B981, dibungkus circle bg rgba(16,185,129,0.2)          │
│                                                                            │
│ FOOTER (sama seperti Home)                                                 │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Wireframe Halaman: SERVICE

```
┌────────────────────────────────────────────────────────────────────────────┐
│ HEADER (sama)                                                              │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ HERO SERVICE                                                               │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░  Right side: abstract lung/health SVG pattern, opacity 0.15              │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│                    ┌──────────┐                                           │
│                    │ LAYANAN  │                                           │
│                    │ KAMI     │                                           │
│                    └──────────┘                                           │
│                                                                            │
│         Program Berhenti Merokok Berbasis Bukti Medis                    │
│         Font: Lora 600, 44px, #1E3A8A                                     │
│                                                                            │
│         Konsultasi gratis dan pendampingan oleh dokter ahli                │
│         untuk membantu Anda berhenti merokok secara permanen.              │
│         Font: Open Sans 400, 18px, #475569                                 │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ SERVICE CARDS                                                              │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #FFFFFF                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  ┌─────┐                                                            │  │
│   │  │ 💬  │   KONSULTASI ONLINE GRATIS                                 │  │
│   │  └─────┘                                                            │  │
│   │                                                                     │  │
│   │  Tanyakan apa saja tentang kebiasaan merokok Anda melalui chat      │  │
│   │  atau video call dengan dokter ahli kami. Tanpa biaya.              │  │
│   │                                                                     │  │
│   │  • Respon dalam 24 jam                                              │  │
│   │  • Chat atau video call                                             │  │
│   │  • Tidak perlu daftar akun                                          │  │
│   │  • 100% gratis                                                      │  │
│   │                                                                     │  │
│   │  ┌────────────────────────┐                                         │  │
│   │  │ Mulai Chat Gratis →   │                                         │  │
│   │  └────────────────────────┘                                         │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  ┌─────┐                                                            │  │
│   │  │ 🏥  │   2x PERTEMUAN LANGSUNG GRATIS                             │  │
│   │  └─────┘                                                            │  │
│   │                                                                     │  │
│   │  Bertemu langsung dengan dokter ahli di klinik untuk evaluasi       │  │
│   │  kesehatan dan pembuatan rencana berhenti merokok personal.         │  │
│   │                                                                     │  │
│   │  • 2 sesi gratis penuh                                              │  │
│   │  • Durasi 45 menit per sesi                                         │  │
│   │  • Termasuk pemeriksaan dasar                                       │  │
│   │  • Rencana personal disertakan                                      │  │
│   │                                                                     │  │
│   │  ┌────────────────────────┐                                         │  │
│   │  │ Jadwalkan Sekarang →  │                                         │  │
│   │  └────────────────────────┘                                         │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  ┌─────┐                                                            │  │
│   │  │ 🔄  │   PROGRAM PENDAMPINGAN BERKELANJUTAN                       │  │
│   │  └─────┘                                                            │  │
│   │                                                                     │  │
│   │  Dukungan jangka panjang untuk mencegah kambuh dan memantau        │  │
│   │  perkembangan kesehatan Anda pasca berhenti merokok.                │  │
│   │                                                                     │  │
│   │  • Sesi follow-up berkala                                         │  │
│   │  • Akses grup support                                             │  │
│   │  • Monitoring kesehatan paru                                      │  │
│   │  • Konseling kapan saja dibutuhkan                                │  │
│   │                                                                     │  │
│   │  ┌────────────────────────┐                                         │  │
│   │  │ Pelajari Lebih Lanjut →                                       │  │
│   │  └────────────────────────┘                                         │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│   Card style: full-width, bg #F8FAFC, border-radius 20px, padding 48px    │
│   Icon: 56px, #1E3A8A, bg circle rgba(30,58,138,0.1)                     │
│   Heading: Nunito 700, 28px, #1E3A8A                                     │
│   Body: Open Sans 400, 16px, #475569                                       │
│   List: bullet #10B981, text Open Sans 400, 16px                           │
│   CTA: Recovery Green, Nunito 700, 16px                                    │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ PROGRAM TIMELINE                                                           │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│              Alur Program Berhenti Merokok                                │
│              Font: Lora 600, 40px, #1E3A8A                                 │
│                                                                            │
│         4 langkah sederhana menuju hidup bebas rokok                      │
│                                                                            │
│    ┌─────────┐      ┌─────────┐      ┌─────────┐      ┌─────────┐      │
│    │    1    │ ───▶ │    2    │ ───▶ │    3    │ ───▶ │    4    │      │
│    │         │      │         │      │         │      │         │      │
│    │  Konsul │      │ Pertemuan│      │ Rencana │      │ Pantau  │      │
│    │  Online │      │ Langsung│      │ Personal│      & Dukung │      │
│    │         │      │         │      │         │      │         │      │
│    │ Chat    │      │ 2x Sesi │      │ Program │      │ Follow  │      │
│    │ dengan  │      │ gratis  │      │ khusus  │      │ up &    │      │
│    │ dokter  │      │ 45 menit│      │ untuk   │      │ support │      │
│    │         │      │         │      │ Anda    │      │ group   │      │
│    └─────────┘      └─────────┘      └─────────┘      └─────────┘      │
│                                                                            │
│   Timeline: vertical on mobile, horizontal on desktop                     │
│   Node: circle 64px, bg #1E3A8A, text #FFFFFF, Nunito 700 20px           │
│   Connector: 2px line #E2E8F0 (mobile vertical, desktop horizontal)      │
│   Card below node: bg #FFFFFF, rounded-2xl, padding 24px                 │
│   Step title: Nunito 700, 20px, #1E3A8A                                  │
│   Step desc: Open Sans 400, 14px, #475569                                  │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ FAQ ACCORDION                                                              │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #FFFFFF                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│              Pertanyaan yang Sering Diajukan                              │
│              Font: Nunito 700, 40px, #1E3A8A                               │
│                                                                            │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  Apakah konsultasi benar-benar gratis?              [+]            │  │
│   ├─────────────────────────────────────────────────────────────────────┤  │
│   │  Berapa lama durasi setiap pertemuan langsung?      [+]            │  │
│   ├─────────────────────────────────────────────────────────────────────┤  │
│   │  Apakah saya perlu membawa riwayat medis?           [+]            │  │
│   ├─────────────────────────────────────────────────────────────────────┤  │
│   │  Bagaimana jika saya kambuh setelah program?        [+]            │  │
│   ├─────────────────────────────────────────────────────────────────────┤  │
│   │  Apakah layanan ini menggantikan dokter pribadi saya? [+]          │  │
│   ├─────────────────────────────────────────────────────────────────────┤  │
│   │  Bagaimana cara mengklaim 2x pertemuan gratis?      [+]            │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│   FAQ Item:                                                                │
│   - Border-bottom: 1px solid #E2E8F0                                      │
│   - Padding: 24px 0                                                        │
│   - Question: Nunito 600, 18px, #1E3A8A                                    │
│   - Answer (expanded): Open Sans 400, 16px, #475569, padding-top 16px    │
│   - Icon: + (closed) / − (open), #10B981, 20px                           │
│   - Transition: height 300ms ease, rotate icon 45deg                       │
│                                                                            │
│   CTA Footer:                                                              │
│   "Masih punya pertanyaan? Tanya langsung ke dokter kami"                 │
│   → Chat WhatsApp Gratis                                                   │
│                                                                            │
│ FOOTER (sama)                                                              │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Wireframe Halaman: PRICING

```
┌────────────────────────────────────────────────────────────────────────────┐
│ HEADER (sama)                                                              │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ HERO PRICING                                                               │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│                    ┌──────────┐                                           │
│                    │ HARGA     │                                           │
│                    │ TRANSPARAN│                                           │
│                    └──────────┘                                           │
│                                                                            │
│              Transparansi adalah Komitmen Kami                             │
│              Font: Lora 600, 44px, #1E3A8A                                  │
│                                                                            │
│         Tidak ada biaya tersembunyi. Layanan gratis untuk                 │
│         memulai, opsi premium untuk dukungan lebih intens.                 │
│         Font: Open Sans 400, 18px, #475569                                  │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ FREE VS PREMIUM COMPARISON                                                 │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #FFFFFF                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│              Gratis vs Lanjutan                                            │
│              Font: Nunito 700, 32px, #1E3A8A                                │
│                                                                            │
│   ┌─────────────────────────────┐    ┌─────────────────────────────┐     │
│   │                             │    │                             │     │
│   │   PAKET GRATIS              │    │   PAKET PREMIUM (Opsional)  │     │
│   │   ─────────────────         │    │   ─────────────────         │     │
│   │                             │    │                             │     │
│   │   Rp 0                      │    │   Rp 750.000                │     │
│   │   Font: Nunito 700, 48px    │    │   Font: Nunito 700, 48px    │     │
│   │   Color: #10B981            │    │   Color: #1E3A8A            │     │
│   │                             │    │   /sesi tambahan            │     │
│   │                             │    │   Open Sans 400, 16px     │     │
│   │   ✓ Konsultasi online       │    │   ✓ Semua fitur Gratis    │     │
│   │   ✓ 2x pertemuan langsung   │    │   ✓ Sesi tambahan         │     │
│   │   ✓ Rencana personal        │    │   ✓ Pemeriksaan lab       │     │
│   │   ✓ Akses grup support      │    │   ✓ Konseling intensif    │     │
│   │   ✓ Materi edukasi          │    │   ✓ Akses 24/7            │     │
│   │                             │    │   ✓ Garansi dukungan      │     │
│   │                             │    │                             │     │
│   │   ┌────────────────────┐    │    │   ┌────────────────────┐    │     │
│   │   │ Klaim Sekarang    │    │    │   │ Konsultasi Dulu   │    │     │
│   │   │ #10B981           │    │    │   │ #1E3A8A           │    │     │
│   │   └────────────────────┘    │    │   └────────────────────┘    │     │
│   │                             │    │                             │     │
│   │   ★ Rekomendasi untuk       │    │   Untuk yang butuh        │     │
│   │     pemula                  │    │   pendampingan ekstra     │     │
│   │                             │    │                             │     │
│   └─────────────────────────────┘    └─────────────────────────────┘     │
│                                                                            │
│   Card Gratis: border: 2px solid #10B981, bg #FFFFFF, rounded-2xl          │
│   Card Premium: border: 1px solid #E2E8F0, bg #FFFFFF, rounded-2xl       │
│   Checkmark: #10B981, 20px                                               │
│   Feature text: Open Sans 400, 16px, #334155                             │
│   Recommended badge: pill on Gratis card, bg #10B981, text white         │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ DETAIL PERTEMUAN GRATIS                                                    │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│              Apa yang Anda Dapatkan (2x Gratis)                           │
│              Font: Lora 600, 36px, #1E3A8A                                │
│                                                                            │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │
│   │                 │  │                 │  │                 │            │
│   │  SESI 1         │  │  SESI 2         │  │  BONUS          │            │
│   │                 │  │                 │  │                 │            │
│   │  🩺 Evaluasi    │  │  📋 Rencana     │  │  📱 Akses       │            │
│   │     Awal        │  │     Aksi        │  │     Grup        │            │
│   │                 │  │                 │  │     Support       │            │
│   │  Pemeriksaan    │  │  Strategi       │  │  Komunitas      │            │
│   │  kesehatan      │  │  personal       │  │  perokok yang   │            │
│   │  dasar dan      │  │  berhenti       │  │  ingin berhenti │            │
│   │  wawancara      │  │  merokok        │  │  bersama        │            │
│   │                 │  │                 │  │                 │            │
│   │  Durasi: 45 min │  │  Durasi: 45 min │  │  Lifetime       │            │
│   │  #1E3A8A badge  │  │  #1E3A8A badge  │  │  #10B981 badge  │            │
│   │                 │  │                 │  │                 │            │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘            │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ DISCLAIMER                                                                 │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #FFFFFF                                                     │
│ ░  Border-top: 3px solid #E2E8F0                                         │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│   📋 Catatan Penting                                                      │
│                                                                            │
│   • Layanan gratis tidak memerlukan pembayaran apapun di muka           │
│   • 2x pertemuan gratis berlaku untuk pasien baru                         │
│   • Sesi tambahan setelah 2x gratis dikenakan biaya sesuai paket         │
│   • Konsultasi online tetap gratis tanpa batas                          │
│   • Layanan ini adalah pendampingan, bukan pengganti pengobatan medis      │
│                                                                            │
│   Font: Open Sans 400, 15px, #475569                                       │
│   Icon: #1E3A8A, 20px                                                    │
│   Max-width: 800px, center aligned                                        │
│                                                                            │
│ FOOTER (sama)                                                              │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Wireframe Halaman: BLOG

```
┌────────────────────────────────────────────────────────────────────────────┐
│ HEADER (sama)                                                              │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ HERO BLOG                                                                  │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│                    ┌──────────┐                                           │
│                    │ BLOG      │                                           │
│                    │ KESEHATAN │                                           │
│                    └──────────┘                                           │
│                                                                            │
│         Wawasan untuk Perjalanan Sehat Anda                               │
│         Font: Lora 600, 44px, #1E3A8A                                     │
│                                                                            │
│         Artikel, tips, dan cerita inspiratif dari                          │
│         tim dokter ahli kami.                                              │
│         Font: Open Sans 400, 18px, #475569                                   │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ FEATURED ARTICLE                                                           │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #FFFFFF                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  ┌────────────────────────────┐    ┌────────────────────────────┐   │  │
│   │  │                            │    │                            │   │  │
│   │  │    Featured Thumbnail      │    │  ┌──────────┐              │   │  │
│   │  │    16:9, 600×338px         │    │  │UNGGULAN  │              │   │  │
│   │  │    Rounded-xl left         │    │  └──────────┘              │   │  │
│   │  │                            │    │                            │   │  │
│   │  │                            │    │  10 Cara Efektif           │   │  │
│   │  │                            │    │  Mengatasi Keinginan       │   │  │
│   │  │                            │    │  Merokok setelah Makan     │   │  │
│   │  │                            │    │                            │   │  │
│   │  │                            │    │  Kebiasaan merokok setelah │   │  │
│   │  │                            │    │  makan adalah salah satu   │   │  │
│   │  │                            │    │  trigger terkuat. Pelajari │   │  │
│   │  │                            │    │  strategi mengatasinya...  │   │  │
│   │  │                            │    │                            │   │  │
│   │  │                            │    │  dr. Andi Wijaya           │   │  │
│   │  │                            │    │  24 April 2026 · 6 menit   │   │  │
│   │  │                            │    │                            │   │  │
│   │  │                            │    │  ┌────────────────────┐   │   │  │
│   │  │                            │    │  │ Baca Selengkapnya → │   │   │  │
│   │  │                            │    │  └────────────────────┘   │   │  │
│   │  └────────────────────────────┘    └────────────────────────────┘   │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│   Card: bg #FFFFFF, border-radius 20px, overflow hidden                   │
│   Badge: bg #10B981, text white, Nunito 700, 12px                         │
│   Title: Lora 600, 28px, #1E3A8A                                          │
│   Excerpt: Open Sans 400, 16px, #475569, 4 lines max                     │
│   Author: Open Sans 600, 14px, #1E3A8A                                    │
│   Meta: Open Sans 400, 13px, #94A3B8                                      │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ FILTER & SEARCH                                                            │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐    ┌─────────────────┐  │
│   │  Semua  │ │  Tips   │ │ Edukasi │ │Cerita   │    │ 🔍 Cari artikel │  │
│   │  aktif  │ │         │ │         │ │Sukses   │    │                 │  │
│   └─────────┘ └─────────┘ └─────────┘ └─────────┘    └─────────────────┘  │
│                                                                            │
│   Category pills:                                                          │
│   - Active: bg #1E3A8A, text #FFFFFF, Nunito 600, 14px                   │
│   - Inactive: bg #FFFFFF, border 1px #E2E8F0, text #475569                │
│   - Hover: border #1E3A8A                                                 │
│   - Border-radius: full (pill shape)                                      │
│                                                                            │
│   Search input:                                                            │
│   - bg #FFFFFF, border 1px #E2E8F0, rounded-xl                            │
│   - Placeholder: #94A3B8, Open Sans 400, 15px                             │
│   - Focus: border #1E3A8A, ring 3px rgba(30,58,138,0.1)                  │
│   - Icon: search 20px, #94A3B8, left padding 16px                         │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ ARTICLE GRID                                                               │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐          │
│   │  Thumbnail 16:9 │  │  Thumbnail 16:9 │  │  Thumbnail 16:9 │          │
│   │  Rounded top    │  │  Rounded top    │  │  Rounded top    │          │
│   ├─────────────────┤  ├─────────────────┤  ├─────────────────┤          │
│   │  ┌──────────┐   │  │  ┌──────────┐   │  │  ┌──────────┐   │          │
│   │  │ Tips     │   │  │  │Edukasi   │   │  │  │Cerita    │   │          │
│   │  │#10B981   │   │  │  │#1E3A8A   │   │  │  │Sukses    │   │          │
│   │  └──────────┘   │  │  └──────────┘   │  │  └──────────┘   │          │
│   │                 │  │                 │  │                 │          │
│   │  Judul Artikel  │  │  Judul Artikel  │  │  Judul Artikel  │          │
│   │  Font: Nunito   │  │  Font: Nunito   │  │  Font: Nunito   │          │
│   │  700, 20px      │  │  700, 20px      │  │  700, 20px      │          │
│   │  #1E3A8A        │  │  #1E3A8A        │  │  #1E3A8A        │          │
│   │                 │  │                 │  │                 │          │
│   │  Ringkasan      │  │  Ringkasan      │  │  Ringkasan      │          │
│   │  3 baris...     │  │  3 baris...     │  │  3 baris...     │          │
│   │  Open Sans      │  │  Open Sans      │  │  Open Sans      │          │
│   │  400, 15px      │  │  400, 15px      │  │  400, 15px      │          │
│   │                 │  │                 │  │                 │          │
│   │  dr. Andi ·     │  │  dr. Budi ·     │  │  Tim Editorial ·│          │
│   │  20 Apr 2026    │  │  18 Apr 2026    │  │  15 Apr 2026    │          │
│   │  #94A3B8        │  │  #94A3B8        │  │  #94A3B8        │          │
│   │                 │  │                 │  │                 │          │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘          │
│                                                                            │
│   Row 2: 3 cards                                                           │
│   Row 3: 3 cards                                                           │
│                                                                            │
│   Pagination atau "Muat Lebih Banyak"                                     │
│   ┌────────────────────────────────────────┐                                │
│   │         Muat Lebih Banyak ↓            │                                │
│   └────────────────────────────────────────┘                                │
│   Secondary button style                                                   │
│                                                                            │
│   FOOTER (sama)                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Wireframe Halaman: CONTACT

```
┌────────────────────────────────────────────────────────────────────────────┐
│ HEADER (sama)                                                              │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ HERO CONTACT                                                               │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│                    ┌──────────┐                                           │
│                    │ KONTAK   │                                           │
│                    │ KAMI     │                                           │
│                    └──────────┘                                           │
│                                                                            │
│              Kami Siap Mendengarkan                                       │
│              Font: Lora 600, 44px, #1E3A8A                                │
│                                                                            │
│         Punya pertanyaan atau ingin langsung                             │
│         konsultasi? Hubungi kami kapan saja.                             │
│         Font: Open Sans 400, 18px, #475569                                 │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ WHATSAPP DIRECT (PRIMARY)                                                  │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #FFFFFF                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│              ┌─────────────────────────────────────────────┐              │
│              │                                             │              │
│              │    💬 WhatsApp (Cara Tercepat)              │              │
│              │                                             │              │
│              │    0857 2773 969                            │              │
│              │    Font: Nunito 700, 36px, #1E3A8A          │              │
│              │                                             │              │
│              │    Klik tombol di bawah untuk langsung      │              │
│              │    chat dengan tim dokter kami.             │              │
│              │    Response time: ±10 menit                 │              │
│              │    Font: Open Sans 400, 16px, #475569       │              │
│              │                                             │              │
│              │    ┌─────────────────────────────────────┐  │              │
│              │    │  💬 Chat WhatsApp Sekarang          │  │              │
│              │    │  wa.me/628572773969                 │  │              │
│              │    │  #10B981, Nunito 700, 18px           │  │              │
│              │    │  Padding: 20px 48px                  │  │              │
│              │    │  Rounded-xl, shadow-lg               │  │              │
│              │    │  Icon: WhatsApp 24px left            │  │              │
│              │    └─────────────────────────────────────┘  │              │
│              │                                             │              │
│              │    🕐 Jam Operasional WhatsApp:            │              │
│              │    Senin-Sabtu, 08.00 - 17.00 WIB          │              │
│              │    Font: Open Sans 400, 14px, #94A3B8      │              │
│              │                                             │              │
│              └─────────────────────────────────────────────┘              │
│                                                                            │
│   Container: max-width 640px, center, bg #F8FAFC, rounded-3xl             │
│   Border: 1px solid #E2E8F0                                                │
│   Padding: 48px                                                            │
│   WhatsApp button: pulse ring animation (subtle green glow)              │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ CONTACT FORM (SECONDARY)                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #F8FAFC                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│              Atau Kirim Pesan Melalui Formulir                            │
│              Font: Nunito 700, 28px, #1E3A8A                                │
│                                                                            │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                                                                     │  │
│   │  Nama Lengkap *                                                     │  │
│   │  ┌─────────────────────────────────────────────────────────────┐   │  │
│   │  │                                                             │   │  │
│   │  │  Placeholder: Masukkan nama Anda                             │   │  │
│   │  └─────────────────────────────────────────────────────────────┘   │  │
│   │                                                                     │  │
│   │  Email *                                                            │  │
│   │  ┌─────────────────────────────────────────────────────────────┐   │  │
│   │  │                                                             │   │  │
│   │  │  Placeholder: email@anda.com                               │   │  │
│   │  └─────────────────────────────────────────────────────────────┘   │  │
│   │                                                                     │  │
│   │  Nomor WhatsApp *                                                   │  │
│   │  ┌─────────────────────────────────────────────────────────────┐   │  │
│   │  │ +62 │ 857 2773 969                                          │   │  │
│   │  │(prefix│ Placeholder: Nomor aktif Anda                        │   │  │
│   │  └─────────────────────────────────────────────────────────────┘   │  │
│   │                                                                     │  │
│   │  Pesan                                                              │  │
│   │  ┌─────────────────────────────────────────────────────────────┐   │  │
│   │  │                                                             │   │  │
│   │  │  Placeholder: Ceritakan kebutuhan Anda...                  │   │  │
│   │  │  4 rows minimum height                                       │   │  │
│   │  └─────────────────────────────────────────────────────────────┘   │  │
│   │                                                                     │  │
│   │  [reCAPTCHA v3 badge - invisible]                                   │  │
│   │                                                                     │  │
│   │  ┌─────────────────────────────────────────────────────────────┐   │  │
│   │  │  Kirim Pesan                                               │   │  │
│   │  │  #1E3A8A, Nunito 700, 16px, full width                      │   │  │
│   │  │  Rounded-xl, padding 16px                                    │   │  │
│   │  └─────────────────────────────────────────────────────────────┘   │  │
│   │                                                                     │  │
│   │  ─────────────────────────────────────────────────────────────      │  │
│   │                                                                     │  │
│   │  💡 Tips: Untuk respon lebih cepat, gunakan WhatsApp langsung.      │  │
│   │  Open Sans 400, 13px, #94A3B8                                       │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│   Form container: max-width 600px, center, bg #FFFFFF, rounded-2xl      │
│   Input fields:                                                            │
│   - bg #F8FAFC, border 1px #E2E8F0, rounded-xl                          │
│   - Focus: border #1E3A8A, ring 3px rgba(30,58,138,0.1)                  │
│   - Label: Open Sans 600, 14px, #334155, margin-bottom 8px               │
│   - Placeholder: #94A3B8                                                   │
│   - Error: border #EF4444, text #EF4444, 14px                            │
│                                                                            │
│   Submit hover: bg #0F172A (darker blue)                                  │
│   Success state: green check + "Pesan terkirim, kami akan segera merespon"│
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ MAP & INFO                                                                 │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  Background: #FFFFFF                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                            │
│   ┌─────────────────────────────┐    ┌─────────────────────────────┐      │
│   │                             │    │                             │      │
│   │  📍 Lokasi Klinik           │    │  🕐 Jam Operasional          │      │
│   │                             │    │                             │      │
│   │  Google Maps Embed          │    │  Senin - Jumat              │      │
│   │  100% width, 400px height   │    │  08.00 - 17.00 WIB          │      │
│   │  Rounded-xl                 │    │                             │      │
│   │                             │    │  Sabtu                      │      │
│   │                             │    │  08.00 - 12.00 WIB          │      │
│   │                             │    │                             │      │
│   │                             │    │  Minggu                     │      │
│   │                             │    │  Tutup                      │      │
│   │                             │    │  #EF4444 (red)              │      │
│   │                             │    │                             │      │
│   │                             │    │  📱 Emergency WhatsApp:     │      │
│   │                             │    │  0857 2773 969              │      │
│   │                             │    │  #1E3A8A, semibold          │      │
│   │                             │    │                             │      │
│   └─────────────────────────────┘    └─────────────────────────────┘      │
│                                                                            │
│   Map container: bg #F8FAFC, border-radius 16px, overflow hidden          │
│   Info heading: Nunito 700, 20px, #1E3A8A                                  │
│   Info text: Open Sans 400, 16px, #475569                                  │
│   Day label: Open Sans 600, 15px, #334155                                  │
│   Time: Open Sans 400, 15px, #475569                                       │
│                                                                            │
│ FOOTER (sama)                                                              │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Component Global: Floating WhatsApp Button

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│                                                                            │
│                                                                            │
│                                                                            │
│                                                                            │
│                                                                            │
│                                                                    ┌─────┐ │
│                                                                    │     │ │
│                                                                    │ 💬  │ │
│                                                                    │     │ │
│                                                                    └─────┘ │
│                                                                            │
│   Position: Fixed, bottom-right, 24px from edges (32px desktop)           │
│   Size: 56px (mobile), 64px (desktop)                                     │
│   Background: #10B981 (Recovery Green)                                     │
│   Icon: WhatsApp icon, white, 28px                                         │
│   Shadow: 0 4px 20px rgba(16,185,129,0.4)                                  │
│   Border-radius: full circle                                               │
│   Z-index: 50                                                              │
│                                                                            │
│   Hover: scale(1.1), shadow intensifies                                    │
│   Active: scale(0.95)                                                      │
│                                                                            │
│   Tooltip (desktop only, on hover):                                        │
│   ┌─────────────────────┐                                                  │
│   │ Tanya Dokter Gratis │ ← Slide in from right                          │
│   └─────────────────────┘                                                  │
│                                                                            │
│   Pulse animation:                                                         │
│   • Ring 1: opacity 0.3, scale 1→1.5, 2s infinite                          │
│   • Ring 2: opacity 0.2, scale 1→1.5, 2s infinite, delay 0.5s            │
│                                                                            │
│   Link: https://wa.me/628572773969?text=Halo%2C+saya+ingin+konsultasi    │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Responsive Behavior Summary

### Breakpoint System

```
Mobile:        < 768px
Tablet:        768px - 1023px
Desktop Small: 1024px - 1279px
Desktop Large: >= 1280px
```

### Key Responsive Changes

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Navigation** | Hamburger drawer | Hamburger drawer | Horizontal menu |
| **Hero Layout** | Stacked vertical | Stacked vertical | 2-column 50/50 |
| **Section Padding** | 60px vertical | 80px vertical | 100px vertical |
| **Value Prop Cards** | 1 column, full width | 2 columns | 3 columns |
| **Doctor Cards** | 1 column, full width | 2 columns | 3 columns |
| **Testimonials** | 1 card visible | 2 cards visible | 3 cards visible |
| **Blog Grid** | 1 column | 2 columns | 3 columns |
| **Pricing Cards** | Stacked, full width | Side-by-side | Side-by-side with gap |
| **Footer Columns** | Stacked | 2×2 grid | 4 columns |
| **Floating WhatsApp** | 56px, 16px margin | 64px, 24px margin | 64px, 32px margin |
| **Font Size (H1)** | 32px | 44px | 52px |
| **Container Max-Width** | 100% - 32px | 100% - 48px | 1200px |
| **Map + Info** | Stacked | Side-by-side | Side-by-side |
| **Form Width** | 100% | 100% (max 600px) | 100% (max 600px) |
| **FAQ Width** | 100% | 100% (max 800px) | 100% (max 800px) |

---

## Animations & Micro-interactions

### 1. Scroll Reveal (All Sections)
```
Trigger: Element enters viewport (IntersectionObserver, threshold 0.1)
Animation: opacity 0→1, translateY(30px)→translateY(0)
Duration: 600ms
Easing: cubic-bezier(0.22, 1, 0.36, 1) (ease-out-expo)
Stagger: 100ms between sibling elements
```

### 2. Counter Animation (Home Hero)
```
Trigger: On scroll into view
Animation: Count from 0 to target number
Duration: 2s
Easing: ease-out
Format: "500+" with suffix
```

### 3. Card Hover (Value Prop, Blog, Doctor)
```
Hover: translateY(-6px), shadow elevation increase
Duration: 300ms
Easing: ease-out
Cursor: pointer
```

### 4. Button Hover (Primary CTA)
```
Hover: background darken to #059669, scale(1.02)
Active: scale(0.98)
Duration: 200ms
Easing: ease-in-out
Shadow: intensify on hover
```

### 5. FAQ Accordion
```
Open: height 0→auto, icon rotate 0→45deg (plus to X)
Close: height auto→0, icon rotate 45deg→0
Duration: 300ms
Easing: ease-in-out
```

### 6. Testimonial Carousel
```
Auto-play: 5s interval
Transition: opacity 0→1 + translateX(20px)→translateX(0)
Duration: 500ms
Easing: cubic-bezier(0.4, 0, 0.2, 1)
Pause on hover
Touch: swipe enabled on mobile
```

### 7. Mobile Menu
```
Open: translateX(100%)→translateX(0), backdrop opacity 0→0.5
Duration: 300ms
Easing: cubic-bezier(0.4, 0, 0.2, 1)
Body: overflow hidden when open
Hamburger morph: 3 lines → X (rotation + translation)
```

### 8. WhatsApp Float Pulse
```
Continuous: ring scale 1→1.5, opacity 0.4→0
Duration: 2s
Iteration: infinite
```

---

## Assets & Iconography

### Icon Style
- **Library:** Lucide React / Heroicons
- **Style:** Outline, 1.5px stroke, rounded caps
- **Size:** 20px (inline), 24px (buttons), 40-56px (section icons)
- **Color:** #1E3A8A (default), #10B981 (CTA/contextual)

### Key Icons Needed
| Icon | Usage | Size |
|---|---|---|
| `message-circle` | WhatsApp CTA | 20-24px |
| `stethoscope` | Doctor/services | 40-56px |
| `heart-pulse` | Health/empathy | 40-56px |
| `shield-check` | Trust/certification | 40px |
| `calendar-check` | Appointment | 24px |
| `users` | Support group | 40px |
| `book-open` | Blog/education | 40px |
| `chevron-right` | Links/arrows | 16px |
| `plus` / `minus` | FAQ toggle | 20px |
| `menu` / `x` | Mobile nav | 24px |
| `search` | Blog search | 20px |
| `map-pin` | Location | 24px |
| `clock` | Operating hours | 20px |
| `phone` | Contact | 20px |
| `check` | Feature list | 20px |
| `arrow-right` | CTA arrows | 16px |
| `star` | Testimonial rating | 16px |

---

*Wireframe UI/UX ini mendefinisikan layout, komponen, interaksi, dan behavior untuk seluruh halaman website layanan konsultasi kesehatan berhenti merokok dalam format yang dapat langsung diimplementasikan oleh designer dan developer.*
