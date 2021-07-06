import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  headerLeft: {
    width: 300,
    padding: 20,
    fontSize: '20px',
    [theme.breakpoints.down("md")]: {
      padding: '20px 10px',
      fontSize: '20px',
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
    width: 50,
    height: 50,
    borderRadius: "50%",
    borderBottomRightRadius: "0",
    padding: 5,
    [theme.breakpoints.up("md")]: {
      width: 50,
      height: 50,
    },
  },
}));
