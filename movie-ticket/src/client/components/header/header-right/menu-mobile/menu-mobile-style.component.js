import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  iconBtn: {
    background: "linear-gradient(to right, #4c46e6, #6d68fe, rgb(151, 0, 255))",
    margin: 10,
    [theme.breakpoints.up("md")]: {
      margin: 15,
    },
    [theme.breakpoints.up("lg")]: {
      margin: 20,
    },
  },
  drawer: {
    width: 200,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
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
  socialNetwork: {
    display: "flex",
    fontSize: "11px",
    textAlign: "center",
    color: "gray",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    cursor: "pointer",
    transition: "all 0.5s",
    paddingTop: 20,
    "&:hover": {
      color: "#b446ff",
    },
  },
  logo: {
    margin: "50px 0 30px 20px",
    color: "black",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    transition: "all 0.5s",
    textTransform: "uppercase",
    fontWeight: "bold",
    "&:hover": {
      color: "#b446ff",
    },
  },
  iconLogo: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    borderBottomRightRadius: "0",
    padding: 5,
  },
}));
