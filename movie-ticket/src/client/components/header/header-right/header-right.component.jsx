import React from "react";
import { useStyles } from "./header-right-styles.component";
import Menu from "./menu/menu.component";
import HeaderUser from "./header-user/header-user.component";
import MenuMobile from "./menu-mobile/menu-mobile.component";

function HeaderRight() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.headerRight}>
        <Menu />
        <HeaderUser flexDirection={"row"} placement={"bottom"} />
      </div>
      <div className={classes.mobile}>
        <MenuMobile />
      </div>
    </div>
  );
}

export default HeaderRight;
