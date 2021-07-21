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
  },
  h2: {
    fontSize: "32px",
    width: "100%",
    marginBottom: "5px",
  },
  fade: {
    width: "100%",
    height: "2px",
    background:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
  },
}));
