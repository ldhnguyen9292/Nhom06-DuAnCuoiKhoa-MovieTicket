import React, { memo, useEffect } from "react";
import MovieInfoBooking from "../../../components/movie-detail/movie-info/movie-info.component";
import CinemaTime from "../../../components/movie-detail/cinema-time/cinemaTime.component";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getMovieDetailAction,
  getMovieDetailMongoAction,
} from "../../../../store/actions/movie.action";

function MovieDetail() {
  const maPhim = useParams("maPhim");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailAction(maPhim.maPhim));
    dispatch(getMovieDetailMongoAction(maPhim.maPhim));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <MovieInfoBooking />
      <CinemaTime />
    </div>
  );
}

export default memo(MovieDetail);
