# 📖 Guía Completa del Portfolio - React (Para Principiantes)

## 🎯 Propósito de este Documento
Esta es tu guía personal para entender y mantener tu portfolio en React. Está diseñada especialmente para alguien que está aprendiendo React. No te preocupes si algunos conceptos no los entiendes completamente al principio, ¡eso es normal!

---

## 🤔 ¿Qué es React y por qué lo usas?

**React** es una biblioteca de JavaScript que te permite crear interfaces web dividiendo todo en "piezas" pequeñas llamadas **componentes**. Es como construir con bloques de LEGO: cada bloque tiene una función específica, y los combinas para crear algo más grande.

### ¿Por qué React es genial?
- 🧩 **Componentes reutilizables**: Escribes una vez, usas muchas veces
- 🔄 **Estado reactivo**: Si cambias algo, la página se actualiza automáticamente
- 📱 **Moderno**: Es lo que usan empresas como Facebook, Netflix, etc.

---

## 🏗️ Arquitectura del Proyecto (Explicación Simple)

### Estructura de Carpetas - ¿Qué significa cada cosa?
```
src/
├── components/     # 🧩 Piezas pequeñas de tu página (botones, menús, etc)
├── pages/         # 📄 Páginas completas (Inicio, Proyectos, Contacto)
├── hooks/         # 🎣 Funciones especiales que hacen que React funcione bien
├── contexts/      # 🌐 Información que comparten todas las páginas (idioma actual)
├── utils/         # 🔧 Funciones útiles que se usan en varios lugares
└── data/          # 📊 DATOS DEL CONTENIDO (MÁS IMPORTANTE - AQUÍ TOCAS TÚ)
```

### ⭐ Archivo Principal: `src/data/index.js`
**Este es el corazón de tu portfolio.** Piénsalo como tu "base de datos" donde guardas:
- 🌐 **Traducciones** (todos los textos en español e inglés)
- 🛠️ **Skills y tecnologías** (HTML, CSS, React, etc.)
- 📂 **Proyectos** (tus trabajos completados y en progreso)

**🎯 REGLA DE ORO:** El 90% de las veces que quieras cambiar contenido, solo necesitarás tocar este archivo.

---

## 📝 Cómo Agregar Nuevos Proyectos (Paso a Paso para Principiantes)

### 🤔 ¿Qué es un "proyecto" en tu portfolio?
Un proyecto es cada trabajo que has hecho: una página web, un juego, una aplicación, etc. En tu portfolio, cada proyecto se muestra como una "carta" con imagen, descripción y enlaces.

### Paso 1: Preparar la Imagen de tu Proyecto
- **¿Dónde va?** En la carpeta: `public/assets/`
- **¿Qué formatos?** PNG o JPG (PNG es mejor)
- **¿Qué tamaño?** Aproximadamente 800x600 píxeles
- **Ejemplo:** Si tu proyecto se llama "Mi Tienda Web", guarda la imagen como `mi-tienda-web.png`

### Paso 2: Entender la Estructura de un Proyecto
Cada proyecto en tu código se ve así:

```javascript
// Esto es UN proyecto completo
{
  id: 6,                                    // ⚠️ Número único (como el DNI del proyecto)
  title: "Mi Proyecto Increíble",           // 📝 Nombre que aparecerá en la carta
  description: "Una descripción corta...",  // 📄 Qué hace tu proyecto (2-3 líneas máximo)
  image: "/assets/mi-proyecto.png",         // 🖼️ Ruta a tu imagen
  tech: [                                   // 🛠️ Tecnologías que usaste
    { name: "HTML", icon: "url-del-icono" },
    { name: "CSS", icon: "url-del-icono" }
  ],
  links: {                                  // 🔗 Enlaces (opcionales)
    demo: "https://mi-proyecto.com",        // Link para verlo funcionando
    github: "https://github.com/tu-repo"   // Link al código
  },
  badge: {                                  // 🏷️ Etiqueta colorida
    text: "Web App",
    color: "linear-gradient(90deg,#667eea,#764ba2)"
  },
  mainIcon: "devicon-html5-plain colored"   // 🎨 Ícono principal
}
```

### Paso 3: Agregar tu Proyecto al Código
1. **Abre el archivo:** `src/data/index.js`
2. **Busca la sección:** `export const projectsData = {`
3. **Decide dónde ponerlo:**
   - `completed: [...]` → Si tu proyecto está terminado
   - `inProgress: [...]` → Si aún lo estás desarrollando

