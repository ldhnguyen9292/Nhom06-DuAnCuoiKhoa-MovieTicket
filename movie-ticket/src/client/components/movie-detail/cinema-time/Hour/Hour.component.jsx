import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "75px",
    border: "1px solid #d0cfcf",
    color: "rgba(0,0,0,0.54)",
    fontSize: "12px",
    letterSpacing: "1px",
    "&:hover": {
      backgroundColor: "#38cfea",
      border: "1px solid #38cfea",
      color: "white",
    },
    margin: "0 7.5px",
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    // padding: theme.spacing(1),
    backgroundColor: "#333545",
    padding: "15px 30px",
  },
  content: {
    textAlign: "center",
    color: "white",
    // overflowY: "scroll",
    fontSize: "12px",
    "& p": {
      fontSize: "10px",
      padding: 0,
      margin: 0,
    },
    "& span": {
      color: "#38cfea",
      fontSize: "14px",
    },
    "& h3": {
      padding: 0,
      margin: 0,
    },
  },
}));

function Hour(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { cinema } = props;
  const history = useHistory();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleClick = () => {
    localStorage.setItem("userBooking", JSON.stringify(cinema));
    history.push(`/movie/seat-booking`);
  };

  return (
    <div>
      <Button
        className={classes.root}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        onClick={handleClick}
      >
        <span>
          {new Date(cinema.ngayChieuGioChieu).toLocaleString("vi-VN", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </span>
      </Button>

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
        disableScrollLock={true}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className={classes.content}>
          <h3>
            {cinema.giaVe.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </h3>
        </div>
      </Popover>
    </div>
  );
}

export default Hour;
