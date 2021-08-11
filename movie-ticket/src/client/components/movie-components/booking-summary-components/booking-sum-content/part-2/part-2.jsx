import React, { memo } from "react";
import { Paper, CardMedia, IconButton, makeStyles } from "@material-ui/core";
import Bonus from "./../../../../../../assets/images/cc1.jpg";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const useStyles = makeStyles(() => ({
  bonus: {
    padding: 10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
  },
  paper: {
    marginTop: 12,
    marginBottom: 40,
  },
}));

function PartTwo(props) {
  const classes = useStyles();
  const { donate } = props;

  const handleDonate = () => {
    props.handleDonate();
  };

  return (
    <Paper className={classes.paper}>
      <CardMedia component="img" src={Bonus} />
      <div className={classes.bonus} onClick={handleDonate}>
        <IconButton>
          {donate ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
        </IconButton>
        <span>
          Thêm 5000Đ để tặng cho team Movie Ticket (Bỏ chọn nếu bạn không muốn)
        </span>
      </div>
    </Paper>
  );
}

export default memo(PartTwo);
