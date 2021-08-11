import React, { useState } from "react";
import { useStyles } from "./movie-name-styles";
import SearchIcon from "@material-ui/icons/Search";

function MovieName(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const { placeHolder } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(value, 0);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.searchTitle}>
      <input
        type="text"
        placeholder={placeHolder}
        value={value}
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
