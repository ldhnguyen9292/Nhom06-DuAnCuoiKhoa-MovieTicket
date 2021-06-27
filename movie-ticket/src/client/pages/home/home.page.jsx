import React from "react";
import CarouselComponent from "../../components/home-components/carousel/carousel.component";
import SearchHome from "../../components/home-components/search/search.component";
import MovieComponent from './../../components/home-components/movie/movie.component';
import NewsComponent from './../../components/home-components/news/news.component';

function Home() {
  return (
    <div>
      <CarouselComponent />
      <SearchHome />
      <MovieComponent />
      <NewsComponent />
    </div>
  );
}

export default Home;
