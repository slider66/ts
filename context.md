# Toni Torres Metal Sculptures — Contexto completo del proyecto

## Stack & Arquitectura

- **Framework:** React 19 + Vite 8
- **Estilos:** CSS-in-JS (inline styles con CSS variables globales). Sin Tailwind, sin librerías de UI.
- **Animaciones:** `react-intersection-observer` para el componente `Reveal` (scroll-triggered fade-up)
- **Deploy:** Vercel (SPA con `vercel.json` de rewrite)
- **Fuentes:** Google Fonts — Cormorant Garamond (display serif), Syne (UI sans), DM Mono (mono)
- **Sin base de datos.** Sin backend. Formulario con estado local React.

## Paleta de colores (CSS variables en `src/index.css`)

| Variable | Valor | Uso |
|---|---|---|
| `--black` | `#0a0a0a` | Fondos oscuros, botones primarios |
| `--white` | `#fafaf8` | Fondo principal |
| `--off` | `#f3f2ef` | Secciones alternas claras |
| `--gold` | `#c9a96e` | Color de acento principal |
| `--gold-light` | `#e8d5aa` | Acento dorado suave |
| `--steel-dark` | `#6b7280` | Texto secundario |
| `--muted` | `#6b6b6b` | Texto terciario |
| `--border` | `#e0ddd7` | Bordes y separadores |

## Tipografías

| Variable | Fuente | Uso |
|---|---|---|
| `--f-display` | Cormorant Garamond | Títulos H1/H2, números grandes |
| `--f-ui` | Syne | Cuerpo, botones, nav |
| `--f-mono` | DM Mono | Labels, badges, etiquetas técnicas |

## Estructura de archivos

```
toni-torres/
├── index.html              # HTML raíz con Google Fonts + JSON-LD SEO
├── vite.config.js          # Config Vite (minimal)
├── vercel.json             # SPA rewrite routing
├── package.json
├── public/
│   ├── PHOTO20260226124035.jpg       # Chapa en máquina láser
│   ├── PHOTO20260226124035_1.jpg     # Cabezal láser
│   ├── PHOTO20260226144405.jpg       # (extra)
│   ├── PHOTO20260326110817.jpg       # Piezas en taller / ensamblaje
│   ├── PHOTO20260326110817_1.jpg     # Detalle taller / cordón
│   ├── PHOTO20260329190526.jpg       # Pantera dorada (HERO)
│   ├── PHOTO20260329190526_1.jpg     # Toro Corten
│   ├── PHOTO20260329190526_2.jpg     # Pantera negra
│   └── PHOTO20260329190526_3.jpg     # Piezas proceso
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css           # Reset + CSS variables globales
    └── components/
        ├── Reveal.jsx      # Componente de animación scroll
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── Portfolio.jsx
        ├── SobreToni.jsx
        ├── Proceso.jsx
        ├── Precios.jsx
        ├── FAQ.jsx
        ├── Contacto.jsx
        ├── Footer.jsx
        └── FloatWA.jsx
```

## Orden de secciones en App.jsx

1. `<Nav />` — Navbar fija, scroll effect, hamburger móvil
2. `<Hero />` — Portada 2 cols, imagen pantera dorada, stats, CTA
3. `<Marquee />` — Banda animada negra con capacidades técnicas
4. `<Portfolio />` — Galería filtrable (Todos / Esculturas / Proceso) + lightbox
5. `<SobreToni />` — Historia del artista, imagen taller, stats en grid
6. `<Proceso />` — 4 pasos con imágenes del taller
7. `<Precios />` — 4 tiers orientativos (desde 150€ → Consultar)
8. `<FAQ />` — 8 preguntas acordeón sobre fondo negro
9. `<Contacto />` — Formulario + WhatsApp + datos de contacto reales
10. `<Footer />` — Links + contacto + copyright
11. `<FloatWA />` — Botón flotante WhatsApp (fixed bottom-right)

---

## Datos de contacto reales

- **Teléfono / WhatsApp:** `+34 645 801 208`
- **Email demo:** `info@tonitorres.metal`
- **URL WhatsApp:** `https://wa.me/34645801208?text=Hola%20Toni%2C%20me%20interesa%20una%20escultura%20metálica%20personalizada.`

---

## Código completo por archivo

