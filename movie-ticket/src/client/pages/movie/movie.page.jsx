import React from "react";
import ReleasedMovie from "./../../components/movie-components/released-movie/released-movie.component";
import SearchMovie from "./../../components/movie-components/search-movie/search-movie.component";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
  },
}));

function Movie() {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={12} md={3}>
          <SearchMovie />
        </Grid>
        <Grid item xs={12} md={9}>
          <ReleasedMovie />
        </Grid>
      </Grid>
    </>
  );
}

export default Movie;
