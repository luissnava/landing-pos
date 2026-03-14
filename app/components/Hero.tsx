'use client';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    cta: string;
    whatsappNumber: string;
  };
}

export default function Hero({ data }: HeroProps) {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${data.whatsappNumber}`, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 tracking-tight leading-tight">
              {data.title}
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 mb-10 leading-relaxed">
              {data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#planes" className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-8 py-4 rounded-md text-lg transition-all duration-200 inline-flex items-center justify-center">
                Ver planes
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              {/* <button
                onClick={handleWhatsApp}
                className="bg-white hover:bg-neutral-50 text-neutral-900 font-medium px-8 py-4 rounded-md text-lg transition-all duration-200 border border-neutral-300 hover:border-neutral-900"
              >
                Hablar con ventas
              </button> */}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-neutral-700 font-semibold">Dashboard del Sistema POS</p>
                <p className="text-sm text-neutral-500 mt-2">Interfaz intuitiva y moderna</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
