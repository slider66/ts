export default function Footer() {
  return (
    <footer style={{ background: 'var(--black)', color: 'var(--white)', padding: '4rem 5rem 2.5rem' }} className="footer">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', paddingBottom: '3rem', borderBottom: '1px solid #1a1a1a' }} className="footer-grid">
        <div>
          <div style={{ fontFamily: 'var(--f-display)', fontSize: '1.8rem', fontWeight: 300, letterSpacing: '0.02em', marginBottom: '0.25rem' }}>Toni Torres</div>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Metal Sculptures</div>
          <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: '#555', maxWidth: '300px' }}>
            Esculturas de metal con geometría poligonal, creadas con corte láser de precisión y soldadura artesanal. Cada pieza es única, numerada y firmada.
          </p>
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>Navegación</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[['#portfolio', 'Portfolio'], ['#sobre-toni', 'El Artista'], ['#proceso', 'Proceso'], ['#precios', 'Precios'], ['#faq', 'FAQ'], ['#contacto', 'Contacto']].map(([href, label]) => (
              <li key={href}>
                <a href={href} style={{ fontSize: '0.82rem', color: '#555', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--white)'}
                  onMouseLeave={e => e.target.style.color = '#555'}
                >{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>Contacto</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              ['tel:+34645801208', '+34 645 801 208'],
              ['mailto:info@tonitorres.metal', 'info@tonitorres.metal'],
              ['https://wa.me/34645801208', 'WhatsApp'],
              ['#', 'España'],
            ].map(([href, label]) => (
              <li key={label}>
                <a href={href} style={{ fontSize: '0.82rem', color: '#555', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--white)'}
                  onMouseLeave={e => e.target.style.color = '#555'}
                >{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', color: '#333' }}>
          © 2026 Toni Torres Metal Sculptures · Todos los derechos reservados
        </div>
        <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', color: '#333' }}>
          Cada pieza · Numerada · Certificada · Única
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer { padding: 3rem 1.5rem 2rem !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </footer>
  )
}
