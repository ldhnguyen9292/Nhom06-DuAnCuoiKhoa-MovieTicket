import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxWidth: "1140px",
    display: "flex",
    padding: "0 20px",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 30px",
    },
  },
  copyRight: {
    color: "#31d7a9",
    marginRight: "2px",
    marginLeft: "2px",
  },
  link: {
    color: "#31d7a9",
    textTransform: "capitalize",
    padding: "0 5px",
    textAlign: "center",
  },
  left: {
    minWidth: "40%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    "& p": {
      margin: 0,
    },
  },
  right: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: "15px 0",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0",
    },
  },
}));
