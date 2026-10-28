# Templates basados en Catedral Cloud

Dos implementaciones del mismo diseño (login + layout con sidebar), tomado de
https://www.catedralcloud.com.ar/. Los colores, radios, sombras, medidas y textos
se extrajeron del CSS y de los templates compilados del sitio, no se inventaron.

| Carpeta    | Stack                                   | Cómo verlo                                        |
|------------|-----------------------------------------|---------------------------------------------------|
| `html/`    | HTML + CSS puro (+ Lucide por CDN)      | Abrir `html/login.html` o `html/index.html`       |
| `angular/` | Angular 22 + Angular Material + Lucide  | `cd angular && npm start` → http://localhost:4200 |

## Tokens

`html/css/tokens.css` y `angular/src/styles/_tokens.scss` son el mismo archivo:
las variables `:root` del sitio (`--brand-*`, `--surface-*`, `--text-*`, `--border-*`,
`--nav-corporate-*`, radios, sombra y medidas del sidebar). En Angular, el tema de
Material está mapeado a esos tokens en `src/styles.scss`.

## Qué es de ejemplo (reemplazar)

- Ítems del menú: `html/index.html` / `angular/src/app/layout/menu.ts`
- Razón social, nombre y email del usuario, contador de notificaciones
- Título de página y contenido
- Validación y navegación del login (no hay autenticación real)
- Links de Términos y Política de privacidad (`href="#"`)

## Diferencias con el sitio

- Íconos: Lucide en todo (el sitio usa Lucide en menú y topbar, y Font Awesome en el
  dropdown de usuario). Ayuda y notificaciones en el sitio son animaciones Lottie.
- Las imágenes de `assets/img` (logo, fondo del login, redes) se descargaron del sitio.
