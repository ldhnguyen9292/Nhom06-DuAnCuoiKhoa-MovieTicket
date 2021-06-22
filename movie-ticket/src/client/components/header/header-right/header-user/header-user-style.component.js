import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid black",
    borderRadius: 10,
    background: "black",
    backgroundImage: "linear-gradient(#b446ff,#b446ff)",
    backgroundSize: "100% 0",
    backgroundPosition: "50% 50%",
    textDecoration: "none",
    backgroundRepeat: "no-repeat",
    margin: 10,
    transition: "all 0.5s",
    "&:hover": {
      border: "1px solid white",
      backgroundSize: "100% 100%",
    },
  },
  title: {
    color: "white",
    padding: "5px 10px",
    textTransform: "uppercase",
  },
  IconFlex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  userMenu: {
    position: "relative",
  },
  menu: {
    position: "absolute !important",
    top: "10% !important",
    [theme.breakpoints.up("md")]: {
      top: "12% !important",
    },
    "&::after": {
      content: "unset",
      borderRight: "13px solid transparent",
      borderBottom: "13px solid #fff",
      borderLeft: "13px solid transparent",
      position: "absolute",
      right: 25,
      top: "1.1%",
      [theme.breakpoints.up("md")]: {
        content: '""',
      },
    },
  },
}));
