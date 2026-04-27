# Architecture Plan

## Website Layanan Konsultasi Kesehatan Berhenti Merokok

**Versi:** 1.0
**Tanggal:** 27 April 2026
**Arsitektur:** Static Site Generation (SSG) with Client-Side Enhancements
**Paradigma:** Jamstack (JavaScript, APIs, Markup)

---

## 1. High-Level System Architecture

### 1.1 Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENT LAYER                                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Desktop   │  │   Mobile    │  │   Tablet    │  │    SEO      │         │
│  │   Browser   │  │   Browser   │  │   Browser   │  │   Crawler   │         │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘         │
│         │                │                │                │               │
│         └────────────────┴────────────────┴────────────────┘               │
│                                     │                                        │
│                              HTTPS / HTTP2                                   │
│                                     │                                        │
└─────────────────────────────────────┼────────────────────────────────────────┘
                                      │
┌─────────────────────────────────────┼────────────────────────────────────────┐
│                         EDGE/CDN LAYER                                       │
│  ┌──────────────────────────────────┴──────────────────────────────────────┐  │
│  │                    CDN (Cloudflare / Netlify Edge)                     │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │  │
│  │  │   HTML      │  │    CSS      │  │    JS       │  │   Assets    │ │  │
│  │  │   Cache     │  │   Cache     │  │   Cache     │  │   Cache     │ │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘ │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                     │                                        │
└─────────────────────────────────────┼────────────────────────────────────────┘
                                      │
┌─────────────────────────────────────┼────────────────────────────────────────┐
│                      HOSTING / BUILD LAYER                                   │
│  ┌──────────────────────────────────┴──────────────────────────────────────┐  │
│  │              Static Site Host (Netlify / Vercel / Cloudflare Pages)    │  │
│  │                                                                        │  │
│  │   ┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐  │  │
│  │   │   Source Code   │─────▶│  Build Pipeline │─────▶│  Static Assets  │  │  │
│  │   │   (Git Repo)    │      │  (CI/CD)        │      │  (CDN Deploy)   │  │  │
│  │   └─────────────────┘      └─────────────────┘      └─────────────────┘  │  │
│  │                                                                        │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                     │                                        │
└─────────────────────────────────────┼────────────────────────────────────────┘
                                      │
┌─────────────────────────────────────┼────────────────────────────────────────┐
│                      THIRD-PARTY INTEGRATIONS                                │
│                            (Serverless APIs)                                 │
│                                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │
│  │  WhatsApp API   │  │  Google         │  │   Formspree     │            │
│  │  (wa.me links)  │  │  Analytics 4    │  │   (Form API)    │            │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘            │
│                                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │
│  │  Google Maps    │  │  reCAPTCHA v3   │  │   Google Fonts  │            │
│  │  (Embed API)    │  │  (Google API)   │  │   (Font API)    │            │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘            │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Key Architectural Decisions

| Decision | Pilihan | Alasan |
|---|---|---|
| Rendering Strategy | Static Site Generation (SSG) | Kecepatan, SEO, hosting murah, tidak perlu server |
| Build Tool | Astro / Vite | Zero-JS by default, partial hydration, optimal Core Web Vitals |
| Styling | Tailwind CSS | Utility-first, purge otomatis, konsisten dengan design system |
| Component Model | Islands Architecture | Hydrate hanya komponen interaktif, sisanya static HTML |
| Content Source | Markdown + JSON files | Version controlled, mudah di-edit, tidak perlu CMS |
| Form Backend | Formspree / Netlify Forms | No backend maintenance, spam protection built-in |
| Image Handling | Sharp/ Astro Image | Optimal otomatisasi, WebP generation, responsive images |

---

## 2. Project File Structure

