import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: { width: "100%" },
  item: {
    display: "flex !important",
    flexDirection: "column",
    height: "50%",
  },
  imgBox: {
    width: "100%",
    height: "50%",
  },
  img: {
    width: "98%",
    height: "22vw",
    marginLeft: "6px",
    [theme.breakpoints.down("1600")]: {
      marginLeft: "5px",
    },
    [theme.breakpoints.down("1500")]: {
      marginLeft: "6px",
    },
    [theme.breakpoints.down("1200")]: {
      marginLeft: "6px",
      width: "97%",
    },
    [theme.breakpoints.down("850")]: {
      marginLeft: "4px",
      width: "97%",
    },
  },
  content: {
    display: "flex",
    width: "100%",
    height: "8vw",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#333",
    "& h3": {
      fontSize: "2vw",
      padding: 10,
      margin: "0",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      "&:hover": {
        color: "#b446ff",
        cursor: "pointer",
      },
    },
    "& p": {
      color: "#b446ff",
      fontSize: "2vw",
      margin: "0",
      padding: 10,
    },
  },
}));
