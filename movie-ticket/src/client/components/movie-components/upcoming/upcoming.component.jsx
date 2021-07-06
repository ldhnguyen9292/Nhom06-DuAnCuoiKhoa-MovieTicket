import React from 'react'
import { useStyles } from './upcoming-styles.component'
import Image from './../../../../assets/images/slider_img1.jpg'
import { Container, Button } from '@material-ui/core';
import Slider from 'react-slick'
import ArrowIcon from '../../../../assets/svg/MyArrowIcon'

function UpcomingMovie(props) {
    const classes = useStyles();
    const prev = () => {
        document.querySelector('.slick-prev').click();
    }
    const next = () => {
        document.querySelector('.slick-next').click();
    }
    const render = () => {
        const settings = {
            infinite: true,
        };
        return (
            <div className={classes.container}>
                <Slider {...settings} className={classes.slider}>
                    <div>
                        <img className={classes.img} src={Image} alt=''></img>
                    </div>
                    <div>
                        <img className={classes.img} src={Image} alt=''></img>
                    </div>
                    <div>
                        <img className={classes.img} src={Image} alt=''></img>
                    </div>
                    <div>
                        <img className={classes.img} src={Image} alt=''></img>
                    </div>
                    <div>
                        <img className={classes.img} src={Image} alt=''></img>
                    </div>
                    <div>
                        <img className={classes.img} src={Image} alt=''></img>
                    </div>
                    <div>
                        <img className={classes.img} src={Image} alt=''></img>
                    </div>
                    <div>
                        <img className={classes.img} src={Image} alt=''></img>
                    </div>
                </Slider>
                <div className={classes.arrowslick}>
                    <div className={classes.btngroup} variant="contained" color="primary">
                        <Button className={classes.btn1} onClick={() => prev()}>
                            <ArrowIcon/>
                        </Button>
                        <Button className={classes.btn2} onClick={() => next()}>
                            <ArrowIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={classes.root}>
            <div className={classes.titleBox}>
                <div className={classes.title}>
                    Comming soon
                </div>
            </div>
            {render()}
        </div>
    );
}

export default UpcomingMovie
