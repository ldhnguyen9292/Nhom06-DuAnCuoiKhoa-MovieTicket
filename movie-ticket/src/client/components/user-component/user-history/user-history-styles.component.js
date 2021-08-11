import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "14px",
    textTransform: "uppercase",
  },
  paper: {
    maxHeight: 800,
    overflow: "scroll",
  },
  table: {
    background: "#6d68fe",
    color: "white",
  },
  head: {
    background: "#3f51b5",
  },
  th: {
    fontSize: 16,
    textTransform: "capitalize",
    width: 150,
    padding: 5,
  },
  trOdd: {
    fontSize: 14,
    "& td": { background: "#4c46e6" },
  },
  trEven: {
    fontSize: 14,
    "& td": { background: "rgba(255, 255, 255, 0.08)" },
  },
  td: { padding: "5px 10px" },
}));
