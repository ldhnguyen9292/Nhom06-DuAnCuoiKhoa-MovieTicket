import React, { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "./user-setting-styles.component";
import { TextField, Button } from "@material-ui/core";
import {
  getUserInfoAction,
  putUserInfoAction,
} from "../../../../store/actions/user.action";

function UserSetting() {
  const classes = useStyles();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const validation = {
    required: { value: true, message: "Vui lòng điền mật khẩu" },
    minLength: { value: 4, message: "Mật khẩu từ 4-20 kí tự" },
    maxLength: { value: 20, message: "Mật khẩu từ 4-20 kí tự" },
  };
  const [oldPass, setOldPass] = useState();
  const [soDt, setSoDt] = useState();

  useEffect(() => {
    const getInfo = async () => {
      const res = await getUserInfoAction({ taiKhoan: userInfo.taiKhoan });
      setOldPass(res.matKhau);
      setSoDt(res.soDT);
    };
    getInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (d, e) => {
    e.preventDefault();
    const { taiKhoan, email, hoTen, maLoaiNguoiDung, maNhom, accessToken } =
      userInfo;
    const data = {
      taiKhoan,
      matKhau: d.newpass1,
      email,
      soDt,
      maNhom,
      maLoaiNguoiDung,
      hoTen,
    };
    const res = await putUserInfoAction(data, accessToken);
    if (res.status === 200) alert("Đã cập nhât thành công");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <div className={classes.title}>Đổi mật khẩu</div>
      <hr />
      <br />
      <div className={classes.item}>
        <p className={classes.nameItem}>Mật khẩu cũ</p>
        <TextField
          type="password"
          className={classes.field}
          placeholder="Mật khẩu cũ"
          variant="outlined"
          {...register("oldpass", {
            ...validation,
            validate: {
              checkOldPass: (value) => value === oldPass || "Sai mật khẩu",
            },
          })}
        />
      </div>
      {errors["oldpass"] && (
        <p className={classes.error}>{errors["oldpass"].message}</p>
      )}
      <div className={classes.item}>
        <p className={classes.nameItem}>Mật khẩu mới</p>
        <TextField
          type="password"
          className={classes.field}
          placeholder="Mật khẩu mới"
          variant="outlined"
          {...register("newpass1", {
            ...validation,
            validate: (value) =>
              value !== oldPass || "Đổi mật khẩu khác mật khẩu cũ",
          })}
        />
      </div>
      {errors["newpass1"] && (
        <p className={classes.error}>{errors["newpass1"].message}</p>
      )}
      <div className={classes.item}>
        <p className={classes.nameItem}>Nhập lại mật khẩu</p>
        <TextField
          type="password"
          className={classes.field}
          placeholder="Nhập lại mật khẩu"
          variant="outlined"
          {...register("newpass2", {
            ...validation,
            validate: {
              doubleCheck: (value) =>
                value === getValues("newpass1") || "Mật khẩu không khớp",
            },
          })}
        />
      </div>
      {errors["newpass2"] && (
        <p className={classes.error}>{errors["newpass2"].message}</p>
      )}
      <br></br>
      <div className={classes.item}>
        <p className={classes.nameItem}></p>
        <Button
          type="submit"
          className={classes.field}
          variant="contained"
          color="primary"
        >
          Cập Nhật
        </Button>
      </div>
    </form>
  );
}

export default memo(UserSetting);
