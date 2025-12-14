import React, { useState } from 'react';
import RetroWindow from '../components/RetroWindow';
import {
  RetroButton,
  RetroInput,
  RetroTextarea,
  RetroCheckbox,
  RetroSeparator,
  RetroWell,
  RetroMenu,
  RetroMenuItem,
  RetroMenuSeparator
} from '../components/RetroComponents';
import '../App.css';

/**
 * Página de demostración de componentes estilo Windows 95
 * con la paleta de colores personalizada del portfolio
 */
const RetroShowcasePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showWindow, setShowWindow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '80px 20px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        marginBottom: '8px',
        background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Retro Windows 95 Components
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
        Componentes con estilo Windows 95 usando la paleta de colores personalizada del portfolio
      </p>

      {/* Ventana de ejemplo */}
      {showWindow && (
        <RetroWindow 
          title="Welcome to Portfolio.exe"
          onClose={() => setShowWindow(false)}
          width="500px"
        >
          <h3 style={{ marginBottom: '12px', color: 'var(--accent)' }}>
            Sistema de diseño retro
          </h3>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            Esta ventana utiliza bordes biselados característicos de Windows 95,
            manteniendo la paleta de colores burdeos/rojo sobre negro del portfolio.
          </p>
          <RetroSeparator />
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <RetroButton onClick={() => alert('¡Hola!')}>Aceptar</RetroButton>
            <RetroButton onClick={() => setShowWindow(false)}>Cancelar</RetroButton>
          </div>
        </RetroWindow>
      )}

      {!showWindow && (
        <RetroButton onClick={() => setShowWindow(true)}>
          Mostrar ventana de ejemplo
        </RetroButton>
      )}

      {/* Formulario de ejemplo */}
      <div className="retro-card" style={{ maxWidth: '600px' }}>
        <div className="retro-titlebar">Formulario de Ejemplo</div>
        <div style={{ padding: '16px' }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>
              Nombre:
            </label>
            <RetroInput
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ingresa tu nombre"
              style={{ width: '100%' }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>
              Mensaje:
            </label>
            <RetroTextarea
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              placeholder="Escribe un mensaje"
              rows={4}
            />
          </div>

          <RetroCheckbox
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            label="Acepto los términos y condiciones"
          />

          <RetroSeparator />

          <RetroButton 
            onClick={() => alert(`Nombre: ${inputValue}\nMensaje: ${textareaValue}\nAceptado: ${isChecked}`)}
            style={{ width: '100%' }}
          >
            Enviar
          </RetroButton>
        </div>
      </div>

      {/* Panel con información */}
      <div className="retro-card" style={{ maxWidth: '600px' }}>
        <div className="retro-titlebar">Información del Sistema</div>
        <div style={{ padding: '16px' }}>
          <RetroWell>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <strong style={{ color: 'var(--accent)' }}>Sistema:</strong> Portfolio OS 95<br />
              <strong style={{ color: 'var(--accent)' }}>Versión:</strong> 1.0.0<br />
              <strong style={{ color: 'var(--accent)' }}>Tema:</strong> Galaxia Cálida<br />
              <strong style={{ color: 'var(--accent)' }}>Colores:</strong> Burdeos (#D95030) / Rojo (#AB4455)
            </div>
          </RetroWell>
        </div>
      </div>

      {/* Botones de ejemplo */}
      <div className="retro-card" style={{ maxWidth: '600px' }}>
        <div className="retro-titlebar">Botones</div>
        <div style={{ padding: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <RetroButton>Normal</RetroButton>
          <RetroButton disabled>Deshabilitado</RetroButton>
          <RetroButton onClick={() => alert('¡Click!')}>Con acción</RetroButton>
          <RetroButton style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
            Primario
          </RetroButton>
        </div>
      </div>

      {/* Menu contextual */}
      <div className="retro-card" style={{ maxWidth: '600px' }}>
        <div className="retro-titlebar">Menú Contextual</div>
        <div style={{ padding: '16px' }}>
          <RetroButton onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? 'Ocultar menú' : 'Mostrar menú'}
          </RetroButton>
          
          {showMenu && (
            <div style={{ marginTop: '12px', width: 'fit-content' }}>
              <RetroMenu>
                <RetroMenuItem onClick={() => alert('Opción 1')}>
                  Opción 1
                </RetroMenuItem>
                <RetroMenuItem onClick={() => alert('Opción 2')}>
                  Opción 2
                </RetroMenuItem>
                <RetroMenuSeparator />
                <RetroMenuItem onClick={() => alert('Opción 3')}>
                  Opción 3
                </RetroMenuItem>
                <RetroMenuItem onClick={() => setShowMenu(false)}>
                  Cerrar menú
                </RetroMenuItem>
              </RetroMenu>
            </div>
          )}
        </div>
      </div>

      {/* Información de uso */}
      <div className="retro-card" style={{ maxWidth: '800px' }}>
        <div className="retro-titlebar">Cómo usar estos componentes</div>
        <div style={{ padding: '16px' }}>
          <p style={{ marginBottom: '12px', lineHeight: '1.6' }}>
            Estos componentes están diseñados para darle un toque retro distintivo a tu portfolio
            manteniendo la identidad visual existente. Puedes usarlos en:
          </p>
          <RetroWell>
            <ul style={{ paddingLeft: '24px', lineHeight: '1.8', fontSize: '14px' }}>
              <li>Tarjetas de proyectos con estilo de ventana</li>
              <li>Formularios de contacto con bordes biselados</li>
              <li>Botones de navegación con efecto 3D</li>
              <li>Paneles de información con aspecto hundido</li>
              <li>Elementos interactivos con estética retro</li>
            </ul>
          </RetroWell>
          <RetroSeparator />
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '12px' }}>
            Todos los componentes respetan automáticamente el tema claro/oscuro del portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RetroShowcasePage;