### `index.html`

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Toni Torres Metal Sculptures — Esculturas de metal únicas con geometría poligonal. Corte láser y soldadura artesanal. Piezas numeradas y certificadas." />
    <title>Toni Torres · Metal Sculptures</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Toni Torres Metal Sculptures",
      "description": "Esculturas artesanales de metal con geometría poligonal. Soldadura de precisión y corte láser.",
      "telephone": "+34645801208",
      "email": "info@tonitorres.metal",
      "address": { "@type": "PostalAddress", "addressCountry": "ES" },
      "priceRange": "€€€"
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### `vercel.json`

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### `package.json`

```json
{
  "name": "toni-torres",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-intersection-observer": "^10.0.3",
    "react-scroll-parallax": "^3.5.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.4.0",
    "vite": "^8.0.1"
  }
}
```

### `src/index.css`

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --black: #0a0a0a; --white: #fafaf8; --off: #f3f2ef; --off2: #eceae5;
  --steel: #b8bfc9; --steel-dark: #6b7280;
  --gold: #c9a96e; --gold-light: #e8d5aa; --gold-dark: #a07c3f;
  --text: #1a1a1a; --muted: #6b6b6b; --border: #e0ddd7;
  --f-display: 'Cormorant Garamond', serif;
  --f-ui: 'Syne', sans-serif;
  --f-mono: 'DM Mono', monospace;
}
html { scroll-behavior: smooth; }
body { background: var(--white); color: var(--text); font-family: var(--f-ui); font-size: 16px; line-height: 1.6; overflow-x: hidden; }
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--off); }
::-webkit-scrollbar-thumb { background: var(--gold); }
img { display: block; max-width: 100%; }
a { color: inherit; }
button { font-family: var(--f-ui); cursor: pointer; }
input, select, textarea { font-family: var(--f-ui); }
```

### `src/main.jsx`

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### `src/App.jsx`

```jsx
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Portfolio from './components/Portfolio'
import SobreToni from './components/SobreToni'
import Proceso from './components/Proceso'
import Precios from './components/Precios'
import FAQ from './components/FAQ'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import FloatWA from './components/FloatWA'
import './index.css'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Portfolio />
      <SobreToni />
      <Proceso />
      <Precios />
      <FAQ />
      <Contacto />
      <Footer />
      <FloatWA />
    </>
  )
}
```

### `src/components/Reveal.jsx`

```jsx
import { useInView } from 'react-intersection-observer'

export default function Reveal({ children, delay = 0, style = {} }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true, rootMargin: '0px 0px -40px 0px' })
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(22px)',
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  )
}
```

### `src/components/Nav.jsx`

```jsx
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#sobre-toni', label: 'El Artista' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#precios', label: 'Precios' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1.1rem 2.5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'rgba(250,250,248,0.93)',
      backdropFilter: 'blur(18px)',
      borderBottom: '1px solid var(--border)',
      boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.06)' : 'none',
      transition: 'box-shadow 0.3s',
    }}>
      <a href="#" style={{ textDecoration: 'none' }}>
        <div style={{ fontFamily: 'var(--f-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--black)', lineHeight: 1.1 }}>
          Toni Torres
        </div>
        <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.55rem', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>
          Metal Sculptures
        </div>
      </a>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}
        className="nav-desktop">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={{
              fontFamily: 'var(--f-ui)', fontSize: '0.72rem', fontWeight: 500,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--steel-dark)', textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--black)'}
              onMouseLeave={e => e.target.style.color = 'var(--steel-dark)'}
            >{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contacto" style={{
            background: 'var(--black)', color: 'var(--white)',
            padding: '0.5rem 1.25rem', borderRadius: '2px',
            fontFamily: 'var(--f-ui)', fontSize: '0.7rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.target.style.background = 'var(--gold)'}
            onMouseLeave={e => e.target.style.background = 'var(--black)'}
          >Presupuesto</a>
        </li>
      </ul>

      <button onClick={() => setOpen(!open)} style={{
        background: 'none', border: 'none', padding: '0.5rem',
        display: 'none', flexDirection: 'column', gap: '5px', cursor: 'pointer',
      }} className="nav-hamburger">
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--black)' }} />
        ))}
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--white)', borderBottom: '1px solid var(--border)',
          padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--f-ui)', fontSize: '0.85rem', fontWeight: 500,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--text)', textDecoration: 'none',
            }}>{l.label}</a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} style={{
            background: 'var(--black)', color: 'var(--white)',
            padding: '0.75rem 1rem', borderRadius: '2px', textAlign: 'center',
            fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
          }}>Solicitar Presupuesto</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
