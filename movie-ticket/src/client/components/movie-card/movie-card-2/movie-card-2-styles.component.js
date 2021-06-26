import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    background: "white",
    overflow: "hidden",
  },
  left: {
    minHeight: 250,
    minWidth: 150,
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
    background: "#b446ff",
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
      background: "#b446ff",
      color: "white",
    },
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "black",
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
      background: "#b446ff",
      color: "white",
    },
  },
  text: {
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
}));
