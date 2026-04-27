# Technical Blueprint

## Website Layanan Konsultasi Kesehatan Berhenti Merokok

**Versi:** 1.0
**Tanggal:** 27 April 2026
**Tipe:** Static Website with Dynamic Components

---

## 1. Sistem Overview

Website ini adalah platform informasi dan konversi yang bertujuan mengarahkan pengunjung untuk menghubungi tim dokter melalui WhatsApp. Dengan pendekatan **static-first** dan **minimal dependencies**, website dirancang untuk performa tinggi, biaya hosting rendah, dan pemeliharaan yang mudah.

**Paradigma:** Content-driven conversion website dengan fokus pada:
- Speed & Performance (Core Web Vitals optimization)
- SEO-first architecture
- Conversion rate optimization (CRO)
- Mobile-first responsive design

---

## 2. Information Architecture

### 2.1 Site Map

```
berhenti-merokok.id/
├── /                    → Home Page (Landing)
│   ├── Hero Section
│   ├── Value Proposition
│   ├── Doctor Preview
│   ├── Testimonials
│   ├── Blog Preview
│   └── CTA Footer
│
├── /about/              → About Page
│   ├── Hero About
│   ├── Vision & Mission
│   ├── Doctor Profiles
│   ├── Certifications
│   └── Team Gallery
│
├── /layanan/            → Service Page
│   ├── Hero Service
│   ├── Service Cards
│   ├── Program Timeline
│   ├── Methods Detail
│   └── FAQ Accordion
│
├── /harga/              → Pricing Page
│   ├── Hero Pricing
│   ├── Free vs Premium
│   ├── Pricing Table
│   ├── Package Cards
│   └── Payment Info
│
├── /blog/               → Blog Index
│   ├── Hero Blog
│   ├── Featured Article
│   ├── Article Grid
│   ├── Category Filter
│   └── Search
│
├── /blog/[slug]/        → Single Article
│   ├── Article Header
│   ├── Content Body
│   ├── Author Box
│   ├── Related Articles
│   └── CTA Article
│
└── /kontak/             → Contact Page
    ├── Contact Hero
    ├── WhatsApp Direct
    ├── Contact Form
    ├── Map Embed
    └── Operating Hours
```

### 2.2 Navigation Structure

| Level | Item | Target | Type |
|---|---|---|---|
| 1 | Beranda | / | Link |
| 1 | Tentang Kami | /about/ | Link |
| 1 | Layanan | /layanan/ | Link |
| 1 | Harga | /harga/ | Link |
| 1 | Blog | /blog/ | Link |
| 1 | Kontak | /kontak/ | Link |
| 2 (CTA) | Tanya Gratis | WhatsApp | External |

---

## 3. Component Architecture

### 3.1 Global Components (Shared)

```
Global/
├── Header/
│   ├── Logo (SVG)
│   ├── Navigation/
│   │   ├── Primary Nav
│   │   └── Mobile Menu Toggle
│   └── CTA Button (WhatsApp)
│
├── Footer/
│   ├── Brand Column
│   ├── Quick Links
│   ├── Services Links
│   ├── Contact Info
│   └── Social Proof (Trust Badge)
│
├── Floating Action/
│   └── WhatsApp Floating Button (Fixed)
│
└── Meta/
    ├── SEO Head (Dynamic)
    ├── Schema.org JSON-LD
    └── Open Graph Tags
```

### 3.2 Page-Specific Sections

#### Home Page Sections
```
Home/
├── HeroSection/
│   ├── Headline (H1)
│   ├── Subheadline
│   ├── Stat Counter (Animated)
│   └── Dual CTA Group
│
├── ValuePropSection/
│   ├── Section Header
│   └── 3-Card Grid/
│       ├── Card: Konsultasi Gratis
│       ├── Card: 2x Pertemuan Gratis
│       └── Card: Dokter Ahli
│
├── DoctorSection/
│   ├── Section Header
│   ├── Doctor Profile Card
│   └── Credentials List
│
├── TestimonialSection/
│   ├── Section Header
│   └── Carousel/
│       ├── Testimonial Card × 5
│       └── Navigation Dots/Arrows
│
├── BlogPreviewSection/
│   ├── Section Header
│   └── 3-Column Grid/
│       └── Article Card × 3
│
└── BottomCTASection/
    ├── Heading
    └── WhatsApp CTA Button
```

