import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { useStyles } from "./play-card-styles.component";
import ModalVideo from "./../modal-video/modal-video.component";

function PlayCard(props) {
  const classes = useStyles();
  const { slider } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {slider.trailer ? (
        <PlayArrowIcon
          fontSize="large"
          className={classes.iconPlay}
          onClick={handleOpen}
        />
      ) : (
        <></>
      )}
      <IconButton className={classes.moreBtn}>
        <Typography className={classes.p}>Chi tiết</Typography>
      </IconButton>
      <ModalVideo slider={slider} open={open} handleClose={handleClose} />
    </>
  );
}

export default PlayCard;