4. **Copia este template y modifícalo:**
```javascript
{
  id: 6, // ⚠️ IMPORTANTE: Cambia este número! Usa el siguiente disponible
  title: "Nombre de tu proyecto",
  description: "Explica qué hace tu proyecto en 1-2 líneas máximo.",
  image: "/assets/tu-imagen.png",
  tech: [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
  ],
  links: {
    demo: "https://tu-demo.com",        // Si no tienes demo, borra esta línea
    github: "https://github.com/tu-repo" // Si no está en GitHub, borra esta línea
  },
  badge: {
    text: "Mi Categoría",
    color: "linear-gradient(90deg,#ff6b6b,#feca57)"
  },
  mainIcon: "devicon-html5-plain colored"
}
```

### 🎨 Colores Bonitos para Badges (Copia y pega)
```javascript
// Negro elegante (para proyectos serios)
color: "rgba(0,0,0,0.65)"

// Azul a púrpura (para proyectos creativos)
color: "linear-gradient(90deg,#6a11cb,#2575fc)"

// Rojo a rosa (para juegos o proyectos divertidos)
color: "linear-gradient(90deg,#ff512f,#dd2476)"

// Verde a azul (para proyectos ecológicos o de salud)
color: "linear-gradient(90deg,#11998e,#38ef7d)"

// Naranja a amarillo (para proyectos energéticos)
color: "linear-gradient(90deg,#ff6b6b,#feca57)"
```

### ⚠️ Errores Comunes (y cómo evitarlos)
1. **ID repetido:** Cada proyecto debe tener un número único
2. **Coma faltante:** No olvides la coma `,` después de cada `}`
3. **Ruta de imagen incorrecta:** Asegúrate que la imagen esté en `public/assets/`
4. **Corchetes mal cerrados:** Cuenta que cada `[` tenga su `]` y cada `{` tenga su `}`

---

## 🛠️ Cómo Agregar Nuevas Skills/Tecnologías (Super Fácil)

### 🤔 ¿Qué son las "Skills" en tu portfolio?
Son las tecnologías y herramientas que sabes usar: HTML, CSS, JavaScript, Photoshop, etc. En tu portfolio aparecen como iconitos coloridos organizados por categorías.

### Las 4 Categorías que Tienes:
1. **`languages`** → Lenguajes de programación (HTML, CSS, JavaScript, Python...)
2. **`frameworks`** → Librerías y frameworks (React, Unity, Bootstrap...)
3. **`database`** → Bases de datos y servicios en la nube (MySQL, AWS...)
4. **`tools`** → Herramientas que usas (Git, Photoshop, Figma...)

### Cómo Agregar una Nueva Skill:
1. **Abre:** `src/data/index.js`
2. **Busca:** `export const skillsData = {`
3. **Elige la categoría correcta** y agrega tu skill:

```javascript
// Ejemplo: Agregar Python a lenguajes
languages: [
  // ... skills existentes ...
  { icon: "devicon-python-plain colored", name: "Python" } // ← Nueva skill
],

// Ejemplo: Agregar Figma a herramientas
tools: [
  // ... herramientas existentes ...
  { icon: "devicon-figma-plain colored", name: "Figma" } // ← Nueva herramienta
]
```

### 🎨 ¿Dónde Conseguir los Iconos?
**Página mágica:** https://devicon.dev/

**Cómo usarla:**
1. Busca tu tecnología (ej: "python")
2. Verás opciones como: `devicon-python-plain`, `devicon-python-original`
3. Agrega `colored` al final: `devicon-python-plain colored`

### 📋 Lista de Iconos Más Comunes (Copia y Pega):
```javascript
// Lenguajes
{ icon: "devicon-html5-plain colored", name: "HTML" },
{ icon: "devicon-css3-plain colored", name: "CSS" },
{ icon: "devicon-javascript-plain colored", name: "JavaScript" },
{ icon: "devicon-python-plain colored", name: "Python" },
{ icon: "devicon-java-plain colored", name: "Java" },
{ icon: "devicon-php-plain colored", name: "PHP" },

// Frameworks
{ icon: "devicon-react-original colored", name: "React" },
{ icon: "devicon-vue-plain colored", name: "Vue.js" },
{ icon: "devicon-nodejs-plain colored", name: "Node.js" },
{ icon: "devicon-bootstrap-plain colored", name: "Bootstrap" },

// Bases de datos
{ icon: "devicon-mysql-plain colored", name: "MySQL" },
{ icon: "devicon-mongodb-plain colored", name: "MongoDB" },
{ icon: "devicon-postgresql-plain colored", name: "PostgreSQL" },

// Herramientas
{ icon: "devicon-git-plain colored", name: "Git" },
{ icon: "devicon-github-original colored", name: "GitHub" },
{ icon: "devicon-vscode-plain colored", name: "VS Code" },
{ icon: "devicon-figma-plain colored", name: "Figma" }
```

