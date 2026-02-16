'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

function CancelledContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="bg-white p-12 rounded-2xl border border-neutral-200 max-w-md w-full">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-neutral-900 mb-3 text-center">Pago cancelado</h1>
        <p className="text-neutral-600 text-center mb-8 text-sm leading-relaxed">
          El proceso de pago fue cancelado. No se realizó ningún cargo.
        </p>
        {sessionId && (
          <p className="text-xs text-neutral-400 mb-8 text-center font-mono">
            {sessionId}
          </p>
        )}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => window.history.back()}
            className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium py-3 px-6 rounded-lg transition-all"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="block w-full bg-white hover:bg-neutral-50 text-neutral-900 text-sm font-medium py-3 px-6 rounded-lg border border-neutral-200 transition-all text-center"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CancelledPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
      <CancelledContent />
    </Suspense>
  );
}
