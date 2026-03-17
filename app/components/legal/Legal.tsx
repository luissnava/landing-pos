"use client";

import { useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import './styles.css';

// ─── Datos configurables ──────────────────────────────────────────────────────
const CONFIG = {
  nombre: "[TU NOMBRE COMPLETO]",
  rfc: "[RFC PERSONA FÍSICA]",
  domicilio: "[DOMICILIO FISCAL]",
  email: "contacto@gruponava.org",
  telefono: "[TELÉFONO]",
  sitio: "systempos.gruponava.org",
  servicio: "[NOMBRE DE TU SOFTWARE/SERVICIO]",
  fecha: "15 de marzo de 2026",
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
    { id: "disponibilidad", label: "5. Disponibilidad y soporte" },
    { id: "propiedad", label: "6. Propiedad intelectual" },
    { id: "responsabilidad", label: "7. Limitación de responsabilidad" },
    { id: "vigencia", label: "8. Vigencia y terminación" },
    { id: "modificaciones", label: "9. Modificaciones" },
    { id: "legislacion", label: "10. Legislación aplicable" },
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
        operado por <Strong>{CONFIG.nombre}</Strong>, persona física con actividad empresarial
        (en adelante, <Strong>{"el Proveedor"}</Strong>).
      </Prose>
      <BulletList
        items={[
          `Proveedor: ${CONFIG.nombre}, RFC ${CONFIG.rfc}, persona física con actividad empresarial.`,
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
        Los cargos a tarjeta no se efectuarán antes de activar el servicio, salvo consentimiento
        expreso del usuario (<Strong>Art. 15 LFPC</Strong>). No se incrementarán precios
        injustificadamente por contingencias (Art. 10 BIS LFPC).
      </Prose>

      <SectionTitle id="disponibilidad">5. Disponibilidad y soporte</SectionTitle>
      <Prose>
        El Proveedor realizará sus mejores esfuerzos para mantener el servicio disponible de forma
        continua. El soporte técnico se atenderá personalmente a través de{" "}
        <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a> y {CONFIG.telefono}.
      </Prose>

      <SectionTitle id="propiedad">6. Propiedad intelectual</SectionTitle>
      <Prose>
        El software, diseño, código, interfaces, documentación y cualquier otro elemento de{" "}
        <Strong>{CONFIG.servicio}</Strong> son propiedad intelectual exclusiva del Proveedor.
        El servicio otorga al usuario únicamente una{" "}
        <Strong>licencia de uso no exclusiva, intransferible y revocable</Strong> durante
        la vigencia de su suscripción.
      </Prose>

      <SectionTitle id="responsabilidad">7. Limitación de responsabilidad</SectionTitle>
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

      <SectionTitle id="vigencia">8. Vigencia y terminación</SectionTitle>
      <Prose>
        Estos términos están vigentes mientras el usuario mantenga acceso al servicio. El Proveedor
        puede suspender el acceso por incumplimiento, falta de pago o uso ilícito, con aviso
        previo cuando sea posible. Como persona física, el Proveedor actúa directamente
        en la gestión y atención de cualquier incidencia.
      </Prose>

      <SectionTitle id="modificaciones">9. Modificaciones</SectionTitle>
      <Prose>
        El Proveedor puede modificar estos términos con al menos{" "}
        <Strong>30 días de anticipación</Strong>, notificando por correo o aviso en la plataforma.
        El uso continuado implica aceptación.
      </Prose>

      <SectionTitle id="legislacion">10. Legislación aplicable</SectionTitle>
      <BulletList
        items={[
          "Ley Federal de Protección al Consumidor (LFPC) — Reforma DOF 12-12-2025.",
          "Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
          "Código Civil Federal y Código de Comercio.",
          "Legislación fiscal vigente (CFF, LIVA, LISR).",
        ]}
      />
      <Prose>
        Para controversias, las partes se someten a la jurisdicción de los tribunales en el
        domicilio del Proveedor, sin perjuicio del derecho del consumidor de acudir a la{" "}
        <Strong>PROFECO</Strong>.
      </Prose>

      {/* <SectionTitle>Contacto</SectionTitle>
      <div className="legal-info-rows">
        <InfoRow label="Proveedor" value={CONFIG.nombre} />
        <InfoRow label="RFC" value={CONFIG.rfc} />
        <InfoRow label="Domicilio" value={CONFIG.domicilio} />
        <InfoRow label="Email" value={CONFIG.email} />
        <InfoRow label="Teléfono" value={CONFIG.telefono} />
        <InfoRow label="Sitio web" value={CONFIG.sitio} />
      </div> */}
{/* 
      <FooterNote>
        También puede presentar quejas ante la{" "}
        <a href="https://www.profeco.gob.mx" target="_blank" rel="noreferrer">PROFECO</a>
        {" "}· Tel. 800 468 8722
      </FooterNote> */}
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

      <SectionTitle>1. Responsable del tratamiento</SectionTitle>
      <Prose>
        <Strong>{CONFIG.nombre}</Strong>, persona física con actividad empresarial, con domicilio en {CONFIG.domicilio}, RFC {CONFIG.rfc}.
        Contacto: <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>.
      </Prose>

      <SectionTitle>2. Datos que recopilamos</SectionTitle>
      <SubLabel>Clientes B2B</SubLabel>
      <BulletList
        items={[
          "Identificación: nombre, RFC, razón social.",
          "Contacto: correo electrónico, teléfono, domicilio fiscal.",
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

      <SectionTitle>6. Derechos ARCO</SectionTitle>
      <Prose>
        Puede ejercer sus derechos de{" "}
        <Strong>Acceso, Rectificación, Cancelación y Oposición</Strong> enviando solicitud a{" "}
        <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>{" "}
        con identificación oficial. Responderemos en <Strong>20 días hábiles</Strong>.
      </Prose>

      <SectionTitle>7. Cambios a esta política</SectionTitle>
      <Prose>
        Cualquier modificación será notificada por correo con al menos{" "}
        <Strong>15 días de anticipación</Strong>. La versión vigente siempre está disponible
        en {CONFIG.sitio}.
      </Prose>

      <FooterNote>
        Derechos ARCO:{" "}
        <a href="https://www.inai.org.mx" target="_blank" rel="noreferrer">INAI</a>
        {" "}· 800 835 4324 · atencionalciudadano@inai.org.mx
        <br />
        Quejas como consumidor:{" "}
        <a href="https://www.profeco.gob.mx" target="_blank" rel="noreferrer">PROFECO</a>
        {" "}· 800 468 8722
      </FooterNote>
    </>
  );
}

// ─── PÁGINA: Aviso de Privacidad LFPDPPP ─────────────────────────────────────
function AvisoPage() {
  const transferencias = [
    ["Autoridades fiscales (SAT)", "Cumplimiento fiscal", "No requerido"],
    ["Procesadores de pago PCI-DSS", "Procesamiento de cobros", "No requerido"],
    ["Proveedores cloud", "Hospedaje del sistema", "No requerido"],
    ["Socios publicitarios", "Marketing y promociones", "Sí, previo"],
  ];

  return (
    <>
      <PageHeader
        badge="Documento legal · LFPDPPP"
        title="Aviso de Privacidad Integral"
        subtitle={`Última actualización: ${CONFIG.fecha} · ${CONFIG.nombre}`}
      />

      <AlertBox>
        Emitido en cumplimiento de los Artículos 15 y 16 de la Ley Federal de Protección de Datos
        Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
      </AlertBox>

      <SectionTitle>I. Identidad y domicilio del responsable</SectionTitle>
      <div className="legal-info-rows">
        <InfoRow label="Responsable" value={`${CONFIG.nombre} (Persona física)`} />
        <InfoRow label="RFC" value={CONFIG.rfc} />
        <InfoRow label="Domicilio" value={CONFIG.domicilio} />
        <InfoRow label="Contacto" value={CONFIG.email} />
        <InfoRow label="Teléfono" value={CONFIG.telefono} />
      </div>

      <SectionTitle>II. Datos personales que tratamos</SectionTitle>
      <SubLabel>Clientes B2B</SubLabel>
      <BulletList
        items={[
          "Identificación: nombre, RFC, CURP (cuando aplique), razón social.",
          "Contacto: correo, teléfono, domicilio fiscal y/o comercial.",
          "Patrimoniales: información bancaria, historial de pagos, facturación.",
          "Operación: transacciones procesadas, configuración del sistema.",
        ]}
      />
      <SubLabel>Consumidores finales (B2C)</SubLabel>
      <BulletList
        items={[
          "Identificación fiscal: nombre y RFC únicamente si el consumidor solicita CFDI.",
          "Transacción: fecha, hora, monto, descripción de productos adquiridos.",
        ]}
      />
      <AlertBox>
        No recabamos datos sensibles ni datos de tarjetas directamente. Los pagos son procesados
        por gateways certificados PCI-DSS.
      </AlertBox>

      <SectionTitle>III. Finalidades del tratamiento</SectionTitle>
      <SubLabel>Primarias — necesarias para la relación jurídica</SubLabel>
      <NumberedList
        items={[
          "Identificación y autenticación en el sistema.",
          "Prestación del servicio POS contratado.",
          "Facturación, cobros y gestión de pagos.",
          "Generación de CFDI.",
          "Soporte técnico y atención de garantías.",
          "Cumplimiento de obligaciones legales y fiscales.",
          "Auditoría y control interno.",
        ]}
      />
      <SubLabel>Secundarias — opcionales, puede oponerse</SubLabel>
      <NumberedList
        items={[
          "Envío de comunicaciones comerciales sobre el sistema y productos relacionados.",
          "Análisis estadístico agregado para mejora de productos.",
          "Invitaciones a eventos, webinars o actualizaciones.",
        ]}
      />
      <Prose>
        Para oponerse, escríbanos a{" "}
        <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>{" "}
        dentro de los <Strong>5 días hábiles</Strong> siguientes.
      </Prose>

      <SectionTitle>IV. Transferencias de datos</SectionTitle>
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th>Receptor</th>
              <th>Finalidad</th>
              <th>Consentimiento</th>
            </tr>
          </thead>
          <tbody>
            {transferencias.map(([r, f, c], i) => (
              <tr key={i}>
                <td>{r}</td>
                <td>{f}</td>
                <td className={c === "Sí, previo" ? "legal-consent-yes" : ""}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle>V. Derechos ARCO</SectionTitle>
      <Prose>
        Para ejercer sus derechos de{" "}
        <Strong>Acceso, Rectificación, Cancelación u Oposición</Strong>, envíe solicitud a{" "}
        <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a> con:
      </Prose>
      <NumberedList
        items={[
          "Nombre completo y datos de contacto.",
          "Copia de identificación oficial.",
          "Descripción del derecho que desea ejercer y los datos involucrados.",
        ]}
      />
      <Prose>
        Responderemos en un plazo máximo de <Strong>20 días hábiles</Strong>.
      </Prose>

      <SectionTitle>VI. Revocación del consentimiento</SectionTitle>
      <Prose>
        Puede revocar el consentimiento en cualquier momento escribiendo a{" "}
        <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>.
        La revocación no tiene efectos retroactivos.
      </Prose>

      <SectionTitle>VII. Limitación de uso y divulgación</SectionTitle>
      <Prose>
        Puede inscribirse en el{" "}
        <Strong>Registro Público para Evitar Publicidad (REPEP)</Strong> de la PROFECO en{" "}
        <a href="https://www.profeco.gob.mx" target="_blank" rel="noreferrer">www.profeco.gob.mx</a>,
        o manifestarnos directamente su voluntad de no recibir comunicaciones comerciales.
      </Prose>

      <SectionTitle>VIII. Cambios al aviso</SectionTitle>
      <Prose>
        Modificaciones serán notificadas por correo o publicadas en {CONFIG.sitio} con al menos{" "}
        <Strong>15 días de anticipación</Strong>.
      </Prose>

      <FooterNote>
        Autoridad supervisora:{" "}
        <a href="https://www.inai.org.mx" target="_blank" rel="noreferrer">INAI</a>
        {" "}· www.inai.org.mx · 800 835 4324 · atencionalciudadano@inai.org.mx
        <br />
        Quejas como consumidor:{" "}
        <a href="https://www.profeco.gob.mx" target="_blank" rel="noreferrer">PROFECO</a>
        {" "}· www.profeco.gob.mx · 800 468 8722
      </FooterNote>
    </>
  );
}

// ─── TABS ─────────────────────────────────────────────────────────────────────
const TABS = [
  { id: "terminos", label: "Términos y condiciones", component: TerminosPage },
  { id: "privacidad", label: "Política de privacidad", component: PrivacidadPage },
  { id: "aviso", label: "Aviso de privacidad", component: AvisoPage },
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
          <div className="legal-logo-mark">MC</div>
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

      {/* <footer className="legal-page-footer">
        © {new Date().getFullYear()} {CONFIG.nombre} · RFC {CONFIG.rfc} · {CONFIG.domicilio}
      </footer> */}
    </div>
  );
}
