import { GET_NEWS_LIST, PUT_NEWS_KEY } from "../constants/news.contants";

const initialState = {
  newsList: [],
  newsKeys: {
    arrayLength: 0,
    page: 1,
    pageSize: 7,
    keySearch: "",
    filter: { key: "", value: "" },
    sort: "",
    order: "",
  },
};

export const newsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NEWS_LIST:
      state.newsList = payload.data;
      state.newsKeys.arrayLength = parseInt(payload.length);
      return { ...state };
    case PUT_NEWS_KEY:
      state.newsKeys = { ...initialState.newsKeys, ...payload };
      return { ...state };
    default:
      return state;
  }
};
