import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useStyles } from "./sign-in-styles.component";
import { NavLink } from "react-router-dom";
import Logo from "./../../../assets/images/logo.gif";
import { Input } from "@material-ui/core";
import FB from "./../../../assets/images/btn-FB.png";
import GG from "./../../../assets/images/btn-Google.png";
import { useForm } from "react-hook-form";
import { postUserLogInAction } from "../../../store/actions/user.action";
import LoadingComponent from "../loading/loading.component";

function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const validation = {
    required: "Vui lòng không để trống",
    minLength: { value: 4, message: "Vui lòng nhập kí tự từ 4-20" },
    maxLength: { value: 20, message: "Vui lòng nhập kí tự từ 4-20" },
  };

  const onSubmit = (data) => {
    setLoading(true);
    postUserLogInAction(data, history, dispatch);
    setLoading(false);
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          className={classes.input}
          placeholder="Tên đăng nhập"
          inputProps={{ "aria-label": "description" }}
          fullWidth={true}
          {...register("taiKhoan", { ...validation })}
        />
        {errors.taiKhoan && (
          <p className={classes.error}>{errors.taiKhoan.message}</p>
        )}
        <Input
          type="password"
          className={classes.input}
          placeholder="Mật khẩu"
          inputProps={{ "aria-label": "description" }}
          fullWidth={true}
          {...register("matKhau", { ...validation })}
        />
        {errors.matKhau && (
          <p className={classes.error}>{errors.matKhau.message}</p>
        )}
        <Button
          className={classes.btnSubmit}
          variant="contained"
          color="primary"
          type="submit"
        >
          đăng nhập
        </Button>
      </form>
    );
  };

  const handlePushRegis = () => {
    history.push("/registration");
  };

  if (loading) return <LoadingComponent />;
  return (
    <div className={classes.root}>
      <div className={classes.Box}>
        <Button
          className={classes.close}
          onClick={() => {
            history.goBack();
          }}
        >
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
          <div className={classes.formBox}>{renderForm()}</div>
          {/* <hr /> */}
          <p>Đăng nhập để có nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
          <Button variant="contained" className={classes.button}>
            <img src={FB} alt="" className={classes.imgIcon} />
          </Button>
          <Button variant="contained" className={classes.button}>
            <img src={GG} alt="" className={classes.imgIcon} />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btnSignUp}
            onClick={handlePushRegis}
          >
            đăng ký
          </Button>
        </div>
      </div>
    </div>
  );
}

export default memo(SignIn);
