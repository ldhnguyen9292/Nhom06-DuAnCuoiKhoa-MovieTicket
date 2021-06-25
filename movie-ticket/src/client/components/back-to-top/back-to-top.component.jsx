import React from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  iconUp: {
    color: "white",
    display: "none",
    position: "fixed",
    bottom: 30,
    right: 50,
    width: 50,
    height: 50,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    background:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    zIndex: 2000,
    "& svg": {
      fontSize: 35,
    },
  },
  displayB: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: `$fadeIn 3000ms`,
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
}));

function BackToTop(props) {
  const classes = useStyles();

  const scrollToRef = () => {
    window.scrollTo(0, 0);
    props.handlePosition();
  };

  return (
    <button
      onClick={scrollToRef}
      className={clsx(classes.iconUp, props.pos > 200 ? classes.displayB : "")}
    >
      <KeyboardArrowUpIcon />
    </button>
  );
}

export default BackToTop;
