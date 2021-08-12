import React, { memo } from "react";
import HeaderLeft from "../../../client/components/header/header-left/header-left.component";
import { useStyles } from "./admin-header-styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Breadcrumbs, Typography, Avatar } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import Popper from "@material-ui/core/Popper";
import { useDispatch } from "react-redux";
import { PUT_USER_LOGIN_STATUS } from "../../../store/constants/user.consants";

function AdminHeader(props) {
  const classes = useStyles();
  const queryParams = new URLSearchParams(useLocation().search);
  const data = queryParams.get("data");
  const sub = queryParams.get("sub");
  const avatar = JSON.parse(localStorage.getItem("avatar"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const array = [];
  if (data) array.push(data)
  if (sub) array.push(sub)

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const goToUserInfo = () => {
    history.push(`/user/${userInfo.taiKhoan}`);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: PUT_USER_LOGIN_STATUS, payload: false });
    history.push(`/`);
  };

  const renderMenu = () => {
    return (
      <Popper
        id="user"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        style={{ zIndex: 3 }}
      >
        <div className={classes.paper}>
          <p className={classes.userP} onClick={goToUserInfo}>
            Thông tin{" "}
          </p>
          <p className={classes.userP} onClick={handleLogout}>
            Thoát
          </p>
        </div>
      </Popper>
    );
  };

  const renderUserInfo = () => {
    return (
      <div className={classes.iconBox}>
        <MailOutlineIcon className={classes.icon} />
        <NotificationsIcon className={classes.icon} />
        {avatar ? (
          <img
            src={`data:image/png;base64, ${avatar.data}`}
            className={classes.avatarIcon}
            alt="avatar"
            aria-describedby="user"
            onClick={handleClick}
          />
        ) : (
          <Avatar
            variant="rounded"
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={classes.icon}
          />
        )}
        {renderMenu()}
      </div>
    );
  };

  const handleOpen = () => {
    props.handleOpen();
  };

  const renderBottom = () => {
    return (
      <>
        <DehazeIcon onClick={handleOpen} style={{ cursor: "pointer" }} />
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          {array.map((value, index) => (
            <Typography key={index} className={classes.text}>
              {value}
            </Typography>
          ))}
        </Breadcrumbs>
      </>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <HeaderLeft />
        {renderUserInfo()}
      </div>
      <div className={classes.bottom}>{renderBottom()}</div>
    </div>
  );
}

export default memo(AdminHeader);
