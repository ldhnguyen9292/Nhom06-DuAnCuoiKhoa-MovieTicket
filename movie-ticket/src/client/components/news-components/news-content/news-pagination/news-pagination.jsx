import React from "react";
import { Pagination } from "@material-ui/lab";
import { useStyles } from "./news-pagination-styles";
import { useSelector, useDispatch } from "react-redux";
import { callAPIactions } from "../../../../../store/actions/mock-api-main.actions";
import { PUT_NEWS_KEY } from "../../../../../store/constants/news.contants";

function NewsPagination() {
  const classes = useStyles();
  const keys = useSelector((state) => state.news.newsKeys);
  const { page, pageSize, arrayLength } = keys;
  const pageNum = Math.ceil(arrayLength / pageSize) || 1;
  const dispatch = useDispatch();
  const { putKeyAction } = callAPIactions;
  const type = PUT_NEWS_KEY;

  const handleChange = (event, value) => {
    const data = { page: value };
    dispatch(putKeyAction(type, data));
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
