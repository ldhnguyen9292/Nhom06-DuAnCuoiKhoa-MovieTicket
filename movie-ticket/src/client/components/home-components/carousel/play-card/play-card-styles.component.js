import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    background: "#0000009e",
    textAlign: "center",
    paddingTop:"2%",
  },
  top: {
    width: "90%",
    height: "85%",
    margin: "0 auto",
    borderRadius:10,
    backgroundColor:"rgba(255, 255, 255, 0.9)",
  },
  title: {
    fontSize: 30,
    color: "black",
    textTransform:"capitalize",
    fontWeight:"bold"
  },
  media: {
    height: "90%",
    borderRadius: 10,
    border: "2px solid black",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  btnControl: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "Center",
    padding: 10,
  },
  btn: {
    color: "white",
    background: "black",
    border: "1px solid black",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.9))",
    backgroundSize: "100% 0",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    transition: "all 0.5s",
    "&:hover": {
      border: "1px solid black",
      backgroundSize: "100% 100%",
      "& span": { color: "black" },
    },
  },

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
