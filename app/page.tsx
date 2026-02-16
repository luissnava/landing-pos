import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Plans from '@/components/Plans';
import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';
import landingData from '@/data/landing-data.json';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero data={landingData.hero} />
      <Features data={landingData.features} />
      <Plans data={landingData.plans} whatsappNumber={landingData.hero.whatsappNumber} />
      <Benefits data={landingData.benefits} />
      <Contact data={landingData.contact} />
      <WhatsAppButton phoneNumber={landingData.hero.whatsappNumber} />
      <footer className="bg-neutral-900 text-neutral-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 OrderFlow. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}