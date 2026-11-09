# Context API – Theme Switcher

A small React app that uses the Context API to manage a light / dark theme.

## How it works

- `src/context/ThemeContext.js` exports:
  - `ThemeProvider` – holds the `theme` state and provides `theme`, `setTheme` and `toggleTheme`.
  - `useTheme()` – hook to read the context (throws if used outside the provider).
- The theme is saved in `localStorage` and falls back to the system preference.
- The provider sets `data-theme` on `<html>`; colors are defined as CSS variables in `src/App.css`.

## Usage

```jsx
// index.js
<ThemeProvider>
  <App />
</ThemeProvider>

// any component
const { theme, toggleTheme } = useTheme();
```

## Scripts

- `npm start` – run the dev server at http://localhost:3000
- `npm test` – run tests
- `npm run build` – production build
