import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Box } from "@material-ui/core";
import { useStyles } from "./side-bar-styles";
import { useSelector } from "react-redux";

const cityList = [
  { key: "hcm", label: "Hồ Chí Minh" },
  { key: "hn", label: "Hà Nội" },
];

function SideBar() {
  const classes = useStyles();
  const search = new URLSearchParams(window.location.search);
  const cinemaList = useSelector((state) => state.cinema.cinemaList);
  const city = search.get("city") || false;
  const cinema = search.get("cinema") || false;
  const [state, setState] = useState({ [city]: true, [cinema]: true });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const renderCheckBox = (key, label) => {
    return (
      <FormControlLabel
        key={key}
        control={
          <Checkbox
            checked={state[label]}
            onChange={handleChange}
            name={label}
            color="primary"
          />
        }
        label={label}
      />
    );
  };

  return (
    <Box boxShadow={10} className={classes.container}>
      <FormGroup>
        <p className={classes.title}>Cụm rạp chiếu</p>
        {cinemaList.map((v) => {
          const { maHeThongRap, tenHeThongRap } = v;
          return renderCheckBox(maHeThongRap, tenHeThongRap);
        })}
        <p className={classes.title}>Thành phố</p>
        {cityList.map((v) => {
          const { key, label } = v;
          return renderCheckBox(key, label);
        })}
      </FormGroup>
    </Box>
  );
}

export default SideBar;
