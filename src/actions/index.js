import axios from "axios";

export const fetchMovies = (term) => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=1020f42db436bfe26e9ced6ff9b34aa3&query=${term}`
  );
  console.log(response);
  dispatch({ type: "FETCH_MOVIES", payload: response.data });
};

export const changePage = (page) => {
  return { type: "PAGE_CHANGE", payload: page };
};

export const searchTerm = (value) => {
  return { type: "SEARCH_TERM", payload: value };
};

export const searched = (searched) => {
  return { type: "SEARCHED", payload: searched };
};
