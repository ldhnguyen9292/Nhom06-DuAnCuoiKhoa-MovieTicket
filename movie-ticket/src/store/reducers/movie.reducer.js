import {
  GET_CHAIR_LIST,
  GET_COMING_SOON,
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_MONGO,
  GET_MOVIE_LIST,
  PUT_CHAIR_BOOKING,
} from "./../constants/movie.constants";

const initialState = {
  movieList: [],
  comingSoon: [],
  movieDetail: {},
  mongoMovieDetail: {},
  chairList: {},
  ticket: 0,
};

export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE_LIST:
      state.movieList = payload;
      return { ...state };
    case GET_COMING_SOON:
      state.comingSoon = payload;
      return { ...state };
    case GET_MOVIE_DETAIL:
      state.movieDetail = payload;
      return { ...state };
    case GET_MOVIE_DETAIL_MONGO:
      state.mongoMovieDetail = payload;
      state.mongoMovieDetail.danhGia = (
        payload.scoreArray.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        ) / payload.scoreArray.length
      ).toFixed(1);
      state.mongoMovieDetail.soNguoiDanhGia = payload.scoreArray.length;
      return { ...state };
    case GET_CHAIR_LIST:
      state.chairList = payload;
      return { ...state };
    case PUT_CHAIR_BOOKING:
      const { maGhe } = payload;
      const index = state.chairList.danhSachGhe.findIndex(
        (value) => value.maGhe === maGhe
      );
      const temp = state.chairList.danhSachGhe[index].daChon;
      state.chairList.danhSachGhe[index].daChon = !temp;
      !temp ? state.ticket++ : state.ticket--;
      return { ...state };
    default:
      return state;
  }
};
