import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/home/home.page";
import Movie from "./pages/movie/movie.page";
import MovieDetail from "./pages/movie/movie-detail/movie-detail.page";
import Contact from "./pages/contact/contact.page";
import News from "./pages/news/news.page";
import User from "./pages/user/user.page";
import Login from "./pages/login/login.page";
import Registration from "./pages/registration/registration.page";
import BackToTop from "./components/back-to-top/back-to-top.component";
import SeatBooking from "./pages/movie/seat-booking/seat-booking.page";
import BookingSummary from "./pages/movie/booking-summary/booking-summary";
import BookingConfirmation from "./pages/movie/booking-confirmation/booking-confirmation.page";
import Guard from "../HOC/guard.hoc";

function Client() {
  const [position, setPosition] = useState(0);

  const handlePosition = () => {
    setPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePosition);
  }, [position]);

  return (
    <>
      <Header pos={position} />
      <BackToTop pos={position} handlePosition={handlePosition} />
      <Switch>
        <Route path="/movie" exact component={Movie} />
        <Route
          path="/movie/movie-detail:maPhim"
          exact
          component={MovieDetail}
        />
        <Route path="/movie/seat-booking" exact component={SeatBooking} />
        <Route path="/movie/booking-summary" exact component={BookingSummary} />
        <Route
          path="/movie/booking-confirmation"
          exact
          component={BookingConfirmation}
        />

        <Route path="/login" exact>
          <Guard page={"login"}>
            <Login />
          </Guard>
        </Route>
        <Route path="/registration" exact component={Registration} />
        <Route path="/user/:taiKhoan" exact component={User} />

        <Route path="/news" exact component={News} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/" exact component={Home} />
        <Route path="">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default withRouter(Client);
