import React, { memo, useState } from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./booking-sum-content-styles";
import PartOne from "./part-1/part-1";
import PartTwo from "./part-2/part-2";
import PartThree from "./part-3/part-3";
import Total from "./total/total";

function BSContent() {
  const classes = useStyles();
  const status = JSON.parse(localStorage.getItem("donate"));
  const temp = status ? status.status : false;
  const [donate, setDonate] = useState(temp);
  const id = JSON.parse(localStorage.getItem("payMethod"));
  const idTemp = id ? { [id.id]: true } : false;
  const [state, setState] = useState(idTemp);

  const handleDonate = () => {
    localStorage.setItem(
      "donate",
      JSON.stringify({ status: !donate, fee: 5000 })
    );
    setDonate(!donate);
  };

  const handleClick = (method) => {
    const { id, name, fee } = method;
    localStorage.setItem("payMethod", JSON.stringify({ id, name, fee }));
    setState({ [id]: true });
  };

  return (
    <>
      <Grid container spacing={3} justify="center" className={classes.root}>
        <Grid item sx={12} lg={8}>
          <PartOne />
          <PartTwo donate={donate} handleDonate={handleDonate} />
          <PartThree state={state} handleClick={handleClick} />
        </Grid>
        <Grid item sx={12} lg={4}>
          <Total />
        </Grid>
      </Grid>
    </>
  );
}

export default memo(BSContent);
