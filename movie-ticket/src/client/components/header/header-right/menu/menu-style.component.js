import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
    textDecoration: "none",
    fontSize: 24,
    margin: 10,
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
