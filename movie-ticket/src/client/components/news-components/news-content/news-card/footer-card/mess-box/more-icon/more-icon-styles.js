import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  moreIcon: {
    cursor: "pointer",
    borderRadius: "50%",
    transition: "all 0.5s",
    padding: 5,
    "&:hover": {
      background: "#f6f6f6",
    },
  },
  paper: {
    background: "#e2e2e2",
    padding: 10,
    borderRadius: 10,
    "& p": {
      margin: 0,
      padding: 10,
      cursor: "pointer",
      textAlign: "center",
      borderRadius: 10,
      "&:hover": {
        background: "#f6f6f6",
      },
    },
  },
}));
