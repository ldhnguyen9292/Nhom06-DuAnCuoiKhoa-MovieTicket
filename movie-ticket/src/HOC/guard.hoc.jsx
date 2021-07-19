import React, { memo } from "react";
import { Redirect } from "react-router-dom";

function Guard(props) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { page } = props;
  if (
    (page === "login" && !userInfo) ||
    (page === "admin" &&
      userInfo &&
      userInfo.maLoaiNguoiDung === "QuanTri")
  ) {
    return props.children;
  } else {
    return <Redirect to="/" />;
  }
}

export default memo(Guard);
