import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
  },
  top: {
    height: 300,

    position: "relative",
    transition: "all 0.5s",
    "&:hover div ": {
      opacity: 1,
    },
    "&:hover button": {
      left: "50%",
    },
  },
  imgSetting: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  topHover: {
    position: "absolute",
    background: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    top: 0,
    left: 0,
    opacity: 0,
    zIndex: 1,
    transition: "all 0.5s",
  },

  btnSetting: {
    width: 100,
    height: 50,
    borderRadius: 10,
    transition: "all 0.5s",
    textTransform: "uppercase",
    cursor: "pointer",
    position: "absolute",
  },
  trailer: {
    background:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    color: "white",
    border: "1px solid #b446ff",
    marginBottom: 10,
    "&:hover": {
      background: "transparent",
    },
    left: "0",
    top: "40%",
    transform: "translate(-50%,-50%)",
  },
  more: {
    background: "transparent",
    color: "white",
    border: "1px solid #b446ff",
    "&:hover": {
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    },
    left: "100%",
    top: "60%",
    transform: "translate(-50%,-50%)",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#b446ff",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    padding: "10px 10px 0px 10px",
  },
  star: {
    color: "#b446ff",
    fontSize: 16,
  },
  pos: {
    padding: "5px 10px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  morebtn: {
    border: "1px solid #eeeeee",
    width: 50,
    height: 50,
    transition: "all 0.5s",
    "&:hover": {
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    },
    "& svg": {
      width: 60,
      padding: 5,
      transition: "all 0.5s",
      fill: "#b446ff",
      "&:hover": {
        fill: "white",
      },
    },
  },
}));
