declare namespace NodeJS {
  interface ProcessEnv {
    BACKEND_URL: string;
    PLAN_TRIAL: string;
    PLAN_INICIAL_MENSUAL: string;
    PLAN_INICIAL_ANUAL: string;
    PLAN_BASICO_MENSUAL: string;
    PLAN_BASICO_ANUAL: string;
    WEBHOOK_URL: string
  }
}
