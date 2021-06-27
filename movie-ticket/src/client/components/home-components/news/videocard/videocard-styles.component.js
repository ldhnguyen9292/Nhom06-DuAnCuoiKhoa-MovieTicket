import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: '30px',
        maxWidth: '560px',
        borderRadius: '10px',
        overflow: 'hidden',
        height: 'auto',
        position: 'relative',
    },
    overlay: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: '0px',
        left: '0px',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(212,212,212,0) 17%,rgba(3,3,3,1) 99%,rgba(0,0,0,1) 100%)',
    },
    movieBox: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        height: '100%',
        width: '100%',
    },
    image: {
        height: '100%',
    },
    buttonBox: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        height: '110px',
        width: '110px',
        borderRadius: '50%',
        border: '10px solid rgba(255, 255, 255, 0.29)',
        position: 'relative',
    },
    button: {
        height: '90px',
        width: '90px',
        borderRadius: '50%',
        color: 'white',
        background: 'linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))',
    },
    fade: {
        height: '140px',
        width: '140px',
        borderRadius: '50%',
        border: '30px solid rgba(255, 255, 255, 0.29)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        // Animation
    },
    contentBox: {
        width: '100%',
        height: '180px',
        position: 'absolute',
        bottom: '0px',
        left: '0px',
        color: 'white',
        padding: '20px',
    },
    headContent: {
        display: 'flex',
    },
    p: {
        margin: '0px 0px',
        padding: '0 10px 0 0'
    },
    icongroup: {
        fontSize: '14px',
        color: '#b446ff',
    },
    h2: {
        fontSize: '32px',
        margin: '10px 0',
        padding: '0',
        [theme.breakpoints.down('490')]: {
            fontSize: '24px',
        }
    },
    btn: {
        width: '120px',
        textTransform: 'none',
        color: 'white',
        marginTop: '10px',
    },
    icon: {
        color: theme.palette.primary.main,
    }
}));