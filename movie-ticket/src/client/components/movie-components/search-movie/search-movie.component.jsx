import React from "react";
import { useStyles } from "./search-movie-styles.component";
import MovieName from "./movie-name/movie-name";
import Options from "./options/options";
import CinemaGroup from "./cinema-group/cinema-group";

function SearchMovie(props) {
  const classes = useStyles();
  const { queryParams } = props;

  const handleSubmit = (object) => {
    let keySearch = { ...queryParams, ...object };
    props.handleChange(keySearch);
  };

  return (
    <div className={classes.root}>
      <MovieName placeHolder={"Tìm tên phim"} handleSubmit={handleSubmit} />
      <p className={classes.title}>Danh sách rạp</p>
      <CinemaGroup handleSubmit={handleSubmit} />
      <p className={classes.title}>Tùy chọn thêm</p>
      <Options handleSubmit={handleSubmit} />
    </div>
  );
}

export default SearchMovie;
