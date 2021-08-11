import React, { memo, useEffect, useState } from "react";
import MovieInfoBooking from "../../../components/movie-detail/movie-info/movie-info.component";
import CinemaTime from "../../../components/movie-detail/cinema-time/cinemaTime.component";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getMovieDetailAction,
  getMovieDetailMongoAction,
} from "../../../../store/actions/movie.action";
import LoadingComponent from "../../../components/loading/loading.component";
import { getCinemaListAction } from "../../../../store/actions/cinema.action";

function MovieDetail() {
  const maPhim = useParams("maPhim");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();

  const callAPI = async () => {
    setLoading(true);
    await dispatch(getMovieDetailAction(maPhim.maPhim));
    await dispatch(getMovieDetailMongoAction(maPhim.maPhim));
    await dispatch(getCinemaListAction());
    setLoading(false);
  };

  useEffect(() => {
    callAPI();
    return () => setLoading({});
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LoadingComponent />;
  return (
    <div>
      <MovieInfoBooking />
      <CinemaTime />
    </div>
  );
}

export default memo(MovieDetail);
