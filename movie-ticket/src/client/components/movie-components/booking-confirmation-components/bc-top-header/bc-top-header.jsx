import React, { memo } from "react";
import { Grid, CardMedia } from "@material-ui/core";
import Confirmation from "./../../../../../assets/images/confirmation-bg.jpg";
import { useStyles } from "./bc-top-header-styles";

function TopHeader(props) {
  const classes = useStyles();
  const { title } = props;
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
          <h2>{title}</h2>
        </Grid>
      </Grid>
    </div>
  );
}

export default memo(TopHeader);
