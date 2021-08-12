import React, { memo } from "react";
import { useStyles } from "./top-header-styles";
import { useSelector } from "react-redux";
import { Grid, IconButton, Typography } from "@material-ui/core";
import BackIcon from "./../../../../../assets/svg/back.jsx";
import { useHistory } from "react-router-dom";

function TopHeader(props) {
  const classes = useStyles();
  const history = useHistory();
  const userBooking = JSON.parse(localStorage.getItem("userBooking"));
  const { tenPhim, thoiLuong, ngayChieuGioChieu } = userBooking;
  const time = new Date(ngayChieuGioChieu);
  const { ticket } = props;
  const chairs = useSelector((state) => state.movie.chairList.danhSachGhe);

  const handleBackButton = () => {
    console.log("goback");
    history.goBack();
  };

  const handleSubmit = () => {
    const chairChosen = chairs?.filter((chair) => chair.daChon);
    const daDatIndex = chairChosen.findIndex((chair) => chair.daDat);
    if (daDatIndex !== -1) {
      alert(`Ghế ${chairChosen[daDatIndex].stt} đã được đặt`);
      return;
    }

    localStorage.setItem("ticket", JSON.stringify(chairChosen));
    history.push("/movie/booking-summary");
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.container}>
        <Grid item xs={12} sm={4}>
          <Grid container alignItems="center" className={classes.topLeft}>
            <Grid item className={classes.backIcon} onClick={handleBackButton}>
              <BackIcon />
            </Grid>
            <Grid item className={classes.textBox}>
              <p>Số lượng vé</p>
              <p className={classes.text}>{ticket}</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.topMid}>
            <h3>
              {tenPhim} - {thoiLuong} Phút
            </h3>
            <h4>
              {time.toLocaleString("vi-VN", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </h4>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container className={classes.topRight} onClick={handleSubmit}>
            <IconButton>
              <Typography className={classes.payIcon}>Thanh toán</Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default memo(TopHeader);
