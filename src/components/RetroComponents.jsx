import React from 'react';
import '../App.css';

/**
 * Botón estilo Windows 95 con tema personalizado
 */
export const RetroButton = ({ 
  children, 
  onClick, 
  type = "button",
  disabled = false,
  className = "",
  ...props 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`retro-button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Input estilo Windows 95
 */
export const RetroInput = ({ 
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`retro-input ${className}`}
      {...props}
    />
  );
};

/**
 * Textarea estilo Windows 95
 */
export const RetroTextarea = ({ 
  value,
  onChange,
  placeholder,
  rows = 4,
  className = "",
  ...props
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`retro-input ${className}`}
      style={{ resize: 'vertical', width: '100%' }}
      {...props}
    />
  );
};

/**
 * Checkbox estilo Windows 95
 */
export const RetroCheckbox = ({ 
  checked,
  onChange,
  label,
  className = "",
  ...props
}) => {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`retro-checkbox ${className}`}
        {...props}
      />
      {label && <span style={{ fontSize: '14px' }}>{label}</span>}
    </label>
  );
};

/**
 * Separador horizontal estilo Windows 95
 */
export const RetroSeparator = ({ className = "" }) => {
  return <div className={`retro-separator ${className}`} />;
};

/**
 * Panel hundido estilo Windows 95
 */
export const RetroWell = ({ children, className = "", ...props }) => {
  return (
    <div className={`retro-well ${className}`} {...props}>
      {children}
    </div>
  );
};

/**
 * Menu estilo Windows 95
 */
export const RetroMenu = ({ children, className = "", ...props }) => {
  return (
    <div className={`retro-menu ${className}`} {...props}>
      {children}
    </div>
  );
};

export const RetroMenuItem = ({ children, onClick, className = "", ...props }) => {
  return (
    <div className={`retro-menu-item ${className}`} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export const RetroMenuSeparator = () => {
  return <div className="retro-menu-separator" />;
};
