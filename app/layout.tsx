import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MiComanda — Sistema POS para Restaurantes",
  description: "MiComanda: Sistema POS para restaurantes. Gestiona mesas, comandas digitales, tickets de venta, menú digital y reportes por periodo. Funciona en tablet, iPad, smartphone y PC. Soporte en español.",
  keywords: [
    "MiComanda", "Comanda", "comanda", "POS restaurante", "Sistema POS", "POS", "gestión restaurante",
    "software restaurante", "POS México", "sistema mesas", "órdenes restaurante",
    "comandas digitales", "tickets de venta", "menú digital restaurante",
    "reportes de ventas restaurante", "POS tablet", "POS iPad",
    "sistema restaurante México", "control de mesas", "cocina digital",
    "software punto de venta", "POS en español", "sistema comandas",
  ],
  authors: [{ name: "MiComandaPOS" }],
  openGraph: {
    title: "MiComandaPOS — Sistema POS para Restaurantes",
    description: "Gestiona mesas, comandas, tickets y reportes de tu restaurante desde cualquier dispositivo. Soporte en español.",
    type: "website",
    locale: "es_MX",
    siteName: "MiComandaPOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "MiComandaPOS — POS para Restaurantes",
    description: "Sistema punto de venta con comandas digitales, gestión de mesas y reportes. Funciona en tablet, smartphone y PC.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://micomandapos.gruponava.org/" },
  icons: { icon: "/favicon.ico" },
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
