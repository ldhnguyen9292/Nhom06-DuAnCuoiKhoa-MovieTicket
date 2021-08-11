import React, { memo } from "react";
import { useStyles } from "./topMovie-styles.component";
import SliderTopMovie from "./slider-top-movie/SliderTopMovie.component";
import Image from "./../../../../assets/images/upcoming_heading.jpg";

function TopMovie() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <img src={Image} alt={"Hình top movie"} />
        <h3>Phim sắp chiếu</h3>
      </div>
      <div className={classes.right}>
        <SliderTopMovie />
      </div>
    </div>
  );
}

export default memo(TopMovie);
