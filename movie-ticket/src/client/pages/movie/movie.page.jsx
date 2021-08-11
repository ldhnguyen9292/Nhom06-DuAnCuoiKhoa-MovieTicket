import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ReleasedMovie from "./../../components/movie-components/released-movie/released-movie.component";
import { Grid } from "@material-ui/core";
import { useStyles } from "./movie-styles.page";
import TopMovie from "./../../components/movie-components/top-movie/topMovie.component";
import {
  getComingSoonAction,
  getMovieListAction,
} from "../../../store/actions/movie.action";
import LoadingComponent from "../../components/loading/loading.component";

function Movie() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();

  const getAPI = async () => {
    setLoading(true);
    await dispatch(getMovieListAction("GP06"));
    await dispatch(getComingSoonAction("GP07"));
    setLoading(false);
  };

  useEffect(() => {
    getAPI();
    return () => setLoading({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LoadingComponent />;
  return (
    <>
      <TopMovie />
      {/* <UpcomingMovie /> */}
      <Grid container justify="center" className={classes.root}>
        <ReleasedMovie />
      </Grid>
    </>
  );
}

export default Movie;
