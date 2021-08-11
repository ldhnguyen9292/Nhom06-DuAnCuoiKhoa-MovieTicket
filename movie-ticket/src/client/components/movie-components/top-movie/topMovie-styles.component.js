import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px 0 10px 0",
    paddingBottom: "10px",
    height: "30vw",
    width: "100%",
    borderBottom: "2px solid #b446ff",
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
  },
  left: {
    width: "30%",
    height: "100%",
    position: "relative",
    "&::before": {
      content: '""',
      display: "block",
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "absolute",
      top: "0px",
    },
    "& img": {
      width: "100%",
      height: "100%",
    },
    "& h3": {
      position: "absolute",
      top: "40%",
      left: "65%",
      width: "100%",
      color: "white",
      fontSize: "3vw",
      transform: "translate(-50%,-50%)",
      lineHeight: "50px",
      fontWeight: "bold",
    },
  },
  right: {
    width: "70%",
    height: "100%",
    backgroundColor: "white",
  },
}));
