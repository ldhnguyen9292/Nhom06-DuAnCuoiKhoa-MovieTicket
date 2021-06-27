import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    // arrowslick: {
    //     display: 'flex',
    //     justifyContent: 'center',
    // },
    btngroup: {
        height: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        margin: '10px',
        borderRadius: '10px',
        border: '1px solid #ddd',
        padding: '15px 0',
        color: '#b446ff',
        '&:hover': {
            background: 'linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))',
            color: 'white',
        },
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