import { combineReducers } from "redux";

const filmsReducer = (state = [], action) => {
  if (action && action.type === "FETCH_MOVIES") return action.payload.results;
  return state;
};

const pageReducer = (state = 1, action) => {
  if (action.type === "PAGE_CHANGE") return action.payload;
  return state;
};

const searchReducer = (state = "", action) => {
  if (action.type === "SEARCH_TERM") {
    return action.payload;
  }
  return state;
};

const searchedReducer = (state = false, action) => {
  if (action.type === "SEARCHED") return action.payload;
  return state;
};

export default combineReducers({
  movies: filmsReducer,
  currentPage: pageReducer,
  searchTerm: searchReducer,
  searched: searchedReducer,
});
