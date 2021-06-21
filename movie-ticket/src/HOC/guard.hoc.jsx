import React from "react";
import { Redirect } from "react-router-dom";

function Guard(props) {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  if (userLogin.taiKhoan) {
    return props.children;
  } else {
    return <Redirect to="/" />;
  }
}

export default Guard;
