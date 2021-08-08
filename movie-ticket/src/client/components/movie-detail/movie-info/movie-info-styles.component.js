import { makeStyles } from "@material-ui/core";
import BackGround from "./../../../../assets/images/background.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${BackGround}) no-repeat center top`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    padding: "100px 0",
    "&::before": {
      content: '""',
      width: "100%",
      height: "",
      display: "block",
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  },
  container: {
    maxWidth: "1200px",
  },
  Box: {
    height: "425px",
    width: "fit-content",
    // [theme.breakpoints.down("1200")]: {
    //   width: "928px",
    //   height: "408px",
    // },
    // [theme.breakpoints.down("992")]: {
    //   width: "708px",
    //   height: "408px",
    // },
    // [theme.breakpoints.down("768")]: {
    //   height: "345px",
    //   width: "100%",
    // },
    border: "5px solid white",
    margin: "0px auto 20px",
    position: "relative",
  },
  fade: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 0,
  },
  content: {
    // position: "absolute",
    height: "100%",
    width: "fit-content",
    display: "flex",

    color: "white",
    zIndex: 1,
  },
  contentBox: {
    width: "600px",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    zIndex: 1,
  },
  left: {
    width: "235px",
    display: "flex",
    alignItems: "center",
  },
  imgBox: {
    height: "330px",
    width: "215px",
    padding: 5,
    outline: "none",
    "& img": {
      border: "1px solid #ddd",
      borderRadius: "5px",
      width: "100%",
      height: "100%",
    },
    "&::before": {
      content: '""',
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.25)",
      top: "0px",
      left: "0px",
      position: "absolute",
    },
    position: "relative",
  },
  btnBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0px",
    left: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    "& svg": {
      fill: "white",
    },
    border: "2px solid #ddd",
    borderRadius: "50%",
    padding: "15px",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  rightBox: {
    height: "340px",
    maxWidth: "350px",
    "& h3": {
      margin: "20px 0px 0px",
      fontSize: "24px",
    },
    "& p": {
      margin: "10px 0px",
    },
  },
  btnInfo: {
    border: "1px solid #ddd",
    borderRadius: "15px",
    color: "white",
  },
  progressBox: {
    width: "80px",
    height: "80px",
    position: "relative",
  },
  progress: {
    possition: "absolute",
    top: 0,
    left: 0,
  },
  proText: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "80px",
    height: "80px",
    textAlign: "center",
    lineHeight: "80px",
    fontSize: "30px",
    fontWeight: "bold",
  },
  starGr: {
    height: "30px",
    display: "flex",
    alignItems: "center",
    color: "#b446ff",
    "& span": {
      color: "white",
      fontWeight: "bold",
    },
  },
  infoFileUp: {
    display: "none",
    animation: `$fadeUp 2000ms`,
  },
  infoFileDown: {
    display: "block",
    animation: `$fadeDown 2000ms`,
  },
  "@keyframes fadeDown": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  "@keyframes fadeUp": {
    "0%": { opacity: 1 },
    "100%": { opacity: 0 },
  },
}));
