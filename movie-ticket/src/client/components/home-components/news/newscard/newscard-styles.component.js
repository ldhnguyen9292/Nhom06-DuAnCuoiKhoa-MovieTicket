import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    borderRadius: "10px",
    overflow: "hidden",
    "&:hover": {
      "& $img": {
        transform: "scale(1.1)",
      },
    },
  },
  left: {
    height: "100%",
    width: "40%",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  right: {
    height: "100%",
    width: "60%",
  },
  content: {
    height: "100%",
    width: "100%",
    padding: "1vw",
    [theme.breakpoints.up("980")]: { padding: "2vw" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  link: {
    fontSize: "3vw",
    [theme.breakpoints.up("760")]: { fontSize: 20 },
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
    padding: "1vw 0",
    margin: 0,
    fontSize: "2vw",
    [theme.breakpoints.up("760")]: { fontSize: 20 },
  },
  p: {
    color: "#707070",
    height: "5vw",
    fontSize: "2vw",
    [theme.breakpoints.up("760")]: { fontSize: 16, height: 60 },
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
  commentBox: {
    display: "flex",
    alignItems: "center",
  },
  btn: {
    width: "50%",
    textTransform: "none",
    color: "#707070",
    marginTop: "1vw",
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: "3vw",
    [theme.breakpoints.up("760")]: {
      fontSize: 18,
    },
  },
  comText: {
    fontSize: "2vw",
    marginLeft: "1vw",
    [theme.breakpoints.up("760")]: {
      fontSize: 18,
    },
  },
}));
