import { makeStyles } from "@material-ui/core";

const color = "rgba(255,255,255,0.38)";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2B2D3D",
    color: color,
  },
  topLeft: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sx")]: {
      justifyContent: "flex-start",
    },
  },
  backIcon: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "& svg": {
      width: 50,
      background: "#3f414f",
      fill: color,
      padding: 5,
      borderRadius: 5,
    },
  },
  textBox: {
    display: "block",
    "& p": {
      margin: "5px auto",
    },
    padding: 10,
  },
  text: {
    background: "#3f414f",
    padding: 5,
    width: 50,
    textAlign: "center",
  },
  topMid: {
    margin: "0 auto",
    textAlign: "center",
    "& h3, & h4": {
      textTransform: "uppercase",
    },
  },
  topRight: {
    height: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sx")]: {
      justifyContent: "flex-end",
    },
  },
  payIcon: {
    textAlign: "center",
    color: "white",
    padding: "5px 10px",
    background:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    textTransform: "uppercase",
    borderRadius: 5,
    boxShadow: "2px 2px rgb(0 0 0 /20%)",
    border: "1px solid #b446ff",
    "&:hover": {
      background: "#3f414f",
      color: "#b446ff",
    },
  },
}));
