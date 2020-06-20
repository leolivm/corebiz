import { persistStore } from "redux-persist";
import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import persistReducers from "./persistReducers";

const enhancer =
  process.env.NODE_ENV === "development" ? console.tron.createEnhancer() : null;

const store = createStore(persistReducers(rootReducer), enhancer);
const persistor = persistStore(store);

export { store, persistor };
