import React from "react";
import { Grid, CardMedia } from "@material-ui/core";
import { useStyles } from "./recent-news-styles";

function RecentNews(props) {
  const classes = useStyles();
  const { array } = props;
  return (
    <>
      {array.map((value, index) => {
        return (
          <Grid key={index} container className={classes.root}>
            <Grid item className={classes.img}>
              <CardMedia component="img" src={value.imgURL} />
            </Grid>
            <Grid item>
              <p className={classes.title}>{value.title}</p>
              <p className={classes.date}>{value.date}</p>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
export default RecentNews;
