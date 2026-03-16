'use client';
import { useEffect, useRef } from 'react';
import './styles.css';

const features = [
  { num: '01', title: 'Gestión de Mesas', desc: 'Mapa visual interactivo de su restaurante. Asigne órdenes, transfiera comensales y monitoree la ocupación en tiempo real.', icon: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></> },
  { num: '02', title: 'Comandas Digitales', desc: 'Las órdenes se envían directo a cocina al instante.', icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/> },
  { num: '03', title: 'Menú Digital', desc: 'Actualice platillos, precios y disponibilidad al instante desde cualquier dispositivo.', icon: <path d="M4 6h16M4 12h16M4 18h12"/> },
  { num: '04', title: 'Vista de Cocina', desc: 'Pantalla dedicada para cocina con las órdenes en tiempo real. Sin papeles, sin confusiones.', icon: <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/> },
  { num: '05', title: 'Reportes de Ventas', desc: 'Dashboard con ventas, ticket promedio, rendimiento por platillo y comparativas semanales.', icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/> },
  { num: '06', title: 'Tickets y Reportes', desc: 'Genera tickets de venta al instante y consulta reportes diarios para controlar tu negocio.', icon: <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/> },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.rv,.rl,.rr').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="feat-s" id="funciones" ref={ref}>
      <div className="wrap" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="feat-head">
          <div className="rl">
            <p className="tag">Plataforma completa</p>
            <h2 className="h2">Todo lo que necesita<br/>para <em>operar mejor</em></h2>
          </div>
          <div className="rr">
            <p className="sub">Un ecosistema de herramientas diseñado específicamente para la operación diaria de restaurantes.</p>
          </div>
        </div>
        <div className="feat-grid">
          {features.map((f, i) => (
            <div key={f.num} className={`fc rv d${(i % 4) + 1}`}>
              <div className="fc-num">{f.num}</div>
              <div className="fc-icon"><svg viewBox="0 0 24 24">{f.icon}</svg></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
