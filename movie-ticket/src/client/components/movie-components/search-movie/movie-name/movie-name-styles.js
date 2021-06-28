import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  searchTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f8f8f8",
    borderRadius: 10,
    overflow: "hidden",
    "& input": {
      padding: 10,
      background: "#f8f8f8",
      border: "none",
      width: "100%",
      outline: "none",
    },
  },
  icon: {
    background: "#b446ff",
    cursor: "pointer",
    fontSize: 32,
    color: "white",
    padding: 5,
  },
}));
