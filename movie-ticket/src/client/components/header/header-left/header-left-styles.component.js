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
    justifyContent:"center",
    textDecoration: "none",
    transition: "all 0.5s",
    textTransform: "uppercase",
    fontWeight: "bold",
    transform:"scale(1.2)",
  },
  iconLogo:{
    width:30,
    height:30,
    borderRadius:"50%",
    borderBottomRightRadius:"0",
    padding:5,
  }
}));
