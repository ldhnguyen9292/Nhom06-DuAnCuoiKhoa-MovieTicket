import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "30px 0px",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  appbar: {
    backgroundColor: "white !important",
    width: "320px !important",
      [theme.breakpoints.down("xs")]: {
        width: "296px !important",
      },
    color: "#797979 !important",
    "& .MuiAppBar-root": {
      width: "320px !important",
      [theme.breakpoints.down("xs")]: {
        width: "296px !important",
      },
    },
    borderRadius: "5px",
  },
  tabs: {
    "& .MuiTab-textColorInherit.Mui-selected": {
      background:
        "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
      color: "white",
      borderBottom: "none",
    },
    "& .MuiTab-textColorInherit": {
      "&:hover": {
        background:
          "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
        color: "white",
      },
    },
    borderRadius: "5px",
  },
}));
