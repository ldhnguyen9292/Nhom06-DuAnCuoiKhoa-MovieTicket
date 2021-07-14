import { makeStyles } from "@material-ui/core";

const color = "#707070";

export const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    color: color,
  },
  imgTop: {
    height: 300,
    objectFit: "fill",
    "& img": {
      height: "100%",
    },
  },
  content: {
    padding: "2% 4%",
    transition: "all 0.5s",
    "& img, & iframe": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px auto",
      maxHeight: 300,
      maxWidth: 450,
      borderRadius: 5,
      overflow: "hidden",
    },
  },
  contentLock: {
    display: "box",
    lineClamp: 4,
    boxOrient: "vertical",
    overflow: "hidden",
    transition: "all 0.5s",
  },
  lockBtn: {
    color: "#b446ff",
    cursor: "pointer",
    padding: "0 4%",
  },
  titleRed: {
    color: "#b446ff",
    padding: "10px 0",
    padding: "0 4%",
  },
  title: {
    textTransform: "uppercase",
    color: "black",
    padding: "2% 4%",
    margin: 0,
  },
  quote: {
    border: "1px solid #dddddd",
    padding: "0 3% ",
    color: "black",
  },
  titleQuote: {
    color: "#b446ff",
    fontWeight: "bold",
  },
  avatar: {
    width: "100%",
    height: "90%",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "0 5px 5px 0",
  },
}));
