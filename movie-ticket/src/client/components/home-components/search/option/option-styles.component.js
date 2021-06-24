import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  formControl: {
    padding: 5,
    minWidth: 125,
    "& div": {
      border: "none",
    },
  },
  icon: {
    color: "white",
    top: "calc(50% - 18px)",
  },
  input: {
    color: "white",
    fontSize: 16,
  },
  select: {
    color: "white",
    fontSize: 16,
    borderRadius: 10,
    "&::after": {
      display: "none",
    },
    "&::before": {
      display: "none",
    },
  },
  menu: {
    color: "black",
    cursor: "pointer",
    height: 300,
    "& ul": {
      background: "rgba(255, 255, 255, 0.9)",
      "&::-webkit-scrollbar": {
        witdh: 5,
      },
    },
    "& option:hover": {
      background: "#80808026",
    },
  },
}));
