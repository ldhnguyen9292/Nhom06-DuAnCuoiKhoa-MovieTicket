import React, { memo } from "react";
import { List } from "@material-ui/core";
import { useStyles } from "./admin-sidebar-styles";
import ListType1 from "./list-type-1/list-type-1";
import ListType2 from "./list-type-2/list-type-2";
import LayersIcon from "@material-ui/icons/Layers";
import HomeIcon from "@material-ui/icons/Home";

function AdminSidebar() {
  const classes = useStyles();
  const menuItems = [
    {
      text: "Dashboard",
      icon: HomeIcon,
      listItems: null,
    },
    {
      text: "Datatables",
      icon: LayersIcon,
      listItems: [
        { text: "Users" },
        { text: "Movies" },
        { text: "Cinemas" },
        { text: "Carousels" },
        { text: "News" },
      ],
    },
  ];
  
  return (
    <List component="nav" className={classes.root}>
      {menuItems.map((item, index) => {
        return (
          <div key={index}>
            {!item.listItems ? (
              <ListType1 item={item} />
            ) : (
              <ListType2 item={item} />
            )}
          </div>
        );
      })}
    </List>
  );
}

export default memo(AdminSidebar);
