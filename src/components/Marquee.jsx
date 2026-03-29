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
