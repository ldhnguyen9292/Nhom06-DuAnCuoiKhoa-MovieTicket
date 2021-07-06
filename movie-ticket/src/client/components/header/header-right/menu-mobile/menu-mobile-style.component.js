import { makeStyles } from "@material-ui/core";
// import Image from './../../../../../assets/images/bg.jpeg';

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
    color: "white",
    borderRadius: "10px",
  },
  drawer: {
    borderBottom: "1px solid #333",
    width: 400,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "0 30px",
    backgroundImage:
      "linear-gradient(to bottom, #4c46e630, #6d68fe30, #b446ff30)",
  },
  title: {
    textDecoration: "none",
    color: "black",
    fontSize: 24,
    marginBottom: 15,
    transition: "all 0.5s",
    paddingLeft: 40,
    "&:hover": {
      color: "#6d68fe",
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
      color: "#6d68fe",
    },
    borderTop: "1px solid #333",
  },
  logo: {
    margin: "30px 0 30px 10px",
    color: "black",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    transition: "all 0.5s",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "24px",
    "&:hover": {
      color: "#6d68fe",
    },
  },
  iconLogo: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    borderBottomRightRadius: "0",
    padding: "0",
  },
  titleLogo: {
    padding: "0 10px",
  },
  line: {
    width: "100%",
    height: "1px",
    backgroundColor: "#333",
  },
  closeBtn: {
    color: "black",
    cursor: "pointer",
    transition: "all 0.5s",
    "&:hover": {
      color: "#6d68fe",
      transform: "scale(1.2)",
    },
  },
}));
