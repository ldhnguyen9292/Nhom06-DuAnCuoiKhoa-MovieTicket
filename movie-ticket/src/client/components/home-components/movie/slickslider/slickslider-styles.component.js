import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  btngroup: {
    maxHeight: 55,
    height: "7vw",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    margin: "2vw",
    height: "7vw",
    width: "20vw",
    maxHeight: 55,
    maxWidth: 100,
    borderRadius: "10px",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.5s",
    fontSize: "3vw",
    [theme.breakpoints.up("600")]: {
      fontSize: "16px",
    },
    color: "#b446ff",
    "&:hover": {
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
      color: "white",
    },
  },
  btnView: {
    position: "relative",
    height: "7vw",
    width: "40vw",
    maxHeight: 55,
    maxWidth: 150,
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid #ddd",
    color: "white",
    // background: 'linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))',
    "&:hover": {
      "& $btnViewBefore": {
        height: "0",
      },
      "& $btnViewAfter": {
        height: "0",
      },
      "& $btnViewContent": {
        color: "#b446ff",
      },
    },
  },
  btnViewBefore: {
    position: "absolute",
    height: "7vw",
    width: "40vw",
    maxHeight: 55,
    maxWidth: 150,
    backgroundColor: "red",
    background:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    top: "0px",
    transition: "all 0.3s",
  },
  btnViewAfter: {
    position: "absolute",
    height: "7vw",
    width: "40vw",
    maxHeight: 55,
    maxWidth: 150,
    backgroundColor: "red",
    background:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    bottom: "0px",
    transition: "all 0.3s",
  },
  btnViewContent: {
    position: "absolute",
    height: "7vw",
    width: "40vw",
    maxHeight: 55,
    maxWidth: 150,
    zIndex: "100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "3vw",
    [theme.breakpoints.up("600")]: {
      fontSize: "16px",
    },
  },
}));
