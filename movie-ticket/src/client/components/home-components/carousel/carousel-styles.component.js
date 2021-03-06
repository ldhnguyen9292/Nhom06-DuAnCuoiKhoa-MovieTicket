import { makeStyles } from "@material-ui/core";

const imgSetting = {
  width: "100% !important",
  height: "100% !important",
  transition: "all 0.5s",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "85% 85% !important",
  backgroundPosition: "center",
};

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    color: "white",
    height: "fit-content",
    borderBottom: '2px solid #333',
  },
  top: {
    width: "100%",
    height: 200,
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      height: 300,
    },
    [theme.breakpoints.up("md")]: {
      height: 450,
    },
    [theme.breakpoints.up("lg")]: {
      height: 670,
    },
    marginBottom: 0,
  },
  imgTop: {
    width: "100%",
    height: "inherit",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100% !important",
    backgroundPosition: "center",
  },
  bot: {
    width: "100%",
    height: 100,
    [theme.breakpoints.up("md")]: {
      height: 125,
    },
    [theme.breakpoints.up("lg")]: {
      height: 150,
    },
    marginBottom: 0,
    // backgroundColor: '#00B4DB',
    backgroundColor: 'black',
  },
  imgSetting,
  imgBot: {
    "&:hover": {
      transform: "scale(1.1)",
      opacity: '1',
    },
    opacity: '0.7',
  },
  active: {
    transform: "scale(1.1)",
    opacity: '1',
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
