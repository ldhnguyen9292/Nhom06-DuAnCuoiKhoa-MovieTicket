import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
  },
  headerRight: {
    width: "100%",
    display: "none",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    [theme.breakpoints.down("1100")]: {
      width: "80%",
    },
    [theme.breakpoints.down("830")]: {
      width: "70%",
    },
  },
  flexG: {
    flexGrow: "1",
  },
  mobile: {
    display: "flex",
  },
}));
