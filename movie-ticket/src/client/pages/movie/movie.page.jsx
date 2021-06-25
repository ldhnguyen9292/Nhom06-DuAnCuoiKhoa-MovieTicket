import React from "react";
import { Route, Switch} from "react-router-dom";

function Movie() {
  return (
    <>
      <h1>Movie</h1>
      <Switch>
        <Route path="/movie/movie-detail:maPhim"></Route>
      </Switch>
    </>
  );
}

export default Movie;
