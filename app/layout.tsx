import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ORION POS — Sistema de Punto de Venta para Restaurantes",
  description: "ORION POS: Sistema punto de venta diseñado para restaurantes. Gestiona mesas, órdenes, menú digital y reportes. Planes desde $49 USD/mes. Soporte en español.",
  keywords: ["ORION POS", "POS restaurante", "sistema punto de venta", "gestión restaurante", "software restaurante", "POS México", "sistema mesas", "órdenes restaurante"],
  authors: [{ name: "ORION POS" }],
  openGraph: {
    title: "ORION POS — Sistema de Punto de Venta para Restaurantes",
    description: "Gestiona tu restaurante de manera profesional con ORION POS.",
    type: "website",
    locale: "es_MX",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
