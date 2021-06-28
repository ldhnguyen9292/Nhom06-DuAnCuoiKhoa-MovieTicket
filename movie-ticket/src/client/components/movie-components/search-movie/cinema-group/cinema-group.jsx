import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { useStyles } from "./cinema-group-styles";
import clsx from "clsx";

const array = [
  { tenCumRap: "Galaxy", tenRap: ["Galaxy Nguyễn Du", "Galaxy Tân Bình"] },
  { tenCumRap: "CGV", tenRap: ["CGV Thủ Đức", "CGV Quận 2"] },
  { tenCumRap: "CineBox", tenRap: ["CineBox Quận 1", "CineBox Quận 7"] },
];

function CinemaGroup(props) {
  const classes = useStyles();
  const [cinemaState, setCinema] = useState(false);
  const [cinemasState, setCinemas] = useState(false);

  const handleClickCinema = (name) => {
    const newObject = { ...cinemaState, [name]: !cinemaState[name] };
    setCinema(newObject);
    props.handleSubmit({tenRap: newObject})
  };

  const handleClickCinemas = (name) => {
    const newObject = { ...cinemasState, [name]: !cinemasState[name] };
    setCinemas(newObject);
  };

  const renderCinema = (cinema, i) => {
    return (
      <ListItem
        key={i}
        className={clsx(
          classes.cinemaText,
          cinemaState[cinema] ? classes.cinemaTextActive : ""
        )}
        onClick={() => handleClickCinema(cinema)}
      >
        {cinemaState[cinema] ? (
          <CheckBoxIcon fontSize="small" />
        ) : (
          <CheckBoxOutlineBlankIcon fontSize="small" />
        )}
        <ListItemText primary={cinema} className={classes.text} />
      </ListItem>
    );
  };

  const renderCinemas = (cinemas, index) => {
    return (
      <List key={index}>
        <ListItem
          className={clsx(
            classes.cinemaText,
            cinemasState[cinemas.tenCumRap] ? classes.cinemaTextActive : ""
          )}
          onClick={() => handleClickCinemas(cinemas.tenCumRap)}
        >
          {cinemasState[cinemas.tenCumRap] ? (
            <ArrowDropDownIcon />
          ) : (
            <ArrowRightIcon />
          )}
          <ListItemText primary={cinemas.tenCumRap} />
        </ListItem>
        <Collapse
          in={cinemasState[cinemas.tenCumRap]}
          timeout="auto"
          unmountOnExit
        >
          <List component="div">
            {cinemas.tenRap.map((cinema, i) => renderCinema(cinema, i))}
          </List>
        </Collapse>
      </List>
    );
  };

  return <>{array.map((cinemas, index) => renderCinemas(cinemas, index))}</>;
}

export default CinemaGroup;
