import React, { useState } from "react";
import { Grid, CardMedia } from "@material-ui/core";
import { useStyles } from "./seat-main-styles";
import Screen from "./../../../../../assets/images/screen.png";
import clsx from "clsx";

function SeatMain(props) {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const handleChooseTicket = async (event) => {
    const input = event.target.querySelector("input");
    if (!input) {
      const input = event.target;
      await setTimeout(() => {
        props.handleChooseTicket(input.checked);
        setState({ ...state, [`${input.id}`]: input.checked });
      }, 100);
    } else {
      input.checked = !input.checked;
      props.handleChooseTicket(input.checked);
      setState({ ...state, [`${input.id}`]: input.checked });
    }
  };

  const renderSeat = (start, end) => {
    const array = [];
    for (let index = start; index < end; index++) {
      array.push(
        <li
          key={index}
          className={clsx(
            classes.seat,
            index % 2 === 0 ? classes.seatDisabled : "",
            state[`${index}`] ? classes.seatActive : ""
          )}
          onClick={index % 2 === 1 ? handleChooseTicket : null}
        >
          <input type="checkbox" id={index} name="cb" />
          <label
            htmlFor={index}
            className={index % 2 === 0 ? classes.labelDisabled : classes.label}
          >
            {index}
          </label>
        </li>
      );
    }
    return array;
  };

  return (
    <div className={classes.root}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h3>Rạp 1</h3>
        <div className="st_seat_full_container">
          <div className="st_seat_lay_economy_wrapper float_left">
            <CardMedia component="img" src={Screen} />
            <Grid container justify="space-between" direction="row">
              <Grid item xs={6}>
                <Grid
                  container
                  justify="space-around"
                  className={classes.seatMain}
                >
                  {renderSeat(1, 60)}
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid
                  container
                  justify="space-around"
                  className={classes.seatMain}
                >
                  {renderSeat(61, 120)}
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center" className={classes.seatInfo}>
              <Grid className={classes.seat}>
                <span>Trống</span>
              </Grid>
              <Grid className={clsx(classes.seat, classes.seatActive)}>
                <span>Chọn</span>
              </Grid>
              <Grid className={clsx(classes.seat, classes.seatDisabled)}>
                <span>Đã đặt</span>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatMain;
