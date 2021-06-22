import React from "react";
import { useStyles } from "./header-left-styles.component";
import { NavLink } from "react-router-dom";
import Logo from "./../../../../assets/images/logo.gif";

function HeaderLeft() {
  const classes = useStyles();
  return (
    <div className={classes.headerLeft}>
      <NavLink to="/" className={classes.logo}>
        <img src={Logo} alt="logo" className={classes.iconLogo} />
        <span>movie ticket</span>
      </NavLink>
    </div>
  );
}

export default HeaderLeft;
