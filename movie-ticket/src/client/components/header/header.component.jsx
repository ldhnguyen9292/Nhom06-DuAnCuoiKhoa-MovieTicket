import React from "react";
import HeaderLeft from "./header-left/header-left.component";
import HeaderRight from "./header-right/header-right.component";
import { useStyles } from "./header-styles.component";

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeaderLeft />
      <div className={classes.flexG} />
      <HeaderRight />
    </div>
  );
}

export default Header;
