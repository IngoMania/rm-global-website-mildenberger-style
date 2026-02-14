# RM GLOBAL Gebäudedienste - Next.js Website Prompt

## 🎯 Projektziel

Erstelle eine **hochmoderne, conversion-optimierte Website** für RM GLOBAL Gebäudedienste GmbH – ein etabliertes Facility Management Unternehmen mit Standorten in Frankfurt und Mannheim. Die Website soll als Fundament für eine skalierbare lokale SEO-Strategie dienen.

---

## 🛠️ Tech Stack

```
Framework:       Next.js 14 (App Router)
Styling:         Tailwind CSS
UI Components:   shadcn/ui
Animations:      Framer Motion
Icons:           Lucide React
Forms:           React Hook Form + Zod
Fonts:           Inter (Google Fonts)
```

### Package Dependencies
```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.x",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "^0.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "react-hook-form": "^7.x",
    "zod": "^3.x",
    "@hookform/resolvers": "^3.x"
  }
}
```

### shadcn/ui Komponenten (benötigt)
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add select
npx shadcn-ui@latest add checkbox
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add navigation-menu
npx shadcn-ui@latest add form
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add separator
```

---

## 🏢 Unternehmensdaten

```yaml
Firma: RM GLOBAL Gebäudedienste GmbH
Motto: "WERTE. pflegen | schützen | erhalten."
Gegründet: 1999
Website: https://www.globaldienste.de

Hauptsitz Frankfurt:
  Adresse: Flurscheideweg 1, 65936 Frankfurt am Main
  Telefon: +49 (0) 69 / 78 80 36 37
  Fax: +49 (0) 69 / 78 80 38 28
  Email: info@globaldienste.de

Niederlassung Mannheim:
  Adresse: Harrlachweg 1, 68163 Mannheim
  Telefon: +49 (0) 621 / 397 32 426
  Email: info@globaldienste.de

Öffnungszeiten: Montag - Freitag, 08:30 - 17:00 Uhr

Kernleistungen:
  - Büroreinigung (Office Cleaning)
  - Medizinische Reinigung (Medical Cleaning)
  - Glas- & Fassadenreinigung (Glass/Facade Cleaning)
  - Winterdienst (Winter Services)
  - Facility Management

Service-Gebiete:
  - Rhein-Main Region (Frankfurt, Offenbach, Wiesbaden, Mainz, Darmstadt, etc.)
  - Rhein-Neckar Region (Mannheim, Ludwigshafen, Heidelberg, etc.)
