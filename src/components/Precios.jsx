import Reveal from './Reveal'

const tiers = [
  {
    name: 'Sobremesa',
    size: 'Hasta 30 cm',
    from: '150',
    desc: 'Piezas decorativas de interior. Acabado cuidado, ideal para hogares y oficinas.',
    includes: ['Acero negro o natural', 'Placa numerada', 'Caja de presentación', 'Certificado digital'],
    accent: false,
  },
  {
    name: 'Mediana',
    size: '30 – 80 cm',
    from: '400',
    desc: 'Esculturas de presencia. La gama más demandada para coleccionistas y espacios premium.',
    includes: ['Elección de material', 'Placa numerada grabada', 'Pedestal opcional', 'Certificado físico firmado'],
    accent: true,
    badge: 'Más popular',
  },
  {
    name: 'Gran Formato',
    size: '80 cm – 2 m',
    from: '1.200',
    desc: 'Para espacios que exigen una pieza que impacte. Exterior o interior, con tratamiento anticorrosión.',
    includes: ['Material y acabado a medida', 'Transporte coordinado', 'Instalación incluida', 'Certificado de autenticidad'],
    accent: false,
  },
  {
    name: 'Monumental',
    size: 'Más de 2 m',
    from: 'Consultar',
    desc: 'Proyectos únicos para espacios públicos, corporativos o coleccionistas. Cada pieza es una negociación personal.',
    includes: ['Proyecto completamente personalizado', 'Render 3D previo incluido', 'Gestión logística completa', 'Garantía estructural'],
    accent: false,
    mono: true,
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
              padding: '2.5rem 2rem',
              display: 'flex', flexDirection: 'column', height: '100%',
              position: 'relative',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => !t.accent && (e.currentTarget.style.background = 'var(--off)')}
              onMouseLeave={e => !t.accent && (e.currentTarget.style.background = 'var(--white)')}
            >
              {t.badge && (
                <div style={{
                  position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--gold)', color: 'var(--black)',
                  padding: '0.2rem 0.75rem', fontFamily: 'var(--f-mono)',
                  fontSize: '0.52rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>{t.badge}</div>
              )}

              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: t.accent ? 'var(--gold)' : 'var(--steel-dark)', marginBottom: '0.5rem' }}>
                {t.size}
              </div>

              <div style={{ fontFamily: 'var(--f-display)', fontSize: '1.6rem', fontWeight: 600, color: t.accent ? 'var(--white)' : 'var(--black)', marginBottom: '0.25rem', lineHeight: 1.1 }}>
                {t.name}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', margin: '1.25rem 0', paddingBottom: '1.25rem', borderBottom: `1px solid ${t.accent ? '#333' : 'var(--border)'}` }}>
                {!t.mono && <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.65rem', color: t.accent ? 'var(--steel)' : 'var(--muted)' }}>desde</span>}
                <span style={{ fontFamily: 'var(--f-display)', fontSize: t.mono ? '1.6rem' : '2.8rem', fontWeight: 600, color: t.accent ? 'var(--gold)' : 'var(--black)', lineHeight: 1 }}>
                  {t.mono ? t.from : `${t.from}€`}
                </span>
              </div>

              <p style={{ fontSize: '0.82rem', lineHeight: 1.75, color: t.accent ? '#aaa' : 'var(--muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {t.desc}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {t.includes.map(inc => (
                  <li key={inc} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.78rem', color: t.accent ? '#bbb' : 'var(--muted)', lineHeight: 1.4 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={t.accent ? 'var(--gold)' : 'var(--gold)'} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <path d="M5 12l5 5L20 7" />
                    </svg>
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
