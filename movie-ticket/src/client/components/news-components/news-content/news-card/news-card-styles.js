import { makeStyles } from "@material-ui/core";

const color = "#707070";

export const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    color: color,
  },
  imgTop: {
    height: 300,
    "& img": {
      height: "100%",
    },
  },
  content: {
    padding: "4% 4% 0",
    display: "box",
    lineClamp: 5,
    boxOrient: "vertical",
    overflow: "hidden",
    transition: "all 0.5s",
  },
  contentUnlock: {
    padding: "4% 4% 0",
    transition: "all 0.5s",
  },
  lockBtn: {
    color: "#b446ff",
    cursor: "pointer",
    padding: "0 4%",
  },
  titleRed: {
    color: "#b446ff",
    padding: "10px 0",
  },
  title: {
    textTransform: "uppercase",
    color: "black",
  },
  imgContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    maxHeight: 300,
  },
  img: {
    display: "inline-flex",
    maxWidth: 200,
    borderRadius: 5,
    overflow: "hidden",
    margin: 5,
  },
  quote: {
    border: "1px solid #dddddd",
    padding: "0 3% ",
    color: "black",
  },
  titleQuote: {
    color: "#b446ff",
    fontWeight: "bold",
  },
  avatar: {
    width: "100%",
    height: "90%",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "0 5px 5px 0",
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
  avatarBox: {
    minWidth: 50,
    minHeight: 50,
  },
  messAvatar: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  messTextBox: {
    padding: "0 10px",
    [theme.breakpoints.up("sm")]: {
      padding: "0 2%",
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
}));
