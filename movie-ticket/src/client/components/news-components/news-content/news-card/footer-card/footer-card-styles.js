import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
  },
  footer: {
    borderTop: "1px solid #dddddd",
    borderBottom: "1px solid #dddddd",
    marginTop: 10,
    padding: "1%",
  },
  text: {
    textTransform: "Capitalize",
    wordSpacing: 1,
  },
  iconBox: {
    borderRadius: 10,
    transition: "all 0.5s",
    padding: "5px 10px",
    cursor: "pointer",
    "&:hover": {
      background: "#dddddd",
    },
  },
  icon: {
    color: "#b446ff",
    marginRight: 5,
    marginLeft: 5,
  },
  messBox: {
    padding: "1% 2%",
  },
  messAvatar: {
    width: 32,
    height: 32,
    cursor: "pointer",
    borderRadius: "50%",
    transition: "all 0.5s",
    "& img": {
      width: "100%",
      height: "100%",
    },
    "&:hover": {
      border: "1px solid #f6f6f6",
    },
  },
  messText: {
    background: "#dddddd63",
    borderRadius: 20,
    transition: "all 0.5s",
    padding: "1% 3%",
    "& p": {
      margin: 0,
    },
  },
  name: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  messCollapse: {
    padding: "0 3%",
    cursor: "pointer",
    margin: 0,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  textBox: {
    border: "none",
    background: "transparent",
    width: "100%",
    outline: "none",
  },
  messTextBox: {
    flexGrow: 2,
    padding: "0 10px",
    [theme.breakpoints.up("sm")]: {
      padding: "0 2%",
    },
  },
}));
