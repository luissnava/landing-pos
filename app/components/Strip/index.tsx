'use client';
import './styles.css';

const items = ['Rappi','Uber Eats','DiDi Food','Mercado Pago','Clip','SAT · CFDI 4.0','WhatsApp Business','Google Analytics'];

export default function Strip() {
  return (
    <div className="strip">
      <span className="strip-label">Integrado con</span>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="mitem">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
