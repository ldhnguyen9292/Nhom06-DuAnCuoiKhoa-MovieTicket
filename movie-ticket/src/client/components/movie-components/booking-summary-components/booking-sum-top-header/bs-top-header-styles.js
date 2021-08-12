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
    justifyContent: "space-between",
    maxWidth: 1200,
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    textTransform: "uppercase",
    "& h2": {
      margin: 0,
      paddingTop: 20,
    },
    "& h3": {
      margin: 0,
      paddingBottom: 20,
    },
  },
  topRight: {
    height: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
}));
