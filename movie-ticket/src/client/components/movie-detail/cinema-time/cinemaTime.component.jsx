import React, { memo } from "react";
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
// import Typography from "@material-ui/core/Typography";
// import Hour from './Hour/Hour.component'

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
  const [value, setValue] = React.useState(new Date().getDay());
  const lichChieu = useSelector((state) => state.movie.movieDetail.lichChieu);

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
    for (const [key, array] of Object.entries(movieArray)) {
      index++;
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
      </Container>
    </div>
  );
}

export default memo(CinemaTime);
