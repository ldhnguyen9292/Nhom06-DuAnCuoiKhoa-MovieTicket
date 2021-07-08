import {
  GET_CAROUSEL_LIST,
  PUT_CAROUSEL_KEY,
} from "../constants/carousel.constants";

const initialState = {
  carouselList: [],
  carouselKeys: {
    arrayLength: 0,
    page: 1,
    pageSize: 7,
    keySearch: "",
    sort: "",
    order: "",
  },
};

export const carouselReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CAROUSEL_LIST:
      state.carouselList = payload.data;
      state.carouselKeys.arrayLength = parseInt(payload.length);
      return { ...state };
    case PUT_CAROUSEL_KEY:
      state.carouselKeys = { ...state.carouselKeys, ...payload };
      return { ...state };
    default:
      return state;
  }
};