```
berhenti-merokok-website/
│
├── 📁 public/                          # Static assets (langsung di-copy)
│   ├── robots.txt
│   ├── sitemap.xml                     # Auto-generated pre-build
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   └── manifest.json                   # PWA manifest (optional)
│
├── 📁 src/
│   ├──
│   ├── 📁 components/                  # Reusable UI Components
│   │   ├── 📁 ui/                      # Primitives (buttons, inputs, cards)
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Badge.astro
│   │   │   ├── Input.astro
│   │   │   ├── Textarea.astro
│   │   │   ├── SectionHeader.astro
│   │   │   └── WhatsAppButton.astro    # CTA utama, reusable
│   │   │
│   │   ├── 📁 layout/                  # Layout components
│   │   │   ├── Header.astro            # Navigation + Logo + CTA
│   │   │   ├── Footer.astro            # Multi-column footer
│   │   │   ├── WhatsAppFloat.astro     # Fixed floating button
│   │   │   └── BaseLayout.astro        # Wrapper utama (meta, SEO)
│   │   │
│   │   ├── 📁 sections/                # Page section blocks
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.astro
│   │   │   │   ├── ValuePropSection.astro
│   │   │   │   ├── DoctorSection.astro
│   │   │   │   ├── TestimonialSection.astro
│   │   │   │   ├── BlogPreviewSection.astro
│   │   │   │   └── BottomCTASection.astro
│   │   │   │
│   │   │   ├── about/
│   │   │   │   ├── AboutHero.astro
│   │   │   │   ├── VisionMission.astro
│   │   │   │   ├── DoctorProfiles.astro
│   │   │   │   ├── Certifications.astro
│   │   │   │   └── ValuesGrid.astro
│   │   │   │
│   │   │   ├── service/
│   │   │   │   ├── ServiceHero.astro
│   │   │   │   ├── ServiceCards.astro
│   │   │   │   ├── ProgramTimeline.astro
│   │   │   │   ├── MethodsDetail.astro
│   │   │   │   └── FAQAccordion.astro
│   │   │   │
│   │   │   ├── pricing/
│   │   │   │   ├── PricingHero.astro
│   │   │   │   ├── FreeVsPremium.astro
│   │   │   │   ├── PricingTable.astro
│   │   │   │   ├── PackageCards.astro
│   │   │   │   └── PaymentInfo.astro
│   │   │   │
│   │   │   ├── blog/
│   │   │   │   ├── BlogHero.astro
│   │   │   │   ├── FeaturedArticle.astro
│   │   │   │   ├── ArticleGrid.astro
│   │   │   │   └── CategoryFilter.astro
│   │   │   │
│   │   │   └── contact/
│   │   │       ├── ContactHero.astro
│   │   │       ├── WhatsAppDirect.astro
│   │   │       ├── ContactForm.astro
│   │   │       ├── MapEmbed.astro
│   │   │       └── ContactInfo.astro
│   │   │
│   │   └── 📁 shared/                  # Shared interactive components
│   │       ├── MobileMenu.astro        # Client-side hydrated
│   │       ├── TestimonialCarousel.astro # Client:load directive
│   │       ├── ScrollReveal.astro      # IntersectionObserver wrapper
│   │       ├── BackToTop.astro         # Client-side hydrated
│   │       ├── FAQItem.astro           # Client:visible directive
│   │       └── BlogSearch.astro        # Client-side search
│   │
│   ├── 📁 pages/                       # Route definitions
│   │   ├── index.astro                 # / (Home)
│   │   ├── about.astro                 # /about/
│   │   ├── layanan.astro               # /layanan/
│   │   ├── harga.astro                 # /harga/
│   │   ├── blog/
│   │   │   ├── index.astro             # /blog/
│   │   │   └── [slug].astro            # /blog/:slug/
│   │   └── kontak.astro                # /kontak/
│   │
│   ├── 📁 content/                     # Content data
│   │   ├── 📁 blog/                    # Markdown articles
│   │   │   ├── tips-berhenti-merokok.md
│   │   │   ├── cerita-sukses-ahmad.md
│   │   │   ├── dampak-merokok-paru.md
│   │   │   └── ...
│   │   │
│   │   ├── 📁 doctors/                 # Doctor profiles (JSON)
│   │   │   ├── dr-andi.json
│   │   │   └── ...
│   │   │
│   │   ├── 📁 testimonials/            # Testimonials (JSON)
│   │   │   ├── testimoni-1.json
│   │   │   └── ...
│   │   │
│   │   ├── 📁 services/                # Service data (JSON)
│   │   │   └── services.json
│   │   │
│   │   ├── 📁 faq/                     # FAQ data (JSON)
│   │   │   └── faq.json
│   │   │
│   │   └── config/
│   │       ├── site.json               # Site metadata
│   │       └── navigation.json         # Menu structure
│   │
│   ├── 📁 data/                        # Utility data & collections
│   │   ├── doctors.js                  # getDoctors() collection loader
│   │   ├── testimonials.js             # getTestimonials() collection loader
│   │   ├── articles.js                 # getArticles() collection loader
│   │   └── services.js                 # getServices() collection loader
│   │
│   ├── 📁 styles/                      # Global styles
│   │   ├── global.css                  # Tailwind directives + custom properties
│   │   ├── animations.css              # Keyframes & animation utilities
│   │   └── fonts.css                   # @font-face declarations (self-hosted optional)
│   │
│   ├── 📁 scripts/                     # Client-side JavaScript
│   │   ├── analytics.js                # GA4 event tracking setup
│   │   ├── scroll-reveal.js            # IntersectionObserver helper
│   │   ├── mobile-menu.js              # Mobile menu toggle logic
│   │   └── form-handler.js             # Form validation & submission
│   │
│   ├── 📁 utils/                       # Helper functions
│   │   ├── seo.js                      # SEO meta tag generator
│   │   ├── schema.js                   # Schema.org JSON-LD generator
│   │   ├── whatsapp.js                 # WhatsApp link generator
│   │   ├── formatters.js               # Date, number formatters
│   │   └── validators.js               # Form validation helpers
│   │
│   ├── 📁 types/                       # TypeScript definitions (optional)
│   │   ├── doctor.ts
│   │   ├── article.ts
│   │   └── testimonial.ts
│   │
│   └── 📁 assets/                      # Processed assets
│       ├── 📁 images/
│       │   ├── hero/
│       │   ├── doctors/
│       │   ├── blog/
│       │   ├── testimonials/
│       │   └── icons/
│       └── 📁 fonts/                   # Self-hosted fonts (optional)
│
├── 📁 config/                          # Tool configurations
│   ├── tailwind.config.js              # Design tokens, colors, fonts
│   ├── astro.config.mjs                # Build & output config
│   ├── sitemap.config.js               # Sitemap generation rules
│   └── postcss.config.js               # PostCSS plugins
│
├── 📄 package.json                     # Dependencies & scripts
├── 📄 tsconfig.json                    # TypeScript config
├── 📄 .env.example                     # Environment variable template
├── 📄 .gitignore
├── 📄 .nvmrc                           # Node version specification
├── 📄 netlify.toml                     # Netlify config (redirects, headers)
├── 📄 vercel.json                      # Vercel config (alternative)
└── 📄 README.md                        # Project documentation
```

