import { useState } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.log(e);
    }
  });

  const setValue = (value: string | ((arg?: any) => any)) => {
    try {
      const val = value instanceof Function ? value(storedValue) : value;
      setStoredValue(val);
    } catch (e) {
      console.log(e);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
