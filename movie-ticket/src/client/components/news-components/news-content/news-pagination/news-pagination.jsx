import React from "react";
import { Pagination } from "@material-ui/lab";
import { useStyles } from "./news-pagination-styles";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function NewsPagination() {
  const classes = useStyles();
  const keys = useSelector((state) => state.news.newsKeys);
  const { page, pageSize, arrayLength } = keys;
  const pageNum = Math.ceil(arrayLength / pageSize) || 1;
  const history = useHistory();

  const handleChange = (event, value) => {
    history.push(`/news?page=${value}`);
  };

  return (
    <div>
      <Pagination
        count={pageNum}
        variant="outlined"
        shape="rounded"
        page={page}
        className={classes.pagination}
        onChange={handleChange}
      />
    </div>
  );
}

export default NewsPagination;
