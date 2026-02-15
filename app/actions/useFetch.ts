'use server';

export async function submitData(formData: {
  planId: string;
  plan: string;
  name: string;
  email: string;
  businessName: string;
  phone_number: string;
  rfc?: string;
  period: 'monthly' | 'annual';
}) {

  const planMapping: Record<string, { monthly: string; annual: string }> = {
    inicial: {
      monthly: process.env.PLAN_INICIAL_MENSUAL,
      annual: process.env.PLAN_INICIAL_ANUAL
    },
    basico: {
      monthly: process.env.PLAN_BASICO_MENSUAL,
      annual: process.env.PLAN_BASICO_ANUAL
    }
  };

  const selectedPlan = planMapping[formData.planId];
  const plan_ulid = selectedPlan 
    ? selectedPlan[formData.period] 
    : process.env.PLAN_TRIAL;

  const payload = {
    plan_ulid,
    name: formData.name,
    email: formData.email,
    phone_number: formData.phone_number,
    ...(formData.businessName && { legal_name: formData.businessName })
  };


  try {    
    const response = await fetch(process.env.BACKEND_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Error al enviar la solicitud');
    }

    console.log("Respuesta Backend ", response);


    return { success: true, data: await response.json() };
  } catch (error) {

    return { success: false, error: error };
  }
}