#### About Page Sections
```
About/
├── HeroSection (Compact)
├── VisionMissionSection
├── DoctorProfileSection/
│   └── Doctor Card × N (Dynamic)
├── CertificationSection/
│   └── Certificate Badge Grid
└── ValuesSection/
    └── Value Pillar Grid
```

#### Service Page Sections
```
Service/
├── HeroSection
├── ServiceCardsSection/
│   └── Service Card × 3
├── TimelineSection/
│   └── Vertical Timeline (4 Steps)
├── MethodsSection/
│   └── Method Detail Accordion
└── FAQSection/
    └── FAQ Item × 6 (Accordion)
```

#### Pricing Page Sections
```
Pricing/
├── HeroSection
├── ComparisonSection/
│   ├── Free Tier Column
│   └── Premium Tier Column
├── PricingTableSection/
│   └── Comparison Table
├── PackageCardsSection/
│   └── Package Card × 3
└── PaymentInfoSection
```

#### Blog Page Sections
```
Blog/
├── HeroSection
├── FeaturedSection/
│   └── Featured Article Card
├── FilterSection/
│   ├── Category Pills
│   └── Search Input
└── ArticleGridSection/
    └── Article Card × 9 (3×3)
```

#### Contact Page Sections
```
Contact/
├── HeroSection
├── WhatsAppDirectSection/
│   ├── WhatsApp Number: 08572773969
│   ├── QR Code (Optional)
│   └── Click-to-Chat Button
├── FormSection/
│   ├── Name Input
│   ├── Email Input
│   ├── Phone Input
│   ├── Message Textarea
│   ├── reCAPTCHA
│   └── Submit Button
├── MapSection/
│   └── Google Maps Embed
└── InfoSection/
    ├── Address
    ├── Operating Hours
    └── Emergency Contact
```

---

## 4. User Flow & Journey Mapping

### 4.1 Primary Conversion Flow

```
[Entry: Google/Ads/Social]
    ↓
[Home Page] ←→ Scroll & Read Value Propositions
    ↓
[Click CTA: "Tanya Dokter Gratis"]
    ↓
[WhatsApp Direct Chat]
    ↓
[Initial Consultation]
    ↓
[Book 1st Free Appointment]
    ↓
[Attend 1st Session]
    ↓
[Book 2nd Free Appointment]
    ↓
[Attend 2nd Session] ←→ [Upsell: Premium Package]
```

### 4.2 Secondary Flow (Information Seeker)

```
[Entry: Blog Article]
    ↓
[Read Content] ←→ [Engage with Educational Material]
    ↓
[Click In-Article CTA]
    ↓
[Service Page / Pricing Page]
    ↓
[Compare Options]
    ↓
[Contact via WhatsApp or Form]
```

### 4.3 Trust Building Flow

```
[Entry: Any Page]
    ↓
[Click "Tentang Kami"]
    ↓
[View Doctor Credentials & Certifications]
    ↓
[View Testimonials]
    ↓
[Return to Home / Click CTA]
```

---

## 5. Data & Content Model

### 5.1 Content Types

```yaml
Doctor:
  id: string
  name: string
  title: string          # e.g., "Spesialis Paru"
  photo: image
  experience: number       # years
  credentials: array[string]
  bio: text
  certifications: array[image]

Testimonial:
  id: string
  name: string
  photo: image (optional)
  age: number
  quote: text
  result: string         # e.g., "Berhenti 6 bulan"
  rating: number         # 1-5

Article:
  slug: string
  title: string
  excerpt: text
  content: markdown
  category: enum         # edukasi | tips | cerita-sukses | penelitian
  featured_image: image
  author: string
  published_date: date
  read_time: number      # minutes
  tags: array[string]

Service:
  id: string
  name: string
  description: text
  features: array[string]
  duration: string
  is_free: boolean
  icon: string           # SVG icon name

FAQ:
  id: string
  question: text
  answer: text
  category: string
```

### 5.2 Static Assets Inventory

| Asset Type | Count | Format | Optimization |
|---|---|---|---|
| Doctor Photos | 3-5 | WebP/JPEG | 400×500px, lazy-loaded |
| Certificate Images | 4-6 | WebP/JPEG | 200×200px |
| Article Thumbnails | 12+ | WebP/JPEG | 800×450px, lazy-loaded |
| Icons/Illustrations | 20+ | SVG | Inline or sprite |
| Testimonial Avatars | 5 | WebP/JPEG | 100×100px |
| Logo | 1 | SVG | Inline, header + footer |
| Hero Image/Graphic | 1-2 | WebP/SVG | 1920×800px, priority load |

---

