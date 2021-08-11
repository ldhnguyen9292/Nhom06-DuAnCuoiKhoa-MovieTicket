import React, { memo } from "react";
import {
  Grid,
  Paper,
  CardMedia,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import Momo from "./../../../../../../assets/images/momo.png";
import Zalopay from "./../../../../../../assets/images/zalopay.png";
import VisaMaster from "./../../../../../../assets/images/visa-master.png";
import Napas from "./../../../../../../assets/images/napas.jpg";

const useStyles = makeStyles(() => ({
  bonus: {
    padding: 10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
  },
  paper: {
    marginTop: 12,
    marginBottom: 40,
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
    paddingLeft: 30,
  },
}));

const payMethods = [
  {
    id: "momo",
    name: "momo",
    imgURL: Momo,
    fee: 0,
  },
  {
    id: "zalopay",
    name: "zalopay",
    imgURL: Zalopay,
    fee: 0,
  },
  {
    id: "napas",
    name: "Thẻ nội địa",
    imgURL: Napas,
    fee: 1,
  },
  {
    id: "visa",
    name: "Thẻ quốc tế",
    imgURL: VisaMaster,
    fee: 3,
  },
];

function PartThree(props) {
  const classes = useStyles();
  const { state } = props;

  const handleClick = (method) => {
    props.handleClick(method);
  };

  return (
    <Paper className={classes.paper}>
      <h3 className={classes.titlePayMethod}>Phương thức thanh toán</h3>
      <Grid container direction="column" className={classes.pay}>
        {payMethods.map((method) => {
          const { id, name, imgURL, fee } = method;
          return (
            <li className={classes.payContent} key={id}>
              <Grid container alignItems="center">
                <CardMedia
                  component="img"
                  src={imgURL}
                  className={classes.payIcon}
                />
                <span className={classes.payName}>{name}</span>
              </Grid>
              <IconButton value={fee} onClick={() => handleClick(method)}>
                {state[id] ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
              </IconButton>
            </li>
          );
        })}
      </Grid>
    </Paper>
  );
}

export default memo(PartThree);
