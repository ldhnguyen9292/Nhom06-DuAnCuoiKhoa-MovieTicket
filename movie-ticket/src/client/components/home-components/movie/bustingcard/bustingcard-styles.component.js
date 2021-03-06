import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "240px",
    maxWidth: "320px",
    overflow: "hidden",
    borderRadius: "10px",
    position: "relative",
    "&:hover": {
      "& $overlay": {
        height: "40vw",
        maxHeight: "300px",
        width: "100%",
        top: "0",
        transform: "translate(-50%, 0)",
      },
      "& $btn1": {
        transform: "translate(0)",
      },
      "& $btn2": {
        transform: "translate(0)",
      },
    },
    margin: "30px",
  },
  imgbox: {
    width: "265px",
    overflow: "hidden",
    position: "relative",
  },
  img: {
    height: "40vw",
    maxHeight: "300px",
    width: "100%",
  },
  contentbox: {
    width: "100%",
    display: "flex",
    padding: "10px 20px",
    zIndex: "1000",
  },
  left: {
    width: "70%",
    padding: 5,
  },
  title: {
    fontSize: "3vw",
    [theme.breakpoints.up(600)]: {
      fontSize: "18px",
    },
    color: "#b446ff",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: 0,
  },
  link: {
    fontSize: "3vw",
    [theme.breakpoints.up(600)]: {
      fontSize: "18px",
    },
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "none",
    },
    padding: "0",
  },
  type: {
    color: "#707070",
    fontSize: "2.8vw",
    [theme.breakpoints.up(600)]: {
      fontSize: "16px",
    },
    margin: "10px 0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  p: {
    color: "#707070",
    fontSize: "2.8vw",
    [theme.breakpoints.up(600)]: {
      fontSize: "16px",
    },
    margin: "10px 0",
  },
  icongroup: {
    fontSize: "2.8vw",
    [theme.breakpoints.up(600)]: {
      fontSize: "16px",
    },
    color: "#b446ff",
  },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    border: "1px solid #ddd",
    height: "60px",
    width: "50px",
    "&:hover": {
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
      "& $icon": {
        color: "white",
      },
    },
  },
  icon: {
    color: "#b446ff",
    transition: "all 0.5s",
    fontSize: "3rem",
  },

  // overlay
  overlay: {
    height: "0px",
    width: "0px",
    top: "50%",
    left: "50%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: "100",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    transition: "all 0.25s",
  },
  view: {
    position: "absolute",
    width: "150px",
    transform: "translate(-50%)",
    left: "50%",
    height: "40vw",
    maxHeight: "300px",
    top: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1000",
  },
  btn1: {
    color: "white",
    border: "1px solid #b446ff",
    padding: "10px 20px",
    width: "150px",
    borderRadius: "10px",
    marginBottom: "10px",
    "&:hover": {
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    },
    transform: "translate(-300px)",
    transition: "all 0.5s",
  },
  btnLink: {
    color: "white",
  },
  btn2: {
    color: "white",
    border: "1px solid #b446ff",
    padding: "10px 20px",
    width: "150px",
    borderRadius: "10px",
    marginBottom: "10px",
    "&:hover": {
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    },
    transform: "translate(300px)",
    transition: "all 0.75s",
  },
}));
