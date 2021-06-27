import React from 'react'
import { useStyles } from './newscard-styles.component'
import { Box, Link, Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Image from './../../../../../assets/images/nl3.jpg'

function Newscard() {
    const classes = useStyles();
    return (
        <Box boxShadow={3} className={classes.root}>
            <div className={classes.left}>
                <img src={Image} alt='' className={classes.img}></img>
            </div>
            <div className={classes.right}>
                <div className={classes.content}>
                    <Link underline='none' href='#' className={classes.link}>
                        THE NEW OF THEATER
                    </Link>
                    <p className={classes.day}>28 feb 2018</p>
                    <p className={classes.p}>Lorem ipsum dolor sit amet, consectuir adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <div>
                        <Button className={classes.btn}><ThumbUpIcon className={classes.icon}></ThumbUpIcon>  120 Like</Button>
                        <Button className={classes.btn}><QuestionAnswerIcon className={classes.icon}></QuestionAnswerIcon> 52 Comment</Button>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Newscard
