import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography, Popper } from "@material-ui/core";
import { useStyles } from "./header-user-style.component";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuItem from "@material-ui/core/MenuItem";

function HeaderUser(props) {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleIsLogin = () => {
    setIsLogin(true);
    setAnchorEl(null);
  };

  const handleIsLogout = () => {
    setIsLogin(false);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const renderUserInfo = () => {
    return (
      <Popper
        id="userInfo"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClick}
        className={
          props.placement === "bottom" ? classes.menu : classes.menuMobile
        }
        placement={props.placement === "bottom" ? "bottom" : "left"}
      >
        <MenuItem className={classes.menuTitle} onClick={handleClick}>
          Tài khoản
        </MenuItem>
        <MenuItem className={classes.menuTitle} onClick={handleIsLogout}>
          Đăng xuất
        </MenuItem>
      </Popper>
    );
  };

  const renderUserIcon = () => {
    return (
      <div
        className={
          props.flexDirection === "row" ? classes.IconFlex : classes.IconFlexCol
        }
      >
        <IconButton
          aria-label="account of current user"
          aria-controls="userInfo"
          aria-haspopup="true"
          color="inherit"
          onClick={handleClick}
          className={classes.userMenu}
        >
        <AccountCircle />
          {renderUserInfo()}
        </IconButton>
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
      </div>
    );
  };

  const renderUserButton = () => {
    return (
      <NavLink
        to="/login"
        className={
          props.flexDirection === "row" ? classes.root : classes.rootCol
        }
        onClick={handleIsLogin}
      >
        <Typography className={classes.title}>Đăng nhập</Typography>
      </NavLink>
    );
  };

  return <>{!isLogin ? renderUserButton() : renderUserIcon()}</>;
}

export default HeaderUser;
