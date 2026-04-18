'use client';
import './styles.css';

interface HeroProps {
  data: { title: string; subtitle: string; cta: string; whatsappNumber: string; };
}

export default function Hero({ data }: HeroProps) {
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
          El sistema POS que<br /><em>su restaurante merece</em>
        </h1>
        <p className="hero-p">{data.subtitle}</p>
        <div className="hero-btns">
          <a href="#precios" className="btn-secondary">Ver planes</a>
        </div>
      </div>
    </header>
  );
}
