import { makeStyles } from "@material-ui/core";
import BackGround from "./../../../../assets/images/background.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${BackGround}) no-repeat center top`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    padding: "10vw 0",
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
    maxHeight: "500px",
    height: "60vw",
    width: "fit-content",
    border: "5px solid white",
    margin: "0px auto 1vh",
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
    maxWidth: "700px",
    width: "90vw",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    zIndex: 1,
  },
  left: {
    width: "40%",
    display: "flex",
    alignItems: "center",
  },
  imgBox: {
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
    "& h3": {
      margin: "0",
      fontSize: "5vw",
      [theme.breakpoints.up("760")]: {
        fontSize: "26px",
      },
    },
    "& p": {
      fontSize: "3vw",
      margin: "10px 0px",
      [theme.breakpoints.up("760")]: {
        fontSize: "20px",
      },
    },
  },
  btnInfo: {
    border: "1px solid #ddd",
    borderRadius: "15px",
    color: "white",
  },
  progressBox: {
    maxWidth: "80px",
    maxHeight: "80px",
    width: "10vw",
    height: "10vw",
    position: "relative",
  },
  progress: {
    possition: "absolute",
    top: 0,
    left: 0,
    width: "10vw !important",
    height: "10vw !important",
    maxWidth: "80px",
    maxHeight: "80px",
  },
  proText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    maxWidth: "80px",
    maxHeight: "80px",
    width: "9vw",
    height: "9vw",
    transform: "translate(-50%,-25%)",
    textAlign: "center",
    fontSize: "4vw",
    [theme.breakpoints.up("760")]: {
      fontSize: 30,
    },
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
