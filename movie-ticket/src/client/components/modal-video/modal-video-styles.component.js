import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80%",
    background: "transparent",
    textAlign: "center",
    paddingTop: 90,
    zIndex: 2002,
    [theme.breakpoints.down("lg")]: {
      height: "70%",
    },
    [theme.breakpoints.down("md")]: {
      height: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "50%",
    },
  },
  top: {
    border: '2px solid #ddddddaa',
    width: "60%",
    height: "90%",
    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    margin: "0 auto",
    padding: '10px 10px',
    borderRadius: 10,
    // linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255)),
    backgroundImage: "linear-gradient(to bottom, #6d68fedd, #6dd5eddd, #FFFFFFaa)",
  },
  title: {
    fontSize: 30,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    [theme.breakpoints.down("lg")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  media: {
    height: "87.5%",
    [theme.breakpoints.down("lg")]: {
      height: "85%",
    },
    [theme.breakpoints.down("md")]: {
      height: "82.5%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "75%",
    },
    borderRadius: 10,
    border: "2px solid #dddddd50",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  btnControl: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "Center",
    padding: '10px 0',
  },
  btn: {
    color: "white",
    background: "#12c2eedd",
    border: "1px solid #dddddd50",
    backgroundImage: 'linear-gradient(to right, #4c46e6, #6d68fe, #b446ff)',
    backgroundSize: "100% 0",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    transition: "all 0.5s",
    "&:hover": {
      border: "1px solid #dddddd50",
      backgroundSize: "100% 100%",
      "& span": { color: "white" },
    },
  },
}));
