import React from "react";
import { Grid, CardMedia } from "@material-ui/core";
import Confirmation from "./../../../../../assets/images/confirmation-bg.jpg";
import { useStyles } from "./bc-top-header-styles";

function BCTopHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CardMedia image={Confirmation} className={classes.bg} />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.title}
      >
        <Grid item>
          <h2>Xác nhận</h2>
        </Grid>
      </Grid>
    </div>
  );
}

export default BCTopHeader;
