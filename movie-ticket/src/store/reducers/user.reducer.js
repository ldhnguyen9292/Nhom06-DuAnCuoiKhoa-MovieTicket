import {
  GET_USER_LIST,
  PUT_USER_KEY,
  PUT_USER_LOGIN_STATUS,
} from "../constants/user.consants";

const initialState = {
  userList: [],
  userKeys: {
    arrayLength: 0,
    page: 1,
    pageSize: 7,
    keySearch: "",
    filter: { key: "", value: "" },
    sort: "",
    order: "",
  },
  isLogin: Boolean(JSON.parse(localStorage.getItem("userInfo"))),
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_LIST:
      state.userList = payload;
      state.userKeys.arrayLength = payload.totalCount;
      return { ...state };
    case PUT_USER_KEY:
      state.userKeys = { ...state.userKeys, ...payload };
      return { ...state };
    case PUT_USER_LOGIN_STATUS:
      state.isLogin = payload;
      return { ...state };
    default:
      return state;
  }
};
