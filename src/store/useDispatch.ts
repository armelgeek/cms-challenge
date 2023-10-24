import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getExcludeModules } from "./exludes.js";
import { mergeActions } from "./magick/action";
import * as modules from "./modules";
const defaultAction = () => {};
export default (moduleName:any, name:string) => {
  const dispatch = useDispatch();

  // console.log(selector)
  // console.log(moduleName, key)

  return useCallback((...params:any[]) => {
    // @ts-ignore
    const actions = getExcludeModules(moduleName) ? modules[moduleName].action : mergeActions(modules, moduleName);
    let action;
    if (actions && actions[name]) action = actions[name];
    else {
      console.warn("action not found:", moduleName, name);
      action = defaultAction;
    }
    return dispatch(action(...params));
  }, []);
};
