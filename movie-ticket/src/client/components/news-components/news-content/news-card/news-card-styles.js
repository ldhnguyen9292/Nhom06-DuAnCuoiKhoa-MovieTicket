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
    padding: "0 4%",
    transition: "all 0.5s",
    "& p": {
      margin: 0,
    },
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
    "& h2": {
      fontSize: 16,
      margin: 0,
    },
  },
  contentLock: {
    height: 64,
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
    padding: "0 4%",
  },
  title: {
    textTransform: "uppercase",
    color: "black",
    padding: "2% 4%",
    margin: 0,
  },
  avatar: {
    width: "100%",
    height: "90%",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "0 5px 5px 0",
  },
  seeMore: {
    "&:after": {
      content: '"..."',
      fontWeight: "bold",
      paddingLeft: 2,
    },
  },
}));
