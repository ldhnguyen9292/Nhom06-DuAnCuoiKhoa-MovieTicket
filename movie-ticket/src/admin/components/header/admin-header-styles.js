import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: "100%",
    zIndex: 2,
    height: 104,
  },
  top: {
    background: "#060818",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
    "& div": {
      padding: 5,
    },
  },
  iconBox: {
    width: 150,
    color: "white",
    paddingRight: 20,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    cursor: "pointer",
  },
  bottom: {
    background: "rgb(26, 28, 45)",
    color: "white !important",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
  },
  breadcrumbs: {
    color: "white !important",
    padding: "0 20px",
    "& ol li:last-child p": {
      fontWeight: "bold !important",
    },
  },
  text: {
    textTransform: "Capitalize",
  },
  avatarIcon: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    cursor: "pointer",
  },
  paper: {
    background: "#b9b9b9c4",
    color: "white",
    borderRadius: "0 0 5px 5px",
  },
  userP: {
    padding: 5,
    margin: 0,
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      background: "gray",
    },
  },
}));
