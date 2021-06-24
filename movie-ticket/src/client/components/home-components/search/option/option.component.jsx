import React, { useState } from "react";
import { FormControl, Select, InputLabel } from "@material-ui/core";
import { useStyles } from "./option-styles.component";

function OptionSearch(props) {
  const classes = useStyles();
  const { array } = props;
  const [state, setState] = useState({ [array.id]: "" });

  const handleChangeMore = (event) => {
    const name = event.target.name;
    setState({ [name]: event.target.value });
    props.handleChange(name, event);
  };

  if (array) {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.input} htmlFor={array.helper.id}>
          {array.helper.text}
        </InputLabel>
        <Select
          value={state[array.id]}
          onChange={handleChangeMore}
          className={classes.select}
          classes={{
            icon: classes.icon,
          }}
          MenuProps={{
            className: classes.menu,
          }}
          inputProps={{
            name: array.id,
            id: array.helper.id,
          }}
        >
          <option aria-label="None" value="" />
          {array.option.map((opt) => (
            <option value={opt.value}>{opt.text}</option>
          ))}
        </Select>
      </FormControl>
    );
  }
  return;
}

export default OptionSearch;
