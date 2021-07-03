import React from "react";
import { useStyles } from "./news-type-styles";
import { Grid } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function NewsType(props) {
  const classes = useStyles();
  const { array } = props;

  const renderArray = () => {
    return array.map((value, index) => {
      return (
        <div key={index} className={classes.box}>
          <ArrowRightIcon className={classes.icon} />
          <Grid
            container
            alignItems="center"
            justify="space-between"
            className={classes.key}
          >
            <span>{value.name}</span>
            <span>{value.num}</span>
          </Grid>
        </div>
      );
    });
  };

  return (
    <div>
      {renderArray()}
    </div>
  );
}

export default NewsType;
