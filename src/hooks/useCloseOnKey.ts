import { useEffect } from 'react';

export const useCloseOnKey = (key: string, handler: () => void) => {
  const closeOnKey = (e: globalThis.KeyboardEvent) => {
    if (e.key === key) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeOnKey);
    return () => document.removeEventListener('keydown', closeOnKey);
  }, []);
};