```

---

## 🎨 Design System

### Farbpalette (Tailwind Config)
```typescript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        // Primary - Professional Blue
        primary: {
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DDFD',
          300: '#A4CAFE',
          400: '#76A9FA',
          500: '#0052CC',  // Main
          600: '#003D99',  // Dark
          700: '#002E73',
          800: '#001F4D',
          900: '#001033',
        },
        // Accent - Energy Orange
        accent: {
          50: '#FFF8EB',
          100: '#FEEBC8',
          200: '#FBD38D',
          300: '#F6AD55',
          400: '#ED8936',
          500: '#FF9500',  // Main
          600: '#E68600',  // Dark
          700: '#C05621',
          800: '#9C4221',
          900: '#7B341E',
        },
        // Success Green
        success: {
          500: '#10B981',
          600: '#059669',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

### Typography Scale
```css
/* Headings */
H1: text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight
H2: text-3xl md:text-4xl font-bold tracking-tight
H3: text-xl md:text-2xl font-semibold
H4: text-lg font-semibold

/* Body */
Lead: text-lg md:text-xl text-muted-foreground
Body: text-base text-muted-foreground
Small: text-sm text-muted-foreground
```

---

## 🎬 Framer Motion - Animation Guidelines

### Globale Animation-Varianten
```typescript
// lib/animations.ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}
```

### Animation-Prinzipien
1. **Dezent & Professionell** - Keine übertriebenen Animationen
2. **Performance-First** - `will-change` und GPU-beschleunigte Eigenschaften
3. **Scroll-Triggered** - Elemente animieren beim Eintritt in den Viewport
4. **Staggered Effects** - Cards und Listen nacheinander einblenden
5. **Hover-States** - Subtile Transforms auf interaktiven Elementen

### Beispiel-Implementierungen

```tsx
// Scroll-Animation Wrapper
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function AnimatedSection({ children, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// Staggered Card Grid
export function AnimatedCardGrid({ children }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {children}
    </motion.div>
  )
}

// Hover-animierte Card
export function AnimatedCard({ children }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="..."
    >
      {children}
    </motion.div>
  )
}

// Counter Animation (für Zahlen)
export function AnimatedCounter({ value, suffix = "" }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {value}{suffix}
      </motion.span>
    </motion.span>
  )
}
```

---

## 🎯 Lucide React - Icon Usage

### Benötigte Icons
```tsx
import {
  // Navigation
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ArrowRight,
  ArrowUp,
  
  // Contact & Communication
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  
  // Services
  Building2,        // Büroreinigung
  Hospital,         // Medizinische Reinigung
  Sparkles,         // Glasreinigung
  Snowflake,        // Winterdienst
  Shield,           // Facility Management
  
  // Benefits
  Award,            // Erfahrung
  Users,            // Team/Personal
  Leaf,             // Umweltbewusst
  Handshake,        // Service
  Clock,            // Flexibel
  Euro,             // Faire Preise
  
  // Trust & Social Proof
  Star,
  Quote,
  CheckCircle,
  Check,
  
  // UI Elements
  Loader2,          // Loading Spinner
  ExternalLink,
  Globe,
} from 'lucide-react'
```

### Icon-Komponente mit Animation
```tsx
// components/ui/animated-icon.tsx
'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
}

export function AnimatedIcon({ icon: Icon, className }: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Icon className={className} />
    </motion.div>
  )
}
```

---

## 📐 Seitenstruktur & Komponenten

### Dateistruktur
```
src/
├── app/
│   ├── layout.tsx              # Root Layout mit Fonts, Metadata
│   ├── page.tsx                # Homepage
│   ├── [city]/
│   │   └── page.tsx            # Dynamische Stadt-Seiten
│   ├── leistungen/
│   │   ├── page.tsx            # Leistungs-Übersicht
│   │   ├── bueroreinigung/
│   │   ├── medizinische-reinigung/
│   │   ├── glasreinigung/
│   │   └── winterdienst/
│   ├── kontakt/
│   │   └── page.tsx
│   ├── impressum/
│   │   └── page.tsx
│   └── datenschutz/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky Header mit Navigation
│   │   ├── Footer.tsx          # Footer mit allen Infos
│   │   ├── MobileNav.tsx       # Mobile Sheet Navigation
│   │   └── BackToTop.tsx       # Scroll-to-Top Button
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # Hero mit CTA
│   │   ├── About.tsx           # SEO Intro Section
│   │   ├── Benefits.tsx        # 6 Benefit Cards
│   │   ├── Services.tsx        # 4 Service Cards
│   │   ├── Process.tsx         # 3-Schritte Prozess
│   │   ├── ServiceArea.tsx     # Google Maps & Städte
│   │   ├── Testimonials.tsx    # Kundenstimmen
│   │   ├── CTA.tsx             # Final CTA Section
│   │   └── Contact.tsx         # Kontaktformular & Info
│   │
│   ├── ui/                     # shadcn/ui Komponenten
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── ...
│   │   └── animated-section.tsx  # Custom Animation Wrapper
│   │
│   └── shared/
│       ├── Logo.tsx
│       ├── SectionHeader.tsx   # Wiederverwendbarer Section-Header
│       └── ContactCard.tsx     # Standort-Karte
│
├── lib/
│   ├── utils.ts                # cn() helper, etc.
│   ├── animations.ts           # Framer Motion Varianten
│   └── constants.ts            # Firmendaten, Services, etc.
│
└── styles/
    └── globals.css             # Tailwind imports
```

---

## 📄 Sektionen im Detail

### 0. Header (Sticky)
```
┌─────────────────────────────────────────────────────────────────┐
│ [LOGO]   Start  Über uns  Leistungen ▾  Regionen ▾   [📞 CTA]  │
└─────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- `NavigationMenu` (shadcn) für Desktop
- `Sheet` (shadcn) für Mobile
- Logo mit Framer Motion hover effect
- Sticky mit Blur-Backdrop beim Scrollen
- CTA Button: "Jetzt anrufen" mit Phone-Icon

**Animationen:**
- Header: `backdrop-blur` transition beim Scrollen
- Nav Links: Subtle underline animation on hover
- Logo: Scale on hover
- Mobile Menu: Sheet slide-in

```tsx
// Beispiel Header Animation
<motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  className={cn(
    "fixed top-0 z-50 w-full transition-all duration-300",
    scrolled && "bg-background/80 backdrop-blur-lg shadow-sm"
  )}
>
```

---

### 1. Hero Section
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│    [Badge: Seit 1999]                                           │
│                                                                 │
│    Professionelle Gebäudereinigung                              │
│    in Frankfurt & Rhein-Main                                    │
│                                                                 │
│    WERTE. pflegen | schützen | erhalten.                        │
│                                                                 │
│    [Kurzer Beschreibungstext...]                                │
│                                                                 │
│    [🟠 Kostenloses Angebot]  [📞 069 / 78 80 36 37]             │
│                                                                 │
│    ✓ 25+ Jahre  ✓ Zuverlässig  ✓ Faire Preise                   │
│                                                                 │
│    ⭐⭐⭐⭐⭐ Top bewertet                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
          [Frankfurt Skyline Background mit Gradient Overlay]
```

**Komponenten:**
- Badge (shadcn) für "Seit 1999"
- Button (shadcn) für CTAs
- Custom Trust-Badges mit Icons

**Animationen:**
```tsx
// Hero Animationen
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
}

// Badge einblenden
<motion.div variants={fadeInUp}>
  <Badge variant="secondary">Seit 1999 Ihr Partner</Badge>
</motion.div>

// Headline mit Split-Text Animation
<motion.h1 variants={fadeInUp}>
  Professionelle <span className="text-accent-500">Gebäudereinigung</span>
</motion.h1>

// CTA Buttons mit Hover-Effekt
<motion.div 
  variants={fadeInUp}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  <Button size="lg">
    <Send className="mr-2 h-5 w-5" />
    Kostenloses Angebot
  </Button>
</motion.div>

// Parallax Background
<motion.div
  style={{ y: scrollY * 0.3 }}
  className="absolute inset-0 bg-cover bg-center"
/>
```

---

### 2. About / SEO Intro Section
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│         Ihr Experte für Gebäudedienste im Rhein-Main            │
│                                                                 │
│    [SEO-optimierter Fließtext über das Unternehmen...]          │
│                                                                 │
│                    [🟠 Unverbindlich anfragen]                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Animationen:**
- Section fade-in on scroll
- Text reveal animation
- CTA button pulse subtle

---

### 3. Benefits Section (6 Cards)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              Warum RM GLOBAL?                                   │
│              Was uns von anderen unterscheidet                  │
│                                                                 │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐                     │
│    │  🏆      │  │  👥      │  │  🌿      │                     │
│    │ 25 Jahre │  │ Geschult │  │ Umwelt   │                     │
│    │ Erfahrung│  │ Personal │  │ bewusst  │                     │
│    └──────────┘  └──────────┘  └──────────┘                     │
│                                                                 │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐                     │
│    │  🤝      │  │  ⏰      │  │  💶      │                     │
│    │Persönlich│  │ Flexibel │  │  Faire   │                     │
│    │ Service  │  │Zuverlässig│ │  Preise  │                     │
│    └──────────┘  └──────────┘  └──────────┘                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- Card (shadcn) für jeden Benefit
- Icons aus Lucide React
- Custom Icon-Container mit Gradient

**Animationen:**
```tsx
// Staggered Card Reveal
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
>
  {benefits.map((benefit, i) => (
    <motion.div
      key={benefit.title}
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full">
        <CardHeader>
          <motion.div 
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center"
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            <benefit.icon className="w-8 h-8 text-white" />
          </motion.div>
        </CardHeader>
        <CardContent>
          <h3>{benefit.title}</h3>
          <p>{benefit.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</motion.div>
```

---

### 4. Services Section (4 Cards)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              Unsere Leistungen                                  │
│              Professionelle Lösungen für jede Anforderung       │
│                                                                 │
│    ┌─────────────────────────┐  ┌─────────────────────────┐     │
│    │ [🏢 Icon/Bild]         │  │ [🏥 Icon/Bild]         │     │
│    │                        │  │                        │     │
│    │ Büroreinigung          │  │ Medizinische Reinigung │     │
│    │ Beschreibung...        │  │ Beschreibung...        │     │
│    │ ✓ Feature 1            │  │ ✓ Feature 1            │     │
│    │ ✓ Feature 2            │  │ ✓ Feature 2            │     │
│    │ [Mehr erfahren →]      │  │ [Mehr erfahren →]      │     │
│    └─────────────────────────┘  └─────────────────────────┘     │
│                                                                 │
│    ┌─────────────────────────┐  ┌─────────────────────────┐     │
│    │ [✨ Icon/Bild]         │  │ [❄️ Icon/Bild]         │     │
│    │                        │  │                        │     │
│    │ Glas- & Fassaden       │  │ Winterdienst           │     │
│    │ Beschreibung...        │  │ Beschreibung...        │     │
│    │ ✓ Feature 1            │  │ ✓ Feature 1            │     │
│    │ ✓ Feature 2            │  │ ✓ Feature 2            │     │
│    │ [Mehr erfahren →]      │  │ [Mehr erfahren →]      │     │
│    └─────────────────────────┘  └─────────────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- Card (shadcn) mit Header-Image-Bereich
- Badge für Kategorie
- Button variant="ghost" mit ArrowRight Icon

**Animationen:**
```tsx
// Service Card mit Image Zoom on Hover
<motion.div
  variants={fadeInUp}
  whileHover="hover"
>
  <Card className="overflow-hidden group">
    <div className="relative h-48 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700"
        variants={{
          hover: { scale: 1.05 }
        }}
        transition={{ duration: 0.4 }}
      >
        <service.icon className="absolute bottom-4 right-4 w-24 h-24 text-white/20" />
      </motion.div>
    </div>
    <CardContent>
      {/* ... */}
      <motion.div
        variants={{
          hover: { x: 5 }
        }}
      >
        <Button variant="ghost">
          Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </CardContent>
  </Card>
</motion.div>
```

---

### 5. Process Section (3 Steps)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              So einfach geht's                                  │
│              In nur 3 Schritten zu Ihrer sauberen Lösung        │
│                                                                 │
│    ┌─────────┐    ─────────>    ┌─────────┐    ─────────>    ┌─────────┐
│    │    1    │                  │    2    │                  │    3    │
│    │   📞    │                  │   📋    │                  │   ✨    │
│    │Anfrage  │                  │Angebot  │                  │Wir legen│
│    │stellen  │                  │erhalten │                  │  los    │
│    └─────────┘                  └─────────┘                  └─────────┘
│                                                                 │
│                    [🟠 Jetzt Anfrage starten]                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Animationen:**
```tsx
// Step Counter Animation
<motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 200, delay: i * 0.2 }}
  className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold"
>
  {i + 1}
</motion.div>

// Connector Line Animation
<motion.div
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary-200 origin-left"
/>

// Icon Pulse
<motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
>
  <step.icon className="w-12 h-12 text-primary-500" />
</motion.div>
```

---

### 6. Service Area Section
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              Unser Einzugsgebiet                                │
│              Frankfurt, Mannheim und die gesamte Region         │
│                                                                 │
│    ┌─────────────────────┐  ┌─────────────────────────────┐     │
│    │                     │  │ 📍 Frankfurt & Rhein-Main    │     │
│    │   [Google Maps]     │  │                             │     │
│    │                     │  │ [Frankfurt] [Offenbach]     │     │
│    │                     │  │ [Wiesbaden] [Mainz] ...     │     │
│    │                     │  │                             │     │
│    │                     │  │ 📍 Mannheim & Umgebung       │     │
│    │                     │  │                             │     │
│    │                     │  │ [Mannheim] [Heidelberg] ... │     │
│    └─────────────────────┘  │                             │     │
│                             │ [Anfrage für Ihre Region →] │     │
│                             └─────────────────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- Badge (shadcn) für Städte-Tags
- Embedded Google Map
- MapPin Icon für Überschriften

**Animationen:**
```tsx
// Staggered Badge Animation
<motion.div
  variants={staggerContainer}
  className="flex flex-wrap gap-2"
>
  {cities.map((city) => (
    <motion.div
      key={city}
      variants={fadeInUp}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <Badge 
        variant="secondary"
        className="cursor-pointer hover:bg-primary-500 hover:text-white transition-colors"
      >
        {city}
      </Badge>
    </motion.div>
  ))}
</motion.div>

// Map Reveal
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="rounded-xl overflow-hidden shadow-xl"
>
  <iframe src="..." />
</motion.div>
```

---

### 7. Testimonials Section
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              Das sagen unsere Kunden                            │
│              Vertrauen Sie auf über 25 Jahre Erfahrung          │
│                                                                 │
│    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│    │ ⭐⭐⭐⭐⭐      │  │ ⭐⭐⭐⭐⭐      │  │ ⭐⭐⭐⭐⭐      │         │
│    │              │  │              │  │              │         │
│    │ "Zitat..."   │  │ "Zitat..."   │  │ "Zitat..."   │         │
│    │              │  │              │  │              │         │
│    │ [👤] Name    │  │ [👤] Name    │  │ [👤] Name    │         │
│    │     Firma    │  │     Firma    │  │     Firma    │         │
│    └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- Card (shadcn) für Testimonials
- Avatar (shadcn) für Kunden
- Star Icons für Bewertung
- Quote Icon

**Animationen:**
```tsx
// Testimonial Card Hover
<motion.div
  variants={fadeInUp}
  whileHover={{ 
    y: -5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
  }}
>
  <Card className="relative">
    {/* Quote Icon Background */}
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 0.1, scale: 1 }}
      className="absolute top-4 right-4"
    >
      <Quote className="w-16 h-16 text-primary-500" />
    </motion.div>
    
    {/* Star Rating Animation */}
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Star className="w-5 h-5 fill-accent-500 text-accent-500" />
        </motion.div>
      ))}
    </div>
  </Card>
</motion.div>
```

---

### 8. Final CTA Section
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│    ██████████████████████████████████████████████████████████   │
│    █                                                        █   │
│    █     Bereit für strahlende Sauberkeit?                  █   │
│    █                                                        █   │
│    █     Kontaktieren Sie uns für ein kostenloses Angebot   █   │
│    █                                                        █   │
│    █     [🟠 Angebot anfordern]  [📞 069 / 78 80 36 37]     █   │
│    █                                                        █   │
│    ██████████████████████████████████████████████████████████   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
              [Gradient Background: Primary Blue]
```

**Animationen:**
```tsx
// Background Gradient Animation
<motion.section
  className="relative overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
  {/* Animated Background Elements */}
  <motion.div
    animate={{ 
      x: [0, 100, 0],
      y: [0, -50, 0],
    }}
    transition={{ 
      repeat: Infinity, 
      duration: 20,
      ease: "linear"
    }}
    className="absolute -top-1/2 -right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"
  />
  
  {/* Content */}
  <motion.div variants={fadeInUp}>
    <h2>Bereit für <span className="text-accent-500">strahlende Sauberkeit</span>?</h2>
  </motion.div>
  
  {/* Buttons with Hover Effect */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button size="lg" className="bg-accent-500 hover:bg-accent-600">
      <Send className="mr-2" /> Angebot anfordern
    </Button>
  </motion.div>
</motion.section>
```

---

### 9. Contact Section
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              Kontaktieren Sie uns                               │
│              Wir freuen uns auf Ihre Anfrage                    │
│                                                                 │
│    ┌─────────────────────┐  ┌───────────────────────────────┐   │
│    │                     │  │                               │   │
│    │ 📍 Frankfurt        │  │  Name *                       │   │
│    │ Flurscheideweg 1    │  │  [________________]           │   │
│    │ ☎ 069 / 78 80 36 37 │  │                               │   │
│    │ ✉ info@...          │  │  E-Mail *        Telefon      │   │
│    │                     │  │  [________]      [________]   │   │
│    │ 📍 Mannheim         │  │                               │   │
│    │ Harrlachweg 1       │  │  Leistung                     │   │
│    │ ☎ 0621 / 397 32 426 │  │  [▼ Bitte wählen...]          │   │
│    │                     │  │                               │   │
│    │ 🕐 Mo-Fr            │  │  Nachricht *                  │   │
│    │ 08:30 - 17:00       │  │  [________________________]   │   │
│    │                     │  │  [________________________]   │   │
│    │                     │  │                               │   │
│    │                     │  │  ☐ Datenschutz akzeptiert *   │   │
│    │                     │  │                               │   │
│    │                     │  │  [🟠 Nachricht senden]        │   │
│    └─────────────────────┘  └───────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- Card (shadcn) für Kontaktinfos
- Form (shadcn) mit React Hook Form
- Input, Textarea, Select, Checkbox (shadcn)
- Toast (shadcn) für Feedback

**Animationen:**
```tsx
// Form Field Focus Animation
<motion.div
  whileFocus={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Input {...field} />
</motion.div>

// Submit Button Loading State
<Button disabled={isSubmitting}>
  {isSubmitting ? (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <Loader2 className="mr-2 h-4 w-4" />
    </motion.div>
  ) : (
    <Send className="mr-2 h-4 w-4" />
  )}
  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
</Button>

// Success Animation
<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ type: "spring", stiffness: 200 }}
>
  <CheckCircle className="w-16 h-16 text-success-500" />
</motion.div>
```

---

### 10. Footer
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  RM GLOBAL          Leistungen       Frankfurt      Mannheim    │
│  WERTE. pflegen     • Büroreinigung  Flurscheide-   Harrlach-   │
│  schützen           • Medizinische   weg 1          weg 1       │
│  erhalten           • Glasreinigung  65936 FFM      68163 MA    │
│                     • Winterdienst   069/788036..   0621/397..  │
│  [Über uns Text]                                                │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
│                                                                 │
│  [🌐] [✉]           Impressum | Datenschutz | AGB              │
│                                                                 │
│  © 2024 RM GLOBAL Gebäudedienste GmbH. Alle Rechte vorbehalten. │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- Separator (shadcn)
- Social Icon Buttons

**Animationen:**
```tsx
// Footer Reveal
<motion.footer
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Social Icons Hover */}
  <motion.a
    whileHover={{ y: -3, backgroundColor: "var(--primary)" }}
    className="..."
  >
    <Globe className="w-5 h-5" />
  </motion.a>