```

### `src/components/Hero.jsx`

```jsx
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', paddingTop: '5rem',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      position: 'relative', overflow: 'hidden',
    }} className="hero-grid">
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '5rem 4rem 5rem 5rem',
        position: 'relative', zIndex: 2,
      }} className="hero-left">
        <Reveal>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            marginBottom: '2rem', fontFamily: 'var(--f-mono)',
            fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>
            <span style={{ display: 'block', width: '2rem', height: '1px', background: 'var(--gold)' }} />
            Escultura artesanal · España
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 style={{
            fontFamily: 'var(--f-display)', fontWeight: 300, lineHeight: 1.02,
            fontSize: 'clamp(3.2rem, 5.5vw, 5.5rem)', color: 'var(--black)',
            marginBottom: '0.5rem',
          }}>
            Metal que<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>cobra vida</em><br />
            en tus manos
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p style={{
            fontFamily: 'var(--f-display)', fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
            fontWeight: 300, color: 'var(--steel-dark)', marginBottom: '1.5rem', lineHeight: 1.3,
          }}>
            Geometría poligonal. Precisión milimétrica.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p style={{
            fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--muted)',
            maxWidth: '380px', marginBottom: '2.5rem',
          }}>
            Cada escultura es una pieza única, numerada y firmada. Desde el diseño 3D hasta el cordón de soldadura final, cada decisión es consciente y permanente.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contacto" style={{
              background: 'var(--black)', color: 'var(--white)',
              padding: '0.875rem 2rem', borderRadius: '2px',
              fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              transition: 'background 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--black)'}
            >
              Solicitar Presupuesto
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#portfolio" style={{
              background: 'transparent', color: 'var(--black)',
              padding: '0.875rem 2rem', borderRadius: '2px',
              fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase', textDecoration: 'none',
              border: '1.5px solid var(--border)', transition: 'border-color 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--black)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              Ver Portfolio
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div style={{
            display: 'flex', gap: '3rem', marginTop: '4rem',
            paddingTop: '2rem', borderTop: '1px solid var(--border)',
          }}>
            {[
              { n: '+150', l: 'Piezas creadas' },
              { n: 'Nº1001', l: 'Próxima numeración' },
              { n: '100%', l: 'Artesanal' },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: '2.2rem', fontWeight: 600, color: 'var(--black)', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.3rem' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }} className="hero-right">
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to right, var(--white) 0%, transparent 20%)',
        }} className="hero-gradient" />
        <img
          src="/PHOTO20260329190526.jpg"
          alt="Pantera dorada low-poly escultura metálica Toni Torres"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(10%)' }}
          loading="eager"
        />
        <div style={{
          position: 'absolute', bottom: '2rem', right: '2rem', zIndex: 3,
          background: 'var(--white)', border: '1px solid var(--border)',
          padding: '0.75rem 1.1rem', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.52rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>Pieza certificada</div>
          <div style={{ fontFamily: 'var(--f-display)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--black)', lineHeight: 1 }}>Nº 1001</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
          .hero-left { padding: 8rem 1.75rem 3rem !important; }
          .hero-right { height: 55vw; max-height: 380px; }
          .hero-gradient { display: none !important; }
        }
      `}</style>
    </section>
  )
}
```

### `src/components/Marquee.jsx`

```jsx
const items = [
  'Corte Láser de Precisión', 'Soldadura TIG', 'Geometría Poligonal',
  'Edición Limitada', 'Piezas Numeradas', 'Diseño 3D Paramétrico',
  'Acero Corten · Inox · Negro',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div style={{
      overflow: 'hidden', background: 'var(--black)',
      borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a',
      padding: '0.9rem 0',
    }}>
      <div style={{
        display: 'flex', width: 'max-content',
        animation: 'marqueeScroll 22s linear infinite',
      }}>
        {doubled.map((item, i) => (
          <div key={i} style={{
            whiteSpace: 'nowrap', fontFamily: 'var(--f-mono)',
            fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--steel)', padding: '0 2.5rem',
            display: 'flex', alignItems: 'center', gap: '1.5rem',
          }}>
            {item}
            <span style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>◆</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
```

### `src/components/Portfolio.jsx`

```jsx
import { useState } from 'react'
import Reveal from './Reveal'

const works = [
  { id: 1, img: '/PHOTO20260329190526.jpg', name: 'Pantera — Edición Oro', tag: 'Acero inoxidable dorado', cat: 'animales', badge: 'Disponible' },
  { id: 2, img: '/PHOTO20260329190526_1.jpg', name: 'Toro — Corten', tag: 'Acero Corten', cat: 'animales' },
  { id: 3, img: '/PHOTO20260329190526_2.jpg', name: 'Pantera — Negro Noche', tag: 'Acero negro mate', cat: 'animales' },
  { id: 4, img: '/PHOTO20260329190526_3.jpg', name: 'Proceso Vivo', tag: 'Fabricación en taller', cat: 'proceso' },
  { id: 5, img: '/PHOTO20260226124035.jpg', name: 'Planchas — Origen', tag: 'Corte láser CNC', cat: 'proceso' },
  { id: 6, img: '/PHOTO20260226124035_1.jpg', name: 'Láser — Corte milimétrico', tag: 'Maquinaria de precisión', cat: 'proceso' },
  { id: 7, img: '/PHOTO20260326110817.jpg', name: 'Ensamblaje — Cara a cara', tag: 'Montaje artesanal', cat: 'proceso' },
  { id: 8, img: '/PHOTO20260326110817_1.jpg', name: 'Taller — Detalle cordón', tag: 'Soldadura TIG', cat: 'proceso' },
]

const cats = [
  { key: 'todos', label: 'Todos los trabajos' },
  { key: 'animales', label: 'Esculturas' },
  { key: 'proceso', label: 'Proceso & Taller' },
]

export default function Portfolio() {
  const [active, setActive] = useState('todos')
  const [lightbox, setLightbox] = useState(null)
  const filtered = active === 'todos' ? works : works.filter(w => w.cat === active)

  return (
    <section id="portfolio" style={{ background: 'var(--off)', padding: '7rem 5rem' }} className="portfolio-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <Reveal>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'var(--gold)' }} />
              Portfolio selecto
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 300, lineHeight: 1.08, color: 'var(--black)' }}>
              Obras que<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>definen espacios</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {cats.map(c => (
              <button key={c.key} onClick={() => setActive(c.key)} style={{
                padding: '0.5rem 1.1rem', borderRadius: '2px',
                fontFamily: 'var(--f-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                border: active === c.key ? '1.5px solid var(--black)' : '1.5px solid var(--border)',
                background: active === c.key ? 'var(--black)' : 'transparent',
                color: active === c.key ? 'var(--white)' : 'var(--muted)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}>
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} className="portfolio-grid">
        {filtered.map((w, i) => (
          <Reveal key={w.id} delay={i * 0.05} style={{ position: 'relative' }}>
            <div onClick={() => setLightbox(w)} style={{
              position: 'relative', overflow: 'hidden', cursor: 'zoom-in',
              aspectRatio: i === 0 && active === 'todos' ? 'auto' : '4/5',
              minHeight: i === 0 && active === 'todos' ? '480px' : 'auto',
              background: 'var(--border)',
            }} className={i === 0 && active === 'todos' ? 'portfolio-hero-item' : ''}>
              <img src={w.img} alt={w.name} loading="lazy" style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s',
                filter: 'grayscale(15%)',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.filter = 'grayscale(0%)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'grayscale(15%)' }}
              />
              {w.badge && (
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: 'var(--gold)', color: 'var(--black)',
                  padding: '0.2rem 0.6rem', fontFamily: 'var(--f-mono)',
                  fontSize: '0.52rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                }}>{w.badge}</div>
              )}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.78) 0%, transparent 55%)',
                opacity: 0, transition: 'opacity 0.35s',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.75rem',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0}
              >
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '0.4rem' }}>{w.tag}</div>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--white)' }}>{w.name}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(10,10,10,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '2rem', cursor: 'zoom-out',
        }}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '80vw', maxHeight: '85vh', position: 'relative' }}>
            <img src={lightbox.img} alt={lightbox.name} style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }} />
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--white)' }}>{lightbox.name}</div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '0.25rem' }}>{lightbox.tag}</div>
            </div>
            <button onClick={() => setLightbox(null)} style={{
              position: 'absolute', top: '-1rem', right: '-1rem', width: '2.5rem', height: '2.5rem',
              background: 'var(--gold)', border: 'none', borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--black)',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .portfolio-section { padding: 4rem 1.5rem !important; }
          .portfolio-grid { grid-template-columns: 1fr 1fr !important; }
          .portfolio-hero-item { grid-column: span 2 !important; }
        }
        @media (max-width: 500px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
          .portfolio-hero-item { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
```

### `src/components/SobreToni.jsx`

```jsx
import Reveal from './Reveal'

export default function SobreToni() {
  return (
    <section id="sobre-toni" style={{ padding: '7rem 5rem', background: 'var(--white)' }} className="about-section">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="about-grid">
        <Reveal>
          <div style={{ position: 'relative' }}>
            <img src="/PHOTO20260326110817_1.jpg" alt="Toni Torres trabajando en su taller"
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', filter: 'grayscale(10%)' }} />
            <div style={{
              position: 'absolute', bottom: '-2rem', right: '-2rem',
              background: 'var(--black)', padding: '2rem',
              border: '4px solid var(--white)', maxWidth: '220px',
            }}>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Sello de autor</div>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1.2 }}>Toni Torres</div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--steel)', marginTop: '0.25rem' }}>Metal Sculptures</div>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #333', fontFamily: 'var(--f-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: '#555' }}>
                Cada pieza firmada<br />y numerada
              </div>
            </div>
          </div>
        </Reveal>

        <div style={{ paddingBottom: '2rem' }}>
          <Reveal>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'var(--gold)' }} />
              El artista
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(2.2rem, 3.5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.08, color: 'var(--black)', marginBottom: '1.5rem' }}>
              Donde la ingeniería<br />se convierte en <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>arte</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--muted)', marginBottom: '1.25rem' }}>
              Toni Torres comenzó en el mundo de la soldadura estructural, donde aprendió que cada cordón de metal cuenta una historia de precisión y voluntad. Con el tiempo, esa obsesión por el detalle encontró un nuevo lenguaje: la escultura poligonal.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--muted)', marginBottom: '1.25rem' }}>
              Sus obras nacen del diálogo entre la geometría digital y el calor de la soldadura manual. Cada animal, cada forma, es primero un modelo 3D paramétrico; después, un conjunto de plantillas cortadas al láser; y finalmente, una escultura que respira gracias a las manos del artista.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--muted)', marginBottom: '2.5rem' }}>
              Con más de 150 piezas creadas para coleccionistas, galerías y espacios corporativos en toda España, Toni Torres ha establecido un lenguaje propio: <strong style={{ color: 'var(--text)', fontWeight: 600 }}>la brutalidad del metal sometida a la elegancia de la geometría.</strong>
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
              {[
                { n: '+150', l: 'Obras realizadas' },
                { n: '+8', l: 'Años de experiencia' },
                { n: '100%', l: 'Piezas únicas' },
                { n: 'Nº1001', l: 'Próxima pieza' },
              ].map(s => (
                <div key={s.l} style={{ background: 'var(--white)', padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: '2rem', fontWeight: 600, color: 'var(--black)', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.35rem' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-section { padding: 4rem 1.5rem !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  )
}
```

### `src/components/Proceso.jsx`

```jsx
import Reveal from './Reveal'

const steps = [
  { n: '01', title: 'Diseño 3D Paramétrico', desc: 'Modelado digital de cada cara poligonal. Cada vértice es calculado para que el ensamblaje encaje a la perfección. Sin improvisación.' },
  { n: '02', title: 'Corte Láser CNC', desc: 'Las plantillas se cortan con láser de fibra en chapas de acero. Tolerancias de ±0.1mm. La precisión del corte define la calidad del ensamblaje final.' },
  { n: '03', title: 'Ensamblaje & Soldadura TIG', desc: 'Montaje manual cara a cara. Soldadura TIG para uniones limpias e invisibles en el acabado final. Cada cordón es una firma del artista.' },
  { n: '04', title: 'Acabado & Certificación', desc: 'Pulido, tratamiento superficial y numeración. La pieza recibe su placa de identificación y certificado de autenticidad de edición limitada.' },
]

export default function Proceso() {
  return (
    <section id="proceso" style={{ padding: '7rem 5rem', background: 'var(--off)' }} className="proceso-section">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="proceso-grid">
        <Reveal>
          <div style={{ position: 'relative' }}>
            <img src="/PHOTO20260326110817.jpg" alt="Piezas poligonales en proceso de montaje"
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
            <img src="/PHOTO20260226124035_1.jpg" alt="Cabezal láser de corte" style={{
              position: 'absolute', bottom: '-2rem', right: '-2rem',
              width: '55%', aspectRatio: '1', objectFit: 'cover',
              border: '4px solid var(--off)',
            }} className="proceso-inset" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'var(--gold)' }} />
              Del boceto a la obra
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 300, lineHeight: 1.08, color: 'var(--black)', marginBottom: '1rem' }}>
              Un proceso <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>sin atajos</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--muted)', marginBottom: '2.5rem', maxWidth: '420px' }}>
              Cada escultura sigue un protocolo riguroso que garantiza una pieza con décadas de vida útil y acabado de galería.
            </p>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div style={{
                  display: 'flex', gap: '1.5rem', padding: '1.75rem 0',
                  borderBottom: '1px solid var(--border)',
                  borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                }}
                  onMouseEnter={e => e.currentTarget.querySelector('.step-num').style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.querySelector('.step-num').style.color = 'var(--border)'}
                >
                  <div className="step-num" style={{ fontFamily: 'var(--f-display)', fontSize: '2.8rem', fontWeight: 300, color: 'var(--border)', lineHeight: 1, minWidth: '2.5rem', transition: 'color 0.3s' }}>{s.n}</div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--black)' }}>{s.title}</div>
                    <div style={{ fontSize: '0.82rem', lineHeight: 1.75, color: 'var(--muted)' }}>{s.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proceso-section { padding: 4rem 1.5rem !important; }
          .proceso-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .proceso-inset { display: none !important; }
        }
      `}</style>
    </section>
  )
}
```

### `src/components/Precios.jsx`

```jsx
import Reveal from './Reveal'

