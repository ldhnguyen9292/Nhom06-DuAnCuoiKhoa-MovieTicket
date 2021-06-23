import { makeStyles } from "@material-ui/core";

const imgSetting = {
  width: "85%",
  height: "85%",
  margin: "5% auto",
  transition: "all 0.5s",
  cursor: "pointer",
};

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "black",
    color: "white",
    height: "fit-content",
  },
  top: {
    width: "100%",
    height: 400,
    position: "relative",
    [theme.breakpoints.up("md")]: {
      height: 500,
    },
    [theme.breakpoints.up("lg")]: {
      height: 600,
    },
    marginBottom: 20,
  },
  imgTop: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  },
  bot: {
    width: "100%",
    height: 150,
    [theme.breakpoints.up("md")]: {
      height: 170,
    },
    [theme.breakpoints.up("lg")]: {
      height: 200,
    },
    marginBottom: 10,
  },
  imgSetting,
  imgBot: {
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  active: {
    transform: "scale(1.1)",
  },
  btnTopMore: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
