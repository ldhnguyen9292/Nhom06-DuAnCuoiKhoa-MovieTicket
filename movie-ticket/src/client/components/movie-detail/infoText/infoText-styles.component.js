import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    padding: "0 50px",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  right: {
    display: "flex",
    "& p": {
      minWidth: "150px",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
    },
  },
  info: {
    display: "flex",
    "& p": {
      minWidth: "150px",
    },
  },
  bold: {
    color: "white",
    fontWeight: "bold",
  },
}));
