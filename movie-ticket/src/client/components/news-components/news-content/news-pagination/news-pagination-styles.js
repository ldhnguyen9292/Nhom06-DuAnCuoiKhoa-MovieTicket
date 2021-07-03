import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  pagination: {
    padding: "10px 5px",
    "& ul li:first-child button, & ul li:last-child button": {
      background: "#b446ff",
    },
  },
}));
