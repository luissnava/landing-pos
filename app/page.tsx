import { Navbar, Hero, Features, Plans, Contact, Benefits, FAQ, WhatsAppButton, Footer } from '@/app/components';
import landingData from '@/app/data/landing-data.json';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero data={landingData.hero} />
      <Features />
      <Plans data={landingData.plans} whatsappNumber={landingData.hero.whatsappNumber} />
      <Contact data={landingData.contact} />
      <Benefits />
      <FAQ whatsappNumber={landingData.hero.whatsappNumber} />
      <WhatsAppButton phoneNumber={landingData.hero.whatsappNumber} />
      <Footer />
    </main>
  );
}
