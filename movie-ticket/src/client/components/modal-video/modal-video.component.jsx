import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Paper, Modal } from "@material-ui/core";
import { useStyles } from "./modal-video-styles.component";

function ModalVideo(props) {
  const classes = useStyles();
  const { slider } = props;

  const handleClose = () => {
    props.handleClose();
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
    <Modal open={props.open} onClose={handleClose}>
      <>{renderBody()}</>
    </Modal>
  );
}

export default ModalVideo;
