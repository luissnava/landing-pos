'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitData } from '@/app/actions/useFetch';

interface PlansModalProps {
    isOpen: boolean;
    onClose: () => void;
    whatsappNumber: string;
    selectedPlan?: {
        id: string;
        name: string;
        isTrial?: boolean;
        priceMXN?: string | null;
        annualPriceMXN?: string | null;
    } | null;
}

export default function PlansModal({ isOpen, onClose, selectedPlan }: PlansModalProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessName: '',
        phone_number: '',
        rfc: '',
        period: 'monthly' as 'monthly' | 'annual'
    });

    const isTrial = selectedPlan?.isTrial || false;

    // Extraer precios del plan seleccionado
    const extractPrice = (priceStr: string | null | undefined): number => {
        if (!priceStr) return 0;
        const match = priceStr.match(/[\d,]+/);
        return match ? parseInt(match[0].replace(/,/g, '')) : 0;
    };

    const monthlyCost = extractPrice(selectedPlan?.priceMXN);
    const annualCost = extractPrice(selectedPlan?.annualPriceMXN);
    const displayCost = formData.period === 'annual' ? annualCost : monthlyCost;

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const submitFormData = {
            ...formData,
            planId: selectedPlan?.id || '',
            plan: selectedPlan?.name || ''
        };
        
        const result = await submitData(submitFormData);

        if (result.success && result.data?.data?.checkout_url) {
            router.push(result.data.data.checkout_url);
        } else if (result.success) {
            onClose();
            setFormData({ name: '', email: '', businessName: '', phone_number: '', rfc: '', period: 'monthly' });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
            <div 
                className="relative bg-white rounded-lg w-full max-w-md m-4 shadow-xl"
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-8">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        {isTrial ? 'Comienza tu prueba gratis' : 'Contratar Plan'}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-6">
                        {isTrial ? '7 días sin compromiso. Sin tarjeta de crédito.' : 'Completa el formulario para contratar tu plan.'}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                                Nombre completo <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                                placeholder="Juan Pérez"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                                Correo electrónico <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                                placeholder="juan@ejemplo.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                                Nombre del restaurante <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                                placeholder="Restaurante El Buen Sabor"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                                Teléfono <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-neutral-900"
                                placeholder="+52 123 456 7890"
                            />
                        </div>

                        {!isTrial && (
                            <>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                                        Período de pago <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="period"
                                        value={formData.period}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-neutral-900"
                                    >
                                        <option value="monthly">Mensual - {selectedPlan?.priceMXN || 'N/A'}</option>
                                        <option value="annual">Anual - {selectedPlan?.annualPriceMXN || 'N/A'}</option>
                                    </select>
                                    <p className="text-sm text-neutral-600 mt-2">
                                        Total: <span className="font-semibold">${displayCost.toLocaleString('es-MX')} MXN</span>
                                    </p>
                                </div>
                            </>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-3 rounded-lg transition-colors duration-200"
                        >
                            {isTrial ? 'Comenzar prueba gratis' : 'Contratar'}
                        </button>

                        <p className="text-xs text-neutral-500 text-center">
                            Al registrarte, aceptas nuestros términos de servicio y política de privacidad.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
