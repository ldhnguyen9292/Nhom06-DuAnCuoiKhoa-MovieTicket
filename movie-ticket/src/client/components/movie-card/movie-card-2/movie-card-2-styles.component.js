import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
  },
  left: {
    minHeight: 250,
    minWidth: 150,
    borderRadius: "10px 0 0 10px",
    overflow: "hidden",
  },
  imgSetting: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  right: {
    width: "100%",
    height: "100%",
    padding: 30,
    background: "white",
    borderRadius: "0 10px 10px 0",
  },
  rightBot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnSetting: {
    width: 150,
    height: 50,
    borderRadius: 10,
    fontSize: 16,
    transition: "all 0.5s",
    textTransform: "capitalize",
    cursor: "pointer",
    margin: 10,
  },
  trailer: {
    background:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    color: "white",
    border: "1px solid #b446ff",
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
  more: {
    background: "white",
    color: "black",
    border: "1px solid #b446ff",
    "&:hover": {
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
      color: "white",
    },
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#b446ff",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    padding: "10px 10px 0px 10px",
  },
  star: {
    color: "#b446ff",
    fontSize: 20,
  },
  pos: {
    padding: "5px 10px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  morebtn: {
    border: "1px solid #eeeeee",
    color: "#b446ff",
    width: 50,
    height: 50,
    textAlign: "right",
    transition: "all 0.5s",
    "&:hover": {
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    },
    "& svg": {
      width: 60,
      padding: 5,
      transition: "all 0.5s",
      fill: "#b446ff",
      "&:hover": {
        fill: "white",
      },
    },
  },
  text: {
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
}));