### 🎨 ¿Qué pasa si NO encuentro el ícono de mi tecnología?
¡No hay problema! Puedes usar un ícono personalizado:

```javascript
{
  icon: "mi-icono-custom", 
  name: "Mi Tecnología Rara",
  customIcon: "https://url-de-mi-icono.svg" // ← URL del ícono
}
```

---

## 🌐 Sistema de Traducciones (Hacer tu Página Bilingüe)

### 🤔 ¿Cómo funciona esto?
Tu portfolio puede mostrar todo en español o inglés. Cuando alguien hace clic en el botón de idioma, ¡toda la página se traduce automáticamente! Esto es posible porque guardas cada texto en ambos idiomas.

### ¿Dónde Están las Traducciones?
En `src/data/index.js`, busca `export const translations = {`

Verás algo así:
```javascript
export const translations = {
  es: {
    // Todos los textos en español
    home: "Inicio",
    projects: "Proyectos"
  },
  en: {
    // Los mismos textos en inglés
    home: "Home", 
    projects: "Projects"
  }
}
```

### Cómo Agregar un Nuevo Texto:
**Ejemplo:** Quieres agregar "Mi nueva sección"

1. **Ve a la sección `es:`** y agrega:
```javascript
es: {
  // ... textos existentes ...
  mi_nueva_seccion: "Mi Nueva Sección",
  descripcion_nueva: "Esta es mi nueva descripción en español"
}
```

2. **Ve a la sección `en:`** y agrega LO MISMO pero en inglés:
```javascript
en: {
  // ... textos existentes ...
  mi_nueva_seccion: "My New Section",
  descripcion_nueva: "This is my new description in English"
}
```

### 🎯 Reglas Importantes:
- ✅ **Usa guiones bajos:** `mi_texto` (no espacios)
- ✅ **Mismo nombre en ambos idiomas:** Si pones `mi_titulo` en español, también ponlo en inglés
- ✅ **Sin tildes en los nombres:** `seccion` no `sección` (solo en los nombres, el contenido sí puede tener tildes)

### ¿Cómo Usar las Traducciones en tu Código?
**No te preocupes mucho por esto ahora**, pero si quieres entender:

```javascript
// En cualquier componente de React
import { useLanguage } from '../hooks';

function MiComponente() {
  const { t } = useLanguage(); // t = translate (traducir)
  
  return (
    <h2>{t('mi_nueva_seccion')}</h2> // Muestra "Mi Nueva Sección" o "My New Section"
  );
}
```

### 📝 Ejemplo Práctico Completo:
Digamos que quieres agregar una sección "Certificaciones":

```javascript
// En src/data/index.js
export const translations = {
  es: {
    // ... textos existentes ...
    certificaciones_titulo: "🏆 Certificaciones",
    certificaciones_descripcion: "Estos son los cursos y certificaciones que he completado",
    ver_certificado: "Ver Certificado"
  },
  en: {
    // ... textos existentes ...
    certificaciones_titulo: "🏆 Certifications", 
    certificaciones_descripcion: "These are the courses and certifications I have completed",
    ver_certificado: "View Certificate"
  }
}
```

---

## � Comandos Importantes (Tu Caja de Herramientas)

### 🤔 ¿Qué es una "Terminal" o "Consola"?
Es una ventana donde escribes comandos de texto para que la computadora haga cosas. En VS Code puedes abrirla con `Ctrl + ` (backtick).

### 📋 Los 3 Comandos Que MÁS Usarás:

#### 1. **Ver tu página mientras trabajas** 🔧
```bash
npm start
```
**¿Qué hace?** Abre tu página en `http://localhost:3000` y cada vez que cambies algo en el código, ¡la página se actualiza sola!

**¿Cuándo usarlo?** Siempre que estés trabajando en tu portfolio.

#### 2. **Preparar tu página para internet** 📦
```bash
npm run build
```
**¿Qué hace?** Convierte todo tu código en archivos listos para subir a internet.

**¿Cuándo usarlo?** Antes de subir cambios a tu página web.

#### 3. **Subir tu página a internet** 🌐
```bash
npm run deploy
```
**¿Qué hace?** Sube tu portfolio a GitHub Pages para que todo el mundo lo vea.

**¿Cuándo usarlo?** Después de hacer cambios y querer que se vean en tu página real.

