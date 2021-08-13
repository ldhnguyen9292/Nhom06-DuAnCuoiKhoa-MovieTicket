import axios from "axios";
import { GET_SHOW_TIMES } from "../constants/show-time.constant";

export const getShowTimesAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: "GET",
      });
      dispatch({ type: GET_SHOW_TIMES, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postShowTimesAction = async (data, token) => {
  try {
    const res = await axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status === 200) alert(res.data);
  } catch (error) {
    console.log(error);
  }
};
