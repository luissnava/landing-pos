import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assets/images/logo.svg';
import './styles.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Image src={logo} alt="MiComanda" width={72} />
              MiComandaPOS
            </Link>
            <p className="footer-desc">Sistema POS para restaurantes. Gestione mesas, comandas y ventas desde un solo lugar.</p>
          </div>

          <nav className="footer-col" aria-label="Navegación">
            <h4>Navegación</h4>
            <ul>
              <li><Link href="/#funciones">Funciones</Link></li>
              <li><Link href="/#como">Cómo funciona</Link></li>
              <li><Link href="/#precios">Precios</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Producto">
            <h4>Producto</h4>
            <ul>
              <li><Link href="/#precios">Prueba gratuita</Link></li>
              <li><Link href="/#funciones">Gestión de Mesas</Link></li>
              <li><Link href="/#funciones">Comandas Digitales</Link></li>
              <li><Link href="/#funciones">Reportes de Ventas</Link></li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Legal">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/legal?tab=terminos">Términos y Condiciones</Link></li>
              <li><Link href="/legal?tab=privacidad">Política de Privacidad</Link></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2026 <span className="footer-gradient">MiComandaPOS</span> — Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
}
