import React from 'react'
import { useStyles } from './cinema-styles.component'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from '@material-ui/core';
import ticket from './../../../../../assets/images/ticket.png'
import fastFood from './../../../../../assets/images/fast-food.png'
import bill from './../../../../../assets/images/bill.png'
import Hour from './../Hour/Hour.component'

function CinemaBox() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.left}>
                <Button className={classes.btn}>
                    <FavoriteIcon />
                </Button>
                <div>
                    <h3>Ariesplex SL Cinemas</h3>
                    <div>
                        <img src={ticket}></img>
                        <img src={fastFood}></img>
                        <img src={bill}></img>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <Hour />
                <Hour />
                <Hour />
                <Hour />
                <Hour />
            </div>
        </div>
    )
}

export default CinemaBox
