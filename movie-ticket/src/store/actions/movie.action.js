import axios from "axios";
import { GET_MOVIE_LIST } from "../constants/movie.constants";

const URLbase = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim";

const movieActions = async (method, queryParams, data, token) => {
  try {
    const res = await axios({
      method,
      url: `${URLbase}/${queryParams}`,
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {
    alert(error.response.data);
  }
};

export const getMovieListAction = (maNhom) => {
  return async (dispatch) => {
    const res = await movieActions("GET", `LayDanhSachPhim?maNhom=${maNhom}`);
    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: GET_MOVIE_LIST,
        payload: res.data,
      });
    }
  };
};
