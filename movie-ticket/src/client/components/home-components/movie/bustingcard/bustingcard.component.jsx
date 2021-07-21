import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./bustingcard-styles.component";
import { Box, SvgIcon } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import Button from "@material-ui/core/Button";
import TicketIcon from "./../../../../../assets/svg/TicketIcon";
import ModalVideo from "../../../modal-video/modal-video.component";

function BustingCard(props) {
  const classes = useStyles();
  const { item } = props;
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const renderStar = (danhGia) => {
    let result = [];
    for (let index = 0; index < 5; index++) {
      if (danhGia > 2) {
        result.push(<StarIcon fontSize="small" />);
        danhGia -= 2;
      } else if (danhGia > 0) {
        result.push(<StarHalfIcon fontSize="small" />);
        danhGia = 0;
      } else {
        result.push(<StarBorderIcon fontSize="small" />);
      }
    }
    return result;
  };

  const handleMovieDetailClick = () => {
    history.push(`/movie/movie-detail:${item.maPhim}`);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box boxShadow={3} className={classes.root}>
        <div classes={classes.imgbox}>
          <img src={item.hinhAnh} alt="" className={classes.img} />
          <div className={classes.overlay} />
          <div className={classes.view}>
            <div className={classes.btnbox}>
              <Button className={classes.btn1} onClick={handleOpen}>
                Xem Trailer
              </Button>
              <Button className={classes.btn2} onClick={handleMovieDetailClick}>
                Xem Chi tiết
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.contentbox}>
          <div className={classes.left}>
            <p className={classes.title}>{item.tenPhim}</p>
            <p className={classes.type}>Drama, Acation</p>
            <div className={classes.icongroup}>{renderStar(item.danhGia)}</div>
          </div>
          <div className={classes.right}>
            <Button className={classes.button} onClick={handleMovieDetailClick}>
              <SvgIcon className={classes.icon}>
                <TicketIcon />
              </SvgIcon>
            </Button>
          </div>
        </div>
      </Box>
      <ModalVideo
        slider={item}
        open={open}
        handleClose={handleOpen}
        handleMore={handleMovieDetailClick}
      />
    </>
  );
}

export default BustingCard;
