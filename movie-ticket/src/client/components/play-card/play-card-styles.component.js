import { makeStyles } from "@material-ui/core/styles";
import { Block } from "@material-ui/icons";

export const useStyles = makeStyles((theme) => ({
  iconPlay: {
<<<<<<< HEAD
    color: "#ffffffcf",
    background:
      "linear-gradient(to right, #4c46e6bf, #6d68fead, #b446ff9c, rgb(151, 0, 255,0.74))",
    fontSize: 60,
    border: "1px dashed #ffffffcf",
=======
    color: "white",
    backgroundColor: "#6d68fe70",
    fontSize: 100,
    border: "2px solid #b446ff",
    [theme.breakpoints.down("lg")]: {
      fontSize: 90,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 75,
      border: "2px solid #b446ff",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 60,
      border: "2px solid #b446ff",
    },
>>>>>>> hainguyen
    borderRadius: "50%",
    cursor: "pointer",
    marginBottom: 20,
    transition: '1s',
    "&:hover": {
<<<<<<< HEAD
      animation: `$playAnimation 3000ms infinite`,
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
=======
      transform: "scale(1.1)",
      animation: `$playAnimation 2000ms`,
>>>>>>> hainguyen
    },
    padding: '10px',
  },
  "@keyframes playAnimation": {
    "0%": { transform: "rotate(0deg) scale(1)" },
    "100%": { transform: "rotate(360deg) scale(1.1)" },
  },
  moreBtn: {
<<<<<<< HEAD
    color: "#ffffffcf",
    background:
      "linear-gradient(to right, #4c46e6bf, #6d68fead, #b446ff9c, rgb(151, 0, 255,0.74))",
    fontSize: 60,
    border: "1px dashed #ffffffcf",
=======
    color: "#ffffff",
    backgroundColor: "#6d68fea0",
    fontSize: 50,
    border: "2px solid #b446ff",
    textTransform: 'uppercase',
    padding: '10px 10px',
>>>>>>> hainguyen
    borderRadius: "10px",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.1)",
<<<<<<< HEAD
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
=======
      backgroundColor: "#6d68fedd",
    },
    [theme.breakpoints.down("lg")]: {
      padding: '10px 10px',
    },
    [theme.breakpoints.down("md")]: {
      padding: '10px 10px',
>>>>>>> hainguyen
    },
  },
  p: {
    [theme.breakpoints.down("lg")]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down("md")]: {
      fontSize: '12px',
    },
  }
}));
