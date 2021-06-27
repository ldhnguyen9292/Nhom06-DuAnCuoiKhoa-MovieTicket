import React from 'react'
import { useStyles } from "./subscribe-style.component"
import { Container } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { Typography } from '@material-ui/core'

function Subcribe() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.box}>
                    <div className={classes.content}>
                        <h3 className={classes.h3} color="#31d7a9">SUBSCRIBE TO MOVIE PRO</h3>
                        <h2 className={classes.h2}>TO GET EXCLUSIVE BENIFITS</h2>
                        <div className={classes.form_container}>
                            <form className={classes.form}>
                                <input className={classes.input} placeholder="Your email address" type="text"></input>
                                <Button className={classes.button} type="submit" variant="contained" color="primary">subscribe</Button>
                            </form>
                        </div>
                        <p className={classes.p}>We respect your privacy, so we never share your info</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Subcribe
