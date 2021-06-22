import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useStyles } from "./header-user-style.component";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function HeaderUser() {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleIsLogin = () => {
    setIsLogin(true);
    setAnchorEl(null);
  };

  const handleIsLogout = () => {
    setIsLogin(false);
    setAnchorEl(null);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    //Stop calling handleOpen...
    event.stopPropagation();
  };

  const renderUserInfo = () => {
    return (
      <Menu
        id="userInfo"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleIsLogout}>Logout</MenuItem>
      </Menu>
    );
  };

  const renderUserIcon = () => {
    return (
      <div className={classes.IconFlex}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          aria-label="account of current user"
          aria-controls="userInfo"
          aria-haspopup="true"
          color="inherit"
          onClick={handleOpen}
          className={classes.userMenu}
        >
          <AccountCircle />
          {renderUserInfo()}
        </IconButton>
      </div>
    );
  };

  const renderUserButton = () => {
    return (
      <NavLink to="" className={classes.root} onClick={handleIsLogin}>
        <Typography className={classes.title}>Đăng nhập</Typography>
      </NavLink>
    );
  };

  return <>{!isLogin ? renderUserButton() : renderUserIcon()}</>;
}

export default HeaderUser;
