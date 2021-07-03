import React from "react";
import NewsCard from "./news-card/news-card";
import { useStyles } from "./news-content-styles";
import NewsPagination from "./news-pagination/news-pagination";

function NewsContent() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.box}>
        <NewsCard />
      </div>
      <div className={classes.box}>
        <NewsCard />
      </div>
      <NewsPagination />
    </>
  );
}

export default NewsContent;
