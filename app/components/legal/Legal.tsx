"use client";

import { useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from '@/app/assets/images/logo.svg';
import './styles.css';

// ─── Datos configurables ──────────────────────────────────────────────────────
const CONFIG = {
  nombre: "[RAZÓN SOCIAL]",
  domicilio: "[DOMICILIO FISCAL]",
  email: "contacto@gruponava.org",
  telefono: "[TELÉFONO]",
  sitio: "micomanda.gruponava.org",
  servicio: "MiComanda",
  fecha: "10 de abril de 2026",
};

// ─── Componentes base ─────────────────────────────────────────────────────────

function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return <h2 id={id} className="legal-section-title">{children}</h2>;
}

function Prose({ children }: { children: ReactNode }) {
  return <p className="legal-prose">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="legal-bullets">
      {items.map((item, i) => (
        <li key={i}>
          <span className="legal-bullet-mark">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="legal-numbered">
      {items.map((item, i) => (
        <li key={i}>
          <span className="legal-num-mark">{i + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function AlertBox({ children }: { children: ReactNode }) {
  return <p className="legal-alert">{children}</p>;
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="legal-info-row">
      <span className="legal-info-label">{label}</span>
      <span className="legal-info-value">{value}</span>
    </div>
  );
}

function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  return (
    <div className="legal-toc">
      <p className="legal-toc-title">Índice</p>
      <div className="legal-toc-grid">
        {items.map((item, i) => (
          <a key={i} href={`#${item.id}`} className="legal-toc-link">
            <span className="legal-toc-num">{String(i + 1).padStart(2, "0")}</span>
            <span>{item.label.replace(/^\d+\.\s/, "")}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function PageHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  return (
    <div className="legal-page-header">
      <p className="legal-page-badge">{badge}</p>
      <h1 className="legal-page-title">{title}</h1>
      <p className="legal-page-subtitle">{subtitle}</p>
    </div>
  );
}

function FooterNote({ children }: { children: ReactNode }) {
  return <div className="legal-footer-note">{children}</div>;
}

function Strong({ children }: { children: ReactNode }) {
  return <strong className="legal-strong">{children}</strong>;
}

function SubLabel({ children }: { children: ReactNode }) {
  return <p className="legal-sublabel">{children}</p>;
}

// ─── PÁGINA: Términos y Condiciones ──────────────────────────────────────────
function TerminosPage() {
  const toc = [
    { id: "objeto", label: "1. Objeto y definiciones" },
    { id: "ambito", label: "2. Ámbito de aplicación" },
    { id: "acceso", label: "3. Acceso y uso" },
    { id: "precios", label: "4. Precio y facturación" },
    { id: "devoluciones", label: "5. Política de no devoluciones" },
    { id: "disponibilidad", label: "6. Disponibilidad y soporte" },
    { id: "propiedad", label: "7. Propiedad intelectual" },
    { id: "responsabilidad", label: "8. Limitación de responsabilidad" },
    { id: "vigencia", label: "9. Vigencia y terminación" },
    { id: "modificaciones", label: "10. Modificaciones" },
    { id: "legislacion", label: "11. Legislación aplicable" },
  ];

  return (
    <>
      <PageHeader
        badge="Documento legal"
        title="Términos y Condiciones de Uso"
        subtitle={`Última actualización: ${CONFIG.fecha} · ${CONFIG.servicio} — ${CONFIG.nombre}`}
      />

      <AlertBox>
        Al acceder o usar el servicio, el usuario acepta los presentes términos en su totalidad.
        Conforme al Art. 1 de la LFPC (reforma DOF 12-12-2025), estas disposiciones son
        irrenunciables y de orden público e interés social.
      </AlertBox>

      <TableOfContents items={toc} />

      <SectionTitle id="objeto">1. Objeto y definiciones</SectionTitle>
      <Prose>
        Los presentes Términos regulan el acceso y uso de{" "}
        <Strong>{CONFIG.servicio}</Strong>, servicio de software digital desarrollado y
        operado por <Strong>{CONFIG.nombre}</Strong>,
        (en adelante, <Strong>{"el Proveedor"}</Strong>).
      </Prose>
      <BulletList
        items={[
          `Proveedor: ${CONFIG.nombre}`,
          "Usuario B2B: Persona física o moral que contrata el servicio para operar su propio negocio.",
          "Usuario B2C / Consumidor Final: Persona que interactúa con el servicio como destinatario final.",
          `Servicio: ${CONFIG.servicio}, plataforma de software digital accesible vía web y/o aplicación.`,
        ]}
      />

      <SectionTitle id="ambito">2. Ámbito de aplicación</SectionTitle>
      <Prose>
        Aplica a cualquier persona que contrate el servicio (B2B) y a los usuarios finales que
        lo utilicen como destinatarios (B2C). Conforme al{" "}
        <Strong>Art. 1 de la LFPC</Strong> (reforma DOF 12-12-2025), el Proveedor, como
        persona física que ofrece servicios de forma habitual, queda sujeto a sus disposiciones.
      </Prose>

      <SectionTitle id="acceso">3. Acceso y uso del servicio</SectionTitle>
      <Prose>Para acceder como Usuario B2B se requiere:</Prose>
      <NumberedList
        items={[
          "Suscribir el Contrato de Servicio correspondiente.",
          "Proporcionar información veraz y actualizada durante el registro.",
          "Contar con los equipos y conectividad necesarios.",
          "Cumplir con las disposiciones fiscales vigentes aplicables al uso del servicio.",
        ]}
      />
      <Prose>Queda prohibido al Usuario B2B:</Prose>
      <BulletList
        items={[
          "Modificar, descompilar o realizar ingeniería inversa del sistema.",
          "Utilizar el sistema para actividades ilícitas o fraudulentas.",
          "Aplicar cargos al consumidor sin su consentimiento previo (Art. 10 LFPC).",
          "Prestar servicios no solicitados o aceptados expresamente por el consumidor.",
        ]}
      />

      <SectionTitle id="precios">4. Precio, facturación y pago</SectionTitle>
      <Prose>
        Conforme al <Strong>Art. 7 BIS de la LFPC</Strong>, el monto total a pagar incluye IVA,
        comisiones y cualquier cargo adicional. El Proveedor emitirá CFDI por cada operación{" "}
        (Art. 12 LFPC).
      </Prose>

      <Prose>
        No se incrementarán precios injustificadamente por contingencias (Art. 10 BIS LFPC).
      </Prose>

      <SectionTitle id="devoluciones">5. Política de No Devoluciones</SectionTitle>
      <AlertBox>
        Una vez adquirido cualquiera de nuestros planes, no se realizarán devoluciones
        ni reembolsos de ningún tipo, dado que el acceso al servicio se activa de forma
        inmediata al momento del pago.
      </AlertBox>
      <Prose>
        Al completar la compra, el usuario reconoce y acepta que ha revisado las
        características del plan seleccionado y que el pago realizado es{" "}
        <Strong>definitivo e irrevocable</Strong>. El acceso al servicio se activa de forma
        inmediata tras la confirmación del pago.
      </Prose>
      <Prose>
        Al completar tu compra, el usuario confirma haber leído y aceptado estos términos.
        Te recomendamos revisar las características de cada plan antes de realizar
        tu adquisición. Si tienes dudas, nuestro equipo de soporte está disponible
        para orientarte.
      </Prose>

      <SectionTitle id="disponibilidad">6. Disponibilidad y soporte</SectionTitle>
      <Prose>
        El Proveedor realizará sus mejores esfuerzos para mantener el servicio disponible de forma
        continua. El soporte técnico se atenderá a través de{" "}
        <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
      </Prose>

      <SectionTitle id="propiedad">7. Propiedad intelectual</SectionTitle>
      <Prose>
        El software, diseño, código, interfaces, documentación y cualquier otro elemento de{" "}
        <Strong>{CONFIG.servicio}</Strong> son propiedad intelectual exclusiva del Proveedor.
        El servicio otorga al usuario únicamente una{" "}
        <Strong>licencia de uso no exclusiva, intransferible y revocable</Strong> durante
        la vigencia de su suscripción.
      </Prose>

      <SectionTitle id="responsabilidad">8. Limitación de responsabilidad</SectionTitle>
      <AlertBox>
        IMPORTANTE: Las limitaciones de responsabilidad no aplican en casos de dolo, mala fe o
        negligencia grave del Proveedor, ni en los supuestos previstos por la LFPC en beneficio
        del consumidor.
      </AlertBox>
      <BulletList
        items={[
          "El Proveedor no es responsable por daños indirectos o consecuentes.",
          "No responde por pérdida de datos causada por errores del usuario o terceros.",
          "Sí responde por actos propios que atenten contra derechos del consumidor (Art. 9 LFPC).",
        ]}
      />

      <SectionTitle id="vigencia">9. Vigencia y terminación</SectionTitle>
      <Prose>
        Estos términos están vigentes mientras el usuario mantenga acceso al servicio. El Proveedor
        puede suspender el acceso por incumplimiento, falta de pago o uso ilícito, con aviso
        previo cuando sea posible. Como persona física, el Proveedor actúa directamente
        en la gestión y atención de cualquier incidencia.
      </Prose>

      <SectionTitle id="modificaciones">10. Modificaciones</SectionTitle>
      <Prose>
        El Proveedor puede modificar estos términos con al menos{" "}
        <Strong>30 días de anticipación</Strong>, notificando por correo o aviso en la plataforma.
        El uso continuado implica aceptación.
      </Prose>

      <SectionTitle id="legislacion">11. Legislación aplicable</SectionTitle>
      <BulletList
        items={[
          "Ley Federal de Protección al Consumidor (LFPC) — Reforma DOF 12-12-2025.",
          "Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
          "Código Civil Federal y Código de Comercio.",
          "Legislación fiscal vigente (CFF, LIVA, LISR).",
        ]}
      />
    </>
  );
}

// ─── PÁGINA: Política de Privacidad ──────────────────────────────────────────
function PrivacidadPage() {
  return (
    <>
      <PageHeader
        badge="Documento legal"
        title="Política de Privacidad"
        subtitle={`Última actualización: ${CONFIG.fecha} · ${CONFIG.nombre}`}
      />

      <AlertBox>
        Esta Política describe cómo recopilamos, usamos y protegemos los datos personales de
        usuarios B2B y consumidores finales, conforme a la LFPDPPP y la LFPC (reforma DOF 12-12-2025).
      </AlertBox>

      <SectionTitle>2. Datos que recopilamos</SectionTitle>
      <SubLabel>Clientes B2B</SubLabel>
      <BulletList
        items={[
          "Identificación: nombre, RFC, razón social.",
          "Contacto: correo electrónico, teléfono",
          "Operación: historial de transacciones, ventas, inventario.",
          "Financieros: método de pago e historial de facturación del servicio contratado.",
        ]}
      />
      <SubLabel>Consumidores finales (B2C)</SubLabel>
      <BulletList
        items={[
          "Datos de transacción: fecha, hora, monto, productos adquiridos.",
          "Fiscales: nombre y RFC únicamente si el consumidor solicita CFDI.",
          "No recopilamos datos de tarjetas directamente — son procesados por gateways certificados PCI-DSS.",
        ]}
      />
      <AlertBox>
        Conforme al Art. 16 de la LFPC, informamos de manera gratuita si mantenemos información
        sobre usted dentro de un plazo de 30 días hábiles.
      </AlertBox>

      <SectionTitle>3. Finalidades del tratamiento</SectionTitle>
      <SubLabel>Primarias — necesarias</SubLabel>
      <NumberedList
        items={[
          "Proveer y operar el Sistema POS contratado.",
          "Facturación y gestión de cobros del servicio.",
          "Soporte técnico y atención a clientes.",
          "Cumplimiento de obligaciones fiscales y legales.",
          "Generación de reportes de ventas e inventario.",
        ]}
      />
      <SubLabel>Secundarias — opcionales, puede oponerse</SubLabel>
      <NumberedList
        items={[
          "Envío de comunicaciones comerciales y promociones.",
          "Análisis estadístico para mejorar nuestros productos.",
        ]}
      />
      <Prose>
        Para oponerse, escríbanos a{" "}
        <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>.
        Esto no afecta la prestación del servicio principal.
      </Prose>

      <SectionTitle>4. Transferencia de datos</SectionTitle>
      <BulletList
        items={[
          "Autoridades fiscales (SAT) y otras competentes, por obligación legal.",
          "Procesadores de pago autorizados, para gestión de cobros.",
          "Proveedores de infraestructura en la nube bajo acuerdos de confidencialidad.",
        ]}
      />
      <AlertBox>
        Conforme al Art. 18 BIS de la LFPC, queda prohibido usar la información del consumidor
        para fines distintos a los declarados. No cedemos datos con fines publicitarios sin
        consentimiento expreso.
      </AlertBox>

      <SectionTitle>5. Medidas de seguridad</SectionTitle>
      <BulletList
        items={[
          "Cifrado en tránsito (TLS/SSL) y en reposo.",
          "Control de acceso por roles y autenticación segura.",
          "Monitoreo de accesos y auditorías periódicas.",
          "Capacitación al personal en protección de datos.",
        ]}
      />

      <SectionTitle>6. Cambios a esta política</SectionTitle>
      <Prose>
        Cualquier modificación será notificada por correo con al menos{" "}
        <Strong>15 días de anticipación</Strong>. La versión vigente siempre está disponible
        en {CONFIG.sitio}.
      </Prose>
    </>
  );
}

// ─── TABS ─────────────────────────────────────────────────────────────────────
const TABS = [
  { id: "terminos", label: "Términos y condiciones", component: TerminosPage },
  { id: "privacidad", label: "Política de privacidad", component: PrivacidadPage },
];

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
export default function LegalPages() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(
    TABS.some((t) => t.id === initialTab) ? initialTab! : "terminos"
  );
  const ActivePage = TABS.find((t) => t.id === activeTab)?.component ?? TerminosPage;

  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <Link href="/" className="legal-nav-logo">
          <Image src={logo} alt="MiComanda" width={32} height={32} className="legal-logo-mark" />
          MiComanda
        </Link>
        <div className="legal-nav-links">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`legal-nav-link ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="legal-content">
        <ActivePage />
      </main>
    </div>
  );
}
