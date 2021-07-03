import React, { useState } from "react";
import { useStyles } from "./released-movie-styles.component";
import CardMovie from "../../movie-card/movie-card-1/movie-card.component";
import CardMovie2 from "../../movie-card/movie-card-2/movie-card-2.component";
import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import clsx from "clsx";

function ReleasedMovie(props) {
  const classes = useStyles();
  const { array, queryParams } = props;
  const [active, setActive] = useState(false);
  let pageLoad = {
    pageSize: queryParams.pageSize,
    page: queryParams.page,
  };
  const pageTotal = Math.round(array.length / 10);

  const changeActive2 = () => {
    setActive(false);
  };

  const changeActive1 = () => {
    setActive(true);
  };

  const changeState = (pageV) => {
    const newObject = { ...pageLoad, page: pageV };
    pageLoad = newObject;
    console.log(queryParams);
    props.handleChange({ ...queryParams, page: pageV, submit: true });
  };

  const handleChangePage = (event, value) => {
    changeState(value);
  };

  const renderMovieList1 = () => {
    const { pageSize, page } = pageLoad;
    const begin = 1 * (pageSize * (page - 1));
    const end = pageSize * page;
    return (
      <Grid container>
        {array.map((movie, index) => {
          if (index + 1 >= begin && index + 1 <= end) {
            return (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.cardItem}
              >
                <CardMovie movie={movie} />
              </Grid>
            );
          } else return <div key={index}></div>;
        })}
      </Grid>
    );
  };

  const renderMovieList2 = () => {
    const { pageSize, page } = pageLoad;
    const begin = 1 * (pageSize * (page - 1));
    const end = pageSize * page;
    return (
      <Grid container>
        {array.map((movie, index) => {
          if (index + 1 >= begin && index + 1 <= end) {
            return (
              <Grid key={index} className={classes.cardItem2}>
                <CardMovie2 movie={movie} />
              </Grid>
            );
          } else return <div key={index}></div>;
        })}
      </Grid>
    );
  };

  return (
    <Grid>
      <div className={classes.title}>
        <span>Phim đang chiếu</span>
        <div className={classes.options}>
          <ViewModuleIcon
            className={clsx(
              classes.arrangeIcon,
              !active ? classes.arrangeIconActive : ""
            )}
            onClick={changeActive2}
          />
          <FormatListBulletedIcon
            className={clsx(
              classes.arrangeIcon,
              active ? classes.arrangeIconActive : ""
            )}
            onClick={changeActive1}
          />
        </div>
      </div>
      {array.length > 0 ? (
        !active ? (
          renderMovieList1()
        ) : (
          renderMovieList2()
        )
      ) : (
        <div>Không có kết quả tìm kiếm</div>
      )}
      <Pagination
        count={pageTotal}
        variant="outlined"
        shape="rounded"
        page={pageLoad.page}
        className={classes.pagination}
        onChange={handleChangePage}
      />
    </Grid>
  );
}

export default ReleasedMovie;
