import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  headerLeft: {
    padding: 20,
  },
  logo: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 10px",
    textDecoration: "none",
    transition: "all 0.5s",
    textTransform: "uppercase",
    fontWeight: "bold",
    transform: "scale(1.2)",
    [theme.breakpoints.up("md")]: {
      padding: "0 15px",
      "& span": {
        fontSize: "20px !important",
      },
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 20px",
    },
    "& span": {
      fontSize: 16,
    },
  },
  iconLogo: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    borderBottomRightRadius: "0",
    padding: 5,
    [theme.breakpoints.up("md")]: {
      width: 50,
      height: 50,
    },
  },
}));
