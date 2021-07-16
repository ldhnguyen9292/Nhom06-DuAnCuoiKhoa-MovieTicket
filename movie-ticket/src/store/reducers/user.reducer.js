import { GET_USER_LIST, PUT_USER_KEY } from "../constants/user.consants";

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
    default:
      return state;
  }
};
