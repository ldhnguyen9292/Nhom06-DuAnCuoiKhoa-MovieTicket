import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    
    root: {
        width: '75px',
        border: '1px solid #d0cfcf',
        color: 'rgba(0,0,0,0.54)',
        fontSize: '12px',
        letterSpacing: '1px',
        '&:hover': {
            backgroundColor: '#38cfea',
            border: '1px solid #38cfea',
            color: 'white',
        },
        margin: '0 7.5px',
    },
    popover: {
        pointerEvents: 'none',
        
    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: '#333545',
        padding: '15px 30px',
    },
    content: {
        textAlign: 'center',
        color: 'white',
        fontSize: '12px',
        '& p': {
            fontSize: '10px',
            padding: 0,
            margin: 0,
        },
        '& span': {
            color: '#38cfea',
            fontSize: '14px',
        },
        '& h3': {
            padding: 0,
            margin: 0,
        }
    },
}));

function Hour() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        <div>
            <Button 
                className={classes.root}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
            <span>11:30</span> <span>AM</span>
            </Button>

            <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
            paper: classes.paper,
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
            >
                <Typography className={classes.content}>
                    <h3>60.000 VND</h3>
                    <p>Executive</p>
                    <p><span>Filling Fast</span></p>
                </Typography>
            </Popover>
        </div>
    )
}

export default Hour
