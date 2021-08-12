import React, { memo } from "react";
import { useStyles } from "./bs-top-header-styles";
import { Grid, IconButton } from "@material-ui/core";
import BackIcon from "./../../../../../assets/svg/back.jsx";
import { useHistory } from "react-router-dom";

function BSTopHeader(props) {
  const classes = useStyles();
  const history = useHistory();
  const userBooking = JSON.parse(localStorage.getItem("userBooking"));
  const { tenPhim, thoiLuong } = userBooking;

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.container}>
        <Grid item xs={4} md={4}>
          <Grid container alignItems="center" className={classes.topLeft}>
            <Grid item className={classes.backIcon}>
              <IconButton onClick={handleBackButton}>
                <BackIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} md={4}>
          <div className={classes.topMid}>
            <h2>{tenPhim}</h2>
            <h3>{thoiLuong} phút</h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default memo(BSTopHeader);
