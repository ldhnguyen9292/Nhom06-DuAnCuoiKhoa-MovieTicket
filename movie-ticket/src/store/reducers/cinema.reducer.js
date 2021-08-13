import { GET_CINEMA_LIST, GET_ROOM_LIST } from "../constants/cinema.constants";

const initialState = {
  cinemaList: [],
  roomList: [],
};

export const cinemaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CINEMA_LIST:
      state.cinemaList = payload;
      return { ...state };
    case GET_ROOM_LIST:
      state.roomList = payload;
      return { ...state };
    default:
      return state;
  }
};
