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

        {/* Filter tabs */}
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

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2px',
      }} className="portfolio-grid">
        {filtered.map((w, i) => (
          <Reveal key={w.id} delay={i * 0.05} style={{ position: 'relative' }}>
            <div
              onClick={() => setLightbox(w)}
              style={{
                position: 'relative', overflow: 'hidden', cursor: 'zoom-in',
                aspectRatio: i === 0 && active === 'todos' ? 'auto' : '4/5',
                minHeight: i === 0 && active === 'todos' ? '480px' : 'auto',
                gridColumn: i === 0 && active === 'todos' ? 'span 2' : 'span 1',
                background: 'var(--border)',
              }}
              className={i === 0 && active === 'todos' ? 'portfolio-hero-item' : ''}
            >
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
                <div style={{ marginTop: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  Ampliar
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
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
