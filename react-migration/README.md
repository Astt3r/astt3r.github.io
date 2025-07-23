# React Migration Structure

This folder contains React components, hooks, and utilities prepared for migrating your portfolio website to React.

## 📁 Folder Structure

```
react-migration/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar component
│   ├── Hero.jsx        # Hero section component
│   ├── Skills.jsx      # Skills section component
│   ├── Footer.jsx      # Footer component
│   └── index.js        # Components barrel export
├── hooks/              # Custom React hooks
│   ├── useTheme.js     # Theme management hook
│   ├── useChileClock.js # Chile clock functionality hook
│   ├── useMobileMenu.js # Mobile menu management hook
│   └── index.js        # Hooks barrel export
├── utils/              # Utility functions
│   ├── scrollUtils.js  # Smooth scrolling utilities
│   ├── themeUtils.js   # Theme management utilities
│   └── index.js        # Utils barrel export
├── App.jsx            # Main App component
└── README.md          # This file
```

## 🚀 Components

### Navbar
- Responsive navigation with mobile hamburger menu
- Includes theme toggle functionality
- Manages mobile menu state

### Hero
- Main hero section with avatar, name, and badges
- Includes Chile clock display
- About section

### Skills
- Modular skill sections (Languages, Frameworks, Database & Cloud, Tools)
- Reusable `TechCard` and `SkillBox` components
- Supports both icon fonts and custom images

### Footer
- Simple footer with copyright and social links
- Includes "go to top" functionality

## 🎣 Custom Hooks

### useTheme
- Manages light/dark theme switching
- Handles localStorage persistence
- Detects system theme preference

### useChileClock
- Updates Chile timezone clock every minute
- Returns formatted time string

### useMobileMenu
- Manages mobile menu open/close state
- Provides toggle, open, and close functions

## 🔧 Utilities

### scrollUtils
- Smooth scrolling functionality
- Anchor link handling
- Scroll to top functionality

### themeUtils
- Theme detection and management
- LocalStorage operations for theme persistence
- Icon generation for theme toggle

## 📝 Migration Notes

When ready to migrate to React:

1. **Set up React project**:
   ```bash
   npx create-react-app astt3r-portfolio
   # or
   npm create vite@latest astt3r-portfolio -- --template react
   ```

2. **Copy these files** to your React project structure

3. **Install dependencies**:
   - Your existing CSS should work with minor modifications
   - Oneko.js can be imported as a module or added via useEffect

4. **CSS Considerations**:
   - Your existing `styles.css` should mostly work
   - You might need to update some selectors
   - Consider migrating to CSS modules or styled-components

5. **Additional Components Needed**:
   - Projects page component
   - Contact form component
   - Project cards carousel

## 🎨 Styling

The components are designed to work with your existing CSS classes. Key classes used:
- `.top-nav`, `.mobile-nav` for navigation
- `.hero`, `.hero-avatar`, `.hero-title` for hero section
- `.skill-box`, `.skill-grid`, `.tech-card` for skills
- `.site-footer`, `.footer-content` for footer

## 🔮 Future Enhancements

Consider these when migrating:
- Add TypeScript for better type safety
- Implement React Router for client-side routing
- Add loading states and error boundaries
- Implement proper SEO with React Helmet
- Add animations with Framer Motion
- Consider using a state management solution (Zustand, Redux)

## 📦 Recommended Packages for Migration

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^4.0.0"
  }
}
```

## 🚧 Migration Checklist

- [ ] Set up React project
- [ ] Copy components and adapt imports
- [ ] Test theme switching functionality
- [ ] Test mobile menu functionality
- [ ] Verify clock updates
- [ ] Test smooth scrolling
- [ ] Add oneko.js integration
- [ ] Create Projects page component
- [ ] Create Contact form component
- [ ] Add routing with React Router
- [ ] Test responsiveness
- [ ] Deploy and test on production

This structure provides a solid foundation for migrating your portfolio to React while maintaining all existing functionality!
