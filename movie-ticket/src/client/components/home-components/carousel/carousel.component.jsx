import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStyles } from "./carousel-styles.component";
import Slider from "react-slick";
import { CardMedia } from "@material-ui/core";
import clsx from "clsx";
import PlayCard from "./../../play-card/play-card.component";
import { callAPIactions } from "./../../../../store/actions/mock-api-main.actions";
import { GET_CAROUSEL_LIST } from "../../../../store/constants/carousel.constants";

function CarouselComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const carouselList = useSelector((state) => state.carousel.carouselList);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [active, setActive] = useState(0);
  let slider1, slider2;
  const type = GET_CAROUSEL_LIST;
  const history = useHistory();

  useEffect(() => {
    dispatch(
      callAPIactions.getListAction("carousel", type, "?_sort=id&_order=desc")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const handleMore = (slider) => {
    let pathname = "";
    let search = "";
    if (slider.loai === "tinTuc") {
      pathname = `/news`;
      search = `?id=${slider.maLienKet}`;
    } else if (slider.loai === "phimBomTan") {
      pathname = `/movie/movie-detail:maPhim=${slider.maLienKet}`;
    }
    history.push({ pathname, search });
  };

  const renderTop = () => {
    return (
      <Slider
        asNavFor={nav2}
        ref={(slider) => (slider1 = slider)}
        arrows={false}
      >
        {carouselList.map((slider, index) => {
          return (
            <div className={classes.top} key={index}>
              <CardMedia className={classes.imgTop} image={slider.hinhAnh} />
              <div className={classes.btnTopMore}>
                <PlayCard
                  slider={slider}
                  handleMore={() => handleMore(slider)}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    );
  };

  const renderBot = () => {
    const settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      initialSlide: 0,
      autoplaySpeed: 4000,
      cssEase: "linear",
      pauseOnHover: true,
      swipeToSlide: true,
      focusOnSelect: true,
      centerMode: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Slider
        asNavFor={nav1}
        ref={(slider) => (slider2 = slider)}
        beforeChange={(slider, next) => {
          setActive(next);
        }}
        {...settings}
      >
        {carouselList.map((slider, index) => {
          return (
            <div className={classes.bot} key={index}>
              <CardMedia
                className={clsx(
                  classes.imgSetting,
                  active === index ? classes.active : classes.imgBot
                )}
                image={slider.hinhAnh}
              />
            </div>
          );
        })}
      </Slider>
    );
  };

  return (
    <div className={classes.root}>
      {renderTop()}
      {renderBot()}
    </div>
  );
}

export default memo(CarouselComponent);
