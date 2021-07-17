import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./navtab-styles.component";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SlickSlider from "../slickslider/slickslider.component";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <AppBar position="static" className={classes.appbar}>
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab
              className={classes.tabs}
              label="Upcoming Movies"
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tabs}
              label="Relesed Movies"
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>
      </div>
      <TabPanel value={value} index={0}>
        <SlickSlider />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SlickSlider />
      </TabPanel>
    </div>
  );
}
