import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  logoContainer: {
    width: "30%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "10px",
    },
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
    fontWeight: "900",
    transform: "scale(1.2)",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  iconLogo: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    borderBottomRightRadius: "0",
    padding: 5,
  },
}));
