'use client';
// import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import '../styles.css';

function SuccessContent() {
  // const searchParams = useSearchParams();
  // const sessionId = searchParams.get('session_id');

  return (
    <div className="payment-page">
      <header className="payment-header">
        <div className="payment-header-inner">
          <Link href="/" className="payment-logo">
            <div className="payment-logo-mark">MC</div>
            MiComanda
          </Link>
        </div>
      </header>

      <main className="payment-main">
        <div className="payment-icon-wrap">
          <div className="payment-icon success">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="payment-title">Pago Exitoso</h1>
          <p className="payment-subtitle">Tu pago ha sido procesado correctamente</p>
        </div>

        <div className="payment-info">
          <h3>Información Importante</h3>
          <ul>
            <li>Recibirás un correo electrónico con más información</li>
            <li>Tu suscripción estará activa inmediatamente</li>
            <li>Si tienes alguna pregunta, contacta a nuestro equipo de soporte</li>
          </ul>
        </div>

        <div className="payment-actions">
          <Link href="/" className="payment-btn payment-btn-primary">Volver al inicio</Link>
        </div>
      </main>

      <footer className="payment-footer">
        <div className="payment-footer-inner">
          <p>© {new Date().getFullYear()} MiComanda. Todos los derechos reservados.</p>
          <div className="payment-footer-links">
            <Link href="/legal?tab=terminos">Términos</Link>
            <Link href="/legal?tab=aviso">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="payment-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cargando...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
