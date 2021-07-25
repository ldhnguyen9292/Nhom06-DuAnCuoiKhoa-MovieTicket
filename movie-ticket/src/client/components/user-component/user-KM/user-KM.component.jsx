import React from 'react'
import { useStyles } from './user-KM-styles.component'

function UserKM() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>Khuyến mãi</div>
            <hr />
        </div>
    )
}

export default UserKM
