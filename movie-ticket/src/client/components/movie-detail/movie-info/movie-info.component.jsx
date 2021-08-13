import React, { useState, useEffect } from "react";
import { useStyles } from "./movie-info-styles.component";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import InfoFilm from "../infoFilm/infoFilm.component";
import { CircularProgress } from "@material-ui/core";
// import StarIcon from "@material-ui/icons/Star";
import ArrowIcon from "./../../../../assets/svg/MyArrowIcon";
// import Img from "./../../../../assets/images/aquaman.jpg";
import { useSelector } from "react-redux";
import format from "date-format";
import ModalVideo from "../../modal-video/modal-video.component";
import clsx from "clsx";

function MovieInfoBooking(props) {
  const classes = useStyles();
  const [info, setInfo] = useState(false);
  const [open, setOpen] = useState(false);
  const movieDetail = useSelector((state) => state.movie.movieDetail);
  const mongoMovieDetail = useSelector((state) => state.movie.mongoMovieDetail);
  const { tenPhim, hinhAnh, ngayKhoiChieu } = movieDetail;
  const { thoiLuongChieu, IMDB, dinhDang, danhGia, soNguoiDanhGia } =
    mongoMovieDetail;

  const handleShowInfo = () => {
    setInfo(!info);
  };

  useEffect(() => {
    const root = document.getElementById("information");
    root.scrollTop = root.scrollHeight;
  }, [info]);

  const handleClose = () => {
    setOpen(!open);
  };
  const handleMore = () => {
    console.log("Run");
  };

  return (
    <div className={classes.root} id="information">
      <Container className={classes.container}>
        <Box boxShadow={10} className={classes.Box} id="information">
          <div className={classes.fade}></div>
          <div className={classes.content}>
            <div className={classes.contentBox}>
              <div className={classes.left}>
                <div className={classes.imgBox}>
                  <img
                    src={hinhAnh?.replace("http", "https")}
                    alt={"Hình đại diện"}
                  />
                  <div className={classes.btnBox}>
                    <Button onClick={handleClose} className={classes.btn}>
                      <ArrowIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <div className={classes.right}>
                <div className={classes.rightBox}>
                  <h3>{tenPhim}</h3>
                  <p>
                    {thoiLuongChieu} phút - {IMDB} IMDb - {dinhDang}
                  </p>
                  <p>{format("dd/MM/yyyy", new Date(ngayKhoiChieu))}</p>
                  <div className={classes.progressBox}>
                    <div className={classes.proText}>{danhGia}</div>
                    <CircularProgress
                      variant="determinate"
                      value={danhGia * 10}
                      className={classes.progress}
                    />
                  </div>
                  <div>
                    <p style={{ fontSize: "13px" }}>
                      {soNguoiDanhGia} người đánh giá
                    </p>
                    <Button
                      onClick={handleShowInfo}
                      className={classes.btnInfo}
                    >
                      chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
        <div className={clsx(info ? classes.infoFileDown : classes.infoFileUp)}>
          <InfoFilm />
        </div>
        <ModalVideo
          slider={movieDetail}
          open={open}
          handleClose={handleClose}
          handleMore={handleMore}
        />
      </Container>
    </div>
  );
}

export default MovieInfoBooking;
