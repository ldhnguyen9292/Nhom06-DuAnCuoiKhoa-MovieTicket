import React, { useEffect, memo, useState } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./videocard-styles.component";
import { Box } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { Button, CardMedia } from "@material-ui/core";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import format from "date-format";
import { commentListByIdAction } from "../../../../../store/actions/comment.action";
import ModalVideo from "../../../modal-video/modal-video.component";

function Videocard(props) {
  const classes = useStyles();
  const { newsItem } = props;
  const [comment, setComment] = useState(null);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const getComment = async () => {
    const res = await commentListByIdAction("GET", newsItem._id);
    if (res) {
      setComment(res);
    }
  };

  useEffect(() => {
    getComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsItem._id]);

  const renderStar = () => {
    let score = newsItem.danhGia;
    const result = [];

    for (let index = 0; index < 5; index++) {
      if (score >= 2) {
        result.push(<StarIcon fontSize="small" key={index} />);
        score -= 2;
      } else if (score > 0) {
        result.push(<StarHalfIcon fontSize="small" key={index} />);
        score = 0;
      } else {
        result.push(<StarBorderIcon fontSize="small" key={index} />);
      }
    }

    return <div className={classes.icongroup}>{result}</div>;
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMore = () => {
    setOpen(!open);
    nextPage();
  };

  const nextPage = () => {
    history.push({
      pathname: "/news",
      search: `?key=_id&value=${newsItem._id}`,
    });
  };

  return (
    <Box boxShadow={5} className={classes.root}>
      <CardMedia
        component="img"
        src={newsItem.hinhAnh}
        className={classes.image}
      />
      <div className={classes.overlay}></div>
      <div className={classes.movieBox}>
        {newsItem.trailer ? (
          <div className={classes.buttonBox}>
            <div className={classes.box}>
              <div className={classes.fade}></div>
              <Button className={classes.button} onClick={handleClick}>
                <SlowMotionVideoIcon fontSize="large" />
                <ModalVideo
                  slider={{
                    tenPhim: "Trailer Phim",
                    trailer: newsItem.trailer,
                  }}
                  open={open}
                  handleClose={handleClick}
                  handleMore={handleMore}
                />
              </Button>
            </div>
          </div>
        ) : null}
        <div className={classes.contentBox}>
          <p className={classes.p}>{newsItem.theLoai}</p>
          <div className={classes.headContent}>
            <p className={classes.p}>Đánh giá: </p>
            {renderStar()}
          </div>
          <p className={classes.h2}>{newsItem.tenBai}</p>
          {newsItem.ngayCongChieu ? (
            <p className={classes.p}>
              Ngày công chiếu:{" "}
              {format("dd/MM/yyyy", new Date(newsItem.ngayCongChieu))}
            </p>
          ) : null}
          {comment ? (
            <div onClick={nextPage}>
              <Button className={classes.btn}>
                <ThumbUpIcon className={classes.icon}></ThumbUpIcon>{" "}
                {comment.soLike} Thích
              </Button>
              <Button className={classes.btn}>
                <QuestionAnswerIcon
                  className={classes.icon}
                ></QuestionAnswerIcon>{" "}
                {comment.soBinhLuan} Bình Luận
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </Box>
  );
}

export default memo(Videocard);
