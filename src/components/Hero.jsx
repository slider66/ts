import Reveal from './Reveal'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', paddingTop: '5rem',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      position: 'relative', overflow: 'hidden',
    }} className="hero-grid">
      {/* Left */}
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

      {/* Right image */}
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
