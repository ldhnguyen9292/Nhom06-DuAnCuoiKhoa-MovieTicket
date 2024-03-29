import React, { useEffect, memo, useState } from "react";
import { useHistory } from "react-router-dom";
import format from "date-format";
import { useStyles } from "./newscard-styles.component";
import { Box, Button } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import parse from "html-react-parser";
import { commentListByIdAction } from "../../../../../store/actions/comment.action";

function Newscard(props) {
  const classes = useStyles();
  const { newsItem } = props;
  const [comment, setComment] = useState(null);
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
  }, []);

  const nextPage = () => {
    history.push({
      pathname: "/news",
      search: `?key=_id&value=${newsItem._id}`,
    });
  };

  return (
    <Box boxShadow={3} className={classes.root}>
      <div className={classes.left}>
        <img src={newsItem.hinhAnh} alt="" className={classes.img} />
      </div>
      <div className={classes.right}>
        <div className={classes.content}>
          <div>
            <p
              underline="none"
              href="#"
              className={classes.link}
              onClick={nextPage}
            >
              {newsItem.tenBai}
            </p>
            <p className={classes.day}>
              {format("dd/MM/yyyy", new Date(newsItem.ngayDang))}
            </p>
            <div className={classes.p}>{parse(newsItem.noiDung)}</div>
          </div>
          <div>
            {comment ? (
              <div className={classes.commentBox}>
                <Button className={classes.btn} onClick={nextPage}>
                  <ThumbUpIcon className={classes.icon} />
                  <span className={classes.comText}>
                    {comment.soLike} Thích
                  </span>
                </Button>
                <Button className={classes.btn} onClick={nextPage}>
                  <QuestionAnswerIcon className={classes.icon} />{" "}
                  <span className={classes.comText}>
                    {comment.soBinhLuan} Bình Luận
                  </span>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Box>
  );
}

export default memo(Newscard);