</motion.footer>
```

---

### Back to Top Button
```tsx
// components/layout/BackToTop.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export function BackToTop() {
  const scrollY = useScrollPosition()
  const isVisible = scrollY > 500

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            size="icon"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full shadow-lg"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.div>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

---

## 📱 Responsive Breakpoints

```typescript
// Tailwind Default Breakpoints
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
2xl: 1536px // Extra large
```

### Mobile-First Approach
- Alle Komponenten starten mit Mobile-Layout
- Grid-Layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Font-Sizes: `text-3xl md:text-4xl lg:text-5xl`
- Spacing: `py-16 md:py-20 lg:py-24`

---

## 🔍 SEO & Metadata

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://www.globaldienste.de'),
  title: {
    default: 'RM GLOBAL Gebäudedienste | Professionelle Reinigung Frankfurt & Mannheim',
    template: '%s | RM GLOBAL Gebäudedienste'
  },
  description: 'Seit 1999 Ihr Partner für Gebäudereinigung, Büroreinigung, medizinische Reinigung & Winterdienst in Frankfurt, Mannheim und der Rhein-Main Region.',
  keywords: ['Gebäudereinigung Frankfurt', 'Büroreinigung', 'Facility Management', 'Winterdienst', 'Glasreinigung'],
  authors: [{ name: 'RM GLOBAL Gebäudedienste GmbH' }],
  creator: 'RM GLOBAL Gebäudedienste GmbH',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.globaldienste.de',
    siteName: 'RM GLOBAL Gebäudedienste',
    title: 'RM GLOBAL Gebäudedienste | WERTE. pflegen | schützen | erhalten.',
    description: 'Professionelle Gebäudereinigung in Frankfurt und Mannheim seit 1999.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