const tiers = [
  {
    name: 'Sobremesa', size: 'Hasta 30 cm', from: '150',
    desc: 'Piezas decorativas de interior. Acabado cuidado, ideal para hogares y oficinas.',
    includes: ['Acero negro o natural', 'Placa numerada', 'Caja de presentación', 'Certificado digital'],
    accent: false,
  },
  {
    name: 'Mediana', size: '30 – 80 cm', from: '400',
    desc: 'Esculturas de presencia. La gama más demandada para coleccionistas y espacios premium.',
    includes: ['Elección de material', 'Placa numerada grabada', 'Pedestal opcional', 'Certificado físico firmado'],
    accent: true, badge: 'Más popular',
  },
  {
    name: 'Gran Formato', size: '80 cm – 2 m', from: '1.200',
    desc: 'Para espacios que exigen una pieza que impacte. Exterior o interior, con tratamiento anticorrosión.',
    includes: ['Material y acabado a medida', 'Transporte coordinado', 'Instalación incluida', 'Certificado de autenticidad'],
    accent: false,
  },
  {
    name: 'Monumental', size: 'Más de 2 m', from: 'Consultar',
    desc: 'Proyectos únicos para espacios públicos, corporativos o coleccionistas.',
    includes: ['Proyecto completamente personalizado', 'Render 3D previo incluido', 'Gestión logística completa', 'Garantía estructural'],
    accent: false, mono: true,
  },
]

