import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Grid, CardMedia } from "@material-ui/core";
import { useStyles } from "./seat-main-styles";
import Screen from "./../../../../../assets/images/screen.png";
import clsx from "clsx";
import ChairComponent from "./chair/chair.component";

function SeatMain() {
  const classes = useStyles();
  const chairList = useSelector((state) => state.movie.chairList);
  if (!chairList) return;

  const { danhSachGhe, thongTinPhim } = chairList;

  return (
    <div className={classes.root}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h3>{thongTinPhim?.tenRap}</h3>
        <div className="st_seat_full_container">
          <div className="st_seat_lay_economy_wrapper float_left">
            <CardMedia component="img" src={Screen} />
            <Grid container justify="space-between" direction="row">
              {danhSachGhe?.map((chair) => {
                return (
                  <Grid item key={chair.stt}>
                    <Grid
                      container
                      justify="space-around"
                      className={classes.seatMain}
                    >
                      <ChairComponent chair={chair} />
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <Grid container justify="center" className={classes.seatInfo}>
              <Grid className={classes.seat}>
                <label>Trống</label>
              </Grid>
              <Grid className={clsx(classes.seat, classes.seatActive)}>
                <label>Chọn</label>
              </Grid>
              <Grid className={clsx(classes.seat, classes.seatDisabled)}>
                <label>Đã đặt</label>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(SeatMain);
