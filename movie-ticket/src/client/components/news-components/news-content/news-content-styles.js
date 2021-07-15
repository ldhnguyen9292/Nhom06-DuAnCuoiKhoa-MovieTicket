import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  box: {
    marginBottom: 20,
    "& p, & h3, & h2, & input": {
      wordSpacing: 2,
    },
  },
}));
