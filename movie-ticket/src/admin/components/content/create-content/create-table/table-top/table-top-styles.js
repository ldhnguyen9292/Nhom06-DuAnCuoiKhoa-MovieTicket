import { makeStyles } from "@material-ui/core";

const inputBackground = {
  padding: "7px 20px",
  borderRadius: 6,
  border: "1px solid #1b2e4b",
  outline: "none",
  color: "#f1f2f3",
  background: "#0e1726",
};

export const useStyles = makeStyles(() => ({
  top: {
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth:"100%",
  },
  resultBox: {
    paddingLeft: 10,
  },
  selectBox: {
    ...inputBackground,
  },
  searchBox: {
    ...inputBackground,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputSearch: {
    color: "#f1f2f3",
    background: "#0e1726",
    border: "none",
    outline: "none",
  },
  searchIcon: {
    cursor: "pointer",
    padding: 0,
    color: "#f1f2f3",
    background: "#0e1726",
    border: "none",
    outline: "none",
    height: 18,
    "& svg": { fontSize: 20 },
  },
  messErr: {
    color: "#f1f2f3",
    background: "#0e1726",
  },
}));
