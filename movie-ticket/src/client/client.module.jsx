import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/home/home.page";
import Movie from "./pages/movie/movie.page";
import Contact from "./pages/contact/contact.page";
import News from "./pages/news/news.page";
import User from "./pages/user/user.page";
import BackToTop from "./components/back-to-top/back-to-top.component";

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
        <Route path="/movie" exact>
          <Movie />
        </Route>
        <Route path="/news" exact>
          <News />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/user" exact>
          <User />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default withRouter(Client);
