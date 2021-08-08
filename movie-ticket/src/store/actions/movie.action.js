import axios from "axios";
import {
  GET_CHAIR_LIST,
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_MONGO,
  GET_MOVIE_LIST,
} from "../constants/movie.constants";

const URLbase = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim";
const mongoURL = "https://moveticket-mongodb.herokuapp.com/movieDetail";

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
    console.log(error.response.data);
  }
};
const mongoMovieActions = async (method, queryParams, data) => {
  try {
    const res = await axios({
      method,
      url: `${mongoURL}/${queryParams}`,
      data,
    });
    return res;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getMovieListAction = (maNhom) => {
  return async (dispatch) => {
    try {
      const res = await movieActions("GET", `LayDanhSachPhim?maNhom=${maNhom}`);
      if (res.status === 200) {
        dispatch({
          type: GET_MOVIE_LIST,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=0
export const getMovieDetailAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const res = await movieActions("GET", `LayThongTinPhim?MaPhim=${maPhim}`);
      if (res.status === 200) {
        dispatch({
          type: GET_MOVIE_DETAIL,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieDetailMongoAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const res = await mongoMovieActions("GET", maPhim);
      if (res.status === 200) {
        dispatch({
          type: GET_MOVIE_DETAIL_MONGO,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putRatingMongoAction = (maPhim, data) => {
  return async (dispatch) => {
    try {
      await mongoMovieActions("PUT", maPhim, data);
      await dispatch(getMovieDetailMongoAction(maPhim));
    } catch (error) {
      console.log(error);
    }
  };
};

//Chair list
export const getChairListAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: "GET",
      });
      if (res.status === 200) {
        dispatch({
          type: GET_CHAIR_LIST,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
