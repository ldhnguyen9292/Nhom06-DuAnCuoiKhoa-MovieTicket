import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    borderBottom: "1px solid #dddddd",
    paddingBottom: 15,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "20%",
      height: 4,
      background: "#b446ff",
      left: 0,
      bottom: -2,
    },
  },
}));

function NewsTitles(props) {
  const classes = useStyles();
  const { title } = props;
  return <p className={classes.title}>{title}</p>;
}

export default NewsTitles;
