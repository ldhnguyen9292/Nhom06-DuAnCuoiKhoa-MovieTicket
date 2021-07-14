import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
  messTextBox: {
    flexGrow: 2,
    padding: "0 10px",
    [theme.breakpoints.up("sm")]: {
      padding: "0 2%",
    },
  },
  titleRed: {
    color: "#b446ff",
    marginBottom: "10px !important",
  },
  moreIcon: {
    cursor: "pointer",
    borderRadius: "50%",
    transition: "all 0.5s",
    padding: 5,
    "&:hover": {
      background: "#f6f6f6",
    },
  },
  paper: {
    background: "#e2e2e2",
    padding: 10,
    borderRadius: 10,
    "& p": {
      margin: 0,
      padding: 10,
      cursor: "pointer",
      textAlign: "center",
      borderRadius: 10,
      "&:hover": {
        background: "#f6f6f6",
      },
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
    fontSize: 16,
    color: "black",
  },
  input: {
    width: "100%",
    borderRadius: 10,
    padding: 5,
    outline: "none",
  },
}));
