import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStyles } from "./news-styles.component";
import Videocard from "./videocard/videocard.component";
import Newscard from "./newscard/newscard.component";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";

function NewsComponent() {
  const classes = useStyles();
  const newsList = useSelector((state) => state.news.newsList);
  const history = useHistory();

  const pushNewsPage = () => {
    history.push("/news");
  };

  const renderVideoOrNews = (item) => {
    return (
      <>
        {item?.trailer ? (
          <Videocard newsItem={item} />
        ) : (
          <Newscard newsItem={item} />
        )}
      </>
    );
  };

  return (
    <div className={classes.bg}>
      <Container className={classes.root}>
        <div className={classes.title}>
          <div>
            <h2 className={classes.h2}>TIN MỚI</h2>
            <div className={classes.fade}></div>
          </div>
        </div>
        {newsList.length > 0 ? (
          <Grid container spacing={1}>
            <Grid container item lg={12} xl={6} spacing={3}>
              {renderVideoOrNews(newsList[0])}
            </Grid>
            <Grid container item lg={12} xl={6} spacing={3}>
              {renderVideoOrNews(newsList[1])}
              {renderVideoOrNews(newsList[2])}
            </Grid>
          </Grid>
        ) : null}
        <div className={classes.btnBox}>
          <Button className={classes.btnView} onClick={pushNewsPage}>
            <div className={classes.btnViewBefore}></div>
            <div className={classes.btnViewContent}>Xem thêm</div>
            <div className={classes.btnViewAfter}></div>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default memo(NewsComponent);
