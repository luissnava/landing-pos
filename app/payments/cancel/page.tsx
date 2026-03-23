'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import '../styles.css';

function CancelledContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

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
          <div className="payment-icon error">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="payment-title">Pago cancelado</h1>
          <p className="payment-subtitle">El proceso de pago fue cancelado. No se realizó ningún cargo.</p>
        </div>

        {sessionId && <p className="payment-session">{sessionId}</p>}

        <div className="payment-actions">
          <button onClick={() => window.history.back()} className="payment-btn payment-btn-primary">
            Intentar de nuevo
          </button>
          <Link href="/" className="payment-btn payment-btn-secondary">Volver al inicio</Link>
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

export default function CancelledPage() {
  return (
    <Suspense fallback={<div className="payment-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cargando...</div>}>
      <CancelledContent />
    </Suspense>
  );
}
