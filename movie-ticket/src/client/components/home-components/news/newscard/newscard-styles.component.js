import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "240px",
    width: "555px",
    display: "flex",
    margin: "30px",
    borderRadius: "10px",
    overflow: "hidden",
    "&:hover": {
      "& $img": {
        transform: "scale(1.2)",
      },
    },
  },
  left: {
    height: "240px",
    width: "240px",
    overflow: "hidden",
    [theme.breakpoints.down("600")]: {
      width: "0px",
    },
  },
  img: {
    height: "240px",
    width: "240px",
    transition: "0.5s",
  },
  right: {
    height: "240px",
    width: "315px",
    [theme.breakpoints.down("600")]: {
      width: "100%",
    },
  },
  content: {
    height: "240px",
    width: "315px",
    padding: "20px",
    [theme.breakpoints.down("600")]: {
      width: "100%",
    },
  },
  link: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#333",
    transition: "0.25s",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
    margin: 0,
  },
  day: {
    color: theme.palette.primary.main,
  },
  p: {
    color: "#707070",
    height: 60,
    overflow: "hidden",
    "& p, h2": {
      margin: 0,
      wordSpacing: "2px",
    },
    position: "relative",
    "&:after": {
      position: "absolute",
      content: '"..."',
      bottom: -1,
      right: 0,
    },
  },
  btn: {
    width: "50%",
    textTransform: "none",
    color: "#707070",
    marginTop:20,
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: 5,
  },
}));
