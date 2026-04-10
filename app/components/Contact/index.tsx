'use client';
import { useEffect, useRef } from 'react';
import './styles.css';

interface ContactProps {
  data: { title: string; subtitle: string; whatsappNumber: string; whatsappMessage: string; };
}

export default function Contact({ data }: ContactProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.rv').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const waLink = `https://wa.me/${data.whatsappNumber}?text=${encodeURIComponent(data.whatsappMessage)}`;

  return (
    <section className="pb" ref={ref} aria-labelledby="cta-heading">
      <div className="pb-bg" />
      <div className="pb-grad" />
      <div className="pb-content">
        <p className="cta-tag rv">Sin riesgo</p>
        <h2 className="cta-h rv" id="cta-heading">5 días gratuitos.<br/><em>Sin tarjeta de crédito.</em></h2>
        <p className="cta-sub rv">Configuración en menos de 60 minutos.</p>
        <div className="cta-btns rv">
          <a href="#precios" className="cta-btn-primary">Comenzar ahora</a>
          <a href={waLink} target="_blank" className="cta-btn-secondary">Contactar por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
