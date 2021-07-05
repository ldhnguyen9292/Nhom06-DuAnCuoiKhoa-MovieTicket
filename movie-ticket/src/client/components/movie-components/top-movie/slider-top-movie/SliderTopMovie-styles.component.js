import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    img: {
        width: '98%',
        marginLeft: '6px',
        [theme.breakpoints.down('1600')]: {
            marginLeft: '5px',
        },
        [theme.breakpoints.down('1500')]: {
            marginLeft: '6px',
        },
        [theme.breakpoints.down('1200')]: {
            marginLeft: '6px',
            width: '97%',
        },
        [theme.breakpoints.down('850')]: {
            marginLeft: '4px',
            width: '97%',
        },
    },
    content: {
        display: 'flex',
        [theme.breakpoints.down('1200')]: {
            display: 'block',
            padding: '10px',
        },
        height: '60px',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
        '& h3': {
            fontSize: '24px',
            marginRight: '20px',
            padding: '0',
            margin: '0',
            '&:hover': {
                color: '#b446ff',
                cursor: 'pointer',
            },
        },
        '& p': {
            color: '#b446ff',
            fontSize: '16px',
            margin: '0',
            paddingTop: '5px',
        }
    },
    item: {
        overflow: 'hidden',
    }
}));