import React from "react";
import MovieInfoBooking from "../../../components/movie-detail/movie-info/movie-info.component";
import CinemaTime from "../../../components/movie-detail/cinema-time/cinemaTime.component";

function MovieDetail() {
    return (
        <div>
            <MovieInfoBooking />
            <CinemaTime />
        </div>
    );
}

export default MovieDetail;
