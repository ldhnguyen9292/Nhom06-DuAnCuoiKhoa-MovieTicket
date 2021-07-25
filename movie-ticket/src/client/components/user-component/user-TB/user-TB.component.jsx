import React from 'react'
import { useStyles } from './user-TB-styles.component'

function UserTB() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>Thông báo của tôi</div>
            <hr />
        </div>
    )
}

export default UserTB