### 🔄 Tu Flujo de Trabajo Típico:
```bash
# 1. Empezar a trabajar
npm start

# 2. Hacer cambios en tu código (agregar proyectos, etc.)
# 3. Ver que todo se ve bien en localhost:3000

# 4. Cuando estés satisfecho:
npm run build

# 5. Subir a internet:
npm run deploy
```

### 🆘 Comandos de Rescate (Si algo se rompe):

#### Si tienes errores raros:
```bash
npm install
```
**¿Qué hace?** Reinstala todas las herramientas que necesita tu proyecto.

#### Si quieres limpiar todo y empezar de nuevo:
```bash
npm install
npm start
```

### ⚠️ Errores Comunes y Soluciones:

**Error:** "npm no se reconoce como comando"
**Solución:** Necesitas instalar Node.js desde https://nodejs.org

**Error:** "Puerto 3000 ya en uso"
**Solución:** Cierra otras ventanas de VS Code o en la terminal presiona `Ctrl + C` y luego `npm start` de nuevo

**Error:** "Cannot find module"
**Solución:** Ejecuta `npm install` y luego intenta de nuevo

---

## 📄 Crear Nueva Página (Nivel Avanzado - No es Urgente)

### 🤔 ¿Cuándo Necesitarías Esto?
Solo si quieres agregar una página completamente nueva como "Certificaciones", "Blog", "Galería", etc. Para agregar proyectos normales, NO necesitas esto.

### Pasos Simplificados:
1. **Crear archivo:** `src/pages/MiNuevaPagina.jsx`
2. **Agregar al índice:** `src/pages/index.js`
3. **Crear ruta:** `src/App.js`
4. **Agregar al menú:** `src/components/Navbar.jsx`

**💡 Consejo:** Por ahora concéntrate en agregar proyectos y skills. Las páginas nuevas son para cuando ya domines lo básico.

---

## 🎨 Modificar Estilos (Hacer que se vea bonito)

### 🤔 ¿Qué es CSS y dónde está?
CSS es el "maquillaje" de tu página web. Controla colores, tamaños, animaciones, etc. En tu proyecto está en `src/App.css`.

### 🎨 Los Colores Principales de tu Portfolio:
```css
/* Estos son los colores que usa tu página */
:root {
  --bg: #0a0a0a;           /* Fondo negro */
  --text: #ffffff;         /* Texto blanco */
  --accent: #00d4ff;       /* Azul brillante (tu color favorito) */
  --card-bg: #1a1a1a;     /* Fondo de las cartas de proyectos */
  --border: #333;          /* Bordes grises */
}
```

### 🎯 ¿Cómo Cambiar el Color Principal?
1. **Abre:** `src/App.css`
2. **Busca:** `:root {`
3. **Cambia:** `--accent: #00d4ff;` por tu color favorito

**Ejemplos de colores:**
- `#ff6b6b` → Rojo bonito
- `#4ecdc4` → Verde agua
- `#45b7d1` → Azul cielo
- `#f9ca24` → Amarillo vibrante
- `#6c5ce7` → Púrpura moderno

