import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "white",
    padding: "10px 0 30px 0",
  },
  root: {
    margin: "2vw auto",
    maxWidth: 1200,
    maxHeight: 800,
  },
  container: {
    height: "60vw",
    maxHeight: 600,
    width: "100%",
    display: "flex",
    justifyContent: "center",

    gap: "2vw",
  },
  leftBox: {
    width: "50%",
    height: "100%",
  },
  rightBox: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rightTop: { width: "100%", height: "45%" },
  rightBot: { width: "100%", height: "45%" },
  paper: {
    padding: "0",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "2vw",
  },
  h2: {
    fontSize: "5vw",
    [theme.breakpoints.up("760")]: {
      fontSize: 32,
    },
    marginBottom: "5px",
  },
  fade: {
    height: "2px",
    background:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
  },
  btnBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  btnView: {
    position: "relative",
    borderRadius: "10px",
    border: "1px solid #ddd",
    height: "7vw",
    width: "20vw",
    maxHeight: 55,
    maxWidth: 150,
    fontSize: "3vw",
    [theme.breakpoints.up("760")]: {
      fontSize: 20,
    },
    color: "#b446ff",
    transition: "all 0.5s",
    background: "#ddd",
    backgroundImage:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 0",
    "&:hover": {
      backgroundSize: "100% 100%",
      color: "white",
    },
  },
}));
