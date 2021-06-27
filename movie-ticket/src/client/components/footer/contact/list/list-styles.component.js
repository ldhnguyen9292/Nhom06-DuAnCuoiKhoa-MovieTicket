import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            justifyContent: 'flex-start',
        },
        paddingRight: '30px',
    },
    iconBox: {
        color: 'white',
        margin: '0 10px',
        padding: '7px',
        height: '40px',
        border: '1px solid #31d7a9',
        '&:hover': {
            backgroundColor: '#31d7a9',
        },
    },
}));