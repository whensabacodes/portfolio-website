import { useThemeContext } from './ThemeProvider';

function SunIcon() {
  return (
    <svg
      className="theme-toggle__svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.1 5.1l1.6 1.6M17.3 17.3l1.6 1.6M5.1 18.9l1.6-1.6M17.3 6.7l1.6-1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="theme-toggle__svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M18.5 14.2A7.2 7.2 0 0 1 9.8 5.5 7.4 7.4 0 1 0 18.5 14.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Theme control: sun (light) / moon (dark).
 */
function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      className={[
        'theme-toggle',
        isDark ? 'theme-toggle--dark' : 'theme-toggle--light',
      ].join(' ')}
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      data-theme-toggle=""
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
      <span className="visually-hidden">{label}</span>
    </button>
  );
}

export default ThemeToggle;
