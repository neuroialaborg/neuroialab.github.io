# Próximos pasos — Neuro-IA Lab

El sitio combina dos fuentes: el contenido público scrapeado del sitio anterior en Google Sites y, desde la segunda actualización, los PDFs internos en `hide_docs/` ("Líneas de investigación" y "Proyectos y actividades", última actualización 18/08/2026 según esos documentos). Estos PDFs están en `.gitignore`, así que solo existen en tu copia local — no se suben al repo.

## 1. Ya resuelto con los PDFs de `hide_docs/`

- Se agregó la página **Líneas de Investigación** (`lineas-de-investigacion.html`) con las 3 líneas del laboratorio y sus proyectos asociados.
- `proyectos.html` se actualizó con los 9 proyectos con ficha completa (estado real, responsables, fechas, objetivos, protocolos de ética aprobados) más PROY-NEUROIA-003 (completado, no detallado en el PDF de "proyectos en marcha").
- `miembros.html` incorpora a **Juan Acosta** y **Martina Sánchez**, que no figuraban en el sitio de Google Sites.
- Se agregó un bloque de **herramientas/repositorios** (`neuroiatools`, `pyhiamp`, `pyhwr`, `neuroialab-organization`) en la página de líneas de investigación.

## 2. Algo que necesito que confirmes

- **Título de la Línea 2**: en el PDF de líneas de investigación, el título de la Línea 2 aparece copiado igual al de la Línea 1 ("Interfaces cerebro-computadora de comunicación no invasiva"), pero su descripción habla de estados mentales y señales fisiológicas multimodales — parece un error de copiado en el documento fuente. Usé el título **"Estados mentales a partir de señales fisiológicas multimodales"**, más fiel al contenido. Avisame si el título real es otro.
- **Rol de Victoria Maneiro y Agustín Quintana**: el PDF los lista como "Tec. en Ing. Biomed." (Tecnólogos), mientras que el sitio anterior decía "estudiantes". Actualicé sus roles a "Tecnólogo/a en Ingeniería Biomédica" — confirmame si es correcto.
- **PROY-NEUROIA-006 y 007**: en el PDF ambos figuran como "Proyecto no iniciado" (antes yo los había puesto como "en pausa" con datos del sitio viejo). Ya corregido, pero conviene que lo valides.

## 3. Contenido a confirmar o corregir

- **Miembros**: faltan fotos de perfil (uso iniciales como placeholder).
- **Redes sociales**: sigo usando `instagram.com/neuroialab` y `github.com/neuroialaborg`. Si tienen LinkedIn, X/Twitter o YouTube, decime los links.
- Los PDFs no traen fechas para PROY-NEUROIA-003, 006, 007 y 010 (algunas dicen "A definir"); si las tenés, las agrego.

## 4. Recursos visuales

- **Logo real** del laboratorio (SVG o PNG en alta resolución) — usé un monograma provisorio en `assets/img/favicon.svg`.
- **Fotos**: del equipo y del laboratorio/equipamiento (gorros de EEG, g.HIamp, sala de trabajo).
- Si UTEC tiene colores institucionales obligatorios, pasame el código de marca — la paleta actual (navy/teal/violeta) es una propuesta propia.

## 5. Formulario de contacto

Sigue siendo solo `mailto:` (sin backend, sin registro de envíos). Opciones: **Formspree**/**Netlify Forms**, o embeber el Google Form de reclutamiento de participantes si querés mantenerlo (pasame el link).

## 6. Publicaciones y difusión

Ningún PDF trae una lista de publicaciones científicas. Si el laboratorio tiene papers, posters o participaciones en congresos, se puede agregar (Google Scholar, ORCID o listado manual).

## 7. Cosas técnicas pendientes (menores)

- Activar GitHub Pages en el repo (Settings → Pages → rama `main`, carpeta raíz).
- Si van a usar un dominio propio, agregar `CNAME`.
- `sitemap.xml` para mejor indexación.
- Analítica (Google Analytics / Plausible), si quieren medir visitas — no agregué ninguna por defecto.
- Traducción a inglés, si buscan audiencia internacional.

## 8. Qué NO hice todavía

- No inventé URLs ni datos que no pude confirmar en Google Sites ni en `hide_docs/`.
- No configuré backend, analítica ni dominio custom.
- No comité los cambios a git — quedan en el working directory para que los revisen antes de confirmar.