---

## 3. Component Architecture Detail

### 3.1 Component Hierarchy (Astro Islands)

```
BaseLayout (Server Rendered)
├── <head> (Server Rendered)
│   ├── SEO Meta Tags
│   ├── Schema.org JSON-LD
│   └── Font Preconnect
│
├── Header (Server Rendered)
│   └── MobileMenu (Client:visible)  ← Hydrated when in viewport
│
├── <main> (Server Rendered)
│   └── [Page Sections] (Mixed rendering)
│       ├── Static Sections → Server Rendered (no JS)
│       ├── TestimonialCarousel → Client:load (immediate hydration)
│       ├── FAQAccordion → Client:visible (lazy hydration)
│       ├── BlogSearch → Client:idle (idle hydration)
│       └── ContactForm → Client:visible (lazy hydration)
│
├── WhatsAppFloat (Client:load)     ← Immediate hydration, fixed position
│
└── Footer (Server Rendered)
    └── BackToTop (Client:media="(min-width: 768px)") ← Conditional hydration
```

### 3.2 Hydration Strategy

| Component | Directive | Alasan |
|---|---|---|
| BaseLayout | `server:render` | Purely static, no interactivity needed |
| Header | `server:render` | Navigation links are static, mobile menu toggle only |
| MobileMenu | `client:visible` | Hanya perlu JS saat user membuka menu |
| HeroSection | `server:render` | Animasi pakai CSS, tidak perlu JS |
| TestimonialCarousel | `client:load` | Butuh JS segera untuk swipe dan autoplay |
| FAQAccordion | `client:visible` | Hidupkan saat section masuk viewport |
| BlogSearch | `client:idle` | Search tidak urgent, tunggu idle |
| ContactForm | `client:visible` | Form validation dan submission butuh JS |
| WhatsAppFloat | `client:load` | Fixed button butuh event tracking segera |
| BackToTop | `client:media="(min-width: 768px)"` | Hanya desktop, tidak perlu mobile |
| ScrollReveal | `client:visible` | Animasi scroll trigger butuh IntersectionObserver |

