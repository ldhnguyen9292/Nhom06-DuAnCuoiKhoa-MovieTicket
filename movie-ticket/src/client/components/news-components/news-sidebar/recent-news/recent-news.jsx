import React from "react";
import { Grid, CardMedia } from "@material-ui/core";
import { useStyles } from "./recent-news-styles";
import format from "date-format";
import { useHistory } from "react-router-dom";

function RecentNews(props) {
  const classes = useStyles();
  const { array } = props;
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/news?key=_id&value=${id}`);
  };

  return (
    <>
      {array.map((value, index) => {
        return (
          <Grid
            key={index}
            container
            className={classes.root}
            onClick={() => handleClick(value._id)}
          >
            <Grid item className={classes.img}>
              <CardMedia component="img" src={value.hinhAnh} />
            </Grid>
            <Grid item>
              <p className={classes.title}>{value.tenBai}</p>
              <p className={classes.date}>
                {format("dd/MM/yyyy", new Date(value.ngayDang))}
              </p>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
export default RecentNews;
