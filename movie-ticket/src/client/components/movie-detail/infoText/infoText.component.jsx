import React from "react";
import { useStyles } from "./infoText-styles.component";

function InfoText() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.info}>
          <p className={classes.bold}>Ngày công chiếu</p>
          <p>30.04.2021</p>
        </div>
        <div className={classes.info}>
          <p className={classes.bold}>Đạo diễn</p>
          <p>Phan Gia Nhật Linh</p>
        </div>
        <div className={classes.info}>
          <p className={classes.bold}>Diễn viên</p>
          <p>Phan Gia Nhật Linh</p>
        </div>
        <div className={classes.info}>
          <p className={classes.bold}>Thể Loại</p>
          <p>hài hước</p>
        </div>
        <div className={classes.info}>
          <p className={classes.bold}>Định dạng</p>
          <p>2D/Digital</p>
        </div>
        <div className={classes.info}>
          <p className={classes.bold}>Quốc Gia SX</p>
          <p>Việt Nam</p>
        </div>
      </div>
      <div className={classes.right}>
        <p className={classes.bold}>Nội dung</p>
        <p>
          Trạng Tí chuyển thể từ truyện tranh nổi tiếng Thần đồng đất Việt, xoay
          quanh Tí - cậu bé thông minh, láu lỉnh. Cùng các bạn Sửu, Dần, Mẹo,
          cậu nhiều lần giúp triều đình thoát khỏi các tình huống nguy hiểm,
          chống lại ngoại bang
        </p>
      </div>
    </div>
  );
}

export default InfoText;
