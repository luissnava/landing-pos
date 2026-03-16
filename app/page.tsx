import { Navbar, Hero, Strip, Features, Plans, Testimonials, Contact, Benefits, FAQ, WhatsAppButton } from '@/app/components';
import landingData from '@/app/data/landing-data.json';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero data={landingData.hero} />
      <Strip />
      <Features />
      <Plans data={landingData.plans} whatsappNumber={landingData.hero.whatsappNumber} />
      <Testimonials />
      <Contact data={landingData.contact} />
      <Benefits />
      <FAQ whatsappNumber={landingData.hero.whatsappNumber} />
      <WhatsAppButton phoneNumber={landingData.hero.whatsappNumber} />
      <footer style={{ background: '#1A1210', borderTop: '1px solid rgba(255,255,255,.07)', padding: '36px 72px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: '.7rem', color: '#9A938C' }}>
          <span>© 2025 <span style={{ background: 'linear-gradient(to right,#F97316,#EF4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ORION POS</span> — Todos los derechos reservados</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ color: '#9A938C', textDecoration: 'none' }}>Aviso de Privacidad</a>
            <a href="#" style={{ color: '#9A938C', textDecoration: 'none' }}>Términos de Uso</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
