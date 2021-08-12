import { makeStyles } from "@material-ui/core";

const color = "rgba(255,255,255,0.38)";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "#333545",
    padding: "4vw 0 10vw",
    [theme.breakpoints.up("1200")]: {
      padding: "40px 0",
    },
    color: color,
    textTransform: "uppercase",
    textAlign: "center",
    margin: "0 auto",
  },
  seatMain: {
    padding: "0 5%",
  },
  seat: {
    width: "50px",
    height: "25px",
    fontSize: 11,
    textAlign: "center",
    border: "1px solid #4d4f5c",
    lineHeight: 2,
    borderRadius: 5,
    cursor: "pointer",
    margin: "5px 1vw 20px 1vw",
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
}));
