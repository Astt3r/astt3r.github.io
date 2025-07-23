const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...');

// Copiar archivos del build de React al root
const buildDir = './build';
const rootDir = './';

// Archivos que necesitamos copiar desde build/
const filesToCopy = [
  'index.html',
  'static/',
  'asset-manifest.json',
  'oneko.gif',
  'oneko.js'
];

// Función para copiar directorios recursivamente
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  // Copiar archivos de React build al root
  console.log('📁 Copying React build files...');
  
  // En lugar de copiar a react-index.html, sobrescribir index.html directamente
  fs.copyFileSync(path.join(buildDir, 'index.html'), path.join(rootDir, 'index.html'));
  
  // Copiar la carpeta static
  if (fs.existsSync(path.join(buildDir, 'static'))) {
    if (!fs.existsSync(path.join(rootDir, 'static'))) {
      fs.mkdirSync(path.join(rootDir, 'static'), { recursive: true });
    }
    copyDir(path.join(buildDir, 'static'), path.join(rootDir, 'static'));
  }
  
  // Copiar assets si existen en build
  if (fs.existsSync(path.join(buildDir, 'assets'))) {
    copyDir(path.join(buildDir, 'assets'), path.join(rootDir, 'assets'));
  }
  
  // Copiar otros archivos
  ['asset-manifest.json', 'oneko.gif', 'oneko.js'].forEach(file => {
    if (fs.existsSync(path.join(buildDir, file))) {
      fs.copyFileSync(path.join(buildDir, file), path.join(rootDir, file));
    }
  });
  
  // Crear un backup del index.html original como legacy.html
  console.log('� Creating backup of original HTML version...');
  
  // Renombrar astt3r-page.html a legacy.html para mantener acceso
  if (fs.existsSync(path.join(rootDir, 'astt3r-page.html'))) {
    fs.copyFileSync(path.join(rootDir, 'astt3r-page.html'), path.join(rootDir, 'legacy.html'));
  }
  
  console.log('✅ Deployment completed successfully!');
  console.log('📋 Files structure:');
  console.log('   - index.html (React app - MAIN ENTRY)');
  console.log('   - legacy.html (original HTML version)');
  console.log('   - astt3r-page.html (kept for compatibility)');
  console.log('   - static/ (React assets)');
  console.log('🌐 Ready for GitHub Pages deployment!');
  console.log('🏠 Main URL will load React app directly!');
  
} catch (error) {
  console.error('❌ Deployment failed:', error);
  process.exit(1);
}
