import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/home/home.page";
import Movie from "./pages/movie/movie.page";
import Contact from "./pages/contact/contact.page";
import News from "./pages/news/news.page";
import User from "./pages/user/user.page";

function Client() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
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
        <Route path="">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default withRouter(Client);