### 🧩 Clases CSS Útiles (Que Ya Tienes):
```css
.page-container {         /* Contenedor de cualquier página */
  padding: 2rem;          /* Espacio interno */
  max-width: 1200px;      /* Ancho máximo */
  margin: 0 auto;         /* Centrado */
}

.card {                   /* Tarjeta de proyecto */
  background: var(--card-bg);  /* Color de fondo */
  border: 1px solid var(--border);  /* Borde */
  border-radius: 8px;     /* Esquinas redondeadas */
  padding: 1.5rem;        /* Espacio interno */
}

.gradient-text {          /* Texto con colores degradados */
  background: linear-gradient(90deg, var(--accent), #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 🎨 ¿Cómo Hacer que el Texto Sea Más Grande?
Busca en `App.css` algo como:
```css
h1 { font-size: 2rem; }    /* Título grande */
h2 { font-size: 1.5rem; }  /* Título mediano */
p { font-size: 1rem; }     /* Texto normal */
```

Y cambia los números. `1rem` = tamaño normal, `2rem` = doble de grande.

---

## 📁 Archivos Más Importantes (Tu Mapa del Tesoro)

### 🔥 Los Que MÁS Vas a Tocar:
- **`src/data/index.js`** → 🎯 **TU ARCHIVO ESTRELLA** - Proyectos, skills, traducciones
- **`public/assets/`** → 🖼️ Carpeta donde pones las imágenes de tus proyectos
- **`src/App.css`** → 🎨 Colores y estilos de tu página

### ⚙️ Los de Configuración (Mejor no tocar):
- **`package.json`** → Lista de herramientas que usa tu proyecto
- **`deploy.js`** → Script mágico que sube tu página a internet
- **`src/App.js`** → Cerebro principal de tu aplicación React

### 🧩 Componentes (Si quieres personalizar más):
- **`src/components/Navbar.jsx`** → La barra de navegación de arriba
- **`src/pages/ProjectsPage.jsx`** → La página donde se muestran tus proyectos
- **`src/contexts/LanguageContext.js`** → Maneja el cambio de idiomas

---

## 🐛 Problemas Comunes y Cómo Solucionarlos

### 🖼️ "Mi imagen no aparece"
**Posibles causas:**
- ✅ **Verifica:** ¿Está la imagen en `public/assets/`?
- ✅ **Verifica:** ¿Usaste la ruta correcta? `"/assets/mi-imagen.png"`
- ✅ **Verifica:** ¿El nombre del archivo es exactamente igual? (mayúsculas/minúsculas importan)

### 🌐 "Mi traducción no se muestra"
**Posibles causas:**
- ✅ **Verifica:** ¿Agregaste el texto en AMBOS idiomas (`es` y `en`)?
- ✅ **Verifica:** ¿El nombre es exactamente igual en ambos idiomas?
- ✅ **Verifica:** ¿No tiene tildes el nombre de la clave?

### 🚨 "La página no carga / hay errores"
**Soluciones en orden:**
1. **Revisa la consola:** En VS Code, mira si hay errores en rojo
2. **Verifica comas:** ¿No olvidaste una coma después de un `}`?
3. **Verifica corchetes:** ¿Cada `{` tiene su `}` y cada `[` tiene su `]`?
4. **Comando de rescate:** `npm install` y luego `npm start`

### 💻 "npm no funciona"
**Solución:** Necesitas instalar Node.js desde https://nodejs.org

---

## 💡 Tips de Oro (Para No Olvidar)

### 🎯 Regla de Oro #1:
**El 90% de las veces solo necesitas tocar `src/data/index.js`**

### 🎯 Regla de Oro #2:
**Siempre haz `npm start` antes de trabajar**

### 🎯 Regla de Oro #3:
**Si algo se rompe, lo primero que haces es `Ctrl + Z` (deshacer)**

### 🎯 Regla de Oro #4:
**Copia y pega estructuras existentes, luego modifica los datos**

### 🎯 Regla de Oro #5:
**Guarda seguido con `Ctrl + S`**

---

## 🔄 Tu Flujo de Trabajo Diario

### Para Agregar un Proyecto:
```
1. 🖼️ Poner imagen en public/assets/
2. 📝 Abrir src/data/index.js
3. 🧩 Copiar estructura de proyecto existente
4. ✏️ Modificar los datos (título, descripción, etc.)
5. 💾 Guardar (Ctrl + S)
6. 👀 Ver el resultado en localhost:3000
7. 🚀 Si se ve bien: npm run build && npm run deploy
```

### Para Agregar una Skill:
```
1. 📝 Abrir src/data/index.js
2. 🔍 Buscar la categoría correcta en skillsData
3. 🧩 Copiar estructura de skill existente
4. ✏️ Cambiar nombre e ícono
5. 💾 Guardar (Ctrl + S)
6. 👀 Ver el resultado en localhost:3000
```

---

## 🎓 ¿Qué Aprender Después?

Cuando ya domines lo básico, puedes investigar:

### 📚 Conceptos React Importantes:
- **Estados (useState)** → Cómo manejar información que cambia
- **Efectos (useEffect)** → Cómo hacer cosas cuando la página se carga
- **Props** → Cómo pasar información entre componentes

### 🛠️ Herramientas Útiles:
- **TypeScript** → JavaScript con "tipos" (más seguro)
- **Next.js** → React pero más poderoso
- **Tailwind CSS** → CSS más rápido de escribir

### 🌐 Recursos de Aprendizaje:
- **React Docs:** https://reactjs.org/docs/
- **Devicons:** https://devicon.dev/
- **CSS Gradients:** https://uigradients.com/
- **Colores Bonitos:** https://coolors.co/

---

## 🎉 ¡Felicidades!

Ya tienes todo lo que necesitas para mantener y mejorar tu portfolio. Recuerda:

- 🐌 **Ve despacio:** No trates de aprender todo de una vez
- 🧪 **Experimenta:** Copia cosas y modifícalas
- 💪 **Practica:** Cada proyecto que agregues te hace mejor
- 🤝 **Pide ayuda:** Si algo no funciona, pregunta

**¡Tu portfolio en React es increíble y va a seguir creciendo contigo!** 🚀

---
*Guía creada especialmente para principiantes en React*  
*Última actualización: Julio 2025*
