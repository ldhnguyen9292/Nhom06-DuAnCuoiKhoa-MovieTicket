import React from "react";
import NewsCard from "./news-card/news-card";
import NewsPagination from "./news-pagination/news-pagination";

function NewsContent() {
  return (
    <>
      <NewsCard />
      <NewsPagination />
    </>
  );
}

export default NewsContent;
