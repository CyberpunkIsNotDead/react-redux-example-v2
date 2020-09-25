// import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
// import thunk from "redux-thunk";

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   storeEnhancers(applyMiddleware(thunk, forbiddenWordsMiddleware))
// );

const preloadedState = {
  articles: [],
  remoteArticles: [],
  test: null,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(forbiddenWordsMiddleware),
  // devTools: process.env.NODE_ENV !== 'production',
  // preloadedState,
});

export default store;
