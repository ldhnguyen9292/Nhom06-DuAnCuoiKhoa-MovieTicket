import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { useStyles } from "./bc-content-styles";
import { Paper, Grid, CardMedia } from "@material-ui/core";
import TicketBook from "./../../../../../assets/images/pur2.png";
import QR from "./../../../../../assets/images/qr.png";
import clsx from "clsx";
import format from "date-format";

function BCContent() {
  const classes = useStyles();
  const bookingResult = JSON.parse(localStorage.getItem("bookingResult"));
  const userBooking = JSON.parse(localStorage.getItem("userBooking"));
  const ticket = JSON.parse(localStorage.getItem("ticket"));
  const total = JSON.parse(localStorage.getItem("total")).total;
  let data = "";
  let status = false;
  if (bookingResult) {
    data = bookingResult.data;
    status = bookingResult.status;
  }
  const { maPhim, tenPhim, ngayChieuGioChieu, thongTinRap } = userBooking;
  const time = new Date(ngayChieuGioChieu);
  const maDatVe = maPhim + " - " + format("dd-MM-yy", new Date());
  const ngayChieu = time.toLocaleString("vi-VN", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const gioChieu = time.toLocaleString("vi-VN", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const rap = thongTinRap.tenCumRap + " - " + thongTinRap.tenRap;

  return (
    <div>
      <Grid container style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Grid item xs={12}>
          <div className={classes.topBox}>
            {status === 200 ? (
              <>
                <CheckCircleIcon className={classes.successIcon} />
                <p>
                  Thanh toán{" "}
                  <span className={classes.successText}>
                    {total.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>{" "}
                  thành công!
                </p>
              </>
            ) : (
              <>
                <CancelIcon className={classes.successIcon} />
                <p>{data}</p>
              </>
            )}
          </div>
        </Grid>
        <div className={classes.line} />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.paperTop}>
              <p>Mã đặt vé của bạn đã được xác nhận!</p>
              <span>Mã đặt vé : {maDatVe}</span>
            </div>
            <div className={classes.paperLine}></div>
            <div className={classes.paperBot}>
              <Grid container className={classes.paperBotInner}>
                <Grid item xs={12} lg={10}>
                  <Grid container>
                    <Grid item xs={12} sm={9}>
                      <Grid container className={classes.contentInnerLeft}>
                        {/* <Grid item xs={12} sm={3} className={classes.imgInner}>
                          <CardMedia image={BoGiaIcon} />
                        </Grid> */}
                        <Grid
                          item
                          xs={12}
                          sm={9}
                          className={classes.contentInner}
                        >
                          <h4>{tenPhim}</h4>
                          <p>
                            {ngayChieu} | {gioChieu}
                          </p>
                          <p>{rap}</p>
                        </Grid>
                        <Grid className={classes.ticketBook}>
                          <CardMedia component="img" src={TicketBook} />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={3}
                      className={classes.contentInnerRight}
                    >
                      <h3>
                        {ticket.length} vé <br />
                        {ticket.map((t) => (
                          <span key={t}>{t.stt + " "}</span>
                        ))}
                      </h3>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={2} className={classes.qrSetting}>
                  <CardMedia component="img" src={QR} />
                  <h4>
                    Booking ID
                    <br />
                    {maDatVe}
                  </h4>
                </Grid>
                <Grid item xs={12} lg={10} className={classes.contentTotal}>
                  <Grid container justify="space-between">
                    <h3>Tổng cộng</h3>
                    <h4>
                      {total.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </h4>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Paper>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            style={{ textAlign: "center" }}
          >
            <p>
              Bạn có thể xem lại vé đã đặt của bạn trên trang thông tin cá nhân.
            </p>
            <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} className={classes.btn}>
                <button className={classes.btnInvite}>INVITE FRIENDS</button>
                <button className={clsx(classes.btnInvite, classes.btnLocate)}>
                  Locate Friend
                </button>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BCContent;
