import React from 'react'
import { useStyles } from "./list-styles.component"
import { IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import PinterestIcon from '@material-ui/icons/Pinterest'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'

function ListContact() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton className={classes.iconBox} aria-label="facebook">
                <FacebookIcon />
            </IconButton>
            <IconButton className={classes.iconBox} aria-label="twitter">
                <TwitterIcon />
            </IconButton>
            <IconButton className={classes.iconBox} aria-label="pinterest">
                <PinterestIcon />
            </IconButton>
            <IconButton className={classes.iconBox} aria-label="instagram">
                <InstagramIcon />
            </IconButton>
            <IconButton className={classes.iconBox} aria-label="youtube">
                <YouTubeIcon />
            </IconButton>
        </div>
    )
}

export default ListContact
