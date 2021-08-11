import axios from "axios";
import format from "date-format";
import {
  GET_CHAIR_LIST,
  GET_COMING_SOON,
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_MONGO,
  GET_MOVIE_LIST,
} from "../constants/movie.constants";
import { putClientUpdateUserInfoAction } from "./user.action";

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

//Cybersoft
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

export const getComingSoonAction = (maNhom) => {
  return async (dispatch) => {
    try {
      const res = await movieActions("GET", `LayDanhSachPhim?maNhom=${maNhom}`);
      if (res.status === 200) {
        dispatch({
          type: GET_COMING_SOON,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

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

export const postTicketBookingAction = async (data, token) => {
  try {
    const res = await axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      method: "POST",
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.setItem("bookingResult", JSON.stringify(res));
    if (res.status === 200) {
      const mongoUserInfo = JSON.parse(localStorage.getItem("mongoUserInfo"));
      const ticket = JSON.parse(localStorage.getItem("ticket"));
      const total = JSON.parse(localStorage.getItem("total"));
      const userBooking = JSON.parse(localStorage.getItem("userBooking"));
      const maDatVe =
        userBooking.maPhim + " - " + format("dd-MM-yy", new Date());
      let lichSuDatVe = mongoUserInfo.lichSuDatVe
        ? mongoUserInfo.lichSuDatVe
        : [];
      lichSuDatVe.push({
        maDatVe,
        ticket,
        userBooking,
      });
      const data = {
        khuyenMai: ticket.length * 500 + total.voucher,
        lichSuDatVe,
      };
      console.log(data);
      putClientUpdateUserInfoAction(data, mongoUserInfo.taiKhoan);
    }
  } catch (error) {
    console.log(error);
  }
};

//MongoDB
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
