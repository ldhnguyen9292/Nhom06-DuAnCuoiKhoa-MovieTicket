import React from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./search-movie-styles.component";
import MovieName from "./movie-name/movie-name";
import Options from "./options/options";

function SearchMovie() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (q, rate) => {
    history.push({
      pathname: "/movie",
      search: `?q=${q}&rate=${rate}&page=${1}`,
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.item}>
        <Options handleSubmit={handleSubmit} />
      </div>
      <div className={classes.item}>
        <MovieName placeHolder={"Tìm tên phim"} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default SearchMovie;
