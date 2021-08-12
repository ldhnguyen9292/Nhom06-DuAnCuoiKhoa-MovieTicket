import { makeStyles } from "@material-ui/core";

const color = "rgba(255,255,255,0.38)";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2B2D3D",
    color: color,
  },
  container: {
    display: "flex",
    alignItems: "center",
    maxWidth: 1200,
    justifyContent: "center",
    margin: "0 auto",
  },
  topLeft: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    "& p": {
      fontSize: "3vw",
      [theme.breakpoints.up("760")]: {
        fontSize: 20,
      },
    },
  },
  backIcon: {
    padding: "2vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "& svg": {
      width: "7vw",
      maxWidth: 50,
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
    padding: "1vw",
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
      fontSize: "4vw",
      [theme.breakpoints.up(760)]: {
        fontSize: 26,
      },
    },
  },
  topRight: {
    height: "100%",
    padding: "1vw",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sx")]: {
      justifyContent: "flex-end",
    },
  },
  payIcon: {
    textAlign: "center",
    color: "white",
    padding: "1vw 1.5vw",
    [theme.breakpoints.up(1200)]: {
      padding: "5px 10px",
    },
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
