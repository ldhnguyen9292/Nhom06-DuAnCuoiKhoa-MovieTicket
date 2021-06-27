import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    container: {
        maxWidth: '1140px',
        display: 'flex',
        padding: '20px',
        [theme.breakpoints.down("md")]: {
            display: 'block',
        },
        [theme.breakpoints.down("sm")]: {
            padding: '10px 30px',
        }
    },
    link: {
        color: '#31d7a9',
        marginRight: '20px',
    },
    left: {
        width: '50%',
        [theme.breakpoints.down("md")]: {
            width: '100%',
        },
    },
    right: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '15px 0',
        [theme.breakpoints.down("md")]: {
            width: '100%',
            justifyContent: 'flex-start',
        },
        [theme.breakpoints.down("sm")]: {
            padding: '10px 0',
        }
    }
}));