import React, { useState } from "react";
import { Grid, Paper, CardMedia, IconButton, Modal } from "@material-ui/core";
import { useStyles } from "./booking-sum-content-styles";
import Bonus from "./../../../../../assets/images/cc1.jpg";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import Momo from "./../../../../../assets/images/momo.png";
import Zalopay from "./../../../../../assets/images/zalopay.png";
import VisaMaster from "./../../../../../assets/images/visa-master.png";
import Napas from "./../../../../../assets/images/napas.jpg";
import { NavLink } from "react-router-dom";
import Rules from "./rules/rules";

const payMethods = [
  {
    id: "momo",
    name: "momo",
    imgURL: Momo,
    fee: 0,
  },
  {
    id: "zalopay",
    name: "zalopay",
    imgURL: Zalopay,
    fee: 0,
  },
  {
    id: "napas",
    name: "Thẻ nội địa",
    imgURL: Napas,
    fee: 1,
  },
  {
    id: "visa",
    name: "Thẻ quốc tế",
    imgURL: VisaMaster,
    fee: 3,
  },
];

function BSContent() {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [pay, setPay] = useState(false);
  const [donate, setDonate] = useState();
  const [sum, setSum] = useState({ price: 100000, bonus: 0, payMethod: 0 });
  const [rules, setRules] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = (method) => {
    const { id, fee } = method;
    const status = state[id];
    setPay(method);
    setState({ [id]: !status });
    setSum({ ...sum, payMethod: fee });
  };

  const handleDonate = () => {
    setDonate(!donate);
    setSum({ ...sum, bonus: !donate ? 5000 : 0 });
  };

  const sumTotal = () => {
    const { price, bonus, payMethod } = sum;
    const payBonus = state[pay.id] ? (price * payMethod) / 100 : 0;
    let total = price + bonus + payBonus;
    return `${total} VNĐ`;
  };

  const handleRules = () => {
    setRules(!rules);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const renderModal = () => {
    return (
      <Modal open={open} onClose={handleOpen}>
        {
          <div onClick={handleOpen} className={classes.ruleModal}>
            <Rules />
          </div>
        }
      </Modal>
    );
  };

  return (
    <>
      <Grid container spacing={3} justify="center" className={classes.root}>
        <Grid item sx={12} lg={8}>
          <Paper className={classes.paper}>
            <Grid container spacing={3} className={classes.cinemaInfo}>
              <Grid item xs={4}>
                Ngày
              </Grid>
              <Grid item xs={8}>
                30-06-2021
              </Grid>
              <Grid item xs={4}>
                Giờ
              </Grid>
              <Grid item xs={8}>
                10:00
              </Grid>
              <Grid item xs={4}>
                Rạp chiếu phim
              </Grid>
              <Grid item xs={8}>
                Galaxy Tân Bình - rạp 1
              </Grid>
              <Grid item xs={4}>
                Chỗ ngồi
              </Grid>
              <Grid item xs={8}>
                1, 2 - (2 vé)
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <CardMedia component="img" src={Bonus} />
            <div className={classes.bonus} onClick={handleDonate}>
              <IconButton>
                {donate ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
              </IconButton>
              <span>
                Thêm 5000Đ để tặng cho team Movie Ticket (Bỏ chọn nếu bạn không
                muốn)
              </span>
            </div>
          </Paper>
          <Paper className={classes.paper}>
            <h3 className={classes.titlePayMethod}>Phương thức thanh toán</h3>
            <Grid container direction="column" className={classes.pay}>
              {payMethods.map((method) => {
                const { id, name, imgURL, fee } = method;
                console.log(id);
                return (
                  <li className={classes.payContent}>
                    <Grid container alignItems="center">
                      <CardMedia
                        component="img"
                        src={imgURL}
                        className={classes.payIcon}
                      />
                      <span className={classes.payName}>{name}</span>
                    </Grid>
                    <IconButton value={fee} onClick={() => handleClick(method)}>
                      {state[id] ? (
                        <CheckCircleIcon />
                      ) : (
                        <RadioButtonUncheckedIcon />
                      )}
                    </IconButton>
                  </li>
                );
              })}
            </Grid>
          </Paper>
        </Grid>
        <Grid item sx={12} lg={4}>
          <Paper>
            <Grid className={classes.BSTop}>
              <p>Thông tin đặt vé</p>
            </Grid>
            <Grid container justify="space-between">
              <Grid item xs={6} className={classes.textLeft}>
                <p>Ghế : 1A, 2A</p>
                <p>(2 vé)</p>
              </Grid>
              <Grid item xs={4} className={classes.textRight}>
                <p>{sum.price}</p>
              </Grid>

              {pay && state[pay.id] ? (
                <>
                  <Grid item xs={6} className={classes.textLeft}>
                    <p>Phí thanh toán</p>
                    <p className={classes.payName}>{pay.name}</p>
                  </Grid>
                  <Grid item xs={4} className={classes.textRight}>
                    <p>{pay.fee === 0 ? "miễn phí" : `${pay.fee}%`}</p>
                  </Grid>
                </>
              ) : (
                <></>
              )}

              {donate ? (
                <>
                  <Grid item xs={6} className={classes.textLeft}>
                    <p>Tiền donate</p>
                  </Grid>
                  <Grid item xs={4} className={classes.textRight}>
                    <p>5000Đ</p>
                  </Grid>{" "}
                </>
              ) : (
                <></>
              )}
            </Grid>
            <Grid container className={classes.sum}>
              <Grid item xs={7} className={classes.sumLeft}>
                Tổng cộng
              </Grid>
              <Grid item xs={5} className={classes.sumRight}>
                {sumTotal()}
              </Grid>
              <Grid xs={12}>
                <Grid
                  container
                  alignItems="center"
                  direction="row"
                  className={classes.ruleBox}
                >
                  <Grid item xs={2}>
                    <IconButton onClick={handleRules}>
                      {rules ? (
                        <CheckCircleIcon />
                      ) : (
                        <RadioButtonUncheckedIcon />
                      )}
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
              {rules ? (
                <NavLink
                  to="/movie/booking-confirmation"
                  className={classes.btnPay}
                >
                  <span>Xác nhận</span>
                </NavLink>
              ) : (
                <span className={classes.btnPay}>Xác nhận</span>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {renderModal()}
    </>
  );
}

export default BSContent;
