import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 40,
  },
  paper: {
    marginTop: 12,
    marginBottom: 40,
  },
  cinemaInfo: {
    padding: "0 20px",
    fontWeight: "bold",
  },
  bonus: {
    padding: 10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
  },
  BSTop: {
    textAlign: "center",
    background: "#333545",
    borderRadius: 5,
    "& p": {
      margin: 0,
      padding: 10,
      color: "white",
    },
  },
  textLeft: {
    textAlign: "left",
    paddingLeft: 10,
  },
  textRight: {
    textAlign: "right",
    paddingRight: 10,
  },
  sum: {
    borderTop: "1px dashed black",
  },
  sumLeft: {
    padding: "20px 10px",
    fontWeight: "bold",
  },
  sumRight: {
    padding: "20px 10px",
    fontWeight: "bold",
    textAlign: "right",
  },
  titlePayMethod: {
    padding: "20px 20px 0",
  },
  pay: {
    padding: "10px 20px",
  },
  payContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  payIcon: {
    width: 50,
    height: 50,
    padding: 10,
  },
  payName: {
    textTransform: "Capitalize",
    paddingRight: 10,
  },
  payFee: {
    display: "none",
  },
  btnPay: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    padding: 10,
    margin: "0 auto",
    marginBottom: 20,
    width: 130,
    color: "white",
    background:
      "linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))",
    borderRadius: 10,
    border: "1px solid #b446ff",
    cursor: "pointer",
    "& span": {
      color: "white",
    },
    "&:hover": {
      background: "#f6f6f6",
      color: "#b446ff",
      "& span": {
        color: "#b446ff",
      },
    },
  },
  ruleBox: {
    marginBottom: 10,
    padding: "0 10px",
  },
  rules: {
    color: "#b446ff",
    cursor: "pointer",
  },
  ruleModal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
    padding: 20,
    margin: "0 auto",
  },
}));
