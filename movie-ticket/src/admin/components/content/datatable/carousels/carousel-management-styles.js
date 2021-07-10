import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
  },
  form: {
    display: "flex",
    padding: 20,
    width: "100%",
    flexWrap: "wrap",
    background: "#191e3a",
    borderRadius: 6,
    border: "1px dashed",
    position: "relative",
  },
  button: {
    padding: "10px 15px",
    color: "#fff !important",
    background: "#4361ee!important",
    borderColor: "#4361ee",
    borderRadius: 6,
    boxShadow: "0 10px 20px -10px rgb(27 85 226 / 59%)",
    cursor: "pointer",
    width: 200,
    margin: "10px auto 5px !important",
  },
}));
