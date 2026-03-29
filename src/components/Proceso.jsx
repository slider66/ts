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

        {/* Images */}
        <Reveal>
          <div style={{ position: 'relative' }}>
            <img src="/PHOTO20260326110817.jpg" alt="Piezas de escultura poligonal en proceso de montaje en el taller" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
            <img src="/PHOTO20260226124035_1.jpg" alt="Cabezal láser de corte precisión" style={{
              position: 'absolute', bottom: '-2rem', right: '-2rem',
              width: '55%', aspectRatio: '1', objectFit: 'cover',
              border: '4px solid var(--off)',
            }} className="proceso-inset" />
          </div>
        </Reveal>

        {/* Steps */}
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
                  display: 'flex', gap: '1.5rem',
                  padding: '1.75rem 0',
                  borderBottom: '1px solid var(--border)',
                  borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.querySelector('.step-num').style.color = 'var(--gold)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.querySelector('.step-num').style.color = 'var(--border)'
                  }}
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
