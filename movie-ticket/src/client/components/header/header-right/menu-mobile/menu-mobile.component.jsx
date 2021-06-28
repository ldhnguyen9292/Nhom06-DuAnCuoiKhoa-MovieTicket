import React, { useState } from "react";
import { useStyles } from "./menu-mobile-style.component";
import { Box, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { NavLink } from "react-router-dom";
import MovieIcon from "@material-ui/icons/Movie";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import HeaderUser from "./../header-user/header-user.component";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CountUp from "react-countup";
import Logo from "./../../../../../assets/images/logo.gif";

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
        style={{
          zIndex: 2001,
        }}
      >
        <div className={classes.drawer}>
          <Box fontSize="20px">
            <NavLink to="/" className={classes.logo}>
              <img src={Logo} alt="logo" className={classes.iconLogo} />
              <span>Movie Ticket</span>
            </NavLink>
          </Box>
          <NavLink to="/movie" className={classes.title}>
            <div className={classes.iconFlex}>
              <MovieIcon />
              <Typography className={classes.text}>Danh sách phim</Typography>
            </div>
          </NavLink>
          <NavLink to="/news" className={classes.title}>
            <div className={classes.iconFlex}>
              <MenuBookIcon />
              <Typography className={classes.text}>Tin tức</Typography>
            </div>
          </NavLink>
          <NavLink to="/contact" className={classes.title}>
            <div className={classes.iconFlex}>
              <PermContactCalendarIcon />
              <Typography className={classes.text}>Liên hệ</Typography>
            </div>
          </NavLink>
          <HeaderUser />
          {renderSocialNetworks()}
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

  const renderSocialNetworks = () => {
    return (
      <div className={classes.socialNetwork}>
        {["Facebook", "Twitter", "Youtube"].map((icon, i) => {
          return (
            <div key={i} className={classes.socialNetwork}>
              <Box>
                {icon === "Facebook" ? (
                  <FacebookIcon fontSize="medium" />
                ) : icon === "Twitter" ? (
                  <TwitterIcon fontSize="medium" />
                ) : (
                  <YouTubeIcon fontSize="medium" />
                )}
                <div>
                  <p>{icon}</p>
                  <CountUp end={1000} />
                </div>
              </Box>
            </div>
          );
        })}
      </div>
    );
  };

  return <>{renderButton()}</>;
}

export default MenuMobile;
