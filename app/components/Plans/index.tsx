'use client';
import { useState, useEffect, useRef } from 'react';
import PlansModal from '../Modal';
import './styles.css';

interface Plan {
  id: string; name: string; badge: string; price: string | null; priceMXN: string | null;
  period: string; annualPrice?: string; annualPriceMXN?: string; annualDiscount?: string;
  description: string; features: string[]; notIncluded: string[]; popular: boolean; isTrial?: boolean;
}

export default function Plans({ data, whatsappNumber }: { data: Plan[]; whatsappNumber: string }) {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [annual, setAnnual] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.rv').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="pricing-s" id="precios" ref={ref}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="pricing-head">
            <p className="tag rv" style={{ justifyContent: 'center' }}>Membresías y precios</p>
            <h2 className="h2 rv" style={{ marginTop: 8 }}>Elige la membresía <em>ideal</em><br/>para tu negocio</h2>
            <p className="sub rv" style={{ margin: '16px auto 0', textAlign: 'center' }}>Sin comisiones ocultas. Sin permanencia forzada. Cancela cuando quieras.</p>
            <div className="billing-tog rv">
              <span className={`bt-label ${!annual ? 'on' : ''}`}>Facturación mensual</span>
              <div className={`bt-sw ${annual ? 'on' : ''}`} onClick={() => setAnnual(!annual)}><div className="bt-k" /></div>
              <span className={`bt-label ${annual ? 'on' : ''}`}>Anual</span>
              <span className="save-pill">Ahorre 15%</span>
            </div>
          </div>
          <div className="pg">
            {data.map((plan, i) => (
              <div key={plan.id} className={`pc rv d${i + 1} ${plan.popular ? 'feat' : ''}`}>
                {plan.popular && <div className="best-tag">Más popular</div>}
                <div className="pc-name">{plan.badge} {plan.name}</div>
                <div className="pc-price">
                  {plan.isTrial ? (
                    <span className="pp-amt-free">Gratis</span>
                  ) : plan.price ? (
                    <>
                      <span className="pp-sym">$</span>
                      <span className="pp-amt">{annual && plan.annualPrice ? plan.annualPrice.replace('/año','') : plan.price.replace(' USD','')}</span>
                      <span className="pp-per">{annual ? '/año · ' + (plan.annualPriceMXN || '') : plan.period + ' · ' + (plan.priceMXN || '')}</span>
                    </>
                  ) : (
                    <span className="pp-amt">Personalizado</span>
                  )}
                </div>
                <p className="pc-desc">{plan.description}</p>
                <ul className="pf">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="y">
                      <div className="pf-ck"><svg viewBox="0 0 10 10"><path d="M1.5 5l2.5 2.5 4.5-4.5"/></svg></div>
                      {f}
                    </li>
                  ))}
                  {plan.notIncluded.map((f, fi) => (
                    <li key={fi} className="n">
                      <div className="pf-ck"><svg viewBox="0 0 10 10"><path d="M2 2l6 6M8 2l-6 6"/></svg></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setSelectedPlan(plan)} className={`btn-p ${plan.popular ? 'btn-p-g' : 'btn-p-o'}`}>
                  {plan.isTrial ? 'Comenzar prueba gratis' : 'Contratar ahora'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PlansModal
        isOpen={selectedPlan !== null}
        onClose={() => setSelectedPlan(null)}
        whatsappNumber={whatsappNumber}
        selectedPlan={selectedPlan ? { id: selectedPlan.id, name: selectedPlan.name, isTrial: selectedPlan.isTrial, priceMXN: selectedPlan.priceMXN, annualPriceMXN: selectedPlan.annualPriceMXN } : null}
      />
    </>
  );
}
