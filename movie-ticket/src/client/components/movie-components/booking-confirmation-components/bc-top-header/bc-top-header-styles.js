import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: 200,
    position: "relative",
    background: "rgba(0,0,0,0.8)",
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  title: {
    height: "100%",
    color: "white",
    fontSize: 20,
    textTransform: "uppercase",
    "& h2": {
      margin: 0,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 24,
    },
  },
}));
