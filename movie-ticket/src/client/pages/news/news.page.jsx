import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
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
  const queryParams = new URLSearchParams(window.location.search);
  const q = queryParams.get("q") || "";
  const page = queryParams.get("page") || 1;
  const limit = queryParams.get("limit") || 7;
  const keySearch = queryParams.get("q") || "";
  const key = queryParams.get("key") || "";
  const value = queryParams.get("value") || "";

  // const { page, pageSize, keySearch, filter } = keys;

  useEffect(() => {
    let temp = `?page=${page}&limit=${limit}&q=${keySearch}&key=${key}&value=${value}&sort=${"ngayDang"}&_order=desc`;
    if (key === "_id") temp = `/${value}`;
    const run = async () => {
      try {
        await dispatch(getListAction(nameDB, GET_NEWS_LIST, temp));
      } catch (error) {
        console.log(error);
      }
    };
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, page, limit, keySearch, key, value]);

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
