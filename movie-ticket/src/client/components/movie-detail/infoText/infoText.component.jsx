import React from "react";
import { useStyles } from "./infoText-styles.component";
import { useSelector } from "react-redux";
import format from "date-format";

function InfoText() {
  const classes = useStyles();

  const mongoMovieDetail = useSelector((state) => state.movie.mongoMovieDetail);
  const { daoDien, dienVien, theLoai, quocGiaSX, dinhDang } = mongoMovieDetail;
  const movieDetail = useSelector((state) => state.movie.movieDetail);
  const { moTa, ngayKhoiChieu } = movieDetail;

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.info}>
          <p className={classes.bold}>Ngày công chiếu</p>
          <p>{format("dd/MM/yyyy", new Date(ngayKhoiChieu))}</p>
        </div>
        <div className={classes.info}>
          <p className={classes.bold}>Đạo diễn</p>
          <p>{daoDien}</p>
        </div>
        <div className={classes.info}>
          <p className={classes.bold}>Diễn viên</p>
          <p>{dienVien}</p>
        </div>
        <div className={classes.info}>
          <p className={classes.bold}>Thể Loại</p>
          <p>{theLoai}</p>
        </div>
        <div className={classes.info}>
          <p className={classes.bold}>Định dạng</p>
          <p>{dinhDang}</p>
        </div>
        <div className={classes.info}>
          <p className={classes.bold}>Quốc Gia SX</p>
          <p>{quocGiaSX}</p>
        </div>
      </div>
      <div className={classes.right}>
        <p className={classes.bold}>Nội dung</p>
        <p>{moTa}</p>
      </div>
    </div>
  );
}

export default InfoText;
