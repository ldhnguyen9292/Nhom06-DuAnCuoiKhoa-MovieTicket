import React from "react";
import { useStyles } from "./menu-style.component";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";

function Menu() {
  const classes = useStyles();

  return (
    <>
      <NavLink to="/" className={classes.title}>
        <Typography>Trang chủ</Typography>
      </NavLink>
      <NavLink to="/movie" className={classes.title}>
        <Typography>Phim</Typography>
      </NavLink>
      <NavLink to="/news" className={classes.title}>
        <Typography>Tin tức</Typography>
      </NavLink>
      <NavLink to="/contact" className={classes.title}>
        <Typography>Liên hệ</Typography>
      </NavLink>
    </>
  );
}

export default Menu;
