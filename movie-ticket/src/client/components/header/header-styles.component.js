import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    backgroundImage:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
  },
  flexG: {
    flexGrow: 1,
  },
  header: {
    position: "relative",
    animation: `$fadeIn 2000ms`,
  },
  headerFix: {
    position: "fixed",
    top: 0,
    zIndex: 2000,
    animation: `$fadeDown 2000ms`,
  },
  "@keyframes fadeDown": {
    "0%": { top: "-200px" },
    "100%": { top: "0" },
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
}));