## 6. Integration Architecture

### 6.1 Third-Party Services

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT BROWSER                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  Website    │  │  Google     │  │  WhatsApp   │         │
│  │  (Static)   │──│  Analytics  │  │  Web/App    │         │
│  │             │  │  (gtag.js)  │  │  (wa.me)    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│         │                                              │
│         │ Form Submission (AJAX)                       │
│         ▼                                              │
│  ┌─────────────┐  ┌─────────────┐                      │
│  │  Formspree  │  │  reCAPTCHA  │                      │
│  │  / Email    │  │  v3          │                      │
│  │  Service    │  │  (Google)   │                      │
│  └─────────────┘  └─────────────┘                      │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Integration Specifications

#### WhatsApp Integration
- **Direct Link Format:** `https://wa.me/628572773969?text=Halo,%20saya%20ingin%20konsultasi%20berhenti%20merokok`
- **Number Format:** International (+62 857 2773 969)
- **Pre-filled Message:** "Halo, saya ingin konsultasi berhenti merokok"
- **Placement:** Header CTA, Floating Button, Contact Page, Blog Article CTA
- **Tracking:** UTM parameters untuk analytics (`utm_source=website&utm_medium=cta_button&utm_campaign=free_consultation`)

#### Contact Form Integration
- **Service:** Formspree atau Netlify Forms (gratis tier)
- **Endpoint:** POST ke formspree.io/f/{form_id}
- **Fields:** name, email, phone, message
- **Validation:** Client-side (HTML5) + Server-side (service provider)
- **Confirmation:** Success message inline, no redirect

#### Google Analytics 4
- **Tracking ID:** G-XXXXXXXXXX
- **Events Tracked:**
  - `whatsapp_click` (semua tombol WhatsApp)
  - `contact_form_submit`
  - `page_scroll_25`, `page_scroll_50`, `page_scroll_75`, `page_scroll_90`
  - `pricing_view`
  - `blog_article_click`
  - `faq_expand`
- **Custom Dimensions:** User type (new/returning), Traffic source

#### reCAPTCHA v3
- **Site Key:** [to be configured]
- **Secret Key:** [server environment variable]
- **Implementation:** Invisible badge pada form kontak
- **Score Threshold:** 0.5 (default)

---

## 7. State Management & Logic

### 7.1 Client-Side States

| State | Type | Scope | Mechanism |
|---|---|---|---|
| Mobile Menu | boolean | Global | CSS class toggle + JS |
| FAQ Accordion | boolean[] | Page (Service) | JS toggle per item |
| Testimonial Carousel | number | Page (Home) | JS index tracking |
| Blog Category Filter | string | Page (Blog) | URL param + JS filter |
| Form Submission | enum | Page (Contact) | idle \| submitting \| success \| error |
| Scroll Position | number | Global | Intersection Observer |
| Back-to-Top Visibility | boolean | Global | Scroll threshold 500px |

### 7.2 Animation & Interaction Logic

```
Scroll-Triggered Animations:
├── Fade In Up        → opacity: 0→1, translateY: 30px→0
├── Counter Animation → CountUp.js from 0 to target
├── Stagger Children  → delay increment per child element
└── Lazy Load Images  → IntersectionObserver, blur-up placeholder

Hover Effects:
├── Card Hover        → translateY: -8px, shadow elevation
├── Button Hover      → brightness/contrast, scale: 1.02
├── Link Hover        → underline animation (left to right)
└── Image Hover       → scale: 1.05, overflow hidden

Micro-Interactions:
├── Menu Toggle       → hamburger morph to X (300ms ease)
├── Accordion         → height auto transition (300ms ease)
├── Carousel Slide    → opacity + translateX (500ms cubic-bezier)
└── Form Focus        → border color change + label float
```

---

## 8. Responsive Behavior Matrix

| Component | Mobile (<768px) | Tablet (768-1024px) | Desktop (>1024px) |
|---|---|---|---|
| Navigation | Hamburger Drawer | Hamburger Drawer | Horizontal Menu |
| Hero Layout | Stacked (text → image) | Stacked | Side-by-Side |
| Value Prop | 1 Column | 2 Columns | 3 Columns |
| Doctor Card | Full Width | 2 Columns | 3 Columns |
| Testimonial | Single Card | Single Card | Carousel 3 Visible |
| Blog Grid | 1 Column | 2 Columns | 3 Columns |
| Pricing Table | Card Stack | 2 Columns | 3 Columns |
| Footer | Stacked Columns | 2×2 Grid | 4 Columns |
| WhatsApp Float | Bottom Right, 56px | Bottom Right, 64px | Bottom Right, 64px |
| Font Size (H1) | 28px | 40px | 52px |
| Container Padding | 16px | 24px | 32px (max 1200px) |
| Section Gap | 60px | 80px | 100px |

