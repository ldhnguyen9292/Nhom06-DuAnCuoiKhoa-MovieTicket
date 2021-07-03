import { makeStyles } from "@material-ui/core";

const color = "#707070";

export const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
    margin: "10px 0",
    color: color,
  },
  key: {
    paddingLeft: 5,
    textTransform: "capitalize",
    transition: "all 0.5s",
    cursor: "pointer",
    borderBottom: "1px solid #dddddd",
    paddingBottom: 10,
    "&:hover": {
      color: "#b446ff",
    },
  },
  icon: {
    color: "#b446ff",
  },
}));
