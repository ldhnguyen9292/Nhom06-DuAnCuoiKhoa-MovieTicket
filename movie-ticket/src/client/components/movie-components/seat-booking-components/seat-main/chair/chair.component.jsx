import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import Popover from "@material-ui/core/Popover";
import clsx from "clsx";
import { useStyles } from "./chair-component-styles";
import { PUT_CHAIR_BOOKING } from "../../../../../../store/constants/movie.constants";

function ChairComponent(props) {
  const classes = useStyles();
  const { chair } = props;
  const { stt, daDat, maGhe, daChon, giaVe } = chair;
  const dispatch = useDispatch();
  const [choose, setChosen] = useState(daChon);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleChooseTicket = () => {
    dispatch({ type: PUT_CHAIR_BOOKING, payload: { maGhe } });
    setChosen(!choose);
  };

  return (
    <li
      className={clsx(
        classes.seat,
        daDat ? classes.seatDisabled : "",
        choose ? classes.seatActive : ""
      )}
    >
      <input type="checkbox" id={stt} name="cb" />
      <label
        htmlFor={stt}
        className={daDat ? classes.labelDisabled : classes.label}
        onClick={handleChooseTicket}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {stt}
      </label>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableScrollLock
      >
        <p>
          {giaVe.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </p>
      </Popover>
    </li>
  );
}

export default memo(ChairComponent);
