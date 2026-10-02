# Altavista

Landing page de una sola página (demo de portfolio) para Altavista, un desarrollo residencial de lujo ficticio. Concepto visual "Arquitectura y espacio": fotografía a pantalla completa, tipografía editorial, modo oscuro/claro con transición circular y una galería inmersiva con scroll horizontal.

## Secciones

Hero · Visión · Unidades · Galería · Ubicación · Amenidades · Contacto · Footer

## Stack

- React 19 + Vite + Tailwind CSS v4 (vía `@tailwindcss/vite`)
- GSAP + ScrollTrigger: animación de entrada del hero, reveals al hacer scroll y galería con `pin` + `scrub`
- Lenis: smooth scroll sincronizado con ScrollTrigger
- Framer Motion: modal de confirmación del formulario de contacto
- Lucide React: iconos
- Tipografías Fraunces e Inter (Google Fonts, cargadas en `index.html`)
- Oxlint para el linting

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre la URL que indique Vite (por defecto http://localhost:5173).

Otros comandos:

```bash
npm run build     # build de producción en dist/
npm run preview   # sirve el build localmente
npm run lint      # revisa el código con Oxlint
```

## Estructura

```
public/           favicon
src/
  components/     Navbar, Hero, Vision, Units, Gallery, Location, Amenities, Contact, Footer, ThemeToggle
  context/        ThemeContext.jsx — tema oscuro/claro (localStorage + View Transitions API)
  data/           content.js — textos, imágenes, unidades, amenidades y puntos de interés
  hooks/          useLenis.js (smooth scroll), useReveal.js (animación de entrada al scroll)
  index.css       variables de color por tema, utilidades y estilos globales
```

## Notas

- **Contenido:** todo el copy, las unidades (4 tipologías), las imágenes y los puntos de interés están en `src/data/content.js`. Es el único archivo que necesitas tocar para adaptar la demo a otro desarrollo.
- **Imágenes:** son fotografías de Unsplash usadas como placeholder de un desarrollo ficticio. Para producción, reemplaza las URLs en `content.js` por las fotos reales.
- **Datos de contacto:** el correo, el teléfono y la dirección del footer son ficticios.
- **Tema:** respeta la preferencia del sistema en la primera visita y guarda la elección del usuario. La transición circular usa la View Transitions API; en navegadores que no la soportan, el cambio es directo.
- **Galería:** desde 768px de ancho usa `pin` + `scrub` de ScrollTrigger (scroll vertical que mueve la galería en horizontal). En pantallas menores, o con `prefers-reduced-motion`, se mantiene como carrusel horizontal nativo con scroll-snap.
- **Formulario:** es solo frontend, no envía datos a ningún backend. Al enviarlo se muestra el modal de confirmación.
- **Accesibilidad:** las animaciones (GSAP, Lenis y CSS) se desactivan con `prefers-reduced-motion`, y los elementos interactivos tienen foco visible por teclado.
