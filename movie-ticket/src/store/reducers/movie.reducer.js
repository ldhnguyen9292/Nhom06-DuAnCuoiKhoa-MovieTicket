const initialState = {
  movieList: [],
};

export const movieReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
