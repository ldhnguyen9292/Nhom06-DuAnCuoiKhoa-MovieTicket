import React, { useState } from "react";
import { FormControl } from "@material-ui/core";
import { useStyles } from "./option-styles.component";
import clsx from "clsx";

function OptionSearch(props) {
  const classes = useStyles();
  const { array } = props;
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(array.option[0].text);

  const handleOptionChoose = (event) => {
    setOpen(false);
    setText(event.target.innerHTML);
    props.handleChange(array.id, event);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const renderOptions = (array) => {
    return (
      <ul className={classes.list} onClick={handleOptionChoose}>
        {array.option.map((opt, index) => (
          <li key={index} value={index}>
            {opt.text}
          </li>
        ))}
      </ul>
    );
  };

  if (array) {
    return (
      <FormControl className={classes.formControl}>
        <div className={classes.options}>
          <p
            className={clsx(classes.p, open ? classes.up : classes.down)}
            onClick={handleOpen}
          >
            <span className={classes.text}> {text}</span>
          </p>
          {open ? renderOptions(array) : <></>}
        </div>
      </FormControl>
    );
  }
  return;
}

export default OptionSearch;
