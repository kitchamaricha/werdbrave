
    import React, { useState, useEffect, useCallback } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      // Ensure initialValue is used if item is null or undefined
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  }, [key, storedValue]);

  useEffect(() => {
    if (typeof window !== "undefined") {
        try {
            const item = window.localStorage.getItem(key);
            if (item !== null) {
                setStoredValue(JSON.parse(item));
            } else {
                 // If item is null and storedValue is different from initialValue, update localStorage
                 // This handles cases where localStorage might have been cleared externally
                 if (JSON.stringify(storedValue) !== JSON.stringify(initialValue)) {
                    window.localStorage.setItem(key, JSON.stringify(storedValue));
                 }
            }
        } catch (error) {
            console.error(`Error syncing localStorage key “${key}”:`, error);
        }
    }
    // Add initialValue to dependency array if you want changes in initialValue to potentially reset the state
  }, [key, initialValue]);


  return [storedValue, setValue];
}

export default useLocalStorage;
  