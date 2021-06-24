import React from "react";
import HeaderLeft from "./header-left/header-left.component";
import HeaderRight from "./header-right/header-right.component";
import { useStyles } from "./header-styles.component";
import clsx from "clsx";

function Header(props) {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.root,
        props.pos > 200 ? classes.headerFix : classes.header
      )}
    >
      <HeaderLeft />
      <div className={classes.flexG} />
      <HeaderRight />
    </div>
  );
}

export default Header;
