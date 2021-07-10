import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  labelForm: {
    position: "absolute",
    left: 10,
    top: -12,
    margin: 0,
    backgroundImage: "linear-gradient(to bottom, #0e1726, #191e3a)",
  },
  id:{
    width:20,
    background:"transparent",
    outline:"none",
    border:"transparent",
    color: "#009688",
    fontSize:16,
  },
  input: {
    outline: "none",
    padding: "10px 15px",
    width: "100%",
    border: "1px solid #1b2e4b",
    borderRadius: 6,
    background: "#1b2e4b",
    color: "#009688",
  },
  w25: {
    width: "25%",
    padding: 5,
  },
  w50: {
    width: "50%",
    padding: 5,
  },
  w100: {
    width: "100%",
    padding: 5,
  },
  error: {
    color: "red",
    fontSize: 12,
    margin: 5,
    padding: 5,
  },
  radioBox: {
    display: "flex",
    "& h3": {
      margin: 5,
    },
  },
  radio: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& input": {
      width: 20,
    },
    margin: "0 5px",
  },
}));
