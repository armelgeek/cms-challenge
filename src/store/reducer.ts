import { combineReducers } from "redux";
import { getExcludeModules } from "./exludes";
import {mergeReducers} from './magick/reducer';
import * as modules from "./modules";
const reducers = {};
for (const [moduleName,{ reducer}] of Object.entries(modules)) {
	// @ts-ignore
	reducers[moduleName] =  !getExcludeModules(moduleName) ? mergeReducers(moduleName,reducer.initialState,reducer.mutations): reducer;
}
const combinedReducers = combineReducers(reducers);
export { reducers, combinedReducers };
