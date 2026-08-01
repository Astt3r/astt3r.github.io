# Astt3r Portfolio

Personal portfolio built as a retro Windows 95-style desktop: boot screen, taskbar with a Start Menu, `.exe`-styled windows, desktop icons, custom pixel cursors and a starfield background — served as a React SPA.

Live at [astt3r.github.io](https://astt3r.github.io).

### ✨ Features

- **Windows 95 desktop shell**: taskbar with Start Menu, retro `.exe` windows (`System.exe`, `AboutMe.exe`, `Experience.exe`, `Contacts.exe`...), decorative desktop icons, custom pixel cursor set.
- **Two color themes**: dark "Warm Galaxy" and light "NieR Automata"-inspired palette, toggle in the taskbar.
- **Bilingual (ES/EN)** via `LanguageProvider` / `useLanguageContext`.
- **Boot screen** on load with a fake DOS-style progress sequence.
- **Animated starfield** background (canvas), plus the classic Oneko cursor-following cat.
- **Live Chile clock**, session-based visitor counter (CounterAPI), CV download.
- **Experience section**: interactive company carousel that reveals role/dates/achievements on click.

### 🛠️ Stack

- React 18, React Router DOM (HashRouter)
- Create React App (`react-scripts`)
- Hand-written CSS with CSS variables for theming — no UI framework
- Deployed via GitHub Actions to GitHub Pages (`.github/workflows/deploy.yml`)

### 📁 Structure

```
src/
├── components/     # Navbar, Hero, Skills, WorkedWith, Footer, RetroWindow, BootScreen, ...
├── pages/          # HomePage, ProjectsPage, ContactPage, MaintenancePage
├── hooks/          # useTheme, useChileClock
├── contexts/       # LanguageContext
├── data/           # translations, skills, projects and experience data
├── config/         # counterapi.config.js (reads from env vars, see .env.example)
├── utils/          # scrollUtils, themeUtils
├── styles/         # extra stylesheets (BootScreen, WorkedWith, MaintenancePage)
└── assets/         # icons, cursors
public/assets/      # images, CV PDF, etc. served statically
```

### 🚀 Commands

```bash
npm install     # install dependencies
npm start       # local dev server
npm run build   # production build
```

Deployment is automatic: pushing to `main` triggers the GitHub Actions workflow, which builds the app and publishes `build/` to GitHub Pages. There is no manual deploy script.

### 🔧 Environment variables

Copy `.env.example` to `.env` if you need to point the visitor counter at a different CounterAPI namespace/key.
