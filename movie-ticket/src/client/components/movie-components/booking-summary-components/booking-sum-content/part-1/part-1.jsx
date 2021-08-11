import React, { memo } from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  cinemaInfo: {
    padding: "0 20px",
    fontWeight: "bold",
  },
  paper: {
    marginTop: 12,
    marginBottom: 40,
  },
}));

function PartOne() {
  const classes = useStyles();
  const userBooking = JSON.parse(localStorage.getItem("userBooking"));
  const ticket = JSON.parse(localStorage.getItem("ticket"));
  const { ngayChieuGioChieu } = userBooking;
  const { tenCumRap, tenRap } = userBooking.thongTinRap;
  const time = new Date(ngayChieuGioChieu);

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3} className={classes.cinemaInfo}>
        <Grid item xs={4}>
          Ngày
        </Grid>
        <Grid item xs={8}>
          {time.toLocaleString("vi-VN", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </Grid>
        <Grid item xs={4}>
          Giờ
        </Grid>
        <Grid item xs={8}>
          {time.toLocaleString("vi-VN", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </Grid>
        <Grid item xs={4}>
          Rạp chiếu phim
        </Grid>
        <Grid item xs={8}>
          {tenCumRap} - {tenRap}
        </Grid>
        <Grid item xs={4}>
          Chỗ ngồi
        </Grid>
        <Grid item xs={8}>
          {ticket.map((t) => (
            <span key={t.stt}>{t.stt + " "}</span>
          ))}
          - {ticket.length} vé
        </Grid>
      </Grid>
    </Paper>
  );
}

export default memo(PartOne);
