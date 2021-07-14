import React from "react";
import { Grid, CardMedia } from "@material-ui/core";
import { useStyles } from "./recent-news-styles";
import format from "date-format";
import { PUT_NEWS_KEY } from "../../../../../store/constants/news.contants";
import { callAPIactions } from "../../../../../store/actions/mock-api-main.actions";
import { useDispatch } from "react-redux";

function RecentNews(props) {
  const classes = useStyles();
  const { array } = props;
  const { putKeyAction } = callAPIactions;
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(
      putKeyAction(PUT_NEWS_KEY, { filter: { key: "id", value: id }, page: 1 })
    );
  };

  return (
    <>
      {array.map((value, index) => {
        return (
          <Grid
            key={index}
            container
            className={classes.root}
            onClick={() => handleClick(value.id)}
          >
            <Grid item className={classes.img}>
              <CardMedia component="img" src={value.hinhAnh} />
            </Grid>
            <Grid item>
              <p className={classes.title}>{value.tenBai}</p>
              <p className={classes.date}>
                {format("dd/MM/yyyy", new Date(value.ngayDang))}
              </p>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
export default RecentNews;
