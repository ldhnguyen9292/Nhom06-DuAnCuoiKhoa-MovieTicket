import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '240px',
        width: '555px',
        display: 'flex',
        margin: '30px',
        borderRadius: '10px',
        overflow: 'hidden',
        '&:hover': {
            '& $img': {
                transform: 'scale(1.2)',
            },
        },
        [theme.breakpoints.down('600')]: {
            height: '200px',
        },
        [theme.breakpoints.down('460')]: {
            height: '220px',
        }
    },
    left: {
        height: '240px',
        width: '240px',
        overflow: 'hidden',
        [theme.breakpoints.down('600')]: {
            width: '0px',
        }
    },
    img: {
        height: '240px',
        width: '240px',
        transition: '0.5s',
    },
    right: {
        height: '240px',
        width: '315px',
        [theme.breakpoints.down('600')]: {
            width: '100%',
            height: '200px',
        }
    },
    content: {
        height: '240px',
        width: '315px',
        padding: '20px',
        [theme.breakpoints.down('600')]: {
            width: '100%',
            height: '200px',
        }
    },
    link: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#333',
        transition: '0.25s',
        '&:hover': {
            color: theme.palette.primary.main,
        }
    },
    day: {
        color: theme.palette.primary.main,
    },
    p: {
        color: '#707070',
    },
    btn: {
        width: '50%',
        textTransform: 'none',
        color: '#707070',
    },
    icon: {
        color: theme.palette.primary.main,
    }
}));