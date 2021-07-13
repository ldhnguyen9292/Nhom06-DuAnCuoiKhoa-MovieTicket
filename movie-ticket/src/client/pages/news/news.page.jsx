import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopHeader from "../../components/movie-components/booking-confirmation-components/bc-top-header/bc-top-header";
import { Grid, makeStyles } from "@material-ui/core";
import NewsContent from "../../components/news-components/news-content/news-content";
import NewsSidebar from "../../components/news-components/news-sidebar/news-sidebar";
import { callAPIactions } from "../../../store/actions/mock-api-main.actions";
import { GET_NEWS_LIST } from "./../../../store/constants/news.contants";

const useStyles = makeStyles(() => ({
  root: {
    padding: "5%",
    maxWidth: 1200,
    margin: "0 auto",
  },
}));

const nameDB = "news";

function News() {
  const classes = useStyles();
  const { getListAction } = callAPIactions;
  const dispatch = useDispatch();
  const keys = useSelector((state) => state.news.newsKeys);
  const { page, pageSize, keySearch, filter } = keys;

  useEffect(() => {
    dispatch(
      getListAction(
        nameDB,
        GET_NEWS_LIST,
        `?_page=${page}&_limit=${pageSize}&q=${keySearch}&${filter.key}=${filter.value}`
      )
    );
  }, [keys]);

  return (
    <div>
      <TopHeader title="Tin tức" />
      <Grid container className={classes.root}>
        <Grid item xs={12} md={8}>
          <NewsContent />
        </Grid>
        <Grid item xs={12} md={4}>
          <NewsSidebar />
        </Grid>
      </Grid>
    </div>
  );
}

export default memo(News);
