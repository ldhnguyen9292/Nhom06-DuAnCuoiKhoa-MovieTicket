import React from "react";
import HeaderLeft from "./header-left/header-left.component";
import HeaderRight from "./header-right/header-right.component";
import { useStyles } from "./header-styles.component";
import { Grid } from "@material-ui/core";
import clsx from "clsx";

function Header(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={clsx(
        classes.root,
        props.pos > 200 ? classes.headerFix : classes.header
      )}
    >
      <Grid item xs={8} md={2}>
        <HeaderLeft />
      </Grid>
      <Grid item xs={4} md={10}>
        <HeaderRight />
      </Grid>
    </Grid>
  );
}

export default Header;
