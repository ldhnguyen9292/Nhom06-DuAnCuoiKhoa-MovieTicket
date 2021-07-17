import React from 'react'
import { Container } from '@material-ui/core'
import CinemaBox from './cinema/cinema.component'
import { useStyles } from './cinemaTime-styles.component'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
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
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
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
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

function CinemaTime() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        // <Container className={classes.root}>
        //     <Box boxShadow={10} className={classes.container}>
        //         <CinemaBox />
        //     </Box>
        // </Container>
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
                            <Tab label="WED" className={classes.tabItem} {...a11yProps(0)}>
                                
                            </Tab>
                            <Tab label="THU" className={classes.tabItem} {...a11yProps(1)}>

                            </Tab>
                            <Tab label="FRI" className={classes.tabItem} {...a11yProps(2)}>

                            </Tab>
                            <Tab label="SAT" className={classes.tabItem} {...a11yProps(3)}>

                            </Tab>
                            <Tab label="SUN" className={classes.tabItem} {...a11yProps(4)}>

                            </Tab>
                            <Tab label="MON" className={classes.tabItem} {...a11yProps(5)}>

                            </Tab>
                            <Tab label="TUE" className={classes.tabItem} {...a11yProps(6)}>

                            </Tab>
                        </Tabs>
                    </Container>
                </div>
            </AppBar>
            <Container className={classes.root}>
                <Box boxShadow={10} className={classes.container}>
                    <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                    >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <CinemaBox />
                        <CinemaBox />
                        <CinemaBox />
                        <CinemaBox />
                        <CinemaBox />
                        <CinemaBox />
                        <CinemaBox />
                        <CinemaBox />
                        <CinemaBox />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        
                    </TabPanel>
                    </SwipeableViews>
                </Box>
            </Container>
        </div>
    )
}

export default CinemaTime