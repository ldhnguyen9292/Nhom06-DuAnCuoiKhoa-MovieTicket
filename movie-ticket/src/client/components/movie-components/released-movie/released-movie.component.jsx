import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStyles } from "./released-movie-styles.component";
import CardMovie from "../../movie-card/movie-card-1/movie-card.component";
import CardMovie2 from "../../movie-card/movie-card-2/movie-card-2.component";
import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import clsx from "clsx";
import SearchMovie from "../search-movie/search-movie.component";

function ReleasedMovie() {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const search = new URLSearchParams(window.location.search);
  const history = useHistory();
  const q = search.get("q") || "";
  const rate = Number(search.get("rate")) || 5;
  const limit = 12;
  const page = Number(search.get("page")) || 1;
  const movieList = useSelector((state) => state.movie.movieList);
  let array = [];

  const changeActive = () => {
    setActive(!active);
  };

  const handleChangePage = (event, value) => {
    history.push({
      pathname: "/movie",
      search: `?q=${q}&rate=${rate}&page=${value}`,
    });
  };

  const renderMovieList1 = () => {
    const begin = 1 * (limit * (page - 1));
    const end = limit * page;
    return (
      <Grid container className={classes.root}>
        {array.map((movie, index) => {
          if (index + 1 >= begin && index + 1 <= end) {
            return (
              <Grid
                key={index}
                item
                xs={6}
                lg={3}
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
    const begin = 1 * (limit * (page - 1));
    const end = limit * page;
    return (
      <Grid container className={classes.root}>
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

  const setArray = () => {
    if (q) {
      array = movieList.filter((v) => {
        const index = v.tenPhim.toLowerCase().indexOf(q.toLowerCase());
        return index > -1;
      });
    } else if (rate) {
      array = movieList.filter((v) => v.danhGia >= rate);
    } else array = movieList;
  };

  setArray();
  const pageTotal = Math.round(array.length / limit);

  return (
    <Grid className={classes.root}>
      <div className={classes.title}>
        <span>PHIM DANG CHIEU</span>
        <div className={classes.options}>
          <ViewModuleIcon
            className={clsx(
              classes.arrangeIcon,
              !active ? classes.arrangeIconActive : ""
            )}
            onClick={changeActive}
          />
          <FormatListBulletedIcon
            className={clsx(
              classes.arrangeIcon,
              active ? classes.arrangeIconActive : ""
            )}
            onClick={changeActive}
          />
        </div>
      </div>
      <SearchMovie />
      <div>
        {array.length > 0 ? (
          !active ? (
            renderMovieList1()
          ) : (
            renderMovieList2()
          )
        ) : (
          <div>Không có kết quả tìm kiếm</div>
        )}
      </div>
      <Pagination
        count={pageTotal}
        variant="outlined"
        shape="rounded"
        page={page}
        className={classes.pagination}
        onChange={handleChangePage}
      />
    </Grid>
  );
}

export default ReleasedMovie;
