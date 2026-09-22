# Neuro-IA Lab

Sitio web del **Laboratorio de Neurociencias e Inteligencia Artificial Aplicada (Neuro-IA Lab)**, UTEC — Instituto Tecnológico Regional Suroeste.

Reemplaza al sitio anterior alojado en Google Sites (`sites.google.com/utec.edu.uy/neuroialab`). Es un sitio estático (HTML, CSS y JS sin frameworks ni build step) pensado para alojarse directamente en GitHub Pages desde este repositorio (`neuroialab.github.io`).

## Estructura

```
index.html                      Inicio
lineas-de-investigacion.html     Líneas de investigación del laboratorio
proyectos.html                    Proyectos de investigación
miembros.html                      Equipo del laboratorio
contacto.html                        Contacto
assets/
  css/styles.css                      Estilos (paleta, layout, componentes)
  js/main.js                            Menú móvil, animaciones, fondo animado del hero, formulario de contacto
  img/favicon.svg                         Ícono del sitio
robots.txt
NEXT_STEPS.md                          Qué falta / qué se necesita para seguir mejorando el sitio
hide_docs/                               Documentos internos fuente (PDFs) — ignorados por git, solo locales
```

## Desarrollo local

No requiere build ni dependencias. Para verlo:

- Abrir `index.html` directamente en el navegador, o
- Levantar un servidor estático simple, por ejemplo:
  ```
  npx serve .
  ```

## Publicación (GitHub Pages)

Como el repositorio se llama `neuroialab.github.io`, basta con habilitar GitHub Pages apuntando a la rama `main` y carpeta raíz (`/`) desde **Settings → Pages**. El sitio quedará publicado en `https://neuroialab.github.io/`.

## Paleta de colores

- **Navy** (`#0b1e3d`, `#12294f`) — color de marca, fondo de header/hero/footer.
- **Teal** (`#17c3b2`, `#4bdfce`) — acento principal, asociado a señales/BCI.
- **Violeta** (`#7c6ff0`, `#a79dff`) — acento secundario, asociado a IA.
- Fondo claro `#f7fafc` y tarjetas blancas para el contenido, manteniendo buen contraste y look profesional/académico.

Ver detalle de próximos pasos en [NEXT_STEPS.md](NEXT_STEPS.md).
