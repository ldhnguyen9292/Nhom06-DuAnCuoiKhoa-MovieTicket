import React from "react";
import CarouselComponent from "../../components/home-components/carousel/carousel.component";
import SearchHome from "../../components/home-components/search/search.component";
// import SeatBooking from "../movie/seat-booking/seat-booking.page";
import MovieComponent from './../../components/home-components/movie/movie.component';
import NewsComponent from './../../components/home-components/news/news.component';

function Home() {
  return (
    <div>
      <CarouselComponent />
      <SearchHome />
      <MovieComponent />
      <NewsComponent />
      {/* <SeatBooking /> */}
    </div>
  );
}

export default Home;