---

## 9. Performance Budget

| Resource | Budget | Notes |
|---|---|---|
| First Contentful Paint | < 1.8s | Target optimal |
| Largest Contentful Paint | < 2.5s | Hero image prioritized |
| Total Page Weight | < 1.5 MB | All assets combined |
| JavaScript | < 150 KB | Minified + gzipped |
| CSS | < 50 KB | Minified + gzipped |
| Images (initial) | < 800 KB | WebP format, lazy load rest |
| Font Files | < 200 KB | Subset loading, woff2 |
| Third-party Scripts | < 100 KB | Async/defer loading |
| DOM Nodes | < 800 | Per halaman |

---

## 10. Error Handling & Fallbacks

| Scenario | Behavior |
|---|---|
| WhatsApp tidak terpasang | Tampilkan fallback: nomor telepon dengan format salin |
| Formspree error | Tampilkan pesan error, saran untuk WhatsApp langsung |
| reCAPTCHA gagal | Tampilkan pesan "Coba lagi", tidak blokir form |
| Gambar gagal load | Placeholder gradient + alt text |
| JavaScript disabled | Website tetap berfungsi (progressive enhancement) |
| Google Maps gagal load | Fallback: gambar statis lokasi + alamat teks |
| Browser lama (IE11) | Graceful degradation, basic layout tetap berfungsi |

---

## 11. Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       CDN (Cloudflare)                      │
│              DDoS Protection + Edge Caching                   │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    Static Hosting                           │
│         (Netlify / Vercel / Cloudflare Pages)               │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  HTML/CSS/JS│  │   Images    │  │   Fonts     │         │
│  │  (Build Art)│  │  (Optimized)│  │  (Woff2)    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐                          │
│  │  _redirects│  │  _headers   │                          │
│  │  (Routing)  │  │ (Security)  │                          │
│  └─────────────┘  └─────────────┘                          │
└─────────────────────────────────────────────────────────────┘
                           │
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
      ┌─────────┐   ┌──────────┐   ┌──────────┐
      │Formspree│   │ WhatsApp │   │  Google  │
      │ (Forms) │   │  (Chat)  │   │Analytics │
      └─────────┘   └──────────┘   └──────────┘
```

**Hosting Recommendation:**
- **Primary:** Netlify (free tier adequate)
- **Custom Domain:** berhenti-merokok.id (or similar)
- **SSL:** Let's Encrypt auto-provisioned
- **Build Trigger:** Git push ke main branch
- **Branch Preview:** Pull requests mendapat deploy preview otomatis

---

## 12. Maintenance & Update Plan

| Komponen | Frekuensi Update | Mekanisme |
|---|---|---|
| Blog Articles | Mingguan | Markdown files + git commit |
| Testimonials | Bulanan | Content JSON update |
| Pricing Info | Sesuai kebutuhan | Content JSON update |
| Doctor Profile | Sesuai kebutuhan | Content JSON update |
| Dependencies | Per 3 bulan | npm update + test |
| SSL Certificate | Otomatis | Let's Encrypt renewal |
| Backup | Otomatis | Git repository + CDN purge |

---

## 13. Technology Stack Summary

| Layer | Technology | Justification |
|---|---|---|
| Build Tool | Vite / Astro / Next.js (Static Export) | Fast build, optimal output |
| Styling | Tailwind CSS | Utility-first, design system alignment |
| Components | React / Vanilla JS + Web Components | Interaktivitas terbatas |
| Animation | CSS Transitions + IntersectionObserver | Performa optimal, no library |
| Icons | Lucide / Heroicons (SVG) | Konsisten, scalable |
| Fonts | Google Fonts (Open Sans, Nunito, Lora, Lato) | CDN delivery, free |
| Form Handling | Formspree / Netlify Forms | No backend needed |
| Analytics | Google Analytics 4 | Industry standard, free |
| Maps | Google Maps Embed | Free tier adequate |
| Hosting | Netlify / Vercel | CI/CD built-in, CDN, free tier |

---

*Blue Print ini adalah panduan implementasi teknis yang mengikat semua keputusan arsitektur, komponen, integrasi, dan performa menjadi satu dokumen referensi utuh.*
