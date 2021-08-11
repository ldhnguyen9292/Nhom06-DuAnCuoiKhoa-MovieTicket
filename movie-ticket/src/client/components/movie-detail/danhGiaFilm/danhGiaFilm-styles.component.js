import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 50px",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  right: {
    width: "100%",
  },
  left: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    "& h3": {
      margin: "0px",
      fontSize: "24px",
    },
    "& p": {
      marginTop: "0px",
      fontSize: "14px",
    },
  },
  img: {
    height: "320px",
    width: "212px",
    border: "1px solid #ddd",
    borderRadius: "5px",
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
      backgroundColor: "rgba(0,0,0,0.3)",
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
  imgRight: {
    position: "absolute",
    width: "200px",
    right: "-220px",
    top: "0px",
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
  rating: {
    flexGrow: 1,
    padding: "0 1vw",
  },
  ratingBox: {
    listStyle: "none",
  },
  ratingItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingSlider: {
    padding: "1vw 0",
    width: "50%",
    "& .MuiSlider-rail, & .MuiSlider-track": {
      height: 5,
    },
    "& .MuiSlider-thumb": {
      display: "none",
    },
  },
  yourRate: {
    display: "flex",
    padding: "0 1vw",
    alignItems: "center",
  },
  yourSlider: {
    width: "100%",
    marginRight: 20,
    "& .MuiSlider-rail, & .MuiSlider-track": {
      height: 5,
    },
    "& .MuiSlider-thumb": {
      width: 14,
      height: 14,
    },
  },
  btnSubmit: {
    marginLeft: 20,
    padding: "5px 10px",
    cursor: "pointer",
    color: "#b446ff",
  },
  starIcon: {
    width: "2vw",
    maxWidth: "1rem",
  },
}));
