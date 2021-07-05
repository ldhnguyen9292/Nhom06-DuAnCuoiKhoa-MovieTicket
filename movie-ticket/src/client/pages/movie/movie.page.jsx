import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ReleasedMovie from "./../../components/movie-components/released-movie/released-movie.component";
import SearchMovie from "./../../components/movie-components/search-movie/search-movie.component";
import { Grid } from "@material-ui/core";
import TrangTi from "./../../../assets/images/trang-ti.jpg";
import HungThanTrang from "./../../../assets/images/hung-than-trang.png";
import BanTayDietQuy from "./../../../assets/images/ban-tay-diet-quy.png";
import { SearchService } from "./../../../services/search.service";
import { useStyles } from "./movie-styles.page";
import UpcomingMovie from "../../components/movie-components/upcoming/upcoming.component";
import TopMovie from './../../components/movie-components/top-movie/topMovie.component'

const initialArray = [
  {
    maPhim: "1",
    tenPhim: "Trạng Tí",
    theLoai: "Drama, hài kịch",
    danhGia: 8.5,
    hinhAnh: TrangTi,
    trailer: "https://www.youtube.com/embed/l2XBzUZidig",
  },
  {
    maPhim: "2",
    tenPhim: "Hung thần trắng",
    theLoai: "Drama, hài kịch",
    danhGia: 8.5,
    hinhAnh: HungThanTrang,
    trailer: "https://www.youtube.com/embed/yHSNsUnLaaA",
  },
  {
    maPhim: "3",
    tenPhim: "bàn tay diệt quỷ",
    theLoai: "Hành động, mạo hiểm",
    danhGia: 8.5,
    hinhAnh: BanTayDietQuy,
    trailer: "https://www.youtube.com/embed/uqJ9u7GSaYM",
  },
  {
    maPhim: "1",
    tenPhim: "Trạng Tí",
    theLoai: "Drama, hài kịch",
    danhGia: 8.5,
    hinhAnh: TrangTi,
    trailer: "https://www.youtube.com/embed/l2XBzUZidig",
  },
  {
    maPhim: "2",
    tenPhim: "Hung thần trắng",
    theLoai: "Drama, hài kịch",
    danhGia: 8.5,
    hinhAnh: HungThanTrang,
    trailer: "https://www.youtube.com/embed/yHSNsUnLaaA",
  },
  {
    maPhim: "3",
    tenPhim: "bàn tay diệt quỷ",
    theLoai: "Hành động, mạo hiểm",
    danhGia: 5,
    hinhAnh: BanTayDietQuy,
    trailer: "https://www.youtube.com/embed/uqJ9u7GSaYM",
  },
  {
    maPhim: "1",
    tenPhim: "Trạng Tí",
    theLoai: "Drama, hài kịch",
    danhGia: 7,
    hinhAnh: TrangTi,
    trailer: "https://www.youtube.com/embed/l2XBzUZidig",
  },
  {
    maPhim: "2",
    tenPhim: "Hung thần trắng",
    theLoai: "Drama, hài kịch",
    danhGia: 9,
    hinhAnh: HungThanTrang,
    trailer: "https://www.youtube.com/embed/yHSNsUnLaaA",
  },
  {
    maPhim: "3",
    tenPhim: "bàn tay diệt quỷ",
    theLoai: "Hành động, mạo hiểm",
    danhGia: 10,
    hinhAnh: BanTayDietQuy,
    trailer: "https://www.youtube.com/embed/uqJ9u7GSaYM",
  },
  {
    maPhim: "1",
    tenPhim: "Trạng Tí",
    theLoai: "Drama, hài kịch",
    danhGia: 8.5,
    hinhAnh: TrangTi,
    trailer: "https://www.youtube.com/embed/l2XBzUZidig",
  },
  {
    maPhim: "2",
    tenPhim: "Hung thần trắng",
    theLoai: "Drama, hài kịch",
    danhGia: 8.5,
    hinhAnh: HungThanTrang,
    trailer: "https://www.youtube.com/embed/yHSNsUnLaaA",
  },
  {
    maPhim: "3",
    tenPhim: "bàn tay diệt quỷ",
    theLoai: "Hành động, mạo hiểm",
    danhGia: 8.5,
    hinhAnh: BanTayDietQuy,
    trailer: "https://www.youtube.com/embed/uqJ9u7GSaYM",
  },
  {
    maPhim: "1",
    tenPhim: "Trạng Tí",
    theLoai: "Drama, hài kịch",
    danhGia: 8.5,
    hinhAnh: TrangTi,
    trailer: "https://www.youtube.com/embed/l2XBzUZidig",
  },
  {
    maPhim: "2",
    tenPhim: "Hung thần trắng",
    theLoai: "Drama, hài kịch",
    danhGia: 8.5,
    hinhAnh: HungThanTrang,
    trailer: "https://www.youtube.com/embed/yHSNsUnLaaA",
  },
  {
    maPhim: "3",
    tenPhim: "bàn tay diệt quỷ",
    theLoai: "Hành động, mạo hiểm",
    danhGia: 5,
    hinhAnh: BanTayDietQuy,
    trailer: "https://www.youtube.com/embed/uqJ9u7GSaYM",
  },
  {
    maPhim: "1",
    tenPhim: "Trạng Tí",
    theLoai: "Drama, hài kịch",
    danhGia: 7,
    hinhAnh: TrangTi,
    trailer: "https://www.youtube.com/embed/l2XBzUZidig",
  },
  {
    maPhim: "2",
    tenPhim: "Hung thần trắng",
    theLoai: "Drama, hài kịch",
    danhGia: 9,
    hinhAnh: HungThanTrang,
    trailer: "https://www.youtube.com/embed/yHSNsUnLaaA",
  },
  {
    maPhim: "3",
    tenPhim: "bàn tay diệt quỷ",
    theLoai: "Hành động, mạo hiểm",
    danhGia: 10,
    hinhAnh: BanTayDietQuy,
    trailer: "https://www.youtube.com/embed/uqJ9u7GSaYM",
  },
];
let array = initialArray;

const initialQueryParams = {
  page: 1,
  pageSize: 12,
  tenPhim: "",
  tenRap: [],
  topRate: false,
  topMovie: false,
  movie2D: false,
  movie3D: false,
  submit: false,
};

function Movie() {
  const classes = useStyles();
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const queryP = SearchService.QPUpdateValue(query, initialQueryParams);
  let queryParams = queryP;
  const [submit, setSubmit] = useState(false);
  const history = useHistory();

  const filterArray = () => {
    const newArray = SearchService.filterDataByName(
      initialArray,
      queryParams.tenPhim
    );
    array = newArray;
  };

  const handleChange = (queryP) => {
    queryParams = { ...queryParams, ...queryP };
    console.log(queryParams);
    if (queryParams.submit) {
      setSubmit(!submit);
      filterArray();
      let searchString = SearchService.createQPString(queryParams);
      history.push({
        pathname: "/movie",
        search: `${searchString}`,
      });
    }
  };

  return (
    <>
      {(queryParams.submit = false)}
      <TopMovie />
      <UpcomingMovie />
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={12} md={3}>
          <SearchMovie queryParams={queryParams} handleChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={9}>
          <ReleasedMovie
            array={array}
            queryParams={queryParams}
            handleChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Movie;
