import React from "react";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { useStyles } from "./list-type-2-styles";
import { useHistory } from "react-router-dom";

function ListType2(props) {
  const classes = useStyles();
  const history = useHistory();
  const { item } = props;
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (sub) => {
    history.push({
      pathname: "/admin",
      search: `data=${item.text}&sub=${sub.text}`,
    });
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <item.icon />
        </ListItemIcon>
        <ListItemText primary={item.text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.listItems.map((value, index) => {
            return (
              <ListItem
                key={index}
                button
                className={classes.nested}
                onClick={() => handleChange(value)}
              >
                <ListItemText primary={value.text} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}

export default ListType2;
