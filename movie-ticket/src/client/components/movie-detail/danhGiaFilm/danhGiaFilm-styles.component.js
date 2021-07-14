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
        '& h3': {
            margin: '0px',
            fontSize: '24px',
        },
        '& p': {
            marginTop: '0px',
            fontSize: '14px',
        }
    },
    img: {
        height: '320px',
        width: '212px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        '& img': {
            border: '1px solid #ddd',
            borderRadius: '5px',
            width: '100%',
            height: '100%',
        },
        '&::before': {
            content: '""',
            display: 'block',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)',
            top: '0px',
            left: '0px',
            position: 'absolute',
        },
        position: 'relative',
    },
    btnBox: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        '& svg': {
            fill: 'white',
        },
        border: '2px solid #ddd',
        borderRadius: '50%',
        padding: '15px',
    },
    progressBox: {
        width: '80px',
        height: '80px',
        position: 'relative',
    },
    progress: {
        possition: 'absolute',
        top: 0,
        left: 0,
    },
    proText: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '80px',
        height: '80px',
        textAlign: 'center',
        lineHeight: '80px',
        fontSize: '30px',
        fontWeight: 'bold',
    },
    imgRight: {
        position: 'absolute',
        width: '200px',
        right: '-220px',
        top: '0px',
    },
    starGr: {
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        color: '#b446ff',
        '& span': {
            color: 'white',
            fontWeight: 'bold',
        },
    },
}))