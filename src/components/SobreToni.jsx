import Reveal from './Reveal'

export default function SobreToni() {
  return (
    <section id="sobre-toni" style={{ padding: '7rem 5rem', background: 'var(--white)' }} className="about-section">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="about-grid">

        {/* Images column */}
        <Reveal>
          <div style={{ position: 'relative' }}>
            <img
              src="/PHOTO20260326110817_1.jpg"
              alt="Toni Torres trabajando en su taller de esculturas metálicas"
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', filter: 'grayscale(10%)' }}
            />
            {/* Floating card */}
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

        {/* Text column */}
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
