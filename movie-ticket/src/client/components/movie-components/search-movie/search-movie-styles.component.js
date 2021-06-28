import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  searchTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f8f8f8",
    borderRadius: 10,
    overflow: "hidden",
    "& input": {
      padding: 10,
      background: "#f8f8f8",
      border: "none",
      width: "100%",
      outline: "none",
    },
  },
  icon: {
    background: "#b446ff",
    cursor: "pointer",
    fontSize:32,
    color:"white",
    padding:5,
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 16,
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
      width: "10%",
      bottom: -1,
      left: 0,
      border: "2px solid #b446ff",
      zIndex: 1,
    },
  },
  cinemaText: {
    cursor: "pointer",
    padding: "0 10px",
    transition: "all 0.5s",
    "&:hover": {
      color: "#b446ff",
    },
  },
  cinemaTextActive: {
    color: "#b446ff",
  },
  text: {
    paddingLeft: 10,
    "& span": { fontSize: 13 },
  },
}));
