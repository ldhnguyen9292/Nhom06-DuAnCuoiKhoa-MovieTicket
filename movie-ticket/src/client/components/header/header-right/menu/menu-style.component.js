import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  title: {
    color: "white",
    textDecoration: "none",
    textTransform: "uppercase",
    margin: 10,
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.1)",
    },
    wordSpacing: 2,
  },
}));
