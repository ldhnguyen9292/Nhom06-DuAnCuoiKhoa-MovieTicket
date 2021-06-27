import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    bg: {
        backgroundColor: 'white',
        padding: '10px 0 30px 0',
    },
    root: {
        flexGrow: 1,
        maxWidth: '1230px',
        '& .MuiGrid-container': {
            justifyContent: 'center',
        },
        justifyContent: 'center',
        margin: '50px auto',
    },
    paper: {
        padding: '0',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px',
    },
    h2: {
        fontSize: '32px',
        width: '210px',
        marginBottom: '5px',
    },
    fade: {
        width: '210px',
        height: '2px',
        background: 'linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))',
    },
    btnBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    btnView: {
        position: 'relative',
        width: '150px',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid #ddd',
        height: '55px',
        color: 'white',
        // background: 'linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))',
        '&:hover': {
            '& $btnViewBefore': {
                height: '0',
            },
            '& $btnViewAfter': {
                height: '0',
            },
            '& $btnViewContent': {
                color: '#b446ff',
            },
        }
    },
    btnViewBefore: {
        position: 'absolute',
        width: '150px',
        height: '50%',
        backgroundColor: 'red',
        background: 'linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))',
        top: '0px',
        transition: 'all 0.3s',
    },
    btnViewAfter: {
        position: 'absolute',
        width: '150px',
        height: '50%',
        backgroundColor: 'red',
        background: 'linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))',
        bottom: '0px',
        transition: 'all 0.3s',
    },
    btnViewContent: {
        position: 'absolute',
        width: '150px',
        height: '100%',
        zIndex: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '16px',
    },
}));