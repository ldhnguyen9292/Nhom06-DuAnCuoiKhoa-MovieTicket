import React from 'react'
import { useStyles } from './user-history-styles.component'

function UserHistory() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>Lịch sử mua hàng</div>
            <hr />
        </div>
    )
}

export default UserHistory
