import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Grid } from "@material-ui/core";
import { useStyles } from "./movie-card-styles.component";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import MoreIcon from "@material-ui/icons/More";
import clsx from "clsx";
import ModalVideo from "../../modal-video/modal-video.component";

function CardMovie(props) {
  const classes = useStyles();
  const { movie } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderStar = () => {
    let star = movie.danhGia;
    const starArray = [];
    for (let index = 0; index <= 4; index++) {
      if (star > 2) {
        starArray.push(<StarIcon className={classes.star} />);
        star -= 2;
      } else if (star >= 1) {
        starArray.push(<StarHalfIcon className={classes.star} />);
        star = 0;
      } else {
        starArray.push(<StarBorderIcon className={classes.star} />);
      }
    }
    return starArray;
  };

  return (
    <Card className={classes.root}>
      <div className={classes.top}>
        <CardMedia className={classes.imgSetting} image={movie.hinhAnh} />
        <div className={classes.topHover}>
          <button
            className={clsx(classes.btnSetting, classes.trailer)}
            onClick={handleOpen}
          >
            Xem trailer
          </button>
          <button className={clsx(classes.btnSetting, classes.more)}>
            Chi tiết
          </button>
          <ModalVideo slider={movie} open={open} handleClose={handleClose} />
        </div>
      </div>
      <Grid container className={classes.bot} alignItems="center">
        <Grid item xs={8}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {movie.tenPhim}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {movie.theLoai}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {renderStar()}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button size="small" className={classes.morebtn}>
            <MoreIcon />
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CardMovie;
