import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
  },
  overlay: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    background:
      "linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(212,212,212,0) 17%,rgba(3,3,3,1) 99%,rgba(0,0,0,1) 100%)",
  },
  movieBox: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  image: {
    height: "100%",
  },
  buttonBox: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  box: {
    height: 60,
    width: 60,
    borderRadius: "50%",
    // border: "10px solid rgba(255, 255, 255, 0.29)",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("760")]: {
      transform: "scale(0.6)",
    },
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: "50%",
    color: "white",
    padding: 0,
    margin: 0,
    background:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
  },
  fade: {
    height: 80,
    width: 80,
    borderRadius: "50%",
    border: "30px solid rgba(255, 255, 255, 0.29)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  contentBox: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    color: "white",
    padding: "2vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  headContent: {
    display: "flex",
  },
  p: {
    margin: "0px 0px",
    padding: 0,
    fontSize: "2vw",
    [theme.breakpoints.up("760")]: {
      fontSize: "18px",
    },
  },
  icongroup: {
    fontSize: "18px",
    color: "#b446ff",
  },
  h2: {
    fontSize: "3vw",
    [theme.breakpoints.up("760")]: {
      fontSize: "26px",
    },
    margin: "1vw 0",
    padding: "0",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  commentBox: {
    display: "flex",
    alignItems: "center",
  },
  btn: {
    maxWidth: "150px",
    width: "50%",
    textTransform: "none",
    color: "white",
    marginTop: "1vw",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: "3vw",
    [theme.breakpoints.up("760")]: {
      fontSize: "18px",
    },
  },
  comText: {
    fontSize: "2vw",
    marginLeft: "1vw",
    [theme.breakpoints.up("760")]: {
      fontSize: "18px",
    },
  },
  starIcon: {
    fontSize: "3vw",
    [theme.breakpoints.up("760")]: {
      fontSize: "18px",
    },
  },
}));
