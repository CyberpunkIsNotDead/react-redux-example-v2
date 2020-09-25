import { ADD_ARTICLE, DATA_LOADED, TEST } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  test: null,
};

function rootReducer(state = initialState, action) {
  console.log(action);
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
    });
  }

  if (action.type === DATA_LOADED) {
    console.log(action);
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload),
    });
  }

  if (action.type === TEST) {
    return { ...state, test: "test" };
  }

  return state;
}

export default rootReducer;
