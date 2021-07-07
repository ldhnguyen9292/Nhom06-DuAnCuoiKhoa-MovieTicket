import { makeStyles } from "@material-ui/core";
import React, { memo } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./dashboard/dashboard.component";

const useStyles = makeStyles(() => ({
  root: {
    background: "#060818",
    padding: 10,
    color: "#506690",
    height: "100%",
  },
}));

function AdminContent() {
  const classes = useStyles();
  const queryParams = new URLSearchParams(useLocation().search);
  const key = queryParams.get("key");
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
      case "Cinemas":
        Content = lazy(() =>
          import("./datatable/cinemas/cinemas-management.jsx")
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
      {!key || key === "Dashboard" ? <Dashboard /> : <>{lazyLoading()}</>}
    </div>
  );
}

export default memo(AdminContent);
