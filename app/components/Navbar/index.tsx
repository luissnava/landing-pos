'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import './styles.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link href="#" className="nav-logo">
        <div className="logo-mark">O</div>
        ORION
      </Link>
      <ul className="nav-links">
        <li><Link href="#funciones">Funciones</Link></li>
        <li><Link href="#como">Cómo funciona</Link></li>
        <li><Link href="#precios">Precios</Link></li>
        <li><Link href="#faq">FAQ</Link></li>
      </ul>
      <div className="nav-right">
        <Link href="#" className="btn-ng">Iniciar sesión</Link>
        <Link href="#precios" className="btn-nc">Prueba gratuita</Link>
      </div>
    </nav>
  );
}
