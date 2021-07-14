import React, { useState, useEffect } from "react";
import { useStyles } from "./movie-info-styles.component";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import InfoFilm from "../infoFilm/infoFilm.component";
import { CircularProgress } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ArrowIcon from "./../../../../assets/svg/MyArrowIcon";
import Img from "./../../../../assets/images/aquaman.jpg";

function MovieInfoBooking(props) {
  const classes = useStyles();
  const [info, setInfo] = useState(false);
  const handleShowInfo = () => {
    setInfo(!info);
  };

  useEffect(() => {
    const root = document.getElementById("information");
    root.scrollTop = root.scrollHeight;
  }, [info]);

  return (
    <div className={classes.root} id="information">
      <Container className={classes.container}>
        <Box boxShadow={10} className={classes.Box} id="information">
          <div className={classes.fade}></div>
          <div className={classes.content}>
            <div className={classes.contentBox}>
              <div className={classes.left}>
                <div className={classes.imgBox}>
                  <img src={Img} />
                  <div className={classes.btnBox}>
                    <Button className={classes.btn}>
                      <ArrowIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <div className={classes.right}>
                <div className={classes.rightBox}>
                  <h3>Aquaman - Đế vương Atlantis</h3>
                  <p>129 phút - 0 IMDb - 2D/Digital</p>
                  <p>30.04.2021</p>
                  <div className={classes.progressBox}>
                    <div className={classes.proText}>7.5</div>
                    <CircularProgress
                      variant="determinate"
                      value={75}
                      size={80}
                      className={classes.progress}
                    />
                  </div>
                  <div>
                    <div className={classes.starGr}>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <span>3/4</span>
                    </div>
                    <p style={{fontSize: "13px"}}>
                      124 người đánh giá
                    </p>
                    <Button onClick={handleShowInfo} className={classes.btnInfo}>chi tiết</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
        <div className={classes.infoFile}>
          {info == true ? <InfoFilm /> : ""}
        </div>
      </Container>
    </div>
  );
}

export default MovieInfoBooking;
