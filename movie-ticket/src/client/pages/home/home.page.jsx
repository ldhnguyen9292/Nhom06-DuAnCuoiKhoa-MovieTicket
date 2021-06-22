import React from "react";
import CarouselComponent from "../../components/movie-components/carousel/carousel.component";
import MovieComponent from "../../components/movie-components/movie/movie.component";
import NewsComponents from "../../components/movie-components/news/news.components";

function Home() {
  return (
    <div>
      <CarouselComponent />
      <MovieComponent />
      <NewsComponents />
    </div>
  );
}

export default Home;
