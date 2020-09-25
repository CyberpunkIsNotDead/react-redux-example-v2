import { createReducer, createSlice } from "@reduxjs/toolkit";
import {
  ADD_ARTICLE,
  DATA_LOADED,
  FOUND_BAD_WORD,
  TEST,
} from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  test: null,
};

// function rootReducer(state = initialState, action) {
//   console.log(action);
//   if (action.type === ADD_ARTICLE) {
//     return Object.assign({}, state, {
//       articles: state.articles.concat(action.payload),
//     });
//   }

//   if (action.type === DATA_LOADED) {
//     console.log(action);
//     return Object.assign({}, state, {
//       remoteArticles: state.remoteArticles.concat(action.payload),
//     });
//   }

//   if (action.type === TEST) {
//     return { ...state, test: "test" };
//   }

//   if (action.type === FOUND_BAD_WORD) {
//     return state;
//   }

//   return state;
// }

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ADD_ARTICLE, (state, { payload }) => {
      state.articles.push(payload);
    })
    .addCase(DATA_LOADED, (state, { payload }) => {
      state.remoteArticles.push(...payload);
    })
    .addCase(TEST, (state) => {
      state.test = "test";
    })
    .addDefaultCase((state) => state);
});

// const rootSlice = createSlice({
//   name: "root",
//   initialState,
//   reducers: {},
// });

export default rootReducer;
