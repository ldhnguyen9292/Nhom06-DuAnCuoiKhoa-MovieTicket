import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  setScrollbar: {
    overflowX: "auto",
    overflowY: "hidden",
  },
  table: {
    maxWidth: "100%",
  },
  title: {
    background: "#1b2e4b",
    color: "#bfc9d4",
    padding: "8px 15px",
    textTransform: "capitalize",
    verticalAlign: "middle",
    borderBottom: "none",
    whiteSpace: "nowrap",
  },
  textTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sortIcon: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "#888ea8",
    paddingLeft: 30,
    "& svg": { fontSize: 12, cursor: "pointer" },
  },
  sortIconActive: {
    color: "white",
    fontWeight: "bolder",
  },
  textBody: {
    color: "#888ea8",
    borderBottom: "1px solid #191e3a",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: 150,
  },
  iconButton: {
    cursor: "pointer",
    margin:"0 5px",
  },
  pagiBox: {
    padding: 10,
    width: "100%",
  },
  pagination: {
    "& li button": {
      color: "#bfc9d4",
      fontSize: 13,
    },
  },
}));
