import React, { memo, useState, useLayoutEffect } from "react";
import { useStyles } from "./user-styles.component";
import { Container } from "@material-ui/core";
// import Image from "./../../../assets/images/user.jpg";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import PersonIcon from "@material-ui/icons/Person";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SettingsIcon from "@material-ui/icons/Settings";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import UserInfoComponent from "./user-info/user-info.component";
import UserTB from "./user-TB/user-TB.component";
import UserHistory from "./user-history/user-history.component";
import UserKM from "./user-KM/user-KM.component";
import UserSetting from "./user-setting/user-setting.component";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {/* <Typography>{children}</Typography> */}
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function UserComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const avatar = JSON.parse(localStorage.getItem("avatar"));
  const mongoUserInfo = JSON.parse(localStorage.getItem("mongoUserInfo"));
  const { hoTen, email } = mongoUserInfo;
  const [screenW, setScreenW] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function updateSize() {
      setScreenW(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.left}>
          <div className={classes.userImage}>
            <img src={`data:image/png;base64,${avatar.data}`} alt="hình" />
          </div>
          <div className={classes.name}>{hoTen}</div>
          <p className={classes.username}>{email}</p>
          <Tabs
            orientation={screenW <= 999 ? "horizontal" : "vertical"}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab
              icon={<PersonIcon />}
              className={classes.tab}
              label={screenW <= 999 ? "" : "Thông Tin Tài Khoản"}
              {...a11yProps(0)}
            />
            <Tab
              icon={<NotificationsActiveIcon />}
              className={classes.tab}
              label={screenW <= 999 ? "" : "Thông Báo"}
              {...a11yProps(1)}
            />
            <Tab
              icon={<AssignmentIcon />}
              className={classes.tab}
              label={screenW <= 999 ? "" : "Lịch Sử Mua Hàng"}
              {...a11yProps(2)}
            />
            <Tab
              icon={<BookmarkBorderIcon />}
              className={classes.tab}
              label={screenW <= 999 ? "" : "Khuyến Mãi"}
              {...a11yProps(3)}
            />
            <Tab
              icon={<SettingsIcon />}
              className={classes.tab}
              label={screenW <= 999 ? "" : "Đổi Mật Khẩu"}
              {...a11yProps(3)}
            />
          </Tabs>
        </div>
        <div className={classes.right}>
          <TabPanel value={value} index={0}>
            <UserInfoComponent />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <UserTB />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <UserHistory />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <UserKM />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <UserSetting />
          </TabPanel>
        </div>
      </Container>
    </div>
  );
}

export default memo(UserComponent);
