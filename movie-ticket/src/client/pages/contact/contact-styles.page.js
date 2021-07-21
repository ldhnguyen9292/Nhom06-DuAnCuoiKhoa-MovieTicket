import { makeStyles } from "@material-ui/core";

const lineSetting = {
  position: "absolute",
  content: '""',
  background: "#e2e2e2",
  bottom: 0,
  left: "2%",
};

export const useStyles = makeStyles((theme) => ({
  topBox: {
    maxWidth: 1200,
    padding: "5% 8%",
    margin: "0 auto",
    [theme.breakpoints.up("lg")]: {
      padding: "2% 2% 5%",
    },
  },
  title: {
    textTransform: "uppercase",
    padding: "0 2%",
    position: "relative",
    paddingBottom: 20,
    "&::before": {
      ...lineSetting,
      width: "20%",
      height: 1,
    },
    "&::after": {
      ...lineSetting,
      width: "5%",
      height: 3,
      background: "#b446ff",
      bottom: -1,
    },
  },
  inputText: {
    width: "100%",
    padding: "0 2%",
    marginBottom: 30,
    "& input": {
      width: "100%",
      boxShadow: "0px 1px 3px 0px rgb(0 0 0 / 10%)",
      border: "none",
      outline: "none",
      padding: 15,
    },
    "& textarea": {
      width: "100%",
      boxShadow: "0px 1px 3px 0px rgb(0 0 0 / 10%)",
      border: "none",
      outline: "none",
      padding: 15,
      resize: "none",
      height: 150,
    },
  },
  contactBtn: {
    padding: "2% 4%",
    borderRadius: 10,
    color: "white",
    background:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    border: "1px solid #b446ff",
    cursor: "pointer",
    transition: "all 0.5s",
    "&:hover": {
      background: "white",
      color: "#b446ff",
    },
  },
  topRightBox: {
    background:
      "linear-gradient(to bottom, #6d68fe, #b446ff, rgb(151, 0, 255))",
    color: "white",
    padding: "20% 4%",
    marginTop: "15%",
    position: "relative",
    borderRadius: 10,
    "& li": {
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    "&::before": {
      ...lineSetting,
      top: "-6%",
      left: "50%",
      width: "90%",
      height: 40,
      background: "#4c46e6",
      transform: "translateX(-50%)",
      zIndex: -1,
      borderRadius: "10px 10px 0 0",
    },
  },
  text: {
    margin: 10,
  },
  botItem: {
    textAlign: "center",
    padding: "40px 0",
    "& svg": {
      background:
        "linear-gradient(to bottom,#4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
      fontSize: 80,
      padding: 10,
      color: "#f6f6f6",
      borderRadius: 10,
    },
    "& h4": {
      textTransform: "capitalize",
    },
  },
  emailText: {
    cursor: "pointer",
    transition: "all 0.5s",
    "&:hover": {
      color: "#b446ff",
    },
  },
  botBox: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  errors: {
    color: "red",
  },
}));
