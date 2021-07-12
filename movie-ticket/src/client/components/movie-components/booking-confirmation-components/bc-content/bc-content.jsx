import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useStyles } from "./bc-content-styles";
import { Paper, Grid, CardMedia } from "@material-ui/core";
import TicketBook from "./../../../../../assets/images/pur2.png";
import BoGiaIcon from "./../../../../../assets/images/bo-gia-icon.jpg";
import QR from "./../../../../../assets/images/qr.png";
import clsx from "clsx";

function BCContent() {
  const classes = useStyles();
  return (
    <div>
      <Grid container style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Grid item xs={12}>
          <div className={classes.topBox}>
            {" "}
            <CheckCircleIcon className={classes.successIcon} />
            <p>
              Thanh toán <span className={classes.successText}>100000VND</span>{" "}
              thành công!
            </p>
          </div>
        </Grid>
        <div className={classes.line} />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.paperTop}>
              <p>Mã đặt vé của bạn đã được xác nhận!</p>
              <span>Mã đặt vé : SSST0000310644 </span>
            </div>
            <div className={classes.paperLine}></div>
            <div className={classes.paperBot}>
              <Grid container className={classes.paperBotInner}>
                <Grid item xs={12} lg={10}>
                  <Grid container>
                    <Grid item xs={12} sm={9}>
                      <Grid container className={classes.contentInnerLeft}>
                        <Grid item xs={12} sm={3} className={classes.imgInner}>
                          <CardMedia image={BoGiaIcon} />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={9}
                          className={classes.contentInner}
                        >
                          <h4>Bố già</h4>
                          <p>Thuyết minh, 2D</p>
                          <p>Mon, 31 Dec | 09.30PM</p>
                          <p>Galaxy Tân Bình - Rạp 1</p>
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
                        2 Vé <br />
                        <span>thường - A1, A2</span>
                      </h3>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={2} className={classes.qrSetting}>
                  <CardMedia component="img" src={QR} />
                  <h4>
                    Booking ID
                    <br />
                    SSST0000310644
                  </h4>
                </Grid>
                <Grid item xs={12} lg={10} className={classes.contentTotal}>
                  <Grid container justify="space-between">
                    <h3>Tổng cộng</h3>
                    <h4>100000VNĐ</h4>
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
              <br />
              Chúng tôi sẽ gửi e-Mail/SMS xác nhận trong vòng 15 phút.
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
