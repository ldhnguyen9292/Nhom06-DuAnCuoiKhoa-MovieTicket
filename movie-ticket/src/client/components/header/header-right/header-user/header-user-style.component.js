import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",
    border: "1px solid black",
    borderRadius: 10,
    background: "black",
    backgroundImage: "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff)",
    backgroundSize: "100% 0",
    backgroundPosition: "50% 50%",
    textDecoration: "none",
    backgroundRepeat: "no-repeat",
    margin: 10,
    transition: "all 0.25s",
    "&:hover": {
      border: "1px solid #ddd",
      backgroundSize: "100% 100%",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  rootCol: {
    width: "180px",
    display: "block",
    border: "1px solid black",
    borderRadius: 10,
    background: "black",
    backgroundImage: "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff)",
    backgroundSize: "100% 0",
    backgroundPosition: "50% 50%",
    textDecoration: "none",
    backgroundRepeat: "no-repeat",
    margin: "20px 40px",
    transition: "all 0.25s",
    overflow: "hidden",
    textAlign: "center",
    "&:hover": {
      border: "1px solid white",
      backgroundSize: "100% 100%",
      "& p": { color: "while" },
    },
  },
  title: {
    color: "white",
    padding: "12px 40px",
    textTransform: "uppercase",
    width: "180px",
  },
  IconFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "0px 5px",
    width: "180px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    color: "#eee",
    border: "1px solid #ddd",
    borderRadius: "10px",
    margin: 10,
  },
  IconFlexCol: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "5px 10px",
    marginTop: 15,
    background: "transparent",
    // backgroundImage: 'linear-gradient(to right, #4c46e6, #6d68fe, #b446ff)',
    width: "180px",
    margin: "20px 40px",
    // border: '1px solid white',
    // borderRadius: '10px',
    // color: 'white',
    color: "black",
  },
  userMenu: {
    position: "relative",
  },
  menu: {
    background: "white",
    borderRadius: 10,
    textTransform: "Capitalize",
    zIndex: 2001,
    "&::after": {
      content: '""',
      borderRight: "13px solid transparent",
      borderBottom: "13px solid white",
      borderLeft: "13px solid transparent",
      position: "absolute",
      paddingTop: 5,
      right: "50%",
      top: "-25%",
      transform: "translate(50%,50%)",
      zIndex: -1,
    },
  },
  menuMobile: {
    background: "white",
    borderRadius: 10,
    textTransform: "Capitalize",
    left: "-20px !important",
    zIndex: 2001,
    "&::after": {
      content: '""',
      borderTop: "13px solid transparent",
      borderLeft: "13px solid white",
      borderBottom: "13px solid transparent",
      position: "absolute",
      right: "0",
      top: "50%",
      transform: "translate(50%,-50%)",
      zIndex: -1,
    },
  },
  menuTitle: {
    "&:hover": {
      color: "#b446ff",
    },
  },
  navTitle: {
    color: "black",
    "& p": {
      margin: 0,
      padding: "6px 16px",
    },
    "&:hover": {
      color: "#b446ff",
      "& p": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    },
  },
}));
