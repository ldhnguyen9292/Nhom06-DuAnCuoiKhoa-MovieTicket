import React, { memo } from "react";
import { useSelector } from "react-redux";
import NewsCard from "./news-card/news-card";
import { useStyles } from "./news-content-styles";
import NewsPagination from "./news-pagination/news-pagination";

function NewsContent() {
  const classes = useStyles();
  const newsList = useSelector((state) => state.news.newsList);

  return (
    <>
      {newsList ? (
        newsList.map((newsItem) => (
          <div className={classes.box}>
            <NewsCard newsItem={newsItem} />
          </div>
        ))
      ) : (
        <p className={classes.box}>Không tìm thấy kết quả</p>
      )}
      <NewsPagination />
    </>
  );
}

export default memo(NewsContent);
