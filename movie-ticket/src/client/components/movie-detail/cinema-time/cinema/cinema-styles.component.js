import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    paddingBottom: "15px",
    borderBottom: "1px solid #eee",
    [theme.breakpoints.down("760")]: {
      display: "block",
    },
  },
  left: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("600")]: {
      flexDirection: "column",
      justifyContent: "flex-star",
      alignItems: "flex-start",
    },
    color: "rgba(0,0,0,0.87)",
    fontSize: "14px",
    letterSpacing: "1px",
    "& h3": {
      padding: "0",
      margin: "5px",
    },
    "& img": {
      margin: "0 10px",
    },
  },
  btn: {
    color: "rgba(0,0,0,0.12)",
    "&:hover": {
      color: "#38cfea",
      backgroundColor: "transparent",
    },
    minWidth: "18px",
    padding: "0",
    marginRight: "10px",
    height: "35px",
  },
  right: {
    padding: "10px 0px",
    width: "500px",
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "flex-start",
    [theme.breakpoints.down("850")]: {
      width: "100%",
    },
  },
  logo: {
    width: 50,
    height: 50,
  },
}));
