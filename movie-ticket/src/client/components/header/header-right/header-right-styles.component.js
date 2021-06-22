import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  headerRight: {
    width: "100%",
    display: "none",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  flexG: {
    flexGrow: "1",
  },
  mobile: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "75%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
