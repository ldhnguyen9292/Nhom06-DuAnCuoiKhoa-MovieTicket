import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./SliderTopMovie-styles.component";
import Slider from "react-slick";
import format from "date-format";
import { useHistory } from "react-router-dom";

function SliderTopMovie() {
  const classes = useStyles();
  const comingSoon = useSelector((state) => state.movie.comingSoon);
  const history = useHistory();

  const handleClick = (maPhim) => {
    history.push(`/movie/movie-detail/${maPhim}`);
  };

  const render = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 849,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 699,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings} className={classes.slider}>
          {comingSoon.map((m) => (
            <div key={m.tenPhim} className={classes.item}>
              <div className={classes.imgBox}>
                <img
                  src={m.hinhAnh?.replace("http", "https")}
                  className={classes.img}
                  alt={"Hình top movie"}
                />
              </div>
              <div className={classes.content}>
                <h3 onClick={() => handleClick(m.maPhim)}>{m.tenPhim}</h3>
                <p>{format("dd/MM/yyyy", new Date(m.ngayKhoiChieu))}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  if (!comingSoon) return <></>;
  return <div className={classes.root}>{render()}</div>;
}

export default memo(SliderTopMovie);
