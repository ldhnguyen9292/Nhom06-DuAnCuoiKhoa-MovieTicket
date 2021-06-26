import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  iconPlay: {
    color: "#ffffffcf",
    backgroundColor: "#b446ffad",
    fontSize: 60,
    border: "1px dashed #ffffffcf",
    borderRadius: "50%",
    cursor: "pointer",
    marginBottom: 20,
    "&:hover": {
      animation: `$playAnimation 3000ms infinite`,
    },
  },
  "@keyframes playAnimation": {
    "0%": { transform: "rotate(0deg) scale(1)" },
    "50%": { transform: "rotate(360deg) scale(1.2)" },
    "100%": { transform: "rotate(0deg) scale(1)" },
  },
  moreBtn: {
    color: "#ffffffcf",
    backgroundColor: "#b446ffad",
    fontSize: 60,
    border: "1px dashed #ffffffcf",
    borderRadius: "10px",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#b446ffad",
    },
  },
});
