import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "reducers"

const persistConfig = {
  key: "root",
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = [thunkMiddleware]
const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, composedEnhancers)
export const persistor = persistStore(store)

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("reducers", () => store.replaceReducer(rootReducer))
}
