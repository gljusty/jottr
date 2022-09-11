import { config, DefaultConfig } from "../shared/config";

const useDefaultConfig = (_?: Partial<DefaultConfig>) => {
  const c = _ || config;
  return [c];
};

export default useDefaultConfig;
