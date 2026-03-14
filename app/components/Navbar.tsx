'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-semibold text-xl text-neutral-900">
            OrderFlow
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
              Inicio
            </Link>
            <Link href="#planes" className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
              Planes
            </Link>
            <Link href="#contacto" className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
              Contacto
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#inicio" className="block px-3 py-2 text-neutral-600 hover:bg-neutral-50 rounded-md transition-colors duration-200">
              Inicio
            </Link>
            <Link href="#planes" className="block px-3 py-2 text-neutral-600 hover:bg-neutral-50 rounded-md transition-colors duration-200">
              Planes
            </Link>
            <Link href="#contacto" className="block px-3 py-2 text-neutral-600 hover:bg-neutral-50 rounded-md transition-colors duration-200">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
