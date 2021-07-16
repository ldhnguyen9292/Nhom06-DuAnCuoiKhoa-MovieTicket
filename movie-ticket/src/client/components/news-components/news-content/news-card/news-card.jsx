import React, { memo, useState } from "react";
import format from "date-format";
import { Paper, CardMedia } from "@material-ui/core";
import { useStyles } from "./news-card-styles";
import parse from "html-react-parser";
import clsx from "clsx";
import FooterCard from "./footer-card/footer-card";

function NewsCard(props) {
  const classes = useStyles();
  const [lock, setLock] = useState(true);
  const { newsItem } = props;
  const { id, hinhAnh, ngayDang, tacGia, tenBai, noiDung } = newsItem;
  const date = format("dd/MM/yyyy", new Date(ngayDang));

  const handleLock = () => {
    setLock(!lock);
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
        {lock ? <p className={classes.seeMore}>Xem thêm</p> : <p>Rút gọn</p>}
      </div>

      <FooterCard id={id} />
    </Paper>
  );
}

export default memo(NewsCard);
