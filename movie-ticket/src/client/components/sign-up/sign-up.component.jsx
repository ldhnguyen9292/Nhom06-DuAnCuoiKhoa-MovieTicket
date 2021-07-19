import React from "react";
import { useStyles } from "./sign-up-styles.component";
import { NavLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "./../../../assets/images/logo.gif";
import { Button } from "@material-ui/core";
import { Input } from "@material-ui/core";
import FB from "./../../../assets/images/btn-FB.png";
import GG from "./../../../assets/images/btn-Google.png";
import { postUserSignUpAction } from "../../../store/actions/user.action";

const valid = {
  required: "Vui lòng không để trống",
  minLength: { value: 4, message: "Số ký tự từ 4-20" },
  maxLength: { value: 20, message: "Số ký tự từ 4-20" },
};

function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const inputArray = [
    {
      type: "text",
      name: "taiKhoan",
      placeholder: "Nhập tài khoản  (*)",
      validation: valid,
    },
    {
      type: "password",
      name: "matKhau",
      placeholder: "Nhập mật khẩu  (*)",
      validation: {
        ...valid,
        pattern: {
          value:
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,20}$/,
          message:
            "Mật khẩu bao gồm ít nhất 1 chữ viết hoa, 1 số và 1 ký tự đặc biệt [@#$%]",
        },
      },
    },
    {
      type: "password",
      name: "matKhau2",
      placeholder: "Nhập lại mật khẩu (*)",
      validation: {
        ...valid,
        pattern: {
          value:
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,20}$/,
          message:
            "Mật khẩu bao gồm ít nhất 1 chữ viết hoa, 1 số và 1 ký tự đặc biệt [@#$%]",
        },
        validate: {
          doubleCheckPass: (v) =>
            v === getValues("matKhau") || "Mật khẩu không đúng",
        },
      },
    },
    {
      type: "email",
      name: "email",
      placeholder: "Nhập email  (*)",
      validation: { required: "Vui lòng nhập email" },
    },
    {
      type: "text",
      name: "soDt",
      placeholder: "Nhập số điện thoại",
      validation: "",
    },
    {
      type: "text",
      name: "hoTen",
      placeholder: "Nhập họ tên",
      validation: "",
    },
  ];

  const onSubmit = (d, e) => {
    e.preventDefault();
    let data = {
      ...d,
      maNhom: "GP06",
      maLoaiNguoiDung: "KhachHang",
    };
    postUserSignUpAction(data, history);
  };

  const renderInput = (obj) => {
    const { type, placeholder, name, validation } = obj;
    return (
      <>
        <Input
          type={type}
          className={classes.input}
          placeholder={placeholder}
          inputProps={{ "aria-label": "description" }}
          fullWidth={true}
          {...register(name, { ...validation })}
        />
        {errors[name] && (
          <p className={classes.error}>{errors[name].message}</p>
        )}
      </>
    );
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputArray.map((obj) => (
          <div key={obj.name}>{renderInput(obj)}</div>
        ))}
        <Button
          className={classes.btnSubmit}
          variant="contained"
          color="primary"
          type="submit"
        >
          đăng ký
        </Button>
      </form>
    );
  };

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
          <div>
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
    </div>
  );
}

export default SignUp;
