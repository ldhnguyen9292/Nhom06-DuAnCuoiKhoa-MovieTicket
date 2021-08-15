import { makeStyles } from "@material-ui/core";
import Image from "./../../../assets/images/footer-shape.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "fit-content",
    backgroundImage:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    overflow: "hidden",
    color: "white",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
  },
  top: {
    position: "relative",
    // marginTop: 20,
    zIndex: 3,
    maxWidth: 1200,
    margin: "20px auto 0",
  },
  bot: {
    position: "relative",
    zIndex: 3,
    maxWidth: 1200,
  },
  shape: {
    position: "absolute",
    width: "100%",
    height: "65%",
    bottom: 0,
    left: "0px",
    background: `url(${Image}) no-repeat center center`,
    zIndex: "0",
  },
  container: {
    width: "100%",
    zIndex: "100",
    bottom: "0px",
  },
}));
