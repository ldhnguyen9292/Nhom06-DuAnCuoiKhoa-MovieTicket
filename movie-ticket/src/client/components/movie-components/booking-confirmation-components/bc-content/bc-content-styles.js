import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  topBox: {
    textAlign: "center",
    paddingTop: 30,
    fontSize: 18,
    [theme.breakpoints.up("sm")]: {
      fontSize: 24,
    },
  },
  successIcon: {
    color: "#6cc77c",
    fontSize: 60,
  },
  successText: {
    fontWeight: "bold",
  },
  line: {
    width: "90%",
    borderTop: "1px solid #d8d8d8",
    margin: "40px auto",
  },
  paper: {
    width: "90%",
    margin: " auto",
    borderRadius: 10,
  },
  paperTop: {
    padding: "40px 0 50px",
    textAlign: "center",
    "& p": {
      fontSize: 18,
      color: "#ff4444",
      textTransform: "uppercase",
      fontWeight: "bold",
      margin: 0,
      [theme.breakpoints.up("sm")]: {
        fontSize: 24,
      },
    },
  },
  paperLine: {
    position: "relative",
    width: "93%",
    margin: "0 auto",
    borderBottom: "1px dashed black",
    "&::after": {
      content: '""',
      width: "7%",
      height: "50px",
      background: "#f6f6f6",
      position: "absolute",
      borderRadius: "50%",
      bottom: "-25px",
      right: "-8%",
      zIndex: 2,
    },
    "&::before": {
      content: '""',
      width: "7%",
      height: "50px",
      background: "#f6f6f6",
      position: "absolute",
      borderRadius: "50%",
      bottom: "-25px",
      left: "-8%",
      zIndex: 2,
    },
  },
  paperBot: {
    padding: "5%",
  },
  paperBotInner: {
    background: "#f6f6f6",
    position: "relative",
    padding: "3%",
  },
  contentInnerLeft: {
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  imgInner: {
    maxWidth: 90,
    minHeight: 130,
    "& div": {
      height: "100%",
      width: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
  },
  contentInner: {
    padding: "0 4%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
    "& p": {
      margin: "0 0 2%",
    },
    "& h4": {
      margin: "0 0 4%",
    },
  },
  ticketBook: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  contentInnerRight: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "90%",
    "& span": {
      fontSize: "80%",
    },
  },
  contentTotal: {
    borderTop: "1px solid #d8d8d8",
    paddingTop: 10,
    marginTop: 15,
    "& h3, h4": {
      margin: 0,
    },
  },
  qrSetting: {
    padding: "1%",
    textAlign: "center",
    margin: "0 auto",
    "& h4": {
      fontSize: "80%",
    },
    "& img": {
      maxWidth: 80,
      margin: "0 auto",
    },
  },
  btn: {
    margin: "20px auto 70px",
  },
  btnInvite: {
    background:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    color: "white",
    padding: "15px 20px",
    borderRadius: 5,
    textTransform: "uppercase",
    cursor: "pointer",
    margin: "0 5px",
    border: "1px solid #b446ff",
    "&:hover": {
      background: "#f6f6f6",
      color: "#b446ff",
    },
  },
  btnLocate: {
    background: "#f6f6f6",
    color: "#b446ff",
    "&:hover": {
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
      color: "white",
    },
  },
}));
