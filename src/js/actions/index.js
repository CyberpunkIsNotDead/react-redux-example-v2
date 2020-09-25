import { createAction } from "@reduxjs/toolkit";
import {
  ADD_ARTICLE,
  DATA_LOADED,
  FOUND_BAD_WORD,
  TEST,
} from "../constants/action-types";

// export function addArticle(payload) {
//   return { type: ADD_ARTICLE, payload };
// }

export const addArticle = createAction(ADD_ARTICLE);

// export function testDispatch() {
//   return { type: TEST };
// }

export const testDispatch = createAction(TEST);

export const removeBadWord = createAction(FOUND_BAD_WORD);

export const getData = () => (dispatch) => {
  dispatch(testDispatch());
  dispatch(addArticle({ title: "1" }));
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      dispatch({ type: DATA_LOADED, payload: json });
    });
};
