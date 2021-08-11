import React, { memo } from "react";
import { useStyles } from "./user-KM-styles.component";

function UserKM() {
  const classes = useStyles();
  const mongoUserInfo = JSON.parse(localStorage.getItem("mongoUserInfo"));
  let khuyenMai = mongoUserInfo.khuyenMai || 0;

  return (
    <div className={classes.root}>
      <div className={classes.title}>Khuyến mãi</div>
      <hr />
      <p>
        Điểm khuyến mãi: <span style={{ fontWeight: "bold" }}>{khuyenMai}</span>
      </p>
      <p> Hướng dẫn:</p>
      <ul>
        <li>
          <p>1 điểm khuyến mãi tương đương với 1VND</p>
        </li>
        <li>
          <p>Khi đặt 1 vé xem phim thành công bạn sẽ được 500 điểm</p>
        </li>
        <li>
          <p>Tham gia các sự kiện của Movie Ticket để nhận thêm điểm thưởng</p>
        </li>
        <li>
          <p>Đăng ký thành viên 10000 điểm</p>
        </li>
        <li>
          <p>Giới thiệu bạn bè được tặng 10000 điểm</p>
        </li>
      </ul>
    </div>
  );
}

export default memo(UserKM);
