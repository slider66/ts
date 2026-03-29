import { useState } from 'react'
import Reveal from './Reveal'

const inputStyle = {
  background: 'var(--off)', border: '1.5px solid var(--border)', borderRadius: '2px',
  padding: '0.75rem 1rem', fontSize: '0.875rem', color: 'var(--black)',
  width: '100%', outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  appearance: 'none', WebkitAppearance: 'none',
}

const labelStyle = {
  fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.18em',
  textTransform: 'uppercase', color: 'var(--steel-dark)', display: 'block', marginBottom: '0.4rem',
}

export default function Contacto() {
  const [sent, setSent] = useState(false)
  const [focus, setFocus] = useState(null)

  const fi = (id) => ({
    ...inputStyle,
    borderColor: focus === id ? 'var(--gold)' : 'var(--border)',
    boxShadow: focus === id ? '0 0 0 3px rgba(201,169,110,0.1)' : 'none',
  })

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  const trustItems = [
    { icon: '✓', title: 'Presupuesto en 48h', desc: 'Sin compromiso y completamente personalizado.' },
    { icon: '◎', title: 'Renderizado 3D previo', desc: 'Ves exactamente el resultado antes de fabricar.' },
    { icon: '№', title: 'Certificado de autenticidad', desc: 'Placa numerada y certificado firmado en cada pieza.' },
    { icon: '→', title: 'Envío a toda España', desc: 'Embalaje industrial. Gran formato coordinado.' },
  ]

  return (
    <section id="contacto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '90vh' }} className="contact-section">
      {/* Left */}
      <div style={{ background: 'var(--off)', padding: '6rem 5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="contact-left">
        <Reveal>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'var(--gold)' }} />
            Hablemos de tu proyecto
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 300, lineHeight: 1.08, color: 'var(--black)', marginBottom: '1.25rem' }}>
            Cada pieza<br />empieza con una<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>conversación</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--muted)', maxWidth: '360px', marginBottom: '3rem' }}>
            No fabricamos piezas en serie. Cada proyecto se estudia individualmente para garantizar un resultado que supere tus expectativas.
          </p>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {trustItems.map((t, i) => (
            <Reveal key={t.title} delay={0.2 + i * 0.07}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '2.25rem', height: '2.25rem', background: 'var(--black)', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  fontFamily: 'var(--f-display)', fontSize: '1rem', color: 'var(--gold)', marginTop: '2px',
                }}>{t.icon}</div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--black)', marginBottom: '0.2rem' }}>{t.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.55 }}>{t.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.55}>
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.75rem' }}>Contacto directo</div>
            <a href="tel:+34645801208" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--black)', fontFamily: 'var(--f-display)', fontSize: '1.3rem', fontWeight: 400, marginBottom: '0.5rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.13 19.79 19.79 0 01.07 2.5 2 2 0 012.06.25h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
              +34 645 801 208
            </a>
            <a href="mailto:info@tonitorres.metal" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--muted)', fontFamily: 'var(--f-mono)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              info@tonitorres.metal
            </a>
          </div>
        </Reveal>
      </div>

      {/* Right - Form */}
      <div style={{ padding: '6rem 5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="contact-right">
        {!sent ? (
          <>
            <Reveal>
              <h2 style={{ fontFamily: 'var(--f-display)', fontSize: '2.2rem', fontWeight: 300, marginBottom: '0.5rem', color: 'var(--black)' }}>
                Solicita tu <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>presupuesto</em>
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Cuéntanos qué tienes en mente. No hay ideas demasiado grandes ni demasiado pequeñas.
              </p>
            </Reveal>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={labelStyle}>Nombre *</label>
                  <input required placeholder="Tu nombre" style={fi('nombre')} onFocus={() => setFocus('nombre')} onBlur={() => setFocus(null)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={labelStyle}>Teléfono *</label>
                  <input required type="tel" placeholder="+34 600 000 000" style={fi('tel')} onFocus={() => setFocus('tel')} onBlur={() => setFocus(null)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', gridColumn: 'span 2' }}>
                  <label style={labelStyle}>Email</label>
                  <input type="email" placeholder="tu@email.com" style={fi('email')} onFocus={() => setFocus('email')} onBlur={() => setFocus(null)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', gridColumn: 'span 2' }}>
                  <label style={labelStyle}>Tipo de escultura *</label>
                  <select required style={fi('tipo')} onFocus={() => setFocus('tipo')} onBlur={() => setFocus(null)}>
                    <option value="">Selecciona una opción</option>
                    <option>Animal — fauna (toro, pantera, lobo…)</option>
                    <option>Figura humana o abstracta</option>
                    <option>Decoración interior / exterior</option>
                    <option>Proyecto arquitectónico o corporativo</option>
                    <option>Pieza de colección personalizada</option>
                    <option>Otro (especificar en mensaje)</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={labelStyle}>Material preferido</label>
                  <select style={fi('mat')} onFocus={() => setFocus('mat')} onBlur={() => setFocus(null)}>
                    <option value="">Sin preferencia</option>
                    <option>Acero negro mate</option>
                    <option>Acero inoxidable natural</option>
                    <option>Acero Corten (oxidado)</option>
                    <option>Acabado dorado</option>
                    <option>Acabado cromo / espejo</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={labelStyle}>Tamaño aproximado</label>
                  <select style={fi('tam')} onFocus={() => setFocus('tam')} onBlur={() => setFocus(null)}>
                    <option value="">Indistinto</option>
                    <option>Sobremesa (hasta 30 cm)</option>
                    <option>Mediano (30–80 cm)</option>
                    <option>Grande (80 cm–2 m)</option>
                    <option>Monumental (+2 m)</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', gridColumn: 'span 2' }}>
                  <label style={labelStyle}>Cuéntame tu idea</label>
                  <textarea rows={4} placeholder="Describe tu visión: animal, tamaño, ubicación, uso, referencias que te inspiren…" style={{ ...fi('msg'), resize: 'vertical' }} onFocus={() => setFocus('msg')} onBlur={() => setFocus(null)} />
                </div>
              </div>

              <button type="submit" style={{
                marginTop: '1.25rem', width: '100%',
                background: 'var(--black)', color: 'var(--white)',
                padding: '1rem', border: 'none', borderRadius: '2px',
                fontFamily: 'var(--f-ui)', fontSize: '0.75rem', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'background 0.25s',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--black)'}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.13 19.79 19.79 0 01.07 2.5 2 2 0 012.06.25h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
                Enviar Solicitud de Presupuesto
              </button>

              <a href="https://wa.me/34645801208?text=Hola%20Toni%2C%20me%20interesa%20una%20escultura%20metálica%20personalizada." target="_blank" rel="noreferrer" style={{
                marginTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                padding: '0.875rem', background: '#25D366', color: 'white',
                fontFamily: 'var(--f-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                textDecoration: 'none', borderRadius: '2px', fontWeight: 600, transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#128C7E'}
                onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                O escríbenos directamente por WhatsApp
              </a>

              <p style={{ marginTop: '1rem', textAlign: 'center', fontFamily: 'var(--f-mono)', fontSize: '0.58rem', letterSpacing: '0.12em', color: 'var(--muted)' }}>
                ⏱ Tiempo de respuesta: 24–48 horas laborables
              </p>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <div style={{ fontFamily: 'var(--f-display)', fontSize: '3rem', color: 'var(--gold)', marginBottom: '1rem' }}>✓</div>
            <h3 style={{ fontFamily: 'var(--f-display)', fontSize: '2rem', fontWeight: 300, marginBottom: '1rem' }}>¡Solicitud recibida!</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              Gracias por contactar con Toni Torres Metal Sculptures.<br />
              Te responderemos en un máximo de <strong>48 horas laborables</strong>.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-section { grid-template-columns: 1fr !important; }
          .contact-left { padding: 4rem 1.75rem !important; }
          .contact-right { padding: 4rem 1.75rem !important; }
        }
      `}</style>
    </section>
  )
}
