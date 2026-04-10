'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { submitData } from '@/app/actions/useFetch';
import './styles.css';

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
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' } | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessName: '',
        rfc: '',
        period: 'monthly' as 'monthly' | 'annual'
    });

    const resetAndClose = useCallback(() => {
        setAcceptedTerms(false);
        setFormData({ name: '', email: '', businessName: '', rfc: '', period: 'monthly' });
        setMessage(null);
        setLoading(false);
        onClose();
    }, [onClose]);

    const isTrial = selectedPlan?.isTrial || false;

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
        setLoading(true);
        setMessage(null);
        const submitFormData = {
            ...formData,
            planId: selectedPlan?.id || '',
            plan: selectedPlan?.name || ''
        };
        const result = await submitData(submitFormData);
        setLoading(false);
        if (result.success && result.data?.data?.checkout_url) {
            router.push(result.data.data.checkout_url);
        } else if (result.success) {
            setMessage({ text: result.data?.message || 'Registro exitoso', type: 'success' });
        } else {
            setMessage({ text: result.message || 'Ocurrió un error', type: 'error' });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button type="button" onClick={resetAndClose} className="modal-close">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="modal-body">
                    <h3 className="modal-title">
                        {isTrial ? 'Comienza tu prueba gratis' : 'Contratar Plan'}
                    </h3>
                    <p className="modal-subtitle">
                        {isTrial ? '5 días sin compromiso. Sin tarjeta de crédito.' : 'Completa el formulario para contratar tu plan.'}
                    </p>
                    <form onSubmit={handleSubmit} className="modal-form">
                        <div className="modal-field">
                            <label>Nombre completo <span>*</span></label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="modal-input" />
                        </div>
                        <div className="modal-field">
                            <label>Correo electrónico <span>*</span></label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="modal-input" />
                        </div>
                        <div className="modal-field">
                            <label>Nombre del restaurante <span>*</span></label>
                            <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required className="modal-input" />
                        </div>
                        {!isTrial && (
                            <div className="modal-field">
                                <label>Período de pago <span>*</span></label>
                                <select name="period" value={formData.period} onChange={handleChange} className="modal-input">
                                    <option value="monthly">Mensual - {selectedPlan?.priceMXN || 'N/A'}</option>
                                    <option value="annual">Anual - {selectedPlan?.annualPriceMXN || 'N/A'}</option>
                                </select>
                                <p className="modal-total">Total: <span>${displayCost.toLocaleString('es-MX')} MXN</span></p>
                            </div>
                        )}
                        <label className="modal-terms">
                            <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
                            <span>Acepto los <a href="/legal?tab=terminos" target="_blank" rel="noreferrer">Términos y Condiciones</a> y el <a href="/legal?tab=aviso" target="_blank" rel="noreferrer">Aviso de Privacidad</a></span>
                        </label>
                        {message && (
                            <p className={`modal-message ${message.type}`}>{message.text}</p>
                        )}
                        <button type="submit" className="modal-submit" disabled={!acceptedTerms || loading}>
                            {loading ? 'Procesando...' : isTrial ? 'Comenzar prueba gratis' : 'Contratar'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
