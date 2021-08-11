import React from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

function Options(props) {
  const handleChange = (event, value) => {
    props.handleSubmit("", value);
  };

  return (
    <>
      <Typography gutterBottom>Tìm theo điểm đánh giá:</Typography>
      <Slider
        min={0}
        max={10}
        valueLabelDisplay="auto"
        marks={[
          { value: 0, label: 0 },
          { value: 10, label: 10 },
        ]}
        defaultValue={5}
        getAriaValueText={(value) => `${value}`}
        onChange={handleChange}
      ></Slider>
    </>
  );
}

export default Options;
