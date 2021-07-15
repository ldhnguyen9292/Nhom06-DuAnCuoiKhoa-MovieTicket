import React from "react";
import Slider from "react-slick";
import BustingCard from '../bustingcard/bustingcard.component';
// import MainCard from '../maincard/maincard.component';
import { useStyles } from './slickslider-styles.component';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { Container } from "@material-ui/core";

export default function SlickSlider() {
    const classes = useStyles();
    const prev = () => {
        document.querySelector('.slick-prev').click();
    }
    const next = () => {
        document.querySelector('.slick-next').click();
    }
    const render = () => {
        const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        // arrows: false,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 920,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 629,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ],
        };
        return (
            <div>
                <Slider {...settings} className={classes.slider}>
                    <div>
                        <BustingCard/>
                        <BustingCard/>
                    </div>
                    <div>
                        <BustingCard/>
                        <BustingCard/>
                    </div>
                    <div>
                        <BustingCard/>
                        <BustingCard/>
                    </div>
                    <div>
                        <BustingCard/>
                        <BustingCard/>
                    </div>
                    <div>
                        <BustingCard/>
                        <BustingCard/>
                    </div>
                    <div>
                        <BustingCard/>
                        <BustingCard/>
                    </div>
                    <div>
                        <BustingCard/>
                        <BustingCard/>
                    </div>
                    <div>
                        <BustingCard/>
                        <BustingCard/>
                    </div>
                </Slider>
                <Container className={classes.arrowslick}>
                    <div className={classes.btngroup} variant="contained" color="primary">
                        <Button className={classes.btn} onClick={() => prev()}>prev</Button>
                        <Button className={classes.btnView}>
                            <div className={classes.btnViewBefore}></div>
                            <div className={classes.btnViewContent}>view all</div>
                            <div className={classes.btnViewAfter}></div>
                        </Button>
                        <Button className={classes.btn} onClick={() => next()}>next</Button>
                    </div>
                </Container>
            </div>
        );
    }
    return (
        <div className={classes.root}>
            {render()}
        </div>
    );
}