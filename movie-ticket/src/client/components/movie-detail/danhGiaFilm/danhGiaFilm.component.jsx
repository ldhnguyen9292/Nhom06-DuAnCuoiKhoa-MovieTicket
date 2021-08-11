import React, { useState } from "react";
import { useStyles } from "./danhGiaFilm-styles.component";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Slider } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { putRatingMongoAction } from "../../../../store/actions/movie.action";

function DanhGiaFilm() {
  const classes = useStyles();
  const mongoMovieDetail = useSelector((state) => state.movie.mongoMovieDetail);
  const { danhGia, scoreArray, maPhim } = mongoMovieDetail;
  const [value, setValue] = useState(8);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderRating = () => {
    let result = [0, 0, 0, 0, 0];
    scoreArray?.map((score) => {
      if (0 <= score && score <= 2) result[4] += 1;
      if (2 < score && score <= 4) result[3] += 1;
      if (4 < score && score <= 6) result[2] += 1;
      if (6 < score && score <= 8) result[1] += 1;
      if (8 < score && score <= 10) result[0] += 1;
      return score;
    });
    return result.map((element, i) => {
      let star = [];
      for (let index = 0; index < 5 - i; index++) {
        star.push(<StarIcon className={classes.starIcon} />);
      }
      return (
        <li key={i} className={classes.ratingItem}>
          <div>{star}</div>
          <Slider
            value={element}
            min={0}
            max={scoreArray.length}
            className={classes.ratingSlider}
          />
        </li>
      );
    });
  };

  const handleSubmit = () => {
    scoreArray.push(value);
    dispatch(putRatingMongoAction(maPhim, { scoreArray: scoreArray }));
  };

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.progressBox}>
          <div className={classes.proText}>{danhGia}</div>
          <CircularProgress
            variant="determinate"
            value={danhGia * 10}
            size={80}
            className={classes.progress}
          />
        </div>
        <div className={classes.rating}>
          <h4 style={{ paddingLeft: 20 }}>
            Đánh giá của thành viên Movie Ticket:
          </h4>
          <ul className={classes.ratingBox}>{renderRating()}</ul>
        </div>
      </div>
      <div className={classes.right}>
        <h4>Đánh giá của bạn:</h4>
        <div className={classes.yourRate}>
          <Slider
            value={value}
            min={0}
            max={10}
            onChange={handleChange}
            className={classes.yourSlider}
          />
          <span style={{ fontSize: 18 }}>{value}</span>
        </div>
        <button onClick={handleSubmit} className={classes.btnSubmit}>
          Chấm điểm
        </button>
      </div>
    </div>
  );
}

export default DanhGiaFilm;
