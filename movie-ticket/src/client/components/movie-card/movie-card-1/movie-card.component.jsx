import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Grid } from "@material-ui/core";
import { useStyles } from "./movie-card-styles.component";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import TicketIcon from "./../../../../assets/svg/TicketIcon";
import clsx from "clsx";
import ModalVideo from "../../modal-video/modal-video.component";

function CardMovie(props) {
  const classes = useStyles();
  const { movie } = props;
  const history = useHistory();
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
        starArray.push(<StarIcon key={index} className={classes.star} />);
        star -= 2;
      } else if (star >= 1) {
        starArray.push(<StarHalfIcon key={index} className={classes.star} />);
        star = 0;
      } else {
        starArray.push(<StarBorderIcon key={index} className={classes.star} />);
      }
    }
    return starArray;
  };

  const handleClick = () => {
    history.push(`/movie/movie-detail/${movie.maPhim}`);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.top}>
        <CardMedia
          className={classes.imgSetting}
          image={movie.hinhAnh?.replace("http", "https")}
        />
        <div className={classes.topHover}>
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
          <Button
            onClick={handleClick}
            size="small"
            className={classes.morebtn}
          >
            <TicketIcon />
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CardMovie;
