import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  iconPlay: {
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
    borderRadius: "50%",
    cursor: "pointer",
    marginBottom: 20,
    transition: '1s',
    "&:hover": {
      transform: "scale(1.1)",
      animation: `$playAnimation 2000ms`,
    },
    padding: '10px',
  },
  "@keyframes playAnimation": {
    "0%": { transform: "rotate(0deg) scale(1)" },
    "100%": { transform: "rotate(360deg) scale(1.1)" },
  },
  moreBtn: {
    color: "#ffffff",
    backgroundColor: "#6d68fea0",
    fontSize: 50,
    border: "2px solid #b446ff",
    textTransform: 'uppercase',
    padding: '10px 10px',
    borderRadius: "10px",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#6d68fedd",
    },
    [theme.breakpoints.down("lg")]: {
      padding: '10px 10px',
    },
    [theme.breakpoints.down("md")]: {
      padding: '10px 10px',
    },
    "& a": {
      color: "#ffffffcf",
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
