import React, { memo } from "react";
import { useStyles } from "./top-header-styles";
import { Grid, IconButton, Typography } from "@material-ui/core";
import BackIcon from "./../../../../../assets/svg/back.jsx";
import { NavLink, useHistory } from "react-router-dom";

function TopHeader(props) {
  const classes = useStyles();
  const history = useHistory();
  const userBooking = JSON.parse(localStorage.getItem("userBooking"));
  const { tenPhim, thoiLuong, ngayChieuGioChieu } = userBooking;
  const time = new Date(ngayChieuGioChieu);
  const { ticket } = props;

  const handleBackButton = () => {
    console.log("goback");
    history.goBack();
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
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
          <Grid container className={classes.topRight}>
            <NavLink to="/movie/booking-summary">
              <IconButton>
                <Typography className={classes.payIcon}>Thanh toán</Typography>
              </IconButton>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default memo(TopHeader);
