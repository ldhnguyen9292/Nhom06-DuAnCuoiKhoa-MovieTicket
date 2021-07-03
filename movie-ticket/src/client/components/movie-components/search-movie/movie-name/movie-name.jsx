import React, { useState } from "react";
import { useStyles } from "./movie-name-styles";
import SearchIcon from "@material-ui/icons/Search";

function MovieName(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const { placeHolder } = props;

  const handleChange = (event) => {
    setName({ tenPhim: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit({ ...name, submit: true, page: 1 });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.searchTitle}>
      <input
        type="text"
        placeholder={placeHolder}
        value={name.tenPhim}
        onChange={handleChange}
      />
      <SearchIcon
        type="submit"
        className={classes.icon}
        onClick={handleSubmit}
      />
    </form>
  );
}

export default MovieName;
