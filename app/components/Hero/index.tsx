'use client';
import './styles.css';

interface HeroProps {
  data: { title: string; subtitle: string; cta: string; whatsappNumber: string; };
}

export default function Hero({ data }: HeroProps) {
  const waLink = `https://wa.me/${data.whatsappNumber}?text=${encodeURIComponent('Hola, me interesa conocer más sobre el sistema POS para restaurantes')}`;
  return (
    <header className="hero" role="banner">
      <div className="hero-bg" />
      <div className="hero-vignette" />
      <div className="hero-line-h" />
      <div className="hero-line-v" />
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          Sistema POS · Gestión Total
          <span className="hero-eyebrow-line" />
        </div>
        <h1 className="hero-h1">
          El punto de venta que<br /><em>su restaurante merece</em>
        </h1>
        <p className="hero-p">{data.subtitle}</p>
        <div className="hero-btns">
          <a href={waLink} target="_blank" className="btn-primary">Contactar por WhatsApp</a>
          <a href="#precios" className="btn-secondary">Ver planes</a>
        </div>
        <div className="hero-metrics">
          {/* {[['4,200','+','Restaurantes activos'],['98','%','Satisfacción de clientes'],['60','min','Tiempo de configuración']].map(([v,s,l])=>(
            <div key={l}>
              <div className="metric-val">{v}<sup>{s}</sup></div>
              <div className="metric-label">{l}</div>
            </div>
          ))} */}
        </div>
      </div>
      <div className="hero-scroll">
        {/* <div className="scroll-box"><div className="scroll-pill" /></div> */}
        <span className="scroll-hint">Descubrir</span>
      </div>
    </header>
  );
}
