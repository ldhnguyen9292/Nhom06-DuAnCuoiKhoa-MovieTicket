import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '1140px',
        height: 'auto',
        margin: '20px auto 30px',
        borderRadius: '10px',
        [theme.breakpoints.down("1300")]: {
            overflow: 'hidden',
        },
        [theme.breakpoints.down("900")]: {
            margin: '0px auto 30px',
        }
    },
    img: {
        height: 'auto',
        width: '98%',
        margin: 'auto',
    },
    btngroup: {
        height: '80px',
        width: '100%',
        position: 'relative',
    },
    btn1: {
        borderRadius: '50%',
        border: '1px solid #ddd',
        padding: '15px 5px',
        background: 'linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))',
        '& svg': {
            fill: 'white',
            width: '30px',
        },
        transform: 'rotate(180deg)',
        position: 'absolute',
        left: '-70px',
        [theme.breakpoints.down("1300")]: {
            left: '20px',
        }
    },
    btn2: {
        borderRadius: '50%',
        border: '1px solid #ddd',
        padding: '15px 5px',
        background: 'linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))',
        '& svg': {
            fill: 'white',
            width: '30px',
        },
        position: 'absolute',
        right: '-70px',
        [theme.breakpoints.down("1300")]: {
            right: '20px',
        }
    },
    container: {
        width: '100%',
        height: 'auto',
        position: 'relative',
    },
    arrowslick: {
        height: '80px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
    },
    titleBox: {
        width: '100%',
        margin: '30px auto',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down("900")]: {
            margin: '0px auto 10px',
        }
    },
    title: {
        width: '250px',
        textAlign: 'center',
        padding: '10px',
        margin: '0px 0px 10px',
        position: 'relative',
        textTransform: 'uppercase',
        fontSize: '26px',
        fontWeight: 'bold',
        '&::after': {
            content: '""',
            display: 'block',
            width: '80%',
            height: '1px',
            background: 'gray',
            bottom: '-10px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            [theme.breakpoints.down("900")]: {
                bottom: '0px',
            }
        },
        '&::before': {
            content: '""',
            display: 'block',
            width: '20%',
            height: '5px',
            background: '#b446ff',
            bottom: '-11.5px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            [theme.breakpoints.down("900")]: {
                bottom: '-1.5px',
            }
        },
        
    },
}));