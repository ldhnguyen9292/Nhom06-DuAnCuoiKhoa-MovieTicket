import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useStyles } from "./movie-name-styles";
import SearchIcon from "@material-ui/icons/Search";
import { callAPIactions } from "../../../../../store/actions/mock-api-main.actions";

function MovieName(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const { placeHolder, keyName, type } = props;
  const dispatch = useDispatch();

  const { putKeyAction } = callAPIactions;

  const handleChange = (event) => {
    setName({ [keyName]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      keySearch: name[keyName],
      page: 1,
    };
    dispatch(putKeyAction(type, data));
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
