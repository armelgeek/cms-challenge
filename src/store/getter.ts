import { useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import * as modules from "./modules";
import { mergeGetter } from "./magick/getter";
import { getExcludeModules } from "./exludes";
const defaultGetter = (state:any) => state;
const getter = (moduleName:string, key:string) => {
  // @ts-ignore
  const getters = getExcludeModules(moduleName) ? modules[moduleName].getter : mergeGetter(modules, moduleName);
  if (getters && getters[key]) return getters[key];
  console.warn("getter not found:", moduleName, key);
  return defaultGetter;
};

const useGetter = (moduleName:string, key:string, props:any) => {
  const memoGetter = useMemo(() => {
    return getter(moduleName, key);
  }, []);
  const selecteor = useCallback((state:any) => memoGetter(state, props), [props]);
  return useSelector(selecteor);
};

export { getter, useGetter };
