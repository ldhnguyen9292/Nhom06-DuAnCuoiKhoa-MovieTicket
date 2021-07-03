import React, { useState } from "react";
import { Grid, Paper, CardMedia, IconButton } from "@material-ui/core";
import NewsDemo from "./../../../../../assets/images/news-demo.jpg";
import { useStyles } from "./news-card-styles";
import NewsAvatar from "./../../../../../assets/images/news-icon.jpg";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

function NewsCard() {
  const classes = useStyles();
  const [lock, setLock] = useState(true);
  const [open, setOpen] = useState(false);
  //   const [mess, setMess] = useState("");

  const handleChange = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      // setMess(event.target.value);
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
      <CardMedia component="img" src={NewsDemo} className={classes.imgTop} />
      <div className={lock ? classes.content : classes.contentUnlock}>
        <p className={classes.titleRed}>02/07/2021 | Admin</p>
        <h3 className={classes.title}>Tên bài báo</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nisi.
          Aspernatur doloribus debitis facilis, itaque quaerat laborum eveniet
          tempora vel recusandae reprehenderit mollitia magnam enim rem dolorum
          repellendus? Temporibus, quae!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nisi.
          Aspernatur doloribus debitis facilis, itaque quaerat laborum eveniet
          tempora vel recusandae reprehenderit mollitia magnam enim rem dolorum
          repellendus? Temporibus, quae!
        </p>
        <div className={classes.imgContent}>
          <CardMedia component="img" src={NewsDemo} className={classes.img} />
          <CardMedia component="img" src={NewsDemo} className={classes.img} />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          voluptates, maxime similique, optio reprehenderit perferendis
          explicabo inventore quos repellat numquam doloribus eos sed? Sint
          ducimus porro incidunt aperiam enim nobis?
        </p>
        <Grid container>
          <Grid item xs={10} className={classes.quote}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam
              quis natus veniam quia non doloribus, repellat eaque sequi error
              sit blanditiis maxime ipsum nesciunt a aliquid, unde maiores
              harum.
            </p>
            <p className={classes.titleQuote}>Alexander</p>
          </Grid>
          <Grid item xs={2}>
            <CardMedia
              component="img"
              src={NewsAvatar}
              className={classes.avatar}
            />
          </Grid>
        </Grid>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni
          nobis, sint, illum id qui aut nam tempora optio laborum pariatur. Est
          autem odit nam aliquam possimus natus voluptas consequatur.
        </p>
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

export default NewsCard;
