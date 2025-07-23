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
  
  // Copiar index.html (sobrescribir el actual)
  fs.copyFileSync(path.join(buildDir, 'index.html'), path.join(rootDir, 'react-index.html'));
  
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
  
  // Crear el nuevo index.html que redirija a React
  console.log('🔄 Creating redirect index.html...');
  const redirectHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Astt3r Portfolio - React Version</title>
    <meta http-equiv="refresh" content="0; url=react-index.html">
    <link rel="canonical" href="react-index.html">
    <style>
        body {
            font-family: 'Pixelify Sans', monospace;
            background: #1a1a1a;
            color: #00ff88;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            text-align: center;
        }
        .loading {
            animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        a {
            color: #00ff88;
            text-decoration: none;
        }
        a:hover {
            color: #00ccff;
        }
    </style>
</head>
<body>
    <div class="loading">
        <h1>🚀 Loading Astt3r Portfolio (React)</h1>
        <p>Redirecting to the new React version...</p>
        <p>If you are not redirected automatically, <a href="react-index.html">click here</a>.</p>
        <br>
        <p><small><a href="astt3r-page.html">View original HTML version</a></small></p>
    </div>
    
    <script>
        // JavaScript fallback for redirection
        setTimeout(() => {
            window.location.href = "react-index.html";
        }, 1000);
    </script>
</body>
</html>`;
  
  // Escribir el nuevo index.html
  fs.writeFileSync(path.join(rootDir, 'index.html'), redirectHTML);
  
  console.log('✅ Deployment completed successfully!');
  console.log('📋 Files structure:');
  console.log('   - index.html (redirects to React)');
  console.log('   - react-index.html (React app)');
  console.log('   - astt3r-page.html (original HTML)');
  console.log('   - static/ (React assets)');
  console.log('🌐 Ready for GitHub Pages deployment!');
  
} catch (error) {
  console.error('❌ Deployment failed:', error);
  process.exit(1);
}
