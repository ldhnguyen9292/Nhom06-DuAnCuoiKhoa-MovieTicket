import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "#060818",
    minHeight: "calc(100vh)!important",
  },
  sidebarOpen: {
    position: "fixed",
    width: 210,
    left: 0,
    top: 104,
    height: "100%",
    transition: "all 0.5s",
  },
  sidebarClose: {
    left: "-210px",
    top: 104,
    position: "fixed",
    height: "100%",
    transition: "all 0.5s",
  },
  contentSpread: {
    flexGrow: 1,
    transition: "all 0.5s",
    marginTop: 104,
    padding: 10,
    maxWidth: "100vw",
  },
  contentUnSpread: {
    flexGrow: 1,
    marginTop: 104,
    margin: "0 0 0 210px",
    transition: "all 0.5s",
    padding: 10,
    maxWidth: "calc(100vw - 210px)",
  },
}));
