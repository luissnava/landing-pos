# 🍽️ MiComanda, Sistema POS para Restaurantes

Landing page y sistema de membresías para **MiComandaPOS**, un punto de venta diseñado para restaurantes.

🔗 [systempos.gruponava.org](https://systempos.gruponava.org)

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **CSS Modules** (componentes custom)

## Estructura del proyecto

```
app/
├── components/
│   ├── Hero/           # Banner principal
│   ├── Navbar/         # Navegación
│   ├── Features/       # Funcionalidades del POS
│   ├── Plans/          # Planes y precios
│   ├── Benefits/       # Ventajas
│   ├── FAQ/            # Preguntas frecuentes
│   ├── Contact/        # CTA de contacto
│   ├── Testimonials/   # Casos de éxito
│   ├── Footer/         # Pie de página
│   ├── Modal/          # Modal de planes
│   ├── WhatsAppButton/ # Botón flotante WhatsApp
│   └── legal/          # Términos, privacidad y aviso
├── data/               # JSON de contenido
├── legal/              # Ruta /legal
├── payments/           # Rutas de pago (success/cancelled)
├── layout.tsx          # Layout + SEO metadata
├── page.tsx            # Landing page
├── sitemap.ts          # Sitemap XML
└── robots.ts           # Robots.txt
```

## Instalación

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)