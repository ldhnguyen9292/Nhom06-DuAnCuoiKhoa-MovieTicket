import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import AdminHeader from "./../components/header/admin-header.component.jsx";
import AdminSidebar from "../components/sidebar/admin-sidebar.component.jsx";
import { useStyles } from "./management-styles.js";
import AdminContent from "../components/content/admin-content.jsx";

function Management() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AdminHeader handleOpen={handleOpen} />
      <Grid container>
        <Grid
          item
          className={open ? classes.sidebarOpen : classes.sidebarClose}
        >
          <AdminSidebar />
        </Grid>
        <Grid
          item
          className={open ? classes.contentUnSpread : classes.contentSpread}
        >
          <AdminContent />
        </Grid>
      </Grid>
    </div>
  );
}

export default Management;
