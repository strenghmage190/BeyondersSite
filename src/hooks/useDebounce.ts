import { useState, useEffect } from 'react';

// O hook recebe um valor e um tempo de atraso (delay)
export function useDebounce<T>(value: T, delay: number): T {
  // Estado para guardar o valor "atrasado"
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Configura um temporizador para atualizar o valor debounced
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpa o temporizador se o valor mudar (isso reinicia o processo)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Roda novamente apenas se o valor ou o delay mudarem

  return debouncedValue;
}
