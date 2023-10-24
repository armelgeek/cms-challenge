import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { initSubscriber } from "./subscriber";
import { combinedReducers } from "./reducer.js";
//const storage = require("redux-persist/lib/storage").default;
const bindMiddleware = (middleware:any) => {
  if (process.env.NODE_ENV !== "production") {
   return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
const persistConfig = {
  key: "root",
  whitelist: ["common"],
  //storage,
};
//const persistedReducer = persistReducer(persistConfig, combinedReducers);
const initializeStore = () => {
  const store = createStore(
      combinedReducers,
      bindMiddleware([thunkMiddleware])
  );
  initSubscriber(store);
 // let persistor = persistStore(store);
  let persistor  = null;
  return { store, persistor };
};
export default () => {
  return initializeStore();
};
