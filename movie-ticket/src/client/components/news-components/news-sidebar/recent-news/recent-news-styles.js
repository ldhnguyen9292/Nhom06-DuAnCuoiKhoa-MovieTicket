import { makeStyles } from "@material-ui/core";

const color = "#b446ff";

export const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 10,
    cursor: "pointer",
    flexWrap: "nowrap",
  },
  title: {
    color: "black",
    margin: 0,
  },
  date: {
    color: color,
    margin: 0,
  },
  img: {
    maxWidth: 80,
    maxHeight: 80,
    marginRight: 10,
    "& img": {
      height: "100%",
    },
  },
}));
