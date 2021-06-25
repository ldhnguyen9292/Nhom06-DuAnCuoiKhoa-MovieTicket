import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  formControl: {
    padding: 5,
    minWidth: 125,
    "& div": {
      border: "none",
    },
  },
  options: {
    position: "relative",
  },
  list: {
    position: "absolute",
    color: "black",
    fontSize: 14,
    listStyleType: "none",
    background: "white",
    cursor: "pointer",
    height: "fit-content",
    padding: 10,
    margin: 0,
    maxHeight: 150,
    top: 45,
    left: 0,
    borderRadius: 5,
    border: "1px solid black",
    overflowY: "scroll",
    overflowX: "hidden",
    "& li:hover": {
      background: "#80808026",
    },
  },
  p: {
    cursor: "pointer",
    textAlign: "center",
    "&::after": {
      content: '""',
      border: "solid white",
      borderWidth: "0 3px 3px 0",
      display: "inline-block",
      padding: 3,
      transform: "rotate(45deg)",
    },
  },
  up: {
    "&::after": { transform: "rotate(-135deg)" },
  },
  text: {
    color: "white !important",
    paddingRight: "10px !important",
    fontSize: 14,
    textTransform: "Capitalize",
  },
}));
