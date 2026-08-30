import { createContext, useContext } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const MotionContext = createContext(null);

export function MotionProvider({ children }) {
  const motionApi = useReducedMotion();
  return (
    <MotionContext.Provider value={motionApi}>{children}</MotionContext.Provider>
  );
}

// Context consumer hook co-located with provider (Fast Refresh caveat is acceptable here).
// eslint-disable-next-line react-refresh/only-export-components
export function useMotionContext() {
  const ctx = useContext(MotionContext);
  if (!ctx) {
    throw new Error('useMotionContext must be used within MotionProvider');
  }
  return ctx;
}
