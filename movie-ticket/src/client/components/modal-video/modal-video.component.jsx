import React from "react";
import Button from "@material-ui/core/Button";
import { CardMedia, Paper, Modal } from "@material-ui/core";
import { useStyles } from "./modal-video-styles.component";

function ModalVideo(props) {
  const classes = useStyles();
  const { slider } = props;

  const handleClose = () => {
    props.handleClose();
  };

  const handleMore = () => {
    props.handleMore();
  };

  const renderBody = () => {
    return (
      <Paper className={classes.root}>
        <div className={classes.top}>
          <div className={classes.btnControl}>
            <Button className={classes.btn} size="small" onClick={handleClose}>
              Close
            </Button>
            <Button className={classes.btn} size="small" onClick={handleMore}>
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
