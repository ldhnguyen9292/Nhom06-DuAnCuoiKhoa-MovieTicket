import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  seatMain: {
    padding: "0 5%",
  },
  seat: {
    width: "5vw",
    height: "5%",
    fontSize: 11,
    textAlign: "center",
    border: "1px solid #4d4f5c",
    lineHeight: 1.5,
    borderRadius: 5,
    cursor: "pointer",
    margin: "5px 1vw 20px 1vw",
    [theme.breakpoints.up("sm")]: {
      height: 20,
      fontSize: 13,
    },
    [theme.breakpoints.up("md")]: {
      height: 25,
      fontSize: 15,
    },
    [theme.breakpoints.up("lg")]: {
      height: 35,
      fontSize: 19,
    },
    [theme.breakpoints.up("xl")]: {
      height: 40,
      fontSize: 22,
    },
    position: "relative",
    "& input": {
      display: "none",
    },
    listStyle: "none",
    "&::after": {
      content: '""',
      position: "absolute",
      border: "1px solid #4d4f5c",
      borderRadius: "0 0 5px 5px",
      bottom: -15,
      width: "80%",
      height: 10,
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  seatDisabled: {
    background: "#4d4f5c",
    cursor: "default",
    "&::after": {
      background: "#4d4f5c",
    },
  },
  seatActive: {
    background: "#b446ff",
    "&::after": {
      background: "#b446ff",
    },
  },
  label: {
    cursor: "pointer",
  },
  labelDisabled: {
    cursor: "default",
  },
  seatInfo: {
    width: "50%",
    margin: "0 auto",
    paddingTop: 20,
    textAlign: "center",
    "& span": {
      fontSize: "40%",
      fontWeight: "bold",
    },
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: "0px 10px",
    background: "red",
    color: "white",
    marginBottom: 5,
  },
}));
