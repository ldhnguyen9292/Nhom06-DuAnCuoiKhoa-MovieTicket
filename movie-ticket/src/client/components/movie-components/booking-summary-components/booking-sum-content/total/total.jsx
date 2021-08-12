import React, { useState } from "react";
import { Grid, Paper, IconButton, Modal } from "@material-ui/core";
import { useStyles } from "./total-styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import Rules from "./../rules/rules";
import { useHistory } from "react-router-dom";
import { postTicketBookingAction } from "../../../../../../store/actions/movie.action";

function Total() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [rules, setRules] = useState(false);
  const ticket = JSON.parse(localStorage.getItem("ticket"));
  const mongoUserInfo = JSON.parse(localStorage.getItem("mongoUserInfo"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let payMethod = JSON.parse(localStorage.getItem("payMethod"));
  let donate = JSON.parse(localStorage.getItem("donate"));
  const price = ticket.reduce((sum, t) => sum + t.giaVe, 0);
  const [voucher, setVoucher] = useState(0);

  const handleRules = () => {
    setRules(!rules);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const renderModal = () => {
    return (
      <Modal open={open} onClose={handleOpen}>
        <div onClick={handleOpen} className={classes.ruleModal}>
          <Rules />
        </div>
      </Modal>
    );
  };

  const handleVoucher = (e) => {
    setVoucher(e.target.value * mongoUserInfo.khuyenMai);
  };
  const renderVouder = () => {
    return (
      <>
        <span>
          {mongoUserInfo.khuyenMai.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </span>
        <br />
        <div className={classes.voucherBox}>
          <div className={classes.voucher}>
            <label htmlFor="voucherYes">Dùng</label>
            <input
              type="radio"
              id="voucherYes"
              name="voucher"
              onClick={handleVoucher}
              value={1}
            />
          </div>
          <div className={classes.voucher}>
            <label htmlFor="voucherNo">Không dùng</label>
            <input
              type="radio"
              id="voucherNo"
              name="voucher"
              onClick={handleVoucher}
              value={0}
            />
          </div>
        </div>
      </>
    );
  };

  const sumTotal = () => {
    const bonus = payMethod ? Math.round(price * payMethod.fee/100) : 0;
    const d = donate && donate.status ? donate.fee : 0;
    let total = price + d + bonus - voucher;
    let temp = voucher > 0 ? 0 : mongoUserInfo.khuyenMai;
    if (total < 0) {
      temp = -total;
      total = 0;
    }
    localStorage.setItem("total", JSON.stringify({ total, voucher: temp }));
    return total.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const handleSubmit = () => {
    if (!rules) {
      alert("Vui lòng đồng ý với điều khoản của MovieTicket");
      return;
    }
    if (!userInfo) {
      alert("Vui lòng đăng nhập để thực hiện tính năng này");
      return;
    }

    const userBooking = JSON.parse(localStorage.getItem("userBooking"));
    const { maLichChieu } = userBooking;
    const { taiKhoan, accessToken } = userInfo;
    let danhSachVe = [];
    danhSachVe = ticket.map((value) => ({
      maGhe: value.maGhe,
      giaVe: value.giaVe,
    }));
    const data = {
      maLichChieu,
      danhSachVe,
      taiKhoanNguoiDung: taiKhoan,
    };
    postTicketBookingAction(data, accessToken);
    history.push(`/movie/booking-confirmation`);
  };

  return (
    <Paper>
      <Grid className={classes.BSTop}>
        <p>Thông tin đặt vé</p>
      </Grid>
      <Grid container justify="space-between">
        <Grid item xs={6} className={classes.textLeft}>
          <div>
            <p>
              Ghế :{" "}
              {ticket.map((t) => (
                <span key={t.stt}> {t.stt + " "}</span>
              ))}
            </p>
            <p className={classes.payName}>{ticket.length} vé</p>
          </div>
        </Grid>
        <Grid item xs={4} className={classes.textRight}>
          <p>
            {price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        </Grid>

        {payMethod && payMethod.id ? (
          <>
            <Grid item xs={6} className={classes.textLeft}>
              <div>
                <p>Phí thanh toán</p>
                <p className={classes.payName}>{payMethod.name}</p>
              </div>
            </Grid>
            <Grid item xs={4} className={classes.textRight}>
              <p>{payMethod.fee === 0 ? "miễn phí" : `${payMethod.fee}%`}</p>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {donate && donate.status ? (
          <>
            <Grid item xs={6} className={classes.textLeft}>
              <p>Tiền donate</p>
            </Grid>
            <Grid item xs={4} className={classes.textRight}>
              <p>
                {donate.fee.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </Grid>
          </>
        ) : (
          <></>
        )}
        <Grid item xs={6} className={classes.textLeft}>
          <span style={{ margin: "1em 0" }}>Khuyến mãi: {renderVouder()}</span>
        </Grid>
        <Grid item xs={4} className={classes.textRight}>
          <p>
            {voucher.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        </Grid>
      </Grid>
      <Grid container className={classes.sum}>
        <Grid item xs={7} className={classes.sumLeft}>
          Tổng cộng
        </Grid>
        <Grid item xs={5} className={classes.sumRight}>
          {sumTotal()}
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            direction="row"
            className={classes.ruleBox}
          >
            <Grid item xs={2}>
              <IconButton onClick={handleRules}>
                {rules ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
              </IconButton>
            </Grid>
            <Grid item xs={10}>
              <span>
                Đồng ý với
                <span className={classes.rules} onClick={handleOpen}>
                  {" "}
                  điều khoản{" "}
                </span>
                của Movie Ticket
              </span>
            </Grid>
          </Grid>
        </Grid>
        <button onClick={handleSubmit} className={classes.btnPay}>
          Xác nhận
        </button>
      </Grid>
      {renderModal()}
    </Paper>
  );
}

export default Total;
