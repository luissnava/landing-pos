import Link from 'next/link';
import './styles.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <div className="footer-logo-mark">MC</div>
              MiComanda
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
              <li><Link href="/legal?tab=aviso">Aviso de Privacidad</Link></li>
              <li><Link href="/legal?tab=terminos">Términos de Uso</Link></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2025 <span className="footer-gradient">MiComanda</span> — Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
}
