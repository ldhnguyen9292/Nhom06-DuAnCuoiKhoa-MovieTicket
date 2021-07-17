import axios from "axios";
import { GET_USER_LIST } from "../constants/user.consants";

const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung";

export const getUserListAction = (urlExpand) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}/${urlExpand}`,
      });
      dispatch({
        type: GET_USER_LIST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postUserLogInAction = () => {
  console.log("log in");
};
