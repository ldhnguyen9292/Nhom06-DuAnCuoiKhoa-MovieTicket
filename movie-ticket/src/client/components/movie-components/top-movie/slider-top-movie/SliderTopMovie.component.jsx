import React from "react";
import { useStyles } from "./SliderTopMovie-styles.component";
import Slider from "react-slick";
import Img1 from "./../../../../../assets/images/bot-1.jpg";
import Img2 from "./../../../../../assets/images/bot-2.jpg";
import Img3 from "./../../../../../assets/images/bot-3.jpg";
import Img4 from "./../../../../../assets/images/bot-4.jpg";
// import { Container } from "@material-ui/core";

function SliderTopMovie() {
  const classes = useStyles();
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
          <div className={classes.item}>
            <img src={Img1} className={classes.img} alt={"Hình top movie"} />
            <div className={classes.content}>
              {/* Link Movie Detail */}
              <h3>Aquaman</h3>
              {/* Link Movie Detail */}
              <p>Release On 30 Nov</p>
            </div>
          </div>
          <div>
            <img src={Img2} className={classes.img} alt={"Hình top movie"} />
            <div className={classes.content}>
              <h3>Aquaman</h3>
              <p>Release On 30 Nov</p>
            </div>
          </div>
          <div>
            <img src={Img3} className={classes.img} alt={"Hình top movie"} />
            <div className={classes.content}>
              <h3>Aquaman</h3>
              <p>Release On 30 Nov</p>
            </div>
          </div>
          <div>
            <img src={Img4} className={classes.img} alt={"Hình top movie"} />
            <div className={classes.content}>
              <h3>Aquaman</h3>
              <p>Release On 30 Nov</p>
            </div>
          </div>
          <div>
            <img src={Img1} className={classes.img} alt={"Hình top movie"} />
            <div className={classes.content}>
              {/* Link Movie Detail */}
              <h3>Aquaman</h3>
              {/* Link Movie Detail */}
              <p>Release On 30 Nov</p>
            </div>
          </div>
          <div>
            <img src={Img2} className={classes.img} alt={"Hình top movie"} />
            <div className={classes.content}>
              <h3>Aquaman</h3>
              <p>Release On 30 Nov</p>
            </div>
          </div>
          <div>
            <img src={Img3} className={classes.img} alt={"Hình top movie"} />
            <div className={classes.content}>
              <h3>Aquaman</h3>
              <p>Release On 30 Nov</p>
            </div>
          </div>
          <div>
            <img src={Img4} className={classes.img} alt={"Hình top movie"} />
            <div className={classes.content}>
              <h3>Aquaman</h3>
              <p>Release On 30 Nov</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  };
  return <div className={classes.root}>{render()}</div>;
}

export default SliderTopMovie;
