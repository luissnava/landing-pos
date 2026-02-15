'use client';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface FeaturesProps {
  data: Feature[];
}

export default function Features({ data }: FeaturesProps) {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            Todo lo que necesitas
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Funcionalidades diseñadas para optimizar tu restaurante
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((feature) => (
            <div
              key={feature.id}
              className="p-8 bg-white rounded-lg border border-neutral-200 hover:border-neutral-400 transition-all duration-200"
            >
              <div className="flex gap-6 mb-4">
                <div className="flex-shrink-0 w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
