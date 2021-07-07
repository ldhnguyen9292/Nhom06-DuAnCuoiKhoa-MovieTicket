import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(10),
    position: "relative",
    "&::before": {
      content: '"."',
      position: "absolute",
      top: "40%",
      left: "30%",
      transform: "translateY(-50%)",
    },
  },
  
}));
