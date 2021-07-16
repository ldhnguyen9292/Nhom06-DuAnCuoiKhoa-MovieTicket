import React from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./news-archives-styles";
import { Grid } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { PUT_NEWS_KEY } from "../../../../../store/constants/news.contants";
import { callAPIactions } from "../../../../../store/actions/mock-api-main.actions";
import { useDispatch } from "react-redux";

function NewsArchives(props) {
  const classes = useStyles();
  const { array } = props;
  const { putKeyAction } = callAPIactions;
  const dispatch = useDispatch();
  const history = useHistory();
  const queryParams = new URLSearchParams(window.location.search);

  const handleClick = (value) => {
    if (queryParams.get("id")) {
      history.push("/news");
    }
    if (value.length === 1) {
      value = "0" + value;
    }
    dispatch(putKeyAction(PUT_NEWS_KEY, { keySearch: `2021-${value}` }));
  };

  const renderArray = () => {
    return array.map((value, index) => {
      return (
        <div
          key={index}
          className={classes.box}
          onClick={() => handleClick(value.type)}
        >
          <ArrowRightIcon className={classes.icon} />
          <Grid
            container
            alignItems="center"
            justify="space-between"
            className={classes.key}
          >
            <span>{value.name}</span>
            <span>{value.num}</span>
          </Grid>
        </div>
      );
    });
  };

  return <div>{renderArray()}</div>;
}

export default NewsArchives;
