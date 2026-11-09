import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

test('toggles between light and dark mode', () => {
  localStorage.setItem('theme', 'light');
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  expect(screen.getByText(/current theme: light/i)).toBeInTheDocument();
  userEvent.click(screen.getByRole('button'));
  expect(screen.getByText(/current theme: dark/i)).toBeInTheDocument();
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
});
