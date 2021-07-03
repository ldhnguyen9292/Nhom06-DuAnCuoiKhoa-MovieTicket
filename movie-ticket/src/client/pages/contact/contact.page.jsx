import React from "react";
import { Grid, Paper, CardMedia, Typography, SvgIcon } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import BCTopHeader from "./../../components/movie-components/booking-confirmation-components/bc-top-header/bc-top-header";
import { useStyles } from "./contact-styles.page";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import { ReactComponent as FacebookIcon } from "./../../../assets/svg/facebook-f-brands.svg";

const arrayContact = [
  {
    iconSrc: PhoneIcon,
    title: "Số điện thoại",
    detail1: "0901.8888888",
    detail2: "0900.8888888",
  },
  {
    iconSrc: LocationOnIcon,
    title: "Địa chỉ",
    detail1: "81 xô viết nghệ tĩnh, bình thạnh",
    detail2: "90 nguyễn thị minh khai, quận 1",
  },
  {
    iconSrc: EmailIcon,
    title: "Email",
    detail1: "movie.ticket@gmail.com",
    detail2: "movie.support@gmail.com",
  },
];

function Contact() {
  const classes = useStyles();

  const renderTop = () => {
    return (
      <div>
        <Grid container spacing={2} className={classes.topBox}>
          <Grid item xs={12} lg={8}>
            <h1 className={classes.title}>Liên hệ chúng tôi</h1>
            <form>
              <Grid container justify="center">
                <Grid item xs={12} lg={6} className={classes.inputText}>
                  <input type="text" placeholder="Tên" />
                </Grid>
                <Grid item xs={12} lg={6} className={classes.inputText}>
                  <input type="email" placeholder="Email" />
                </Grid>
                <Grid item xs={12} className={classes.inputText}>
                  <textarea placeholder="Nội dung" />
                </Grid>
                <button type="submit" className={classes.contactBtn}>
                  Gửi tin nhắn
                </button>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Paper className={classes.topRightBox}>
              <ul>
                <li>
                  <SvgIcon>
                    <FacebookIcon />
                  </SvgIcon>
                  <Typography className={classes.text}>
                    facebook.com/movie-ticket
                  </Typography>
                </li>
                <li>
                  <TwitterIcon />
                  <Typography className={classes.text}>
                    twitter.com/movie-ticket
                  </Typography>
                </li>
                <li>
                  <InstagramIcon />
                  <Typography className={classes.text}>
                    instagram.com/movie-ticket
                  </Typography>
                </li>
                <li>
                  <YouTubeIcon />
                  <Typography className={classes.text}>
                    youtube.com/movie-ticket
                  </Typography>
                </li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };

  const renderMid = () => {
    return (
      <div>
        <CardMedia
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125395.36687315685!2d106.68880688696957!3d10.841493741446037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a0d0de077b%3A0xf6c9f61a0b32f601!2zVMOyYSBuaMOgIFdJTiBIT01F!5e0!3m2!1svi!2s!4v1625301554327!5m2!1svi!2s"
          height={400}
        />
      </div>
    );
  };

  const renderBot = () => {
    return (
      <div>
        <Grid container justify="space-around" alignItems="center">
          {arrayContact.map((value, index) => {
            const last = arrayContact.length - 1;
            return (
              <Grid key={index} item xs={12} md={4} className={classes.botItem}>
                <value.iconSrc />
                <h4>{value.title}</h4>
                <p className={index === last ? classes.emailText : ""}>
                  {value.detail1}
                </p>
                <p className={index === last ? classes.emailText : ""}>
                  {value.detail2}
                </p>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  };

  return (
    <div>
      <BCTopHeader title="Liên hệ" />
      {renderTop()}
      {renderMid()}
      {renderBot()}
    </div>
  );
}

export default Contact;
