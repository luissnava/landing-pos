'use client';

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface BenefitsProps {
  data: Benefit[];
}

export default function Benefits({ data }: BenefitsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-neutral-900 mb-16 tracking-tight">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((benefit) => (
            <div
              key={benefit.id}
              className="text-center p-6 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-400 transition-all duration-200"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
