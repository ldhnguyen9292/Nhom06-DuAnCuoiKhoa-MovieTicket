import { GET_MOVIE_LIST } from "./../constants/movie.constants";

const initialState = {
  movieList: [],
};

export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE_LIST:
      state.movieList = payload;
      return { ...state };
    default:
      return state;
  }
};
