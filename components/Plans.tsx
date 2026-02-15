'use client';

import { useState } from 'react';
import PlansModal from './Modal';

interface Plan {
  id: string;
  name: string;
  badge: string;
  price: string | null;
  priceMXN: string | null;
  period: string;
  annualPrice?: string;
  annualPriceMXN?: string;
  annualDiscount?: string;
  description: string;
  features: string[];
  notIncluded: string[];
  popular: boolean;
  isTrial?: boolean;
}

interface PlansProps {
  data: Plan[];
  whatsappNumber: string;
}

export default function Plans({ data, whatsappNumber }: PlansProps) {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // const handleWhatsApp = (planName: string) => {
  //   const message = `Hola, me interesa el ${planName}`;
  //   window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  // };

  return (
    <>
      <section id="planes" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-neutral-900 mb-4 tracking-tight">
            Planes de Suscripción
          </h2>
          <p className="text-center text-neutral-600 mb-16 text-lg">
            Elige el plan perfecto para tu restaurante
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {data.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-lg border transition-all duration-200 p-6 ${plan.popular ? 'border-neutral-900 shadow-lg' : 'border-neutral-200 hover:border-neutral-400'
                  } ${plan.isTrial ? 'from-neutral-50 to-white' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Más Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="text-3xl mb-2">{plan.badge}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{plan.description}</p>
                  {plan.price ? (
                    <>
                      <div className="mb-2">
                        <div className="text-3xl font-bold text-neutral-900">{plan.price}</div>
                        <div className="text-sm text-neutral-500">{plan.priceMXN}</div>
                        <div className="text-xs text-neutral-400">{plan.period}</div>
                      </div>
                      {plan.annualPrice && (
                        <div className="mt-3 pt-3 border-t border-neutral-200">
                          <div className="text-sm font-semibold text-neutral-700">Pago anual:</div>
                          <div className="text-lg font-bold text-neutral-900">{plan.annualPrice}</div>
                          <div className="text-xs text-neutral-500">{plan.annualPriceMXN}</div>
                          <div className="mt-1 inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                            {plan.annualDiscount}
                          </div>
                        </div>
                      )}
                    </>
                  ) : plan.isTrial ? (
                    <div className="text-2xl font-bold text-neutral-900 mb-2">7 días gratis</div>
                  ) : (
                    <div className="text-xl font-semibold text-neutral-900 mb-2">Precio personalizado</div>
                  )}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-neutral-900 mr-2 mt-0.5">✓</span>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-neutral-300 mr-2 mt-0.5">✗</span>
                      <span className="text-neutral-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-2.5 rounded-lg transition-all duration-200 text-sm"
                >
                  {plan.isTrial ? 'Comenzar prueba' : plan.price ? 'Contratar Plan' : 'Contactar'}
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
        selectedPlan={selectedPlan ? { 
          id: selectedPlan.id, 
          name: selectedPlan.name, 
          isTrial: selectedPlan.isTrial,
          priceMXN: selectedPlan.priceMXN,
          annualPriceMXN: selectedPlan.annualPriceMXN
        } : null}
      />
    </>
  );
}
