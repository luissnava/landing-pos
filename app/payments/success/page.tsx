'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { notifyPaymentSuccess } from '@/app/actions/useFetch';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      notifyPaymentSuccess(sessionId);
    }
  }, [sessionId]);

  return (
    // <div className="min-h-screen flex items-center justify-center bg-neutral-50">
    //   <div className="bg-white p-12 rounded-2xl border border-neutral-200 max-w-md w-full">
    //     <div className="mb-8 flex justify-center">
    //       <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
    //         <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    //         </svg>
    //       </div>
    //     </div>
    //     <h1 className="text-2xl font-semibold text-neutral-900 mb-3 text-center">Pago exitoso</h1>
    //     <p className="text-neutral-600 text-center mb-8 text-sm leading-relaxed">
    //       Tu pago ha sido procesado correctamente. Revisa tu correo para más detalles.
    //     </p>
    //     
    //     <Link
    //       href="/"
    //       className="block w-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium py-3 px-6 rounded-lg transition-all text-center"
    //     >
    //       Volver al inicio
    //     </Link>
    //   </div>
    // </div>

    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">TuEmpresa</h1>
            
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Success Icon y Título */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Pago Exitoso
          </h1>
          <p className="text-lg text-gray-600">
            Tu pago ha sido procesado correctamente
          </p>
        </div>

        {/* Información Adicional */}
        <div className="bg-gray-50 px-8 py-6 mb-12">
          <h3 className="font-semibold text-gray-900 mb-3">Información Importante</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Recibirás un correo electrónico con mas información</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Tu suscripción estará activa inmediatamente.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Si tienes alguna pregunta, contacta a nuestro equipo de soporte.</span>
            </li>
          </ul>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="block bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium py-3 px-6 rounded-lg transition-all text-center"
          >
            Volver al inicio
          </Link>
        </div>
      </main >

      {/* Footer */}
      < footer className="border-t border-gray-200 mt-20" >
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2026 TuEmpresa. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-900">Soporte</a>
              <a href="#" className="hover:text-gray-900">Términos</a>
              <a href="#" className="hover:text-gray-900">Privacidad</a>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
      <SuccessContent />
    </Suspense>
  );
}