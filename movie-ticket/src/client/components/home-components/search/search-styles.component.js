import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    position: "relative",
    padding: "20px 0",
    zIndex: 1,
  },
  backgroudBlack: {
    display: "block",
    position: "absolute",
    width: "50%",
    height: "50%",
    backgroundColor: "#f6f6f6",
    top: 0,
    left: 0,
    zIndex: -1,
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      borderBottomLeftRadius: "50%",
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      top: 0,
      left: 0,
      zIndex: -1,
    },
  },
  backgroudWhite: {
    display: "block",
    position: "absolute",
    borderTopRightRadius: "50%",
    width: "100%",
    height: "50%",
    backgroundColor: "#f6f6f6",
    bottom: 0,
    zIndex: -1,
  },
  content: {
    width: "90%",
    maxWidth: 1200,
    margin: "0 auto",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingBottom: "2vw",
    borderRadius: 10,
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentLeft: {
    padding: 10,
  },
  h1: {
    fontSize: "5vw",
    [theme.breakpoints.up("760")]: {
      fontSize: 30,
    },
    color: "white",
    textTransform: "uppercase",
    paddingLeft: 10,
    fontWeight: "bold",
  },
  text: {
    color: "#31d7a9",
    fontSize: "4vw",
    [theme.breakpoints.up("760")]: {
      fontSize: "1rem",
    },
  },
  contentRight: {
    display: "none",
    padding: "10px 15px",
    marginRight: 20,
    backgroundImage:
      "linear-gradient(169deg, #ff4343 0%, #aa52a1 37%, #5560ff 83%)",
    borderRadius: "50% 0",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  h2: {
    color: "white",
    textTransform: "uppercase",
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: "4vw",
    [theme.breakpoints.up("760")]: {
      fontSize: "20",
    },
  },
  searchField: {
    width: "95%",
    margin: "0 auto",
    boxShadow: "0px 5px 15px 0px rgb(44 41 157 / 50%)",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    position: "relative",
    background: "transperant",
    borderRadius: 5,
  },
  searchBG: {
    content: '""',
    background: "black",
    opacity: 0.4,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "calc(100% + 1px)",
    zIndex: 0,
    borderRadius: 5,
  },
  search: {
    position: "relative",
    color: "white  !important",
    borderRadius: theme.shape.borderRadius,
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      // justifyContent: "center",
    },
  },
  inputSetting: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    cursor: "pointer",
  },
  inputInput: {
    color: "white",
    flexGrow: 1,
    borderBottom: "1px solid white",
    paddingRight: 10,
  },
  btnSearch: {
    borderBottom: "1px solid white",
    color: "white",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(0.9)",
    },
  },
  moreSetting: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    padding: "1vw",
    "& span": {
      padding: "0 5px",
      color: "#31d7a9",
    },
  },
  icon: {
    width: 30,
  },
  paper: {
    zIndex: 1,
    color: "black",
  },
  ul: {
    listStyle: "none",
    background: "white",
    width: 200,
    maxHeight: 200,
    margin: 0,
    padding: 5,
    overflowY: "scroll",
    border: "1px solid black",
    borderRadius: "0 0 10px 10px",
  },
  li: {
    cursor: "pointer",
    padding: 5,
  },
}));
