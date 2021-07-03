import React, { useState } from "react";
import { Pagination } from "@material-ui/lab";
import { useStyles } from "./news-pagination-styles";

function NewsPagination() {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
  };

  return (
    <div>
      <Pagination
        count={10}
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
