import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import BustingCard from "../bustingcard/bustingcard.component";
import { useStyles } from "./slickslider-styles.component";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

export default function SlickSlider(props) {
  const classes = useStyles();
  const movieList = useSelector((state) => state.movie.movieList);

  const prev = () => {
    document.querySelector(".slick-prev").click();
  };

  const next = () => {
    document.querySelector(".slick-next").click();
  };

  const render = () => {
    const settings = {
      infinite: true,
      speed: 500,
      rows: 2,
      slidesPerRow: 4,
      autoplay: true,
      autoplaySpeed: 4000,
      initialSlide: 0,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesPerRow: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 920,
          settings: {
            slidesPerRow: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 629,
          settings: {
            slidesPerRow: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings} className={classes.slider}>
          {movieList.map((item, index) => {
            return (
              <div key={index}>
                <BustingCard item={item} />
              </div>
            );
          })}
        </Slider>
        <Container className={classes.arrowslick}>
          <div className={classes.btngroup} variant="contained" color="primary">
            <Button className={classes.btn} onClick={() => prev()}>
              Trước
            </Button>
            <Button className={classes.btnView}>
              <div className={classes.btnViewBefore} />
              <NavLink to="/movie" className={classes.btnViewContent}>
                Xem tất cả
              </NavLink>
              <div className={classes.btnViewAfter} />
            </Button>
            <Button className={classes.btn} onClick={() => next()}>
              Sau
            </Button>
          </div>
        </Container>
      </div>
    );
  };

  return <div className={classes.root}>{render()}</div>;
}
