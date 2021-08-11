import axios from "axios";
import { GET_CINEMA_LIST } from "../constants/cinema.constants";

export const getCinemaListAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        method: "GET",
      });
      dispatch({ type: GET_CINEMA_LIST, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};
