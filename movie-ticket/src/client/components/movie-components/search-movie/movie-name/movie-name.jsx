import React, { useState } from "react";
import { useStyles } from "./movie-name-styles";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

function MovieName(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const { placeHolder, keyName } = props;
  const history = useHistory();

  const handleChange = (event) => {
    setName({ [keyName]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/${keyName}?q=${name[keyName]}&page=1`);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.searchTitle}>
      <input
        type="text"
        placeholder={placeHolder}
        value={name[keyName]}
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
