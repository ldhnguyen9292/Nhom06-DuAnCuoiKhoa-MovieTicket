import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Typography, Popper } from "@material-ui/core";
import { useStyles } from "./header-user-style.component";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuItem from "@material-ui/core/MenuItem";
import { useSelector } from "react-redux";
import { PUT_USER_LOGIN_STATUS } from "../../../../../store/constants/user.consants";

function HeaderUser(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const avatar = JSON.parse(localStorage.getItem("avatar"));
  const isLogin = useSelector((state) => state.user.isLogin);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleIsLogin = () => {
    history.push("/login");
    setAnchorEl(null);
  };

  const handleIsLogout = () => {
    localStorage.clear();
    dispatch({ type: PUT_USER_LOGIN_STATUS, payload: false });
    setAnchorEl(null);
    history.push(`/`);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const renderUserInfo = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const { maLoaiNguoiDung, taiKhoan } = userInfo;

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
        <NavLink to={`/user/${taiKhoan}`} className={classes.navTitle}>
          <p> Tài khoản</p>
        </NavLink>
        {maLoaiNguoiDung === "QuanTri" ? (
          <NavLink to="/admin" className={classes.navTitle}>
            <p> Quản lý</p>
          </NavLink>
        ) : null}
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
          {avatar ? (
            <img
              src={`data:image/png;base64,${avatar.data}`}
              alt="avatar"
              style={{ width: 25, height: 25, borderRadius: "50%" }}
            />
          ) : (
            <AccountCircle />
          )}
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

export default memo(HeaderUser);
