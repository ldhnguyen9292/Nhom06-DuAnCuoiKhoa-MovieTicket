import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  form: {
    display: "block",
  },
  input: {
    width: "100%",
    border: "1px solid #dddddd",
    color: "#707070",
    outline: "none",
    padding: "5%",
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    width: "100%",
    padding: "5%",
    borderRadius: 10,
    background: "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    border: "1px solid #b446ff",
    color: "white",
    fontSize: 18,
    textTransform: "capitalize",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.5s",
    "&:hover": {
      color: "#b446ff",
      background: "white",
    },
  },
}));