---

## 🚀 Nächste Schritte nach MVP

1. **Lokale SEO-Seiten** (dynamisch generiert)
   - `/frankfurt/` → Stadt-Landing-Page
   - `/bueroreinigung/` → Service-Landing-Page
   - `/bueroreinigung-frankfurt/` → Kombiniert

2. **CMS Integration** (optional)
   - Contentful / Sanity für Testimonials & Blog

3. **Analytics & Tracking**
   - Google Analytics 4
   - Google Tag Manager
   - Conversion Tracking

4. **Performance Optimierung**
   - Image Optimization (next/image)
   - Lazy Loading
   - Bundle Analysis

---

## ✅ Checkliste vor Launch

- [ ] Alle Texte auf Deutsch und korrekt
- [ ] Responsive auf allen Breakpoints getestet
- [ ] Formulare funktionieren mit Backend
- [ ] SEO Meta-Tags vollständig
- [ ] Impressum & Datenschutz vorhanden
- [ ] Google Maps API Key konfiguriert
- [ ] Performance Score > 90 (Lighthouse)
- [ ] Accessibility Score > 90
- [ ] SSL Zertifikat aktiv
- [ ] Domain konfiguriert

---

*Prompt Version: 1.0*
*Erstellt für: Next.js 14 + shadcn/ui + Framer Motion + Lucide React*
