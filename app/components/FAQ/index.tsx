'use client';
import { useState, useEffect, useRef } from 'react';
import './styles.css';

const faqs = [
  { q: '¿Necesito hardware especial para usar ORION?', a: 'No. ORION funciona en cualquier tablet Android o iPad, smartphone o computadora con navegador.' },
  { q: '¿Qué ocurre si no hay conexión a internet?', a: 'ORION opera en modo offline. Las ventas se guardan localmente y se sincronizan automáticamente.' },
  { q: '¿Puedo cambiar de plan en cualquier momento?', a: 'Sí. Puede hacer upgrade o downgrade desde su panel de administración en cualquier momento.' },
  { q: '¿El sistema cumple con los requisitos del SAT?', a: 'Sí. Incluimos timbrado CFDI 4.0, cancelaciones, notas de crédito y generación automática de XML.' },
  { q: '¿Tienen soporte en México?', a: 'Nuestro equipo de soporte está en México. Atención por chat, teléfono y correo de lunes a domingo.' },
];

export default function FAQ({ whatsappNumber }: { whatsappNumber: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.rv,.rr').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, me interesa conocer más sobre el sistema POS')}`;

  return (
    <section className="faq-s" id="faq" ref={ref}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p className="tag rv">Preguntas frecuentes</p>
        <h2 className="h2 rv">Respuestas<br/><em>a sus dudas</em></h2>
        <div className="faq-layout">
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`fi rv ${open === i ? 'open' : ''}`}>
                <button className="fi-q" onClick={() => setOpen(open === i ? null : i)}>
                  {faq.q}
                  <div className="fi-ico"><svg viewBox="0 0 10 10"><path d="M2 2l3 3-3 3M5 5h4"/></svg></div>
                </button>
                <div className="fi-a">{faq.a}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="faq-aside rr">
              <p className="tag" style={{ marginBottom: 16 }}>¿Más preguntas?</p>
              <h3>Hable con un<br/>especialista</h3>
              <p>Agende una demostración de 30 minutos con nuestro equipo.</p>
              <a href={waLink} target="_blank" className="faq-btn">Contactar por WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
