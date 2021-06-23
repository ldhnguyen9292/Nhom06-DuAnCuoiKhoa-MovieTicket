import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  headerLeft: {
    width: 300,
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
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 20px",
    },
  },
  iconLogo: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    borderBottomRightRadius: "0",
    padding: 5,
  },
}));
