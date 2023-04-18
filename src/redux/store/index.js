import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persis/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import personeReducer from "../reducers/personeReducer";

const persistConfig = {
  key: "root",
  storage,
  tranforms: [
    encryptTransform({
      secreKey: process.end.REACT_APP_PERSIST_KEY
    })
  ]
};

const rootReducer = combineReducers({
  persone: personeReducer
});

const persisteReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persisteReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);
