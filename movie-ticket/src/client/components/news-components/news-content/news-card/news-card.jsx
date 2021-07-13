import React, { memo, useState } from "react";
import format from "date-format";
import { Grid, Paper, CardMedia, IconButton } from "@material-ui/core";
import { useStyles } from "./news-card-styles";
import NewsAvatar from "./../../../../../assets/images/news-icon.jpg";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import parse from "html-react-parser";
import clsx from "clsx";

function NewsCard(props) {
  const classes = useStyles();
  const [lock, setLock] = useState(true);
  const [open, setOpen] = useState(false);
  const { newsItem } = props;
  const { hinhAnh, ngayDang, tacGia, tenBai, noiDung } = newsItem;
  const date = format("dd/MM/yyyy", new Date(ngayDang));

  const handleChange = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
    }
  };

  const renderMess = () => {
    return (
      <div className={classes.messBox}>
        <Grid container alignItems="center" wrap="nowrap">
          <Grid item className={classes.avatarBox}>
            <IconButton>
              <CardMedia
                component="img"
                src={NewsAvatar}
                className={classes.messAvatar}
              />
            </IconButton>
          </Grid>
          <Grid item className={classes.messTextBox}>
            <div className={classes.messText}>
              <p className={classes.name}>Nguyễn văn a</p>
              <p className={classes.titleRed}>Thứ 6 - 02/07/2021</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                consectetur. Quis cum illum quidem dolorum repudiandae,
                doloribus quas excepturi. Laudantium ab incidunt eligendi
                doloremque repellendus! Molestias magnam deserunt temporibus
                dolor?
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };

  const renderTextBox = () => {
    return (
      <div className={classes.messBox}>
        <Grid container alignItems="center" wrap="nowrap">
          <Grid item className={classes.avatarBox}>
            <IconButton>
              <CardMedia
                component="img"
                src={NewsAvatar}
                className={classes.messAvatar}
              />
            </IconButton>
          </Grid>
          <Grid item className={classes.messTextBox}>
            <div className={classes.messText}>
              <input
                type="text"
                className={classes.textBox}
                placeholder="Viết ý kiến"
                onKeyDown={handleChange}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };

  const renderMesseges = () => {
    return (
      <>
        {renderMess()}
        <p className={classes.messCollapse}>Xem thêm 2 ý kiến</p>
        {renderTextBox()}
      </>
    );
  };

  const handleLock = () => {
    setLock(!lock);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Paper className={classes.root}>
      <CardMedia component="img" src={hinhAnh} className={classes.imgTop} />
      <p className={classes.titleRed}>
        {date} | {tacGia}
      </p>
      <h3 className={classes.title}>{tenBai}</h3>

      <div className={clsx(classes.content, lock ? classes.contentLock : null)}>
        {parse(noiDung)}
      </div>
      <div onClick={handleLock} className={classes.lockBtn}>
        {lock ? <p>Xem thêm</p> : <p>Rút gọn</p>}
      </div>

      <div className={classes.footer}>
        <Grid container spacing={3} alignItems="center" justify="space-between">
          <Grid item xs={4} style={{ padding: "2%" }}>
            <Grid container justify="center" className={classes.iconBox}>
              <ThumbUpAltIcon className={classes.icon} />
              <span className={classes.text}>10 thích</span>
            </Grid>
          </Grid>
          <Grid item xs={4} style={{ padding: "2%" }} onClick={handleOpen}>
            <Grid container justify="center" className={classes.iconBox}>
              <QuestionAnswerIcon className={classes.icon} />
              <span className={classes.text}>10 ý kiến</span>
            </Grid>
          </Grid>
          <Grid item xs={4} style={{ padding: "2%" }}>
            <Grid container justify="center" className={classes.iconBox}>
              <LocalOfferIcon className={classes.icon} />
              <span className={classes.text}>Gắn thẻ</span>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {open ? <div>{renderMesseges()}</div> : <></>}
    </Paper>
  );
}

export default memo(NewsCard);
