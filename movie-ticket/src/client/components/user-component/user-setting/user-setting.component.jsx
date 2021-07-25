import React from "react";
import { useStyles } from "./user-setting-styles.component";
import { TextField ,Button } from "@material-ui/core";

function UserSetting() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
        />
      </div>
      <div className={classes.item}>
        <p className={classes.nameItem}>Mật khẩu mới</p>
        <TextField
          type="password"
          className={classes.field}
          placeholder="Mật khẩu mới"
          variant="outlined"
        />
      </div>
      <div className={classes.item}>
        <p className={classes.nameItem}>Nhập lại mật khẩu</p>
        <TextField
          type="password"
          className={classes.field}
          placeholder="Nhập lại mật khẩu"
          variant="outlined"
        />
      </div>
      <br></br>
      <div className={classes.item}>
        <p className={classes.nameItem}></p>
        <Button className={classes.field} variant="contained" color="primary">
          Cập Nhật
        </Button>
      </div>
    </div>
  );
}

export default UserSetting;
