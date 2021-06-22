import React from "react";
import { CardMedia } from "@material-ui/core";
import { useStyles } from "./header-left-styles.component";
import { NavLink } from "react-router-dom";

function HeaderLeft() {
  const classes = useStyles();
  return (
    <div className={classes.headerLeft}>
      <NavLink to="/">
        <CardMedia
          component="img"
          src="http://www.webstrot.com/html/moviepro/images/logo.png"
          className={classes.logo}
        />
      </NavLink>
    </div>
  );
}

export default HeaderLeft;
