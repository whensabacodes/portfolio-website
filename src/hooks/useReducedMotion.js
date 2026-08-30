import { useEffect, useState } from 'react';

function getSystemPrefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function applyReducedMotion(enabled) {
  document.documentElement.setAttribute(
    'data-reduced-motion',
    enabled ? 'true' : 'false',
  );
}

/**
 * Tracks OS/browser prefers-reduced-motion.
 * No user-facing override — accessibility follows system preference.
 */
export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(getSystemPrefersReducedMotion);

  useEffect(() => {
    applyReducedMotion(reducedMotion);
  }, [reducedMotion]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return {
    reducedMotion,
    systemPrefers: reducedMotion,
  };
}
