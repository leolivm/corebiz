import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "root",
      storage: storage,
      whitelist: ["cart"],
    },
    reducers
  );

  return persistedReducer;
};
