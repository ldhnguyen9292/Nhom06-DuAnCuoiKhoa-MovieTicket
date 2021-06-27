import React from 'react'
import { useStyles } from './videocard-styles.component'
import { Box } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Button } from '@material-ui/core';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import Image from './../../../../../assets/images/ws1.jpg'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

function Videocard() {
    const classes = useStyles();
    return (
        <Box boxShadow={5} className={classes.root}>
            <img src={Image} alt='' className={classes.image}></img>
            <div className={classes.overlay}></div>
            <div className={classes.movieBox}>
                <div className={classes.buttonBox}>
                    <div className={classes.box}>
                        <div className={classes.fade}></div>
                        <Button className={classes.button}>
                            <SlowMotionVideoIcon fontSize='large'/>
                        </Button>
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <div className={classes.headContent}>
                        <p className={classes.p}>Drama Action</p>
                        <p className={classes.p}>Rating: </p>
                        <div className={classes.icongroup}>
                            <StarIcon fontSize='small'></StarIcon>
                            <StarIcon fontSize='small'></StarIcon>
                            <StarIcon fontSize='small'></StarIcon>
                            <StarBorderIcon fontSize='small'></StarBorderIcon>
                            <StarBorderIcon fontSize='small'></StarBorderIcon>
                        </div>
                    </div>
                    <p className={classes.h2}>TERRORISE OF THE YEAR</p>
                    <p className={classes.p}>Release on cinema: 27 june 2020</p>
                    <div>
                        <Button className={classes.btn}><ThumbUpIcon className={classes.icon}></ThumbUpIcon>  120 Like</Button>
                        <Button className={classes.btn}><QuestionAnswerIcon className={classes.icon}></QuestionAnswerIcon> 52 Comment</Button>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Videocard
