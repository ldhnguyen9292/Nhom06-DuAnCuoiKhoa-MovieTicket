import { GET_CAROUSEL_LIST } from "../constants/carousel.constants";

const initialState = {
  carouselList: [],
};

export const carouselReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CAROUSEL_LIST:
      state.carouselList = payload;
      return { ...state };
    default:
      return state;
  }
};
