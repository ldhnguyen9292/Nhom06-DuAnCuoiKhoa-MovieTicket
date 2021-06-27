import React from 'react'
import { useStyles } from "./copyright-style.component"
import { Link, Container } from '@material-ui/core';

function CopyRight() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.left}>
                    <p>Copyright © 2020.All Rights Reserved By <Link href="#" className={classes.link}>Movie Pro</Link></p>
                </div>
                <div className={classes.right}>
                    <Link href="#" className={classes.link}>About</Link>
                    <Link href="#" className={classes.link}>Terms Of Use</Link>
                    <Link href="#" className={classes.link}>Privacy Policy</Link>
                    <Link href="#" className={classes.link}>FAQ</Link>
                    <Link href="#" className={classes.link}>Feedback</Link>
                </div>
            </Container>
        </div>
    )
}

export default CopyRight
