import { useState, useEffect } from "react";
const useAutosave = () => {
  const [active, toggleActive] = useState<boolean>(true);
  const autoSave: Function = () => {
    const saveTemp: Function = (x: {}[]) => {
      Array.isArray(x)
        ? x!.map((item) => {
            console.log(item);
          })
        : null;
    };
    return active && saveTemp();
  };

  return [autoSave, toggleActive];
};

export default useAutosave;
