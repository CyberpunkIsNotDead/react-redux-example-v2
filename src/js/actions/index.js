import { ADD_ARTICLE, DATA_LOADED, TEST } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function testDispatch() {
  return { type: TEST };
}

export function getData() {
  return function (dispatch) {
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
}
