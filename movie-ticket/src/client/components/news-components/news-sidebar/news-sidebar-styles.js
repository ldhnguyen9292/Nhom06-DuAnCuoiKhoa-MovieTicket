import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  sideBar: {
    padding: "0 10%",
    "& p": {
      wordSpacing: 2,
    },
  },
  paper: {
    padding: "5%",
    borderRadius: 0,
  },
}));
