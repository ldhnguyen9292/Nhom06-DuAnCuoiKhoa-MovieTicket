import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 26,
    textTransform: "uppercase",
    position: "relative",
    paddingBottom: 15,
    marginBottom: 20,
    fontWeight: "bold",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      bottom: 0,
      left: 0,
      border: "1px solid #dddddd",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      width: "5%",
      bottom: -1,
      left: 0,
      border: "2px solid #b446ff",
      zIndex: 1,
    },
  },
  arrangeIcon: {
    background: "#8080802e",
    fontSize: 30,
    marginRight: 10,
    cursor: "pointer",
    padding: 5,
    borderRadius: 5,
  },
  arrangeIconActive: {
    background: "#b446ff",
    color: "white",
  },
  cardItem: {
    padding: 10,
  },
  cardItem2: {
    marginBottom: 10,
    width: "-webkit-fill-available",
  },
  pagination: {
    padding: "20px 10px",
    "& ul li:first-child button, & ul li:last-child button": {
      background: "#b446ff",
    },
  },
}));
