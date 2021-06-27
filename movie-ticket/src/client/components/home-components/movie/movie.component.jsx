import React from 'react'
import { useStyles } from './movie-styles.component'
import { Container } from '@material-ui/core';
import NavTab from './navtab/navtab.component';

function MovieComponent() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <div className={classes.title}>
                <div>
                    <h2 className={classes.h2}>WEB SERIES</h2>
                    <div className={classes.fade}></div>
                </div>
            </div>
            <NavTab />
        </Container>
    )
}

export default MovieComponent
