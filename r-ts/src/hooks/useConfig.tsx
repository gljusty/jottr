import { config } from "../shared/config/config";
import { DefaultConfig } from "../shared/config/config.types";
import { useState, useEffect } from "react";

const useConfig = <T extends Partial<DefaultConfig>>(
  _?: T
): T | Partial<DefaultConfig> => {
  const [c, setC] = useState<T | Partial<DefaultConfig>>(_ || config);

  useEffect(() => {
    setC(_!);
  }, [_]);
  return [c];
};

export default useConfig;
