import React from 'react'
import { useStyles } from './news-styles.component'
import Videocard from './videocard/videocard.component'
import Newscard from './newscard/newscard.component'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';

function NewsComponent() {
    const classes = useStyles();
    return (
        <div className={classes.bg}>
        <Container className={classes.root}>
            <div className={classes.title}>
                <div>
                    <h2 className={classes.h2}>LATEST NEWS</h2>
                    <div className={classes.fade}></div>
                </div>
            </div>
            <Grid container spacing={1}>
                <Grid container item lg={12} xl={6} spacing={3}>
                    <Videocard />
                </Grid>
                <Grid container item lg={12} xl={6} spacing={3}>
                    <Newscard />
                    <Newscard />
                </Grid> 
            </Grid>
            <div className={classes.btnBox}>
                <Button className={classes.btnView}>
                    <div className={classes.btnViewBefore}></div>
                    <div className={classes.btnViewContent}>read more</div>
                    <div className={classes.btnViewAfter}></div>
                </Button>
            </div>
        </Container>
        </div>
    )
}

export default NewsComponent
