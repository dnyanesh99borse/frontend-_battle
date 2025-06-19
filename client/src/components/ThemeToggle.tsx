import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
}