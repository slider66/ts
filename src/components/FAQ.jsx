import { useState } from 'react'
import Reveal from './Reveal'

const faqs = [
  {
    q: '¿Cuánto tarda en realizarse una escultura?',
    a: 'El plazo depende del tamaño y la complejidad. Una pieza de sobremesa puede estar lista en 2-3 semanas. Las piezas medianas requieren entre 4-6 semanas. Para gran formato o monumental, planificamos juntos un calendario desde el inicio del proyecto.',
  },
  {
    q: '¿Puedo pedir un animal o forma que no veo en el portfolio?',
    a: 'Absolutamente. La mayoría de proyectos son encargos personalizados. Si tienes en mente un animal, una figura abstracta o incluso un logotipo corporativo en metal, lo estudiamos y hacemos un renderizado 3D previo para que veas exactamente el resultado antes de empezar.',
  },
  {
    q: '¿Qué materiales utilizáis?',
    a: 'Trabajamos principalmente con acero al carbono (negro mate), acero inoxidable (natural o satinado), acero Corten (oxidado natural) y acabados especiales como dorado o cromado. Cada material tiene su carácter y durabilidad particular; te asesoramos según el espacio de destino.',
  },
  {
    q: '¿Las esculturas son aptas para exterior?',
    a: 'Sí. El acero Corten es el más recomendado para exterior, ya que su capa de óxido natural lo protege de la corrosión. El acero inoxidable también es ideal para exteriores. El acero negro requiere tratamiento adicional si va al exterior, lo cual incluimos en el presupuesto.',
  },
  {
    q: '¿Qué garantía tienen las piezas?',
    a: 'Todas las piezas incluyen garantía estructural de 2 años. Además, al ser una edición numerada y certificada, el valor de la obra queda documentado para reventa o colección. Cada pieza sale del taller con su placa de identificación y certificado firmado.',
  },
  {
    q: '¿Hacéis envíos fuera de España?',
    a: 'Sí. Coordinamos envíos a toda Europa con empresas de transporte especializadas en obras de arte y piezas delicadas. Para proyectos fuera de España, añadimos los costes de envío y seguro de transporte al presupuesto.',
  },
  {
    q: '¿Cómo funciona el proceso de encargo?',
    a: 'Es muy sencillo: 1) Nos describes tu idea por formulario o WhatsApp. 2) En 48h te enviamos presupuesto orientativo. 3) Si te interesa, hacemos el renderizado 3D y ajustamos detalles. 4) Con el 50% de señal, empezamos fabricación. 5) Al finalizar, pagás el resto y coordinamos la entrega.',
  },
  {
    q: '¿Se puede visitar el taller?',
    a: 'Sí, con cita previa. De hecho, animamos a los clientes a visitar el taller para ver de cerca el proceso y los materiales. Verlo en persona cambia completamente la percepción de lo que significa una escultura hecha a mano.',
  },
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
              ¿Tienes más dudas? Escríbenos por WhatsApp o rellena el formulario de contacto.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="https://wa.me/34645801208?text=Hola%20Toni%2C%20tengo%20una%20pregunta%20sobre%20tus%20esculturas." target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.75rem 1.5rem', background: '#25D366', color: 'white',
              fontFamily: 'var(--f-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              textDecoration: 'none', borderRadius: '2px', fontWeight: 600,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pregúntanos por WhatsApp
            </a>
          </Reveal>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div style={{ borderBottom: '1px solid #1a1a1a' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', gap: '1rem',
                    padding: '1.75rem 0', background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontFamily: 'var(--f-display)', fontSize: '1.2rem', fontWeight: 400, color: open === i ? 'var(--gold)' : 'var(--white)', transition: 'color 0.2s', lineHeight: 1.3 }}>
                    {faq.q}
                  </span>
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
                <div style={{
                  maxHeight: open === i ? '400px' : '0',
                  overflow: 'hidden', transition: 'max-height 0.4s ease',
                }}>
                  <p style={{ paddingBottom: '1.75rem', fontSize: '0.88rem', lineHeight: 1.85, color: '#888' }}>
                    {faq.a}
                  </p>
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
