'use server';

export async function submitData(formData: {
  planId: string;
  plan: string;
  name: string;
  email: string;
  businessName: string;
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
    ...(formData.businessName && { legal_name: formData.businessName })
  };

  console.log("payload", payload);



  try {
    const response = await fetch(process.env.BACKEND_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });


    const data = await response.json();

    if (!response.ok) {
      return { success: false, message: data?.error?.message || data?.message || 'Error al enviar la solicitud' };
    }

    return { success: true, data };
  } catch (error) {
    console.log(error);
    
    return { success: false, message: 'Error de conexión. Intente de nuevo.' };
  }
}

// export async function notifyPaymentSuccess(sessionId: string) {
//   try {
//     const response = await fetch(process.env.WEBHOOK_URL!, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         type: 'checkout.session.completed',
//         data: { object: { id: sessionId } }
//       })
//     });

//     if (!response.ok) console.log(response);

//     const data = await response.json()

//     console.log(data);

//     return { success: true };
//   } catch (error) {
//     return { success: false, error };
//   }
// }
