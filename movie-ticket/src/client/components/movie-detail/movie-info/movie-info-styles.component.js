import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '450px',
    },
    container: {
        maxWidth: '1200px',
    },
    Box: {
        height: '408px',
        width: '1140px',
        [theme.breakpoints.down('1200')]: {
            width: '928px',
            height: '408px',
        },
        [theme.breakpoints.down('992')]: {
            width: '708px',
            height: '408px',
        },
        [theme.breakpoints.down('768')]: {
            height: '345px',
            width: '100%',
        },
        border: '5px solid white',
        margin: '30px auto 20px',
        position: 'relative',
    },
    backGround: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        '& img': {
            height: '100%',
            width: '100%',
        },
    },
    fade: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    content: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    containerContent: {
        height: '100%',
        width: '100%',
        padding: '30px',
        position: 'relative',
    },
    top: {
        width: '100%',
        height: '270px',
        display: 'flex',
    },
    middle: {
        width: '100%',
        height: '50px',
        padding: '15px 0 0 0',
        [theme.breakpoints.down('768')]: {
            display: 'none',
        },
    },
    bottom: {
        width: '100%',
        height: '35px',
        color: '#eee',
        textAlign: 'right',
        fontSize: '13px',
        letterSpacing: '1px',
        [theme.breakpoints.down('768')]: {
            display: 'none',
        },
    },
    left: {
        [theme.breakpoints.down('992')]: {
            width: '30%',
        },
        [theme.breakpoints.down('768')]: {
            width: '0px',
            display: 'none',
        },
        width: '20%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        '& h3': {
            padding: 0,
            margin: 0,
            fontSize: '26px',
            color: '#F3C600',
            fontWeight: '100',
        },
        '& p': {
            padding: 0,
            margin: 0,
            color: '#ffffffef',
            letterSpacing: '1.75px',
        },
    },
    item: {
        height: '55px',
    },
    FIcon: {
        fontSize: '35px',
        height: '55px',
        width: '35px',
        marginRight: '10px',
        color: '#d80a21',
    },
    mid: {
        height: '225px',
        textAlign: 'center',
        color: 'white',
        '& h1': {
            fontSize: '35px',
            fontWeight: '700',
            letterSpacing: '2px',
            paddingTop: '10px',
            margin: '0',
        },
        '& p': {
            fontSize: '12px',
        },
        '& div > span': {
            fontSize: '12px',
            backgroundColor: '#eee',
            color: 'rgba(0,0,0,0.87)',
            padding: '2px 5px',
            borderRadius: '2px',
            margin: '5px',
        },
    },
    box: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '60%',
        height: '100%',
        [theme.breakpoints.down('992')]: {
            width: '40%',
        },
        [theme.breakpoints.down('768')]: {
            width: '100%',
        },
    },
    right: {
        [theme.breakpoints.down('768')]: {
            width: '0px',
            display: 'none',
        },
    },
    btnBox: {
        height: '80px',
        width: '80px',
        margin: '0 auto',
        position: 'relative',
    },
    btnFade: {
        height: '80px',
        width: '80px',
        position: 'absolute',
        padding: '38px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        borderRadius: '50%',
        animation: `$playAnimation 1000ms infinite ease-in`,
    },
    '@keyframes playAnimation': {
        '0%': {
            border: '0px solid white',
            opacity: '0.5',
        },
        '100%': {
            border: '50px solid white',
            opacity: '0',
        },
    },
    btn: {
        position: 'absolute',
        border: '3px solid white',
        borderRadius: '50%',
        height: '80px',
        width: '80px',
        '& svg': {
            fill: 'white',
            width: '40px',
            margin: 'auto',
        },
        margin: '0',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    },
    icon: {
        width: '35px',
        minWidth: '35px',
        height: '35px',
        '& svg': {
            width: '20px',
            fill: '#eee',
        },
        border: '1px solid #eee',
        borderRadius: '50%',
        padding: '0px',
        marginRight: '10px',
        
    },
}));