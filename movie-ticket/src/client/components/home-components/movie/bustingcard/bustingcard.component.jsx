import React from 'react'
import { useStyles } from './bustingcard-styles.component'
import { Box } from '@material-ui/core';
import Image from './../../../../../assets/images/ws7.jpg'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

function BustingCard() {
    const classes = useStyles();
    return (
        <Box boxShadow={3} className={classes.root}>
            <div classes={classes.imgbox}>
                <img src={Image} alt='' className={classes.img}></img>
                <div className={classes.overlay}></div>
                <div className={classes.view}>
                    <div className={classes.btnbox}>
                        <Button className={classes.btn1}>View Trailer</Button>
                        <Button className={classes.btn2}>View Details</Button>
                    </div>
                </div>
            </div>
            <div className={classes.contentbox}>
                <div className={classes.left}>
                    <Link href="#" className={classes.link}>Busting Card</Link>
                    <p className={classes.p}>Drama,Acation</p>
                    <div className={classes.icongroup}>
                        <StarIcon fontSize='small'></StarIcon>
                        <StarIcon fontSize='small'></StarIcon>
                        <StarIcon fontSize='small'></StarIcon>
                        <StarBorderIcon fontSize='small'></StarBorderIcon>
                        <StarBorderIcon fontSize='small'></StarBorderIcon>
                    </div>
                </div>
                <div className={classes.right}>
                    <Button className={classes.button}>
                        <LocalGroceryStoreIcon className={classes.icon}/>
                    </Button>
                </div>
            </div>
        </Box>
    )
}

export default BustingCard
