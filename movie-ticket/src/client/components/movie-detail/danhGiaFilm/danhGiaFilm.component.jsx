import React from "react";
import { useStyles } from "./danhGiaFilm-styles.component";
import Image from "./../../../../assets/images/aquaman.jpg";
import { Button } from "@material-ui/core";
import ArrowIcon from "../../../../assets/svg/MyArrowIcon";
import { CircularProgress } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

function DanhGiaFilm() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <div className={classes.left}>
        <div className={classes.img}>
          <img src={Image} />
          <div className={classes.btnBox}>
            <Button className={classes.btn}>
              <ArrowIcon />
            </Button>
          </div>
          <div className={classes.imgRight}>
            <h3>Aquaman</h3>
            <p>30.04.2021</p>
            <div className={classes.progressBox}>
              <div className={classes.proText}>7.5</div>
              <CircularProgress
                variant="determinate"
                value={75}
                size={80}
                className={classes.progress}
              />
            </div>
            <div>
              <div className={classes.starGr}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <span>3/4</span>
              </div>
              <p>124 người đánh giá</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <Button></Button>
      </div> */}
    </div>
  );
}

export default DanhGiaFilm;
