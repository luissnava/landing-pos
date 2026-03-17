# 🍽️ MiComanda — Sistema POS para Restaurantes

Landing page y sistema de membresías para **MiComanda**, un punto de venta diseñado para restaurantes.

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

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | Linter ESLint |

## Roadmap

### Primera Etapa
- [x] Subir landing page
- [x] Hacer pruebas de landing
- [x] Hacer el módulo de Jurídico
- [ ] Hacer pruebas de pago con Stripe en prod
- [x] Hacer el correo empresarial
- [ ] Abrir cuentas de redes sociales (Instagram, TikTok)
- [ ] Subir promociones del sistema

### Segunda Etapa
- [ ] Optimizar versión estable para integrar comanda y mejorar frontend de proxy a actions servers
- [ ] Crear módulo de AdminPanel para superUser (root y sudo)

### Facturación
- [ ] Levantar proyectos para facturación
