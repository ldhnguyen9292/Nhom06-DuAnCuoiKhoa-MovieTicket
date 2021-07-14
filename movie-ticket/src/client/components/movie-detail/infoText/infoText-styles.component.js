import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        padding: '0 50px',
    },
    right: {
        width: '50%',
    },
    left: {
        width: '50%',
    },
    info: {
        display: 'flex',
        '& p': {
            minWidth: '150px',
        }
    },
    bold: {
        color: 'white',
        fontWeight: 'bold',
    },
}));