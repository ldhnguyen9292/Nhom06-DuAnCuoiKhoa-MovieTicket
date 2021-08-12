import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Grid } from "@material-ui/core";
import { useStyles } from "./movie-card-2-styles.component";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import clsx from "clsx";
import ModalVideo from "../../modal-video/modal-video.component";
import TicketIcon from "./../../../../assets/svg/TicketIcon";

function CardMovie2(props) {
  const classes = useStyles();
  const history = useHistory();
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

  const handleClick = () => {
    history.push(`/movie/movie-detail/${movie.maPhim}`);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={4} className={classes.left}>
        <CardMedia
          className={classes.imgSetting?.replace("https", "http")}
          image={movie.hinhAnh}
        />
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
            <Button
              size="small"
              className={classes.morebtn}
              onClick={handleClick}
            >
              <TicketIcon />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.text}>{movie.moTa}</p>
          </Grid>
          <Grid item xs={12} className={classes.rightBot}>
            <button
              className={clsx(classes.btnSetting, classes.trailer)}
              onClick={handleOpen}
            >
              Xem trailer
            </button>
            <button
              className={clsx(classes.btnSetting, classes.more)}
              onClick={handleClick}
            >
              Chi tiết
            </button>
            <ModalVideo
              slider={movie}
              open={open}
              handleClose={handleClose}
              handleMore={handleClick}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardMovie2;
