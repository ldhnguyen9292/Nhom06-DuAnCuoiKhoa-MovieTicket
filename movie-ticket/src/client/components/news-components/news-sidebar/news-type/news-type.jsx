import React from "react";
import { useStyles } from "./news-type-styles";
import { Grid } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { PUT_NEWS_KEY } from "../../../../../store/constants/news.contants";
import { callAPIactions } from "../../../../../store/actions/mock-api-main.actions";
import { useDispatch } from "react-redux";

function NewsType(props) {
  const classes = useStyles();
  const { array, keyName } = props;
  const { putKeyAction } = callAPIactions;
  const dispatch = useDispatch();

  const handleClick = (value) => {
    let key = keyName;
    if (value === "") {
      key = "";
    }
    dispatch(putKeyAction(PUT_NEWS_KEY, { filter: { key, value } }));
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

export default NewsType;
