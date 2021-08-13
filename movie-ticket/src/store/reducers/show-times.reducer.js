import { GET_SHOW_TIMES } from "../constants/show-time.constant";

const initialState = {
  list: [],
};

export const showTimeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SHOW_TIMES:
      state.list = payload;
      return { ...state };
    default:
      return state;
  }
};
