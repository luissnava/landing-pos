'use client';
import { useEffect, useRef } from 'react';
import './styles.css';

const features = [
  { num: '01', title: 'Gestión de Mesas', desc: 'Mapa visual interactivo de su restaurante. Asigne órdenes, transfiera comensales y monitoree la ocupación en tiempo real.', icon: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></> },
  { num: '02', title: 'Comandas Digitales', desc: 'Las órdenes se envían directo a cocina al instante. Pantalla KDS incluida. Cero errores de captura.', icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/> },
  { num: '03', title: 'Control de Inventario', desc: 'Alertas de stock mínimo, costeo de recetas y control de mermas. Sincronización automática con cada venta.', icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/> },
  { num: '04', title: 'Delivery Integrado', desc: 'Reciba pedidos de Rappi, Uber Eats y DiDi Food en un solo lugar. Gestión centralizada.', icon: <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/> },
  { num: '05', title: 'Reportes Ejecutivos', desc: 'Dashboard con ventas, ticket promedio, rendimiento por platillo y comparativas semanales.', icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/> },
  { num: '06', title: 'Pagos y Facturación SAT', desc: 'Efectivo, tarjeta, QR y transferencias. Timbrado CFDI 4.0 automático. 100% cumplimiento fiscal.', icon: <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/> },
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
