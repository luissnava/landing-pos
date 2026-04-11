'use client';
import { useState, useEffect, useRef } from 'react';
import './styles.css';

const faqs = [
  { q: '¿Necesito hardware especial para usar MiComanda?', a: 'No. MiComanda funciona en cualquier tablet Android o iPad, smartphone o computadora con navegador.' },
  { q: '¿Cuánto tiempo toma implementar MiComanda en mi restaurante?', a: 'La configuración inicial toma menos de 60 minutos.' },
  { q: '¿MiComanda incluye reportes?', a: 'Sí. Puede consultar reportes de ventas, de cualquier rango de fechas' },
  { q: '¿Tienen soporte en México?', a: 'Nuestro equipo de soporte está en México. Atención por chat, de Lunes a Viernes de 9:00 am a 6:00 pm' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.rv,.rr').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="faq-s" id="faq" ref={ref} aria-labelledby="faq-heading">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p className="tag rv">Preguntas frecuentes</p>
        <h2 className="h2 rv" id="faq-heading">Respuestas<br/><em>a sus dudas</em></h2>
        <div className="faq-layout">
          <div className="faq-list rv">
            {faqs.map((faq, i) => (
              <div key={i} className={`fi ${open === i ? 'open' : ''}`}>
                <button className="fi-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                  {faq.q}
                  <div className="fi-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></div>
                </button>
                <div className="fi-a">{faq.a}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="faq-aside rr">
              <p className="tag" style={{ marginBottom: 16 }}>Sin compromiso</p>
              <h3>Pruebe MiComanda<br/>gratis</h3>
              <p>Descubra cómo simplificar la operación de su restaurante.</p>
              <a href="/#precios" className="faq-btn">Ver planes</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