---

## 4. Data Flow Architecture

### 4.1 Build-Time Data Flow (SSG)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         BUILD TIME (Node.js)                                │
│                                                                              │
│   ┌──────────────┐                                                          │
│   │  Content API │                                                          │
│   │  (File System│                                                          │
│   │   - Markdown │                                                          │
│   │   - JSON     │                                                          │
│   └──────┬───────┘                                                          │
│          │                                                                   │
│          ▼                                                                   │
│   ┌─────────────────────────────────────┐                                   │
│   │         Content Loaders               │                                   │
│   │  ┌─────────┐ ┌─────────┐ ┌─────────┐ │                                   │
│   │  │ articles│ │ doctors │ │services│ │                                   │
│   │  │  .js    │ │  .js    │ │  .js   │ │                                   │
│   │  └────┬────┘ └────┬────┘ └────┬────┘ │                                   │
│   └───────┼──────────┼──────────┼────────┘                                   │
│           │          │          │                                            │
│           ▼          ▼          ▼                                            │
│   ┌─────────────────────────────────────┐                                   │
│   │         Astro Component Engine        │                                   │
│   │  - Props injection                   │                                   │
│   │  - Template rendering                │                                   │
│   │  - Markdown → HTML                   │                                   │
│   └──────────────────┬──────────────────┘                                   │
│                      │                                                       │
│                      ▼                                                       │
│   ┌─────────────────────────────────────┐                                   │
│   │         Static HTML Output          │                                   │
│   │  /index.html, /about/index.html     │                                   │
│   │  /blog/[slug]/index.html, etc.      │                                   │
│   └─────────────────────────────────────┘                                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Runtime Data Flow (Client-Side)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        RUNTIME (Browser)                                      │
│                                                                              │
│  ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐         │
│  │   User Action   │     │   User Action   │     │   User Action   │         │
│  │   (Click CTA)   │     │  (Submit Form)  │     │   (Scroll)      │         │
│  └────────┬────────┘     └────────┬────────┘     └────────┬────────┘         │
│           │                       │                       │                 │
│           ▼                       ▼                       ▼                 │
│  ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐         │
│  │ WhatsApp Link   │     │ Form Validation   │     │ IntersectionObserver│      │
│  │ Generator       │     │ (Client-side)     │     │ (Scroll Trigger)    │      │
│  └────────┬────────┘     └────────┬────────┘     └────────┬────────┘         │
│           │                       │                       │                 │
│           ▼                       ▼                       ▼                 │
│  ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐         │
│  │  Redirect to    │     │  POST ke        │     │  CSS Class      │         │
│  │  wa.me/...      │     │  Formspree API  │     │  Toggle         │         │
│  │  (External)     │     │  (External)     │     │  (Animation)    │         │
│  └─────────────────┘     └─────────────────┘     └─────────────────┘         │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐     │
│  │                      Google Analytics 4                             │     │
│  │  - Event: whatsapp_click                                          │     │
│  │  - Event: form_submit                                             │     │
│  │  - Event: scroll_depth                                            │     │
│  └─────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. State Management

### 5.1 Client-Side State Diagram

```
                    ┌─────────────────────┐
                    │   INITIAL STATE     │
                    │  (HTML server-side  │
                    │   rendered)         │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
    ┌─────────────────┐ ┌─────────────┐ ┌─────────────────┐
    │  MOBILE MENU    │ │    FAQ      │ │  TESTIMONIAL    │
    │    STATE        │ │   STATE     │ │    STATE        │
    │                 │ │             │ │                 │
    │ ┌─────────────┐ │ │ ┌─────────┐ │ │ ┌─────────────┐ │
    │ │ isOpen:    │ │ │ │ active: │ │ │ │ currentIdx: │ │
    │ │ false      │◀─┼─┤ number  │ │ │ │ 0            │ │
    │ │            │ │ │ │ (-1 =   │ │ │ │ total: 5     │ │
    │ └─────────────┘ │ │ none)   │ │ │ └─────────────┘ │
    │                 │ │         │ │ │                 │
    │ Transitions:     │ │ Transitions:│ │ Transitions:    │
    │ • toggleMenu()   │ │ • toggle() │ │ • next()        │
    │ • closeMenu()    │ │ • closeAll()│ │ • prev()        │
    │                  │ │           │ │ • goTo(index)   │
    └─────────────────┘ └─────────────┘ └─────────────────┘

    ┌─────────────────┐ ┌─────────────┐ ┌─────────────────┐
    │  FORM STATE     │ │ BLOG SEARCH │ │  SCROLL REVEAL │
    │                 │ │   STATE     │ │    STATE       │
    │ ┌─────────────┐ │ │ ┌─────────┐ │ │ ┌─────────────┐ │
    │ │ status:    │ │ │ │ query:  │ │ │ │ elements:   │ │
    │ │ 'idle'     │ │ │ │ ''      │ │ │ │ Map         │ │
    │ │ name: ''   │ │ │ │ results:│ │ │ │ (element →  │ │
    │ │ email: ''  │ │ │ │ []      │ │ │ │ isRevealed) │ │
    │ │ errors: {} │ │ │ └─────────┘ │ │ └─────────────┘ │
    │ └─────────────┘ │ │             │ │                 │
    │                 │ │ Transitions:│ │ Transitions:    │
    │ Transitions:    │ │ • setQuery()│ │ • observe()     │
    │ • updateField() │ │ • filter()  │ │ • onIntersect() │
    │ • validate()    │ │             │ │ • reveal()      │
    │ • submit()      │ │             │ │                 │
    │ • reset()       │ │             │ │                 │
    └─────────────────┘ └─────────────┘ └─────────────────┘
```

### 5.2 State Implementation (Vanilla JS Pattern)

```javascript
// Pattern: Custom Element + Proxy State
// No external state library needed (Reactivity minimal)

class FAQAccordion extends HTMLElement {
  constructor() {
    super();
    this.state = {
      activeIndex: -1
    };
  }
  
  toggle(index) {
    this.state.activeIndex = 
      this.state.activeIndex === index ? -1 : index;
    this.render();
  }
  
  render() {
    // Update DOM directly (lightweight)
    this.querySelectorAll('.faq-item').forEach((item, i) => {
      item.classList.toggle('active', i === this.state.activeIndex);
    });
  }
}
```

---

## 6. API & Integration Specifications

### 6.1 External APIs

| Integration | Endpoint/Method | Request | Response | Auth |
|---|---|---|---|---|
| **WhatsApp Direct** | `GET https://wa.me/{number}?text={msg}` | URL redirect | WhatsApp Web/App | None |
| **Formspree** | `POST https://formspree.io/f/{FORM_ID}` | `{name, email, phone, message, _gotcha}` | `{ok: true}` atau error | Token in URL |
| **reCAPTCHA v3** | `POST https://www.google.com/recaptcha/api/siteverify` | `{secret, response}` | `{success, score}` | Secret key |
| **GA4** | `gtag('event', ...)` | Client-side event | - | Measurement ID |
| **Google Maps** | `<iframe src="...">` | Embed URL | Map render | API Key (optional) |
| **Google Fonts** | `GET https://fonts.googleapis.com/css2` | Font request | CSS @font-face | None |

### 6.2 WhatsApp Integration Detail

```javascript
// utils/whatsapp.js

const WHATSAPP_NUMBER = '628572773969';  // International format
const DEFAULT_MESSAGE = 'Halo, saya ingin konsultasi berhenti merokok';

function generateWhatsAppLink(options = {}) {
  const { 
    message = DEFAULT_MESSAGE, 
    source = 'website',
    medium = 'button',
    campaign = 'free_consultation'
  } = options;
  
  const encodedMessage = encodeURIComponent(message);
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  
  // UTM tracking untuk analytics
  return `${baseUrl}?text=${encodedMessage}`;
}

// CTA Button Component
function WhatsAppButton({ variant = 'primary', label, trackingId }) {
  const href = generateWhatsAppLink({
    message: label || DEFAULT_MESSAGE
  });
  
  // On click: fire GA4 event before redirect
  const handleClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_click', {
        event_category: 'conversion',
        event_label: trackingId,
        value: 1
      });
    }
  };
  
  return { href, onClick: handleClick };
}
```

### 6.3 Form Handling Detail

```javascript
// scripts/form-handler.js

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

async function submitContactForm(formData) {
  // Client-side validation
  const errors = validateForm(formData);
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }
  
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        _gotcha: formData.honeypot  // Spam honeypot
      })
    });
    
    if (response.ok) {
      // Track conversion
      gtag('event', 'contact_form_submit', {
        event_category: 'lead',
        event_label: 'contact_page'
      });
      
      return { success: true };
    }
    
    return { success: false, errors: { general: 'Terjadi kesalahan. Silakan coba lagi.' } };
    
  } catch (error) {
    // Fallback: arahkan ke WhatsApp
    return { 
      success: false, 
      fallback: true,
      whatsappLink: generateWhatsAppLink({
        message: `Halo, saya ${formData.name}. ${formData.message}`
      })
    };
  }
}
```

---

## 7. Security Architecture

### 7.1 Security Layers

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        SECURITY ARCHITECTURE                                │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  LAYER 1: TRANSPORT                                                  │   │
│  │  • TLS 1.3 (HTTPS only)                                               │   │
│  │  • HSTS Header (max-age=31536000, includeSubDomains, preload)       │   │
│  │  • HTTP/2 Server Push (critical assets)                              │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                     │                                       │
│  ┌──────────────────────────────────┴─────────────────────────────────────┐   │
│  │  LAYER 2: EDGE/CDN                                                   │   │
│  │  • DDoS Protection (Cloudflare)                                        │   │
│  │  • WAF Rules (XSS, SQL Injection filters)                              │   │
│  │  • Rate Limiting (100 req/min per IP)                                │   │
│  │  • Bot Management                                                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                     │                                       │
│  ┌──────────────────────────────────┴─────────────────────────────────────┐   │
│  │  LAYER 3: APPLICATION                                                │   │
│  │  • Content Security Policy (CSP) Header                              │   │
│  │  • X-Frame-Options: DENY                                               │   │
│  │  • X-Content-Type-Options: nosniff                                   │   │
│  │  • Referrer-Policy: strict-origin-when-cross-origin                    │   │
│  │  • Permissions-Policy (geolocation, camera, etc.)                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                     │                                       │
│  ┌──────────────────────────────────┴─────────────────────────────────────┐   │
│  │  LAYER 4: CONTENT                                                    │   │
│  │  • Input Sanitization (DOMPurify untuk form)                          │   │
│  │  • reCAPTCHA v3 (invisible)                                          │   │
│  │  • Honeypot Fields (anti-bot)                                        │   │
│  │  • No sensitive data in client bundle                                  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Content Security Policy

```
default-src 'self';
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com/recaptcha https://www.gstatic.com/recaptcha;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
img-src 'self' data: https://www.google-analytics.com;
font-src 'self' https://fonts.gstatic.com;
frame-src https://www.google.com;
connect-src 'self' https://formspree.io https://www.google-analytics.com;
```

---

## 8. Performance Architecture

### 8.1 Asset Loading Strategy

```
CRITICAL PATH (Render Blocking - Minimal)
├── Inline Critical CSS      → <style> in <head> (above-fold styles)
├── Preconnect Hints       → fonts.googleapis.com, www.googletagmanager.com
├── DNS Prefetch           → wa.me, formspree.io
└── Font Display Swap      → font-display: swap (prevent FOIT)

LAZY / DEFERRED
├── Images below fold      → loading="lazy" + IntersectionObserver
├── Non-critical CSS       → <link rel="preload" ... onload="this.rel='stylesheet'">
├── JavaScript             → <script defer> atau module (automatic defer)
├── Analytics              → async load gtag.js
└── Maps Embed             → Load on scroll into view (user click to reveal)

PREFETCHING
├── Next likely page       → <link rel="prefetch"> pada hover navigation
├── Hero image             → <link rel="preload" as="image">
└── Font files             → <link rel="preload" as="font" type="font/woff2">
```

### 8.2 Image Pipeline

```
Source Image (PNG/JPG)
    │
    ▼
┌─────────────────────────────────────┐
│  Astro Image / Sharp Processing     │
│  • Resize to multiple widths        │
│  • Convert to WebP (primary)        │
│  • JPEG fallback                    │
│  • AVIF (optional next-gen)         │
│  • Generate blur placeholder (LQIP) │
└─────────────────────────────────────┘
    │
    ▼
Output:
├── image.webp (800w, 1200w, 1600w)
├── image.jpg (fallback)
└── blur.jpg (20px wide, base64 encoded)

HTML Output:
<picture>
  <source srcset="image-800w.avif 800w, image-1200w.avif 1200w" type="image/avif">
  <source srcset="image-800w.webp 800w, image-1200w.webp 1200w" type="image/webp">
  <img src="image-800w.jpg" 
       srcset="image-800w.jpg 800w, image-1200w.jpg 1200w"
       sizes="(max-width: 768px) 100vw, 50vw"
       loading="lazy"
       decoding="async"
       alt="...">
</picture>
```

### 8.3 Core Web Vitals Targets

| Metric | Target | Budget | Monitoring |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | Hero image < 200KB | Lighthouse, CrUX |
| **FID** (First Input Delay) | < 100ms | JS chunks < 50KB | Lighthouse, CrUX |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Reserved space for images/fonts | Lighthouse |
| **TTFB** (Time to First Byte) | < 600ms | CDN edge caching | WebPageTest |
| **FCP** (First Contentful Paint) | < 1.8s | Inline critical CSS | Lighthouse |
| **INP** (Interaction to Next Paint) | < 200ms | Minimal main-thread JS | Lighthouse |

---

## 9. SEO & Semantic Architecture

### 9.1 URL Structure

```
berhenti-merokok.id/
├── /                          → Home (canonical: self)
├── /tentang-kami/             → About (canonical: self)
├── /layanan/                  → Services (canonical: self)
│   └── /layanan/konsultasi-gratis/
│   └── /layanan/pertemuan-langsung/
├── /harga/                    → Pricing (canonical: self)
├── /blog/                     → Blog Index (canonical: self)
│   └── /blog/[slug]/          → Article (canonical: self)
└── /kontak/                   → Contact (canonical: self)
```

### 9.2 Schema.org Markup

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Klinik Berhenti Merokok",
  "description": "Layanan konsultasi kesehatan berhenti merokok dengan dokter ahli",
  "url": "https://berhenti-merokok.id",
  "telephone": "+62-857-2773-969",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ID"
  },
  "medicalSpecialty": "Pulmonology",
  "serviceType": [
    {
      "@type": "MedicalProcedure",
      "name": "Konsultasi Berhenti Merokok",
      "description": "Konsultasi gratis dengan dokter ahli untuk berhenti merokok"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}
```

### 9.3 Meta Tag Template

```html
<!-- Primary Meta Tags -->
<title>{pageTitle} | Berhenti Merokok - Konsultasi Dokter Ahli</title>
<meta name="title" content="...">
<meta name="description" content="{excerpt}">
<meta name="keywords" content="berhenti merokok, konsultasi dokter, kesehatan paru, layanan kesehatan">
<meta name="robots" content="index, follow">
<meta name="language" content="Indonesian">
<meta name="author" content="Klinik Berhenti Merokok">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="{canonicalUrl}">
<meta property="og:title" content="{pageTitle}">
<meta property="og:description" content="{excerpt}">
<meta property="og:image" content="{ogImageUrl}">
<meta property="og:locale" content="id_ID">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="{canonicalUrl}">
<meta property="twitter:title" content="{pageTitle}">
<meta property="twitter:description" content="{excerpt}">
<meta property="twitter:image" content="{ogImageUrl}">

<!-- Canonical -->
<link rel="canonical" href="{canonicalUrl}">

<!-- Alternate (for future i18n) -->
<!-- <link rel="alternate" hreflang="id" href="..."> -->
```

---

## 10. Build & Deployment Pipeline

### 10.1 CI/CD Workflow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       GIT WORKFLOW                                          │
│                                                                              │
│   [Developer]        [GitHub]              [CI/CD]           [Production]   │
│        │                  │                     │                   │        │
│        │  git push        │                     │                   │        │
│        │  ───────────────▶│                     │                   │        │
│        │                  │   Trigger Build   │                   │        │
│        │                  │   ───────────────▶│                   │        │
│        │                  │                     │                   │        │
│        │                  │                     │  1. Checkout      │        │
│        │                  │                     │  2. Install deps  │        │
│        │                  │                     │  3. Lint          │        │
│        │                  │                     │  4. Build (SSG)   │        │
│        │                  │                     │  5. Optimize      │        │
│        │                  │                     │  6. Deploy        │        │
│        │                  │                     │                   │        │
│        │                  │                     │  ────────────────▶│        │
│        │                  │                     │   Deploy to CDN   │        │
│        │                  │                     │                   │        │
│        │                  │   Build Status      │                   │        │
│        │                  │  ◀───────────────  │                   │        │
│        │◀─────────────────│                   │                   │        │
│        │                  │                     │                   │        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 10.2 Build Steps

```bash
# 1. Environment Setup
node --version  # v18.x or v20.x
npm ci          # Clean install

# 2. Content Validation
npm run lint:content   # Validate markdown frontmatter
npm run lint:markdown  # Check markdown formatting

# 3. Build
npm run build          # Astro build → dist/
# Internal: Markdown → HTML, Images optimized, Sitemap generated

# 4. Post-Build Optimization
# - Critical CSS extraction
# - Asset fingerprinting (cache busting)
# - Sitemap.xml generation
# - robots.txt copy
# - RSS feed generation (optional)

# 5. Deploy
# Netlify: npx netlify deploy --prod --dir=dist/
# Vercel: npx vercel --prod
```

### 10.3 Environment Configuration

```bash
# .env (local)
NODE_ENV=development
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# .env.production (build time)
NODE_ENV=production
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
PUBLIC_SITE_URL=https://berhenti-merokok.id
```

---

## 11. Monitoring & Analytics Architecture

### 11.1 Event Tracking Map

```
GA4 Event Name          │ Trigger                    │ Parameters
────────────────────────┼────────────────────────────┼─────────────────────────
page_view               │ Automatic (GA4 default)    │ page_location, page_title
whatsapp_click          │ Click WhatsApp CTA         │ location, button_text, page
contact_form_submit     │ Form submitted             │ form_name, success
contact_form_error      │ Form validation failed     │ error_field
pricing_view            │ Scroll to pricing section  │ package_viewed
blog_article_click      │ Click article card         │ article_title, category
faq_expand              │ Click FAQ question         │ question_text
testimonial_slide       │ Change testimonial         │ slide_index, direction
scroll_depth            │ Reach 25/50/75/90%       │ percent_scrolled
download_brochure       │ Click download (future)    │ file_name
```

### 11.2 Monitoring Stack

| Tool | Purpose | Setup |
|---|---|---|
| Google Analytics 4 | Traffic & conversion tracking | gtag.js, measurement ID |
| Google Search Console | SEO monitoring, index status | Domain verification |
| Lighthouse CI | Performance regression test | GitHub Action pre-deploy |
| Uptime Robot / Pingdom | Uptime monitoring | 5-min check interval |
| WebPageTest | Synthetic performance test | Weekly scheduled test |

---

## 12. Backup & Disaster Recovery

| Skenario | Strategi | RTO | RPO |
|---|---|---|---|
| Hosting failure | CDN caching tetap serve static content | 5 menit | 0 (static) |
| Code corruption | Rollback ke commit sebelumnya | 10 menit | 0 (version control) |
| Domain issue | DNS redirect ke backup domain | 1 jam | N/A |
| Content loss | Git repository restore | 15 menit | 0 (versioned) |
| Traffic spike | CDN auto-scaling | Real-time | N/A |

---

## 13. Technology Stack Summary

| Kategori | Teknologi | Versi | Catatan |
|---|---|---|---|
| **Framework** | Astro | ^4.x | Static site generation |
| **Language** | TypeScript | ^5.x | Type safety |
| **Styling** | Tailwind CSS | ^3.x | Utility-first CSS |
| **UI Components** | Astro Components | Native | Server-rendered default |
| **Interactive** | Vanilla JS / Web Components | ES2022 | Minimal JS footprint |
| **Build Tool** | Vite | Bundled with Astro | Fast HMR |
| **Image Processing** | Sharp (Astro Image) | Bundled | Format conversion, resize |
| **Package Manager** | npm / pnpm | latest | Dependency management |
| **Version Control** | Git + GitHub | latest | Source control |
| **Hosting** | Netlify / Vercel | latest | CDN, CI/CD |
| **Form Backend** | Formspree | Free tier | No backend needed |
| **Analytics** | Google Analytics 4 | gtag.js | Free tier |
| **Spam Protection** | reCAPTCHA v3 | Google API | Invisible |
| **Maps** | Google Maps Embed | Iframe | Free tier |
| **Fonts** | Google Fonts CDN | woff2 | Preconnect + swap |
| **Icons** | Lucide / Heroicons | SVG | Inline atau sprite |

---

*Architecture Plan ini mendefinisikan fondasi teknis yang scalable, performant, dan mudah dipelihara untuk website layanan kesehatan berhenti merokok.*
