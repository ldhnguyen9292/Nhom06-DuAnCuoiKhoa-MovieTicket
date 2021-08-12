import React, { memo, useState } from "react";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import CinemaBox from "./cinema/cinema.component";
import { useStyles } from "./cinemaTime-styles.component";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SideBar from "./side-bar/side-bar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function CinemaTime() {
  const classes = useStyles();
  const theme = useTheme();
  const search = new URLSearchParams(window.location.search);
  const dateParts = search.get("date").split("/");
  const day = dateParts
    ? new Date(dateParts[2], dateParts[1] - 1, dateParts[0]).getDay()
    : new Date().getDay();
  const [value, setValue] = useState(day);
  const lichChieu = useSelector((state) => state.movie.movieDetail.lichChieu);
  const [state, setState] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const renderTab = (label, index) => {
    return (
      <Tab
        label={label}
        key={label}
        className={classes.tabItem}
        {...a11yProps({ index })}
      />
    );
  };

  const handleSidebar = (value) => {
    console.log(value);
    setState(value);
  };

  const checkState = (array) => {
    const arrayTemp = array.filter((item) => {
      let temp = false;
      for (let [key, value] of Object.entries(state)) {
        if (key === item.thongTinRap.tenHeThongRap && value) {
          temp = true;
          break;
        }
      }
      return temp ? item : "";
    });
    if (arrayTemp.length > 0) return arrayTemp;
    return array;
  };

  const renderCinema = () => {
    let movieArray = {
      sun: [],
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
    };
    if (!lichChieu) return;
    if (lichChieu) {
      lichChieu.map((cinema) => {
        const day = new Date(cinema.ngayChieuGioChieu).getDay();
        switch (day) {
          case 0:
            return movieArray.sun.push(cinema);
          case 1:
            return movieArray.mon.push(cinema);
          case 2:
            return movieArray.tue.push(cinema);
          case 3:
            return movieArray.wed.push(cinema);
          case 4:
            return movieArray.thu.push(cinema);
          case 5:
            return movieArray.fri.push(cinema);
          case 6:
            return movieArray.sat.push(cinema);
          default:
            return cinema;
        }
      });
    }

    const result = [];
    let index = -1;
    for (let [key, array] of Object.entries(movieArray)) {
      index++;
      if (state) array = checkState(array);
      result.push(
        <TabPanel value={value} key={key} index={index} dir={theme.direction}>
          <CinemaBox array={array} />
        </TabPanel>
      );
    }
    return (
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {result}
      </SwipeableViews>
    );
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <div className={classes.appbar}>
          <Container className={classes.appbarContainer}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
              className={classes.fixWidth}
            >
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                (day, index) => renderTab(day, index)
              )}
            </Tabs>
          </Container>
        </div>
      </AppBar>
      <Container className={classes.root}>
        <Box boxShadow={10} className={classes.container}>
          {renderCinema()}
        </Box>
        <SideBar handleSidebar={handleSidebar} />
      </Container>
    </div>
  );
}

export default memo(CinemaTime);
