'use client';
import { useEffect, useRef } from 'react';
import './styles.css';

const testimonials = [
  { initial: 'M', name: 'Marco Ríos', role: 'Director · La Taquería MX, CDMX', text: '"Antes tardábamos 20 minutos en cuadrar caja. Con MiComanda son tres minutos y sin errores."' },
  { initial: 'S', name: 'Sofía Herrera', role: 'Directora de Ops · Grupo Sabor & Co', text: '"Manejamos seis sucursales desde un solo dashboard. El control de inventario nos redujo 15% en mermas."' },
  { initial: 'J', name: 'Jorge Castillo', role: 'Chef & Propietario · Nido Bistró', text: '"La integración con Uber Eats y Rappi cambió todo. Dejamos de usar tres tabletas por separado."' },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.rv').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testi-s" ref={ref}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p className="tag rv">Casos de éxito</p>
        <h2 className="h2 rv">Lo que dicen<br/><em>nuestros clientes</em></h2>
        <div className="tg">
          {testimonials.map((t, i) => (
            <div key={i} className={`tc rv d${i + 1}`}>
              <div className="tc-top">
                <div className="tc-av">{t.initial}</div>
                <div><div className="tc-name">{t.name}</div><div className="tc-role">{t.role}</div></div>
              </div>
              <div className="tc-stars">{[...Array(5)].map((_, si) => <div key={si} className="ts" />)}</div>
              <p className="tc-text">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