export default function Precios() {
  return (
    <section id="precios" style={{ padding: '7rem 5rem', background: 'var(--white)' }} className="precios-section">
      <div style={{ maxWidth: '680px', marginBottom: '4rem' }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'var(--gold)' }} />
            Rangos orientativos
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(2.2rem, 3.5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.08, color: 'var(--black)', marginBottom: '1rem' }}>
            Inversión en una pieza<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>que durará décadas</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--muted)' }}>
            Los precios varían según el material elegido, la complejidad del diseño y el acabado. Estos rangos son orientativos. Solicita un presupuesto personalizado sin compromiso.
          </p>
        </Reveal>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)' }} className="precios-grid">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <div style={{
              background: t.accent ? 'var(--black)' : 'var(--white)',
              padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative',
            }}
              onMouseEnter={e => !t.accent && (e.currentTarget.style.background = 'var(--off)')}
              onMouseLeave={e => !t.accent && (e.currentTarget.style.background = 'var(--white)')}
            >
              {t.badge && (
                <div style={{
                  position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--gold)', color: 'var(--black)',
                  padding: '0.2rem 0.75rem', fontFamily: 'var(--f-mono)',
                  fontSize: '0.52rem', letterSpacing: '0.16em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}>{t.badge}</div>
              )}
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: t.accent ? 'var(--gold)' : 'var(--steel-dark)', marginBottom: '0.5rem' }}>{t.size}</div>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: '1.6rem', fontWeight: 600, color: t.accent ? 'var(--white)' : 'var(--black)', marginBottom: '0.25rem', lineHeight: 1.1 }}>{t.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', margin: '1.25rem 0', paddingBottom: '1.25rem', borderBottom: `1px solid ${t.accent ? '#333' : 'var(--border)'}` }}>
                {!t.mono && <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.65rem', color: t.accent ? 'var(--steel)' : 'var(--muted)' }}>desde</span>}
                <span style={{ fontFamily: 'var(--f-display)', fontSize: t.mono ? '1.6rem' : '2.8rem', fontWeight: 600, color: t.accent ? 'var(--gold)' : 'var(--black)', lineHeight: 1 }}>
                  {t.mono ? t.from : `${t.from}€`}
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', lineHeight: 1.75, color: t.accent ? '#aaa' : 'var(--muted)', marginBottom: '1.5rem', flexGrow: 1 }}>{t.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {t.includes.map(inc => (
                  <li key={inc} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.78rem', color: t.accent ? '#bbb' : 'var(--muted)', lineHeight: 1.4 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M5 12l5 5L20 7" /></svg>
                    {inc}
                  </li>
                ))}
              </ul>
              <a href="#contacto" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                padding: '0.8rem 1.25rem',
                background: t.accent ? 'var(--gold)' : 'transparent',
                border: `1.5px solid ${t.accent ? 'var(--gold)' : 'var(--border)'}`,
                color: t.accent ? 'var(--black)' : 'var(--text)',
                fontFamily: 'var(--f-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                textDecoration: 'none', borderRadius: '2px', fontWeight: 600, transition: 'all 0.2s',
              }}
                onMouseEnter={e => { if (!t.accent) { e.currentTarget.style.borderColor = 'var(--black)'; e.currentTarget.style.background = 'var(--off)' } }}
                onMouseLeave={e => { if (!t.accent) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' } }}
              >
                Solicitar presupuesto
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p style={{ marginTop: '2rem', textAlign: 'center', fontFamily: 'var(--f-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', color: 'var(--muted)' }}>
          ✦ Todos los precios incluyen diseño 3D, corte láser, soldadura, acabado y placa numerada. IVA no incluido.
        </p>
      </Reveal>

      <style>{`
        @media (max-width: 1024px) {
          .precios-section { padding: 4rem 2rem !important; }
          .precios-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .precios-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
```

### `src/components/FAQ.jsx`

```jsx
import { useState } from 'react'
import Reveal from './Reveal'

const faqs = [
  { q: '¿Cuánto tarda en realizarse una escultura?', a: 'El plazo depende del tamaño y la complejidad. Una pieza de sobremesa puede estar lista en 2-3 semanas. Las piezas medianas requieren entre 4-6 semanas. Para gran formato o monumental, planificamos juntos un calendario desde el inicio del proyecto.' },
  { q: '¿Puedo pedir un animal o forma que no veo en el portfolio?', a: 'Absolutamente. La mayoría de proyectos son encargos personalizados. Si tienes en mente un animal, una figura abstracta o incluso un logotipo corporativo en metal, lo estudiamos y hacemos un renderizado 3D previo para que veas exactamente el resultado antes de empezar.' },
  { q: '¿Qué materiales utilizáis?', a: 'Trabajamos principalmente con acero al carbono (negro mate), acero inoxidable (natural o satinado), acero Corten (oxidado natural) y acabados especiales como dorado o cromado. Cada material tiene su carácter y durabilidad particular; te asesoramos según el espacio de destino.' },
  { q: '¿Las esculturas son aptas para exterior?', a: 'Sí. El acero Corten es el más recomendado para exterior, ya que su capa de óxido natural lo protege de la corrosión. El acero inoxidable también es ideal para exteriores. El acero negro requiere tratamiento adicional si va al exterior, lo cual incluimos en el presupuesto.' },
  { q: '¿Qué garantía tienen las piezas?', a: 'Todas las piezas incluyen garantía estructural de 2 años. Además, al ser una edición numerada y certificada, el valor de la obra queda documentado para reventa o colección. Cada pieza sale del taller con su placa de identificación y certificado firmado.' },
  { q: '¿Hacéis envíos fuera de España?', a: 'Sí. Coordinamos envíos a toda Europa con empresas de transporte especializadas en obras de arte y piezas delicadas. Para proyectos fuera de España, añadimos los costes de envío y seguro de transporte al presupuesto.' },
  { q: '¿Cómo funciona el proceso de encargo?', a: 'Es muy sencillo: 1) Nos describes tu idea por formulario o WhatsApp. 2) En 48h te enviamos presupuesto orientativo. 3) Si te interesa, hacemos el renderizado 3D y ajustamos detalles. 4) Con el 50% de señal, empezamos fabricación. 5) Al finalizar, pagás el resto y coordinamos la entrega.' },
  { q: '¿Se puede visitar el taller?', a: 'Sí, con cita previa. De hecho, animamos a los clientes a visitar el taller para ver de cerca el proceso y los materiales. Verlo en persona cambia completamente la percepción de lo que significa una escultura hecha a mano.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" style={{ padding: '7rem 5rem', background: 'var(--black)' }} className="faq-section">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }} className="faq-grid">
        <div style={{ position: 'sticky', top: '7rem' }}>
          <Reveal>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'var(--gold)' }} />
              Preguntas frecuentes
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(2rem, 3vw, 3.2rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--white)', marginBottom: '1.5rem' }}>
              Todo lo que<br />necesitas <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>saber</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: '#777', marginBottom: '2.5rem' }}>
              ¿Tienes más dudas? Escríbenos por WhatsApp o rellena el formulario.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="https://wa.me/34645801208" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.75rem 1.5rem', background: '#25D366', color: 'white',
              fontFamily: 'var(--f-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              textDecoration: 'none', borderRadius: '2px', fontWeight: 600,
            }}>WhatsApp</a>
          </Reveal>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div style={{ borderBottom: '1px solid #1a1a1a' }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
                  padding: '1.75rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                }}>
                  <span style={{ fontFamily: 'var(--f-display)', fontSize: '1.2rem', fontWeight: 400, color: open === i ? 'var(--gold)' : 'var(--white)', transition: 'color 0.2s', lineHeight: 1.3 }}>{faq.q}</span>
                  <span style={{
                    flexShrink: 0, width: '1.75rem', height: '1.75rem',
                    border: `1.5px solid ${open === i ? 'var(--gold)' : '#333'}`,
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: open === i ? 'var(--gold)' : '#555', transition: 'all 0.3s',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </button>
                <div style={{ maxHeight: open === i ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                  <p style={{ paddingBottom: '1.75rem', fontSize: '0.88rem', lineHeight: 1.85, color: '#888' }}>{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-section { padding: 4rem 1.5rem !important; }
          .faq-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
```

### `src/components/Contacto.jsx`

> Ver código completo en la sesión de Claude — es el más extenso (formulario completo con estado React, focus styles dinámicos, WhatsApp link, mensaje de éxito). Los datos clave:
> - Teléfono: `+34 645 801 208`
> - Email: `info@tonitorres.metal`
> - WhatsApp: `https://wa.me/34645801208?text=Hola%20Toni%2C%20me%20interesa%20una%20escultura%20metálica%20personalizada.`

### `src/components/Footer.jsx` y `src/components/FloatWA.jsx`

> Componentes de cierre. Footer con grid 3 columnas (brand + nav + contacto). FloatWA con botón fijo `bottom: 2rem, right: 2rem` con número `34645801208`.

---

## Comandos para arrancar en VSC

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev
# → http://localhost:5173

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview
```

## Deploy en Vercel

1. Subir la carpeta `toni-torres` a GitHub (o arrastrar en Vercel)
2. **Framework preset:** Vite (se detecta automáticamente)
3. **Build command:** `npm run build`
4. **Output directory:** `dist`
5. El archivo `vercel.json` ya configura el routing SPA

## Pendiente de integrar (próximos pasos)

- [ ] Conectar formulario a servicio real (Resend, Formspree, o webhook Telegram)
- [ ] Añadir más fotos al portfolio cuando el cliente las envíe
- [ ] Actualizar número de piezas y numeración cuando sea real
- [ ] Dominio personalizado en Vercel
- [ ] Google Analytics / Plausible para métricas de leads