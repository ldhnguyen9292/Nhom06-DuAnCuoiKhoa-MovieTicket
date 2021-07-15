import React, { memo, useState, useEffect } from "react";
import { Grid, CardMedia } from "@material-ui/core";
import NewsAvatar from "./../../../../../../assets/images/news-icon.jpg";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { useStyles } from "./footer-card-styles";
import { commentListByIdAction } from "../../../../../../store/actions/comment.action";
import MessBox from "./mess-box/mess-box";

function FooterCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { id } = props;
  const [commentArray, setCommentArray] = useState([]);

  const getCommentArray = async () => {
    const res = await commentListByIdAction("GET", id);
    if (res) {
      setCommentArray(res);
    }
  };

  const putCommentArray = async (dataUpdate) => {
    await commentListByIdAction("PUT", id, dataUpdate);
    await getCommentArray();
  };

  useEffect(() => {
    getCommentArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const renderMesseges = () => {
    return (
      <>
        {renderTextBox()}
        <MessBox messList={commentArray.mangBinhLuan} handleMess={handleMess} />
      </>
    );
  };

  const renderTextBox = () => {
    return (
      <div className={classes.messBox}>
        <Grid container alignItems="center" wrap="nowrap">
          <Grid item className={classes.avatarBox}>
            <CardMedia
              component="img"
              src={NewsAvatar}
              className={classes.messAvatar}
            />
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

  const handleMess = (array) => {
    let { soBinhLuan, mangBinhLuan } = commentArray;
    soBinhLuan = array.length;
    mangBinhLuan = array;
    const dataUpdate = { ...commentArray, soBinhLuan, mangBinhLuan };
    putCommentArray(dataUpdate);
  };

  const handleChange = (event) => {
    if (event.key === "Enter") {
      let { soBinhLuan, mangBinhLuan } = commentArray;
      const maThanhVien = parseInt("9292");
      const ten = "Admin";
      const hinhDaiDien =
        "https://anh.eva.vn//upload/3-2013/images/2013-08-20/1376967060-14.jpg";
      const ngayBinhLuan = new Date();
      soBinhLuan += 1;
      mangBinhLuan.push({
        maThanhVien,
        ten,
        hinhDaiDien,
        ngayBinhLuan,
        binhLuan: event.target.value,
      });
      const dataUpdate = { ...commentArray, soBinhLuan, mangBinhLuan };
      putCommentArray(dataUpdate);
      event.target.value = "";
    }
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickLike = () => {
    const maNguoiDung = "9292";
    const index = commentArray.mangLike.findIndex((id) => {
      return id === maNguoiDung;
    });
    if (index !== -1) {
      const soLike = commentArray.soLike - 1;
      const mangLike = commentArray.mangLike;
      mangLike.splice(index, 1);
      setCommentArray({ ...commentArray, soLike, mangLike });
    } else {
      const soLike = commentArray.soLike + 1;
      const mangLike = commentArray.mangLike;
      mangLike.push(maNguoiDung);
      setCommentArray({ ...commentArray, soLike, mangLike });
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.footer}>
        <Grid container spacing={3} alignItems="center" justify="space-between">
          <Grid item xs={4} style={{ padding: "2%" }}>
            <Grid
              container
              justify="center"
              className={classes.iconBox}
              onClick={handleClickLike}
            >
              <ThumbUpAltIcon className={classes.icon} />
              <span className={classes.text}>{commentArray.soLike} thích</span>
            </Grid>
          </Grid>
          <Grid item xs={4} style={{ padding: "2%" }} onClick={handleOpen}>
            <Grid container justify="center" className={classes.iconBox}>
              <QuestionAnswerIcon className={classes.icon} />
              <span className={classes.text}>
                {commentArray.soBinhLuan} ý kiến
              </span>
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
    </div>
  );
}

export default memo(FooterCard);
