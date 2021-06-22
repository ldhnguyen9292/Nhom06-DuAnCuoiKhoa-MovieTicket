import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  iconBtn: {
    background: "linear-gradient(to right, #4c46e6, #6d68fe, rgb(151, 0, 255))",
    margin: 10,
  },
  drawer: {
    width: 180,
    height: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 70,
  },
  title: {
    textDecoration: "none",
    color: "black",
    fontSize: 24,
    marginBottom: 15,
    transition: "all 0.5s",
    paddingLeft: 20,
    "&:hover": {
      color: "#b446ff",
      transform: "scale(1.1)",
    },
  },
  iconFlex: {
    display: "flex",
  },
  text: {
    marginLeft: 10,
  },
}));
