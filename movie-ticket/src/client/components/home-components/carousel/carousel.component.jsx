import React, { useEffect, useState } from "react";
import { useStyles } from "./carousel-styles.component";
import Slider from "react-slick";
import { CardMedia } from "@material-ui/core";
import clsx from "clsx";
import PlayCard from "./../../play-card/play-card.component";

function CarouselComponent() {
  const classes = useStyles();
  const carouselList = [
    {
      id: 0,
      tenphim: "Lật Mặt",
      maPhim: 1314,
      maTinTuc: -1,
      trailer: "https://www.youtube.com/embed/jox0zmGyHLU",
      hinhAnh:
        "https://bloganchoi.com/wp-content/uploads/2021/04/review-phim-lat-mat-48h-9.jpg",
    },
    {
      id: 1,
      tenphim: "Bố già",
      maphim: 1415,
      maTinTuc: -1,
      trailer: "https://www.youtube.com/embed/jluSu8Rw6YE",
      hinhAnh:
        "https://afamilycdn.com/150157425591193600/2021/6/15/image001-162374931638285418597-1623753701536-1623753701649199251211.jpg",
    },
    {
      id: 2,
      tenphim: "Galaxy khuyến mãi",
      maphim: -1,
      maTinTuc: 1,
      trailer: "",
      hinhAnh:
        "https://www.galaxycine.vn/media/2021/4/27/banner-2048x682_1619508931491.jpg",
    },
    {
      id: 3,
      tenphim: "Galaxy tặng vé miễn phí",
      maphim: -1,
      maTinTuc: 2,
      trailer: "",
      hinhAnh:
        "https://www.galaxycine.vn/media/2021/4/12/banner-2048x682_1618212848326.jpg",
    },
    {
      id: 4,
      tenphim: "CRUELLA",
      maphim: 2000,
      maTinTuc: -1,
      trailer: "https://www.youtube.com/embed/gmRKv7n2If8",
      hinhAnh:
        "https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2021/cadwpqrnd/2021_06_03/2102170_weill_cruella_tease_k8wupf_wdiz.jpg",
    },
    {
      id: 5,
      tenphim: "THỎ PETER 2",
      maphim: 2001,
      maTinTuc: -1,
      trailer: "https://www.youtube.com/embed/XDSbhWVxNIw",
      hinhAnh: "https://i.ytimg.com/vi/1t2nhDE_Yes/maxresdefault.jpg",
    },
  ];
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [active, setActive] = useState(0);
  let slider1, slider2;
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

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
                <PlayCard slider={slider} />
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
      initialSlide: 0,
      swipeToSlide: true,
      focusOnSelect: true,
      className: "center",
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
                  active === slider.id ? classes.active : classes.imgBot
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

export default CarouselComponent;
