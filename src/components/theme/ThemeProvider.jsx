import { createContext, useContext } from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const themeApi = useTheme();
  return (
    <ThemeContext.Provider value={themeApi}>{children}</ThemeContext.Provider>
  );
}

// Context consumer hook co-located with provider (Fast Refresh caveat is acceptable here).
// eslint-disable-next-line react-refresh/only-export-components
export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }
  return ctx;
}
