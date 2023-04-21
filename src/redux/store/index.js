import { combineReducers, configureStore } from "@reduxjs/toolkit";
import personeReducer from "../reducers/personeReducer";
import personaReducer from "../reducers/personaReducer";
import meReducer from "../reducers/meReducer";
import experiencesReducer from "../reducers/experienceReducer";
import postsReducer from "../reducers/postsReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY
    })
  ]
};

const rootReducer = combineReducers({
  persone: personeReducer,
  persona: personaReducer,
  me: meReducer,
  experiences: experiencesReducer,
  posts: postsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);
