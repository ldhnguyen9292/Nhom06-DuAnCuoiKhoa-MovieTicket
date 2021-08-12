import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./news-archives-styles";
import { Grid } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function NewsArchives(props) {
  const classes = useStyles();
  const { array } = props;
  const history = useHistory();

  const handleClick = (value) => {
    history.push(`/news?key=ngayDang&value=${value}`);
  };

  const renderArray = () => {
    return array.map((value, index) => {
      return (
        <div
          key={index}
          className={classes.box}
          onClick={() => handleClick(value.type)}
        >
          <ArrowRightIcon className={classes.icon} />
          <Grid
            container
            alignItems="center"
            justify="space-between"
            className={classes.key}
          >
            <span>{value.name}</span>
            <span>{value.num}</span>
          </Grid>
        </div>
      );
    });
  };

  return <div>{renderArray()}</div>;
}

export default memo(NewsArchives);
