import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
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
