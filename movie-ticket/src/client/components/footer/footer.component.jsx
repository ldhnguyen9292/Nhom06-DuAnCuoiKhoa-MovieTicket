import React from 'react'
import { useStyles } from "./footer-styles.component"
import Subcribe from './subscribe/subscribe.component'
import FooterContact from './contact/contact.component'
import CopyRight from './copyright/copyright.component'

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}> 
            <Subcribe />
            <div className={classes.container}>
                <FooterContact />
                <CopyRight />
            </div>
            <div className={classes.shape}></div>
        </div>
    )
}

export default Footer