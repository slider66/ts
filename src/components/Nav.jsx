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

      {/* Desktop links */}
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

      {/* Hamburger */}
      <button onClick={() => setOpen(!open)} style={{
        background: 'none', border: 'none', padding: '0.5rem',
        display: 'none', flexDirection: 'column', gap: '5px', cursor: 'pointer',
      }} className="nav-hamburger">
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--black)' }} />
        ))}
      </button>

      {/* Mobile menu */}
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
