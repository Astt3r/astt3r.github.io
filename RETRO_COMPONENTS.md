# Componentes Retro Windows 95

Sistema de componentes estilo Windows 95 personalizado con la paleta de colores del portfolio (burdeos/rojo sobre negro).

## 🎨 Características

- **Estilo Windows 95 auténtico**: Bordes biselados, sombras características, efectos 3D
- **Paleta personalizada**: Mantiene los colores del portfolio (--accent: #D95030, --accent-2: #AB4455)
- **Soporte de temas**: Funciona con tema oscuro (Galaxia Cálida) y claro (NieR: Automata)
- **Componentes reutilizables**: Ventanas, botones, inputs, checkboxes, menús y más

## 📦 Componentes Disponibles

### RetroWindow
Ventana con barra de título estilo Windows 95.

```jsx
import { RetroWindow } from './components';

<RetroWindow 
  title="Mi Ventana"
  onClose={() => console.log('Cerrar')}
  width="500px"
>
  <p>Contenido aquí</p>
</RetroWindow>
```

### RetroButton
Botón con bordes biselados y efecto 3D al hacer clic.

```jsx
import { RetroButton } from './components';

<RetroButton onClick={() => alert('Click')}>
  Hacer click
</RetroButton>
```

### RetroInput y RetroTextarea
Inputs con estilo hundido característico de Windows 95.

```jsx
import { RetroInput, RetroTextarea } from './components';

<RetroInput
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Escribe algo"
/>

<RetroTextarea
  value={text}
  onChange={(e) => setText(e.target.value)}
  rows={4}
/>
```

### RetroCheckbox
Checkbox con estilo Windows 95 y checkmark personalizado.

```jsx
import { RetroCheckbox } from './components';

<RetroCheckbox
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  label="Aceptar términos"
/>
```

### RetroWell
Panel hundido para mostrar información.

```jsx
import { RetroWell } from './components';

<RetroWell>
  <p>Información importante aquí</p>
</RetroWell>
```

### RetroMenu
Menú contextual estilo Windows 95.

```jsx
import { RetroMenu, RetroMenuItem, RetroMenuSeparator } from './components';

<RetroMenu>
  <RetroMenuItem onClick={() => console.log('Opción 1')}>
    Opción 1
  </RetroMenuItem>
  <RetroMenuSeparator />
  <RetroMenuItem onClick={() => console.log('Opción 2')}>
    Opción 2
  </RetroMenuItem>
</RetroMenu>
```

### RetroSeparator
Línea separadora horizontal.

```jsx
import { RetroSeparator } from './components';

<RetroSeparator />
```

## 🎯 Clases CSS Disponibles

Todas estas clases están disponibles globalmente en `App.css`:

- `.retro-card` - Tarjeta con bordes biselados
- `.retro-button` - Botón estilo Windows 95
- `.retro-input` - Input hundido
- `.retro-checkbox` - Checkbox personalizado
- `.retro-well` - Panel hundido
- `.retro-titlebar` - Barra de título con gradiente
- `.retro-menu` - Contenedor de menú
- `.retro-menu-item` - Item de menú
- `.retro-separator` - Separador horizontal
- `.retro-scrollbar` - Scrollbar personalizado

## 🚀 Ejemplo de Uso

Visita `/retro` en tu aplicación para ver una demostración completa de todos los componentes.

## 🎨 Personalización

Los colores se adaptan automáticamente al tema activo:

**Tema Oscuro (Galaxia Cálida):**
- Fondo: #0f1419 → #1c2128
- Acento: #D95030 → #AB4455
- Bordes: #4D596F

**Tema Claro (NieR: Automata):**
- Fondo: #f8f6f0 → #f2f0e8
- Acento: #c8a961 → #d4af37
- Bordes: #d0c2a0

## 💡 Casos de Uso Sugeridos

1. **Tarjetas de Proyectos**: Usa `RetroWindow` para darle un aspecto de ventana a cada proyecto
2. **Formulario de Contacto**: Reemplaza inputs normales con `RetroInput` y `RetroTextarea`
3. **Botones de Navegación**: Usa `RetroButton` para CTAs importantes
4. **Paneles de Información**: Usa `RetroWell` para destacar información
5. **Settings/Preferencias**: Usa `RetroCheckbox` para opciones de usuario

## 📝 Notas

- Los componentes mantienen la fuente `'Pixelify Sans'` del portfolio
- Todos los componentes son responsivos y funcionan en móvil
- Los cursores personalizados ya están configurados en `index.css`
- Compatible con React 18.2+

## 🔧 Dependencias

- `styled-components`: ^6.1.13
- `react95`: ^4.0.0 (instalado pero no usado directamente - solo para referencia)

En lugar de usar React95 directamente, estos componentes están construidos con CSS personalizado
para mantener total control sobre la apariencia y adaptarse perfectamente a la paleta de colores existente.
