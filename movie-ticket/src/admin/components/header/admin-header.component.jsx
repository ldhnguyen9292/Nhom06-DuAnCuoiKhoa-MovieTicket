import React from "react";
import HeaderLeft from "../../../client/components/header/header-left/header-left.component";
import { useStyles } from "./admin-header-styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Breadcrumbs, Typography, Avatar } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { AdminService } from "./../../../services/admin.service";

function AdminHeader(props) {
  const classes = useStyles();
  const queryParams = new URLSearchParams(useLocation().search);
  const array = AdminService.QPGetArrayValue(queryParams);

  const renderUserInfo = () => {
    return (
      <div className={classes.iconBox}>
        <MailOutlineIcon className={classes.icon} />
        <NotificationsIcon className={classes.icon} />
        <Avatar
          variant="rounded"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={classes.icon}
        />
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

export default AdminHeader;
