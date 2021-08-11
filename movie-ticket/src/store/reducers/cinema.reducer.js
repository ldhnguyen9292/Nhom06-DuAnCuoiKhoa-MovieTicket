import { GET_CINEMA_LIST } from "../constants/cinema.constants";

const initialState = {
  cinemaList: [],
};

export const cinemaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CINEMA_LIST:
      state.cinemaList = payload;
      return { ...state };
    default:
      return state;
  }
};
