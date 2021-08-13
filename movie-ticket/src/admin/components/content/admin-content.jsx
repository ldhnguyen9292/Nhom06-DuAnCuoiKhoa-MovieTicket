import { makeStyles, Paper } from "@material-ui/core";
import React, { memo } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./dashboard/dashboard.component";

const useStyles = makeStyles(() => ({
  root: {
    background: "#060818",
    padding: 10,
    height: "100%",
  },
  box: {
    background: "#0e1726",
    border: "1px solid #0e1726",
    color: "#506690",
  },
}));

function AdminContent() {
  const classes = useStyles();
  const queryParams = new URLSearchParams(useLocation().search);
  const data = queryParams.get("data");
  const sub = queryParams.get("sub");

  const lazyLoading = () => {
    let Content = null;
    switch (sub) {
      case "Users":
        Content = lazy(() => import("./datatable/users/users-management.jsx"));
        break;
      case "News":
        Content = lazy(() => import("./datatable/news/news-management.jsx"));
        break;
      case "Carousels":
        Content = lazy(() =>
          import("./datatable/carousels/carousels-management.jsx")
        );
        break;
      case "Movies":
        Content = lazy(() =>
          import("./datatable/movies/movies-management.jsx")
        );
        break;
      case "ShowTimes":
        Content = lazy(() =>
          import("./datatable/show-times/show-times-management.jsx")
        );
        break;
      default:
        break;
    }

    return (
      <Suspense fallback={<Dashboard />}>
        <Content />
      </Suspense>
    );
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.box}>
        {!data || data === "Dashboard" ? <Dashboard /> : <>{lazyLoading()}</>}
      </Paper>
    </div>
  );
}

export default memo(AdminContent);
