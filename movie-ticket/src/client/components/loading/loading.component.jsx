import React from "react";
import Loader from "./../../../assets/images/loader.gif";

function LoadingComponent() {
  return (
    <div
      style={{ textAlign: "center", padding: 50, background: "transparent" }}
    >
      <img src={Loader} alt="" />
      <p style={{ color: "#1A15A8" }}>Xin chờ xíu!</p>
    </div>
  );
}

export default LoadingComponent;
