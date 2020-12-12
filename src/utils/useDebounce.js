import React, { useEffect, useState } from 'react';

export default (value, delay = 300) => {
  const [debounce, setDebouncedValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounce;
};
