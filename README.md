# Astt3r Portfolio - React Version

## 🚀 Migración Completa a React

Este proyecto ha sido completamente migrado de HTML/CSS/JavaScript vanilla a **React**, manteniendo toda la funcionalidad original y mejorando la estructura del código.

### ✨ Características

- **Tema Galaxia Cálida & NieR**: Sistema de temas con paleta de colores personalizada
- **Multiidioma**: Soporte para Español e Inglés
- **Canvas de Estrellas**: Fondo animado con partículas
- **Responsive**: Completamente adaptable a dispositivos móviles
- **Oneko**: Gato que sigue el cursor (mantiene la funcionalidad original)
- **Smooth Scrolling**: Navegación suave entre secciones

### 🛠️ Tecnologías

- **React 18**
- **React Router DOM** - Navegación entre páginas
- **CSS Variables** - Sistema de temas dinámico
- **Canvas API** - Efectos visuales
- **Local Storage** - Persistencia de preferencias

### 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── Navbar.jsx      # Navegación responsive
│   ├── Hero.jsx        # Sección principal
│   ├── Skills.jsx      # Sección de habilidades
│   ├── Footer.jsx      # Pie de página
│   ├── FloatingControls.jsx  # Controles de tema e idioma
│   ├── StarfieldCanvas.jsx   # Canvas animado
│   └── index.js        # Exportaciones
├── pages/              # Páginas principales
│   ├── HomePage.jsx    # Página de inicio
│   ├── ProjectsPage.jsx # Página de proyectos
│   ├── ContactPage.jsx # Página de contacto
│   └── index.js
├── hooks/              # Custom hooks
│   ├── useTheme.js     # Manejo de temas
│   ├── useLanguage.js  # Manejo de idiomas
│   ├── useChileClock.js # Reloj de Chile
│   ├── useMobileMenu.js # Menú móvil
│   └── index.js
├── utils/              # Utilidades
│   ├── scrollUtils.js  # Funciones de scroll
│   ├── themeUtils.js   # Utilidades de tema
│   └── index.js
├── data/               # Datos de la aplicación
│   └── index.js        # Traducciones y datos de skills/proyectos
├── App.js             # Componente principal
├── App.css            # Estilos (migrados de styles.css)
└── index.js           # Punto de entrada
```

### 🎨 Mejoras en la Migración

1. **Componentización**: Código modular y reutilizable
2. **Estado Reactivo**: Manejo eficiente del estado con hooks
3. **Routing**: Navegación SPA con React Router
4. **Custom Hooks**: Lógica reutilizable encapsulada
5. **TypeScript Ready**: Estructura preparada para migración futura a TS

### 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo
npm start

# Construcción para producción
npm run build

# Deploy a GitHub Pages
npm run deploy
```

### 🌟 Funcionalidades Mantenidas

- ✅ Tema Galaxia Cálida (modo oscuro)
- ✅ Tema NieR Automata (modo claro)
- ✅ Canvas de estrellas animado
- ✅ Cambio de idioma (ES/EN)
- ✅ Reloj de Chile en tiempo real
- ✅ Menú móvil hamburguesa
- ✅ Smooth scrolling
- ✅ Oneko (gato cursor)
- ✅ Tooltips informativos
- ✅ Diseño responsive

### 📝 Notas de la Migración

- Los assets están en `/public/assets/`
- Los estilos CSS se mantienen en `App.css`
- La funcionalidad de oneko se carga dinámicamente
- Las traducciones están centralizadas en `/src/data/`
- Los temas siguen funcionando con CSS variables

### 🔮 Futuras Mejoras

- [ ] Migración a TypeScript
- [ ] Implementación de tests
- [ ] Optimización de bundle
- [ ] PWA capabilities
- [ ] Server-side rendering (Next.js)

---

**Desarrollado con ❤️ por Astt3r usando React**
