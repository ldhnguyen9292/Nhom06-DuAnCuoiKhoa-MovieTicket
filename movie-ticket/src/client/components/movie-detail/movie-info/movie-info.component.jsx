import React from "react";
import Image from "./../../../../assets/images/bg-img.jpg";
import { useStyles } from "./movie-info-styles.component";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import MyArrowIcon from "./../../../../assets/svg/MyArrowIcon";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button } from "@material-ui/core";
import FacebookIcon from "./../../../../assets/svg/facebookIcon";
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

function MovieInfoBooking(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Box boxShadow={10} className={classes.Box}>
          <div className={classes.backGround}>
            <img src={Image}></img>
          </div>
          <div className={classes.fade}></div>
          <div className={classes.content}>
            <div className={classes.containerContent}>
              <div className={classes.top}>
                <div className={classes.left}>
                  <div className={classes.item}>
                    <FavoriteIcon className={classes.FIcon} />
                  </div>
                  <div className={classes.item}>
                    <h3>85%</h3>
                    <p>52,291 votes</p>
                  </div>
                </div>
                <div className={classes.box}>
                  <div className={classes.mid}>
                    <div className={classes.btnBox}>
                      <div className={classes.btnFade}></div>
                      <Button className={classes.btn}>
                        <MyArrowIcon />
                      </Button>
                    </div>
                    <h1>Aquaman</h1>
                    <p>ENGLISH, HINDI, TAMIL</p>
                    <p>ACTION | ADVENTURE | FANTASY</p>
                    <div>
                      <span>2D</span>
                      <span>3D</span>
                      <span>D 4DX</span>
                      <span>IMAX 3D</span>
                    </div>
                  </div>
                </div>
                <div className={classes.right}></div>
              </div>
              <div className={classes.middle}>
                  <Button className={classes.icon}><FacebookIcon/></Button>
                  <Button className={classes.icon}><TwitterIcon/></Button>
                  <Button className={classes.icon}><InstagramIcon/></Button>
                  <Button className={classes.icon}><YouTubeIcon/></Button>
              </div>
              <div className={classes.bottom}>
                  <p>14 Dec, 20182 hrs 23 mins</p>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default MovieInfoBooking;
