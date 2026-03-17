'use client';
import { useEffect, useRef } from 'react';
import './styles.css';

const benefits = [
  { icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>, title: 'Fácil de Usar', desc: 'Interfaz intuitiva que tu equipo aprenderá en minutos. No requiere capacitación extensa.' },
  { icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>, title: 'Soporte en Español', desc: 'Equipo de soporte disponible en tu idioma para resolver cualquier duda o problema.' },
  { icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>, title: 'Actualizaciones Constantes', desc: 'Mejoras continuas y nuevas funcionalidades incluidas en tu plan, sin costo adicional.' },
  { icon: <><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></>, title: 'Funciona en Cualquier Dispositivo', desc: 'Funciona en cualquier tablet Android o iPad, smartphone o computadora con navegador.' },
];

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.rv,.rl,.rr').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="benefits-s" ref={ref} aria-labelledby="benefits-heading">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="benefits-head">
          <div className="rl">
            <p className="tag">¿Por qué elegirnos?</p>
            <h2 className="h2" id="benefits-heading">Ventajas que hacen<br/>la <em>diferencia</em></h2>
          </div>
          <div className="rr">
            <p className="sub">Más que un sistema POS. Una plataforma pensada para el restaurantero mexicano.</p>
          </div>
        </div>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <article key={i} className={`bc rv d${i + 1}`}>
              <div className="bc-icon" aria-hidden="true"><svg viewBox="0 0 24 24">{b.icon}</svg></div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
