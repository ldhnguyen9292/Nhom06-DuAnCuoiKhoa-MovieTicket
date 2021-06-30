import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  group: {
    width: "95%",
    height: "85%",
    background: "white",
    overflow: "scroll",
    padding:"10px 20px",
    "& h1": {
      textAlign: "center",
    },
  },
}));
