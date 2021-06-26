import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Grid } from "@material-ui/core";
import { useStyles } from "./movie-card-2-styles.component";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import MoreIcon from "@material-ui/icons/More";
import clsx from "clsx";
import ModalVideo from "../../modal-video/modal-video.component";

function CardMovie2(props) {
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
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={4} className={classes.left}>
        <CardMedia className={classes.imgSetting} image={movie.hinhAnh} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Grid container className={classes.right} alignItems="center">
          <Grid item xs={9}>
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
          <Grid item xs={3}>
            <Button size="small" className={classes.morebtn}>
              <MoreIcon />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              doloremque possimus, a labore in eos, error iste quae ipsum
              mollitia laudantium. Deserunt, facilis. Alias suscipit, ut eaque
              provident voluptate ab.
            </p>
          </Grid>
          <Grid item xs={12} className={classes.rightBot}>
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardMovie2;
