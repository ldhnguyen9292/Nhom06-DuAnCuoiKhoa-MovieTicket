import { makeStyles } from "@material-ui/core";
import Image from "./../../../../assets/images/newslater-bg01.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: "100",
    width: "100%",
  },
  container: {
    maxWidth: "1200px",
  },
  box: {
    width: "98.5%",
    height: "fit-content",
    background: `url(${Image}) no-repeat center center`,
    borderRadius: "30px",
  },
  content: {
    width: "100%",
    padding: "30px",
    textAlign: "center",
  },
  form_container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    maxHeight: "48px",
    height: "5vw",
    margin: "50px 0 20px",
    [theme.breakpoints.down("sm")]: {
      margin: "30px 0 20px",
    },
  },
  form: {
    borderRadius: "25px",
    border: "0.25px solid #ccc",
    width: "560px",
    maxHeight: "48px",
    height: "5vw",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "400px",
    },
  },
  input: {
    width: "73%",
    maxHeight: "48px",
    height: "5vw",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "18px",
    outline: "none",
    padding: "0px 20px",
    color: "white",
    "&::placeholder": {
      color: "#ddd",
      fontWeight: "100",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.8vw",
      width: "65%",
    },
  },
  button: {
    width: "27%",
    borderRadius: "30px",
    maxHeight: "48px",
    height: "4.6vw",
    background:
      "-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3vw",
      width: "35%",
    },
  },
  h3: {
    color: "#31d7a9",
    fontSize: "23px",
    letterSpacing: "1px",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3vw",
    },
  },
  h2: {
    fontSize: "36px",
    marginTop: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4vw",
    },
  },
  p: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.8vw",
    },
  },
}));
