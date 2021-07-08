import React from "react";
import { useStyles } from "./top-header-styles";
import { Grid, IconButton, Typography } from "@material-ui/core";
import BackIcon from "./../../../../../assets/svg/back.jsx";
import { NavLink, useHistory } from "react-router-dom";

function TopHeader(props) {
  const classes = useStyles();
  const { ticket } = props;
  const history = useHistory();

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <Grid item xs={12} md={4}>
          <Grid container alignItems="center" className={classes.topLeft}>
            <Grid item className={classes.backIcon}>
              <IconButton onClick={handleBackButton}>
                <BackIcon />
              </IconButton>
            </Grid>
            <Grid item className={classes.textBox}>
              <p>Số lượng vé</p>
              <p className={classes.text}>{ticket}</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.topMid}>
            <h3>Bố già - Phụ đề - (2:47)</h3>
            <h4>Today, 19 Dec, 10:00 PM</h4>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container className={classes.topRight}>
            <NavLink to="/movie/booking-summary">
              <IconButton>
                <Typography className={classes.payIcon}>Thanh toán</Typography>
              </IconButton>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default TopHeader;
