import './App.css';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Current theme: {theme}</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
      </header>
    </div>
  );
}

export default App;
