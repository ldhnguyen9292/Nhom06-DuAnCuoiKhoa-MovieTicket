import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "flex-start",
    },
    paddingRight: "30px",
  },
  iconBox: {
    color: "white",
    margin: "0 10px",
    padding: "1vw",
    [theme.breakpoints.up("600")]: {
      padding: 7,
    },
    maxHeight: "40px",
    height: "7vw",
    "& svg": {
      fontSize: "5vw",
      [theme.breakpoints.up("600")]: {
        fontSize: "1.5rem",
      },
    },
    border: "1px solid #31d7a9",
    "&:hover": {
      backgroundColor: "#31d7a9",
    },
  },
}));
