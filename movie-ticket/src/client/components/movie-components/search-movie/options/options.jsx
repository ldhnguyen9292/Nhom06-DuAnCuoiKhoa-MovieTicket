import React, { useState } from "react";
import { useStyles } from "./options-styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import clsx from "clsx";

const moreOptions = [
  { name: "topRate", text: "Rating cao" },
  { name: "topMovie", text: "Phim bom tấn" },
  { name: "movie2D", text: "Phim 2D" },
  { name: "movie3D", text: "Phim 3D" },
];

function Options(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = (state) => {
    const newObject = { ...open, [state]: !open[state] };
    setOpen(newObject);
    props.handleSubmit(newObject);
  };

  const renderOptions = (option, index) => {
    return (
      <ListItem
        key={index}
        className={clsx(
          classes.optionText,
          open[option.name] ? classes.optionTextActive : ""
        )}
        onClick={() => handleClick(option.name)}
      >
        {open[option.name] ? (
          <CheckBoxIcon fontSize="small" />
        ) : (
          <CheckBoxOutlineBlankIcon fontSize="small" />
        )}
        <ListItemText primary={option.text} className={classes.text} />
      </ListItem>
    );
  };
  return (
    <List>
      {moreOptions.map((option, index) => renderOptions(option, index))}
    </List>
  );
}

export default Options;
