import { makeStyles } from "@material-ui/core";
import BG from "./../../../assets/images/bguser.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 800,
    background: `url(${BG}) no-repeat center center`,
    backgroundSize: "cover",
    padding: "70px 0px 20px",
  },
  container: {
    maxWidth: 1200,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-start",
    },
    flexWrap: "wrap",
    gap: 20,
  },
  left: {
    height: "fit-content",
    padding: "0 0 30px 0",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  userImage: {
    width: "100%",
    height: "50px",
    position: "relative",
    "& img": {
      height: "100px",
      width: "100px",
      borderRadius: "50%",
      position: "absolute",
      left: "50%",
      transform: "translate(-50%)",
      top: "-50px",
      border: "3px solid white",
    },
  },
  name: {
    textAlign: "center",
    fontSize: "18px",
    color: "#333",
    fontWeight: "500",
  },
  username: {
    textAlign: "center",
    margin: "10px auto 0px",
    color: "gray",
    width: "100%",
    borderBottom: "1px solid #ddd",
    paddingBottom: "20px",
    fontSize: "14px",
  },
  right: {
    maxWidth: "100%",
    [theme.breakpoints.up("lg")]: {
      maxWidth: 780,
    },
    backgroundColor: "white",
    // margin: "20px",
    borderRadius: "10px",
  },
  tabs: {
    borderBottom: "1px solid #ddd",
    "& .MuiTab-labelIcon": {
      minHeight: "48px",
    },
    "& .Mui-selected": {
      backgroundColor: "rgb(236, 236, 236)",
    },
    "& .MuiTab-root": {
      minWidth: "fit-content",
    },
  },
  tab: {
    "& .MuiTab-wrapper": {
      justifyContent: "flex-start",
      flexDirection: "inherit",
    },
    "& svg": {
      height: "20px",
      margin: "5px 5px 0px 0px",
    },
  },
}));
