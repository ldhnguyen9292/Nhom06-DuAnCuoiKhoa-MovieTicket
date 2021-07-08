import React from "react";
import { useStyles } from "./bs-top-header-styles";
import { Grid, IconButton, Typography } from "@material-ui/core";
import BackIcon from "./../../../../../assets/svg/back.jsx";
import { NavLink, useHistory } from "react-router-dom";

function BSTopHeader(props) {
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
            <h2>Bố già</h2>
            <h3>Phụ đề - (2:47)</h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default BSTopHeader;
