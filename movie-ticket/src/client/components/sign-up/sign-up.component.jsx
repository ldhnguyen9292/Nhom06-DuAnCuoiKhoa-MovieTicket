import React from "react";
import { useStyles } from "./sign-up-styles.component";
import { NavLink } from "react-router-dom";
import Logo from "./../../../assets/images/logo.gif";
import { Button } from "@material-ui/core";
import { Input } from "@material-ui/core";
import FB from './../../../assets/images/btn-FB.png';
import GG from './../../../assets/images/btn-Google.png';

function SignUp() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.Box}>
        <Button className={classes.close} href="../">
          X
        </Button>
        <div className={classes.contentBox}>
          <div className={classes.logoBox}>
            <NavLink to="/" className={classes.logo}>
              <img src={Logo} alt="logo" className={classes.iconLogo} />
              <span>movie ticket</span>
            </NavLink>
          </div>
          <p>Thế giới phim trên đầu ngón tay</p>
          <div className={classes.formBox}>
            <form>
              <Input
                type="text"
                className={classes.input}
                placeholder="Tên đăng nhập"
                inputProps={{ "aria-label": "description" }}
                fullWidth={true}
              />
              <Input
                type="password"
                className={classes.input}
                placeholder="Mật khẩu"
                inputProps={{ "aria-label": "description" }}
                fullWidth={true}
              />
              <Input
                type="password"
                className={classes.input}
                placeholder="Nhập lại mật khẩu"
                inputProps={{ "aria-label": "description" }}
                fullWidth={true}
              />
              <Button
                className={classes.btnSubmit}
                variant="contained"
                color="primary"
              >
                đăng ký
              </Button>
            </form>
          </div>
          <p>Đăng ký để có nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
          <Button variant="contained" className={classes.button}>
            <img src={FB} alt="" className={classes.imgIcon} />
          </Button>
          <Button variant="contained" className={classes.button}>
            <img src={GG} alt="" className={classes.imgIcon} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
