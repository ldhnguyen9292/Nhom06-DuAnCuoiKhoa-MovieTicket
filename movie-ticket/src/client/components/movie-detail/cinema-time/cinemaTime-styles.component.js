import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '1200px',
        margin: '30px auto',
    },
    container: {
        width: '80%',
        height: '1100px',
        backgroundColor: 'white',
        padding: '30px',
        overflowY: 'scroll',
        [theme.breakpoints.down('1200')]: {
            width: '100%',
        },
    },
    appbar: {
        width: '100%',
        backgroundColor: '#333545',
        height: '70px',
        padding: '10px 0',
    },
    appbarContainer: {
        maxWidth: '1200px',
    },
    fixWidth: {
        width: '80%',
        [theme.breakpoints.down('1200')]: {
            width: '100%',
        },
    },
    tabItem: {
        color: 'white',
        minWidth: '50px',
    }
}));