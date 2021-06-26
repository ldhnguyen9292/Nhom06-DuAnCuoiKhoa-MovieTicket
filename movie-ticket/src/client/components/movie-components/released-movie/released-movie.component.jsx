import React, { useRef, useState } from "react";
import { useStyles } from "./released-movie-styles.component";
import CardMovie from "../../movie-card/movie-card-1/movie-card.component";
import CardMovie2 from "../../movie-card/movie-card-2/movie-card-2.component";
import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import clsx from "clsx";
import TrangTi from "./../../../../assets/images/trang-ti.jpg";
import HungThanTrang from "./../../../../assets/images/hung-than-trang.png";
import BanTayDietQuy from "./../../../../assets/images/ban-tay-diet-quy.png";

function ReleasedMovie() {
  const classes = useStyles();
  const array = [
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
  const [active, setActive] = useState(false);
  const [page, setPage] = useState({
    itemInPage: 12,
    pageNum: 1,
  });
  const pageTotal = Math.round(array.length / 10);

  const changeActive = () => {
    setActive(!active);
  };

  const handleChangePage = (event) => {
    const value = event.target.innerText;
    if (value) {
      setPage({ ...page, pageNum: parseInt(event.target.innerText) });
    } else {
      const text = event.target.innerHTML;
      const next = text.includes("M10");
      const prev = text.includes("M15");
      if (next && page.pageNum < pageTotal) {
        setPage({ ...page, pageNum: page.pageNum + 1 });
      }
      if (prev && page.pageNum > 1) {
        setPage({ ...page, pageNum: page.pageNum - 1 });
      }
    }
  };

  const renderMovieList1 = () => {
    return (
      <Grid container>
        {array.map((movie, index) => {
          const { itemInPage, pageNum } = page;
          const begin = 1 * (itemInPage * (pageNum - 1));
          const end = page.itemInPage * page.pageNum;
          if (index + 1 >= begin && index + 1 <= end) {
            return (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.cardItem}
              >
                <CardMovie movie={movie} />
              </Grid>
            );
          } else return;
        })}
      </Grid>
    );
  };

  const renderMovieList2 = () => {
    return (
      <Grid container>
        {array.map((movie, index) => {
          const { itemInPage, pageNum } = page;
          const begin = 1 * (itemInPage * (pageNum - 1));
          const end = page.itemInPage * page.pageNum;
          if (index + 1 >= begin && index + 1 <= end) {
            return (
              <Grid key={index} className={classes.cardItem2}>
                <CardMovie2 movie={movie} />
              </Grid>
            );
          } else return;
        })}
      </Grid>
    );
  };

  return (
    <Grid>
      <div className={classes.title}>
        <span>Phim đang chiếu</span>
        <div>
          <ViewModuleIcon
            className={clsx(
              classes.arrangeIcon,
              !active ? classes.arrangeIconActive : ""
            )}
            onClick={changeActive}
          />
          <FormatListBulletedIcon
            className={clsx(
              classes.arrangeIcon,
              active ? classes.arrangeIconActive : ""
            )}
            onClick={changeActive}
          />
        </div>
      </div>
      {!active ? renderMovieList1() : renderMovieList2()}
      <Pagination
        count={pageTotal}
        variant="outlined"
        shape="rounded"
        size="large"
        className={classes.pagination}
        onClick={handleChangePage}
      />
    </Grid>
  );
}

export default ReleasedMovie;
