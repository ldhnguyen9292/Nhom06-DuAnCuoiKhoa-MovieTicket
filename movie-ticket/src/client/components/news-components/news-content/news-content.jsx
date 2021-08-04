import React, { memo } from "react";
import { useSelector } from "react-redux";
import NewsCard from "./news-card/news-card";
import { useStyles } from "./news-content-styles";
import NewsPagination from "./news-pagination/news-pagination";

function NewsContent() {
  const classes = useStyles();
  const newsList = useSelector((state) => state.news.newsList);
  if (!newsList) {
    return <p className={classes.box}>Không tìm thấy kết quả</p>;
  }

  if (Array.isArray(newsList))
    return (
      <>
        {newsList.map((newsItem, index) => (
          <div key={index} className={classes.box}>
            <NewsCard newsItem={newsItem} />
          </div>
        ))}
        <NewsPagination />
      </>
    );

  return (
    <>
      <div className={classes.box}>
        <NewsCard newsItem={newsList} />
      </div>
      <NewsPagination />
    </>
  );
}

export default memo(NewsContent);
