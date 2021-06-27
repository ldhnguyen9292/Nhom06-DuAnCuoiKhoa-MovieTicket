import React from 'react'
import { useStyles } from "./contact-styles.component"
import { Container } from "@material-ui/core"
import LogoComponent from './logo/logo.component'
import ListContact from './list/list.component'

function FooterContact() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <LogoComponent />
                <ListContact />
            </Container>
        </div>
    )
}

export default FooterContact
