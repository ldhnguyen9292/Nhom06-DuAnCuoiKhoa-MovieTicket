import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Paper, Modal, IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { useStyles } from "./play-card-styles.component";

function PlayCard(props) {
  const classes = useStyles();
  const { slider } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  const renderBody = () => {
    return (
      <Paper className={classes.root}>
        <div className={classes.top}>
          <div className={classes.btnControl}>
            <Button className={classes.btn} size="small" onClick={handleClose}>
              Close
            </Button>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {slider.tenphim}
            </Typography>
            <Button className={classes.btn} size="small">
              Chi tiết
            </Button>
          </div>
          <CardMedia
            className={classes.media}
            component="iframe"
            src={slider.trailer}
          />
        </div>
      </Paper>
    );
  };

  return (
    <>
      {slider.trailer ? (
        <PlayArrowIcon
          fontSize="large"
          className={classes.iconPlay}
          onClick={handleClose}
        />
      ) : (
        <></>
      )}
      <IconButton className={classes.moreBtn}>
        <Typography>Chi tiết</Typography>
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <>{renderBody()}</>
      </Modal>
    </>
  );
}

export default PlayCard;
