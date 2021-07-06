import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  iconPlay: {
    color: "#ffffffcf",
    background:
      "linear-gradient(to right, #4c46e6bf, #6d68fead, #b446ff9c, rgb(151, 0, 255,0.74))",
    fontSize: 60,
    border: "1px dashed #ffffffcf",
    borderRadius: "50%",
    cursor: "pointer",
    marginBottom: 20,
    "&:hover": {
      animation: `$playAnimation 3000ms infinite`,
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    },
  },
  "@keyframes playAnimation": {
    "0%": { transform: "rotate(0deg) scale(1)" },
    "50%": { transform: "rotate(360deg) scale(1.2)" },
    "100%": { transform: "rotate(0deg) scale(1)" },
  },
  moreBtn: {
    color: "#ffffffcf",
    background:
      "linear-gradient(to right, #4c46e6bf, #6d68fead, #b446ff9c, rgb(151, 0, 255,0.74))",
    fontSize: 60,
    border: "1px dashed #ffffffcf",
    borderRadius: "10px",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.1)",
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    },
    "& a": {
      color: "#ffffffcf",
    },
  },
});
