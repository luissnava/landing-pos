import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OrderFlow - Sistema POS para Restaurantes | Gestión Profesional de Mesas y Órdenes",
  description: "OrderFlow: Sistema punto de venta diseñado para restaurantes. Gestiona mesas, órdenes, menú digital y reportes. Planes desde $29 USD/mes. Soporte en español.",
  keywords: ["OrderFlow", "POS restaurante", "sistema punto de venta", "gestión restaurante", "software restaurante", "POS México", "sistema mesas", "órdenes restaurante"],
  authors: [{ name: "OrderFlow" }],
  openGraph: {
    title: "OrderFlow - Sistema POS para Restaurantes | Gestión Profesional",
    description: "Gestiona tu restaurante de manera profesional con OrderFlow. Planes desde $29 USD/mes.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrderFlow - Sistema POS para Restaurantes",
    description: "Sistema punto de venta profesional para restaurantes. Gestión de mesas, órdenes y reportes.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tudominio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
