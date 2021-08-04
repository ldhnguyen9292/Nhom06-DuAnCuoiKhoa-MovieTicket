import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function ListType1(props) {
  const { item } = props;
  const history = useHistory();

  const handleChange = () => {
    history.push({
      pathname: "/admin",
      search: `data=${item.text}`,
    });
  };

  return (
    <ListItem onClick={handleChange} style={{ cursor: "pointer" }}>
      <ListItemIcon>
        <item.icon />
      </ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItem>
  );
}

export default ListType1;
