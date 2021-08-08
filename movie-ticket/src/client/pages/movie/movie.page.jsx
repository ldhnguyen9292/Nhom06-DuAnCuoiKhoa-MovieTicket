import React, { useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import ReleasedMovie from "./../../components/movie-components/released-movie/released-movie.component";
import SearchMovie from "./../../components/movie-components/search-movie/search-movie.component";
import { Grid } from "@material-ui/core";
import { SearchService } from "./../../../services/search.service";
import { useStyles } from "./movie-styles.page";
import UpcomingMovie from "../../components/movie-components/upcoming/upcoming.component";
import TopMovie from "./../../components/movie-components/top-movie/topMovie.component";
import { getMovieListAction } from "../../../store/actions/movie.action";

const initialQueryParams = {
  page: 1,
  pageSize: 12,
  tenPhim: "",
  tenRap: [],
  topRate: false,
  topMovie: false,
  movie2D: false,
  movie3D: false,
  submit: false,
};

function Movie() {
  const classes = useStyles();
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const queryP = SearchService.QPUpdateValue(query, initialQueryParams);
  let queryParams = queryP;
  const [submit, setSubmit] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  let movieList = useSelector((state) => state.movie.movieList);
  console.log(movieList);

  useEffect(() => {
    dispatch(getMovieListAction("GP06"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterArray = () => {
    const newArray = SearchService.filterDataByName(
      movieList,
      queryParams.tenPhim
    );
    movieList = newArray;
  };

  const handleChange = (queryP) => {
    queryParams = { ...queryParams, ...queryP };
    console.log(queryParams);
    if (queryParams.submit) {
      setSubmit(!submit);
      filterArray();
      let searchString = SearchService.createQPString(queryParams);
      history.push({
        pathname: "/movie",
        search: `${searchString}`,
      });
    }
  };

  return (
    <>
      {(queryParams.submit = false)}
      <TopMovie />
      <UpcomingMovie />
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={12} md={3}>
          <SearchMovie queryParams={queryParams} handleChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={9}>
          <ReleasedMovie
            array={movieList}
            queryParams={queryParams}
            handleChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default memo(Movie);
