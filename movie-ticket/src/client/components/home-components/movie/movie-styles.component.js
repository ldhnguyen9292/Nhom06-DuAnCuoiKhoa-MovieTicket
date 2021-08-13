import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "1300px",
    width: "100%",
    maxWidth: "1200px",
    [theme.breakpoints.down("630")]: {
      maxWidth: "400px",
    },
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
}));
