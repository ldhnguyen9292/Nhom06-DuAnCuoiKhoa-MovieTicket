import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    borderRadius: 10,
    padding: 5,
    margin: 20,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("600")]: {
      flexDirection: "column",
    },
  },
  item: {
    width: "50%",
    padding: 10,
    [theme.breakpoints.down("600")]: {
      width: "100%",
    },
  },
  title: {
    fontWeight: "bold",
  },
}));
