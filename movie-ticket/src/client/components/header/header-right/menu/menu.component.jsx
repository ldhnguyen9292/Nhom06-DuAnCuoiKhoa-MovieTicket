import React from "react";
import { useStyles } from "./menu-style.component";
import { NavLink } from "react-router-dom";
import { Box } from "@material-ui/core";

function Menu() {
  const classes = useStyles();
  const fontSize = "16px";

  return (
    <div className={classes.root}>
      <NavLink to="/" className={classes.title}>
        <Box fontSize={fontSize}>Trang chủ</Box>
      </NavLink>
      <NavLink to="/movie" className={classes.title}>
        <Box fontSize={fontSize}>Danh sách phim</Box>
      </NavLink>
      <NavLink to="/news" className={classes.title}>
        <Box fontSize={fontSize}>Tin tức</Box>
      </NavLink>
      <NavLink to="/contact" className={classes.title}>
        <Box fontSize={fontSize}>Liên hệ</Box>
      </NavLink>
    </div>
  );
}

export default Menu;
