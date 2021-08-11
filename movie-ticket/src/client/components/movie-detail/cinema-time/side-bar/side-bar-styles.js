import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    padding: "2vw",
    overflowY: "hidden",
  },
  title: {
    fontSize: 20,
    [theme.breakpoints.down("600")]: {
      fontSize: "3vw",
    },
    fontWeight: "bold",
    position: "relative",
    padding: "10px 0",
    marginBottom: "5px",
    margin: 0,
    "&::after": {
      content: '""',
      width: "20%",
      border: "2px solid #b446ff",
      position: "absolute",
      bottom: -5,
      left: 0,
    },
    "&::before": {
      content: '""',
      width: "100%",
      border: "1px solid #eee",
      position: "absolute",
      bottom: -4,
      left: 0,
    },
  },
}));
