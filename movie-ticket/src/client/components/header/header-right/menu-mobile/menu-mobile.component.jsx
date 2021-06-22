import React, { useState } from "react";
import { useStyles } from "./menu-mobile-style.component";
import { IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { NavLink } from "react-router-dom";
import MovieIcon from "@material-ui/icons/Movie";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import HeaderUser from "./../header-user/header-user.component";

function MenuMobile() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (event) => {
    setOpen(false);
    // event.stopPropagation();
  };

  const renderMenu = () => {
    return (
      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.drawer}>
          <NavLink to="/movie" className={classes.title}>
            <div className={classes.iconFlex}>
              <MovieIcon />
              <Typography className={classes.text}>Phim</Typography>
            </div>
          </NavLink>
          <NavLink to="/news" className={classes.title}>
            <div className={classes.iconFlex}>
              <MenuBookIcon />
              <Typography className={classes.text}>News</Typography>
            </div>
          </NavLink>
          <NavLink to="/contact" className={classes.title}>
            <div className={classes.iconFlex}>
              <PermContactCalendarIcon />
              <Typography className={classes.text}>Liên hệ</Typography>
            </div>
          </NavLink>
          <HeaderUser />
        </div>
      </Drawer>
    );
  };

  const renderButton = () => {
    return (
      <>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleOpen}
          className={classes.iconBtn}
        >
          <MenuIcon />
        </IconButton>
        {renderMenu()}
      </>
    );
  };

  return <div>{renderButton()}</div>;
}

export default MenuMobile;
