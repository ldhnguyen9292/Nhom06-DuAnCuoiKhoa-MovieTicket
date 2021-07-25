import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    title: {
        fontSize: '14px',
        textTransform: 'uppercase',
    },
    title2: {
        marginTop: '30px',
        fontSize: '14px',
        textTransform: 'uppercase',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    nameItem: {
        width: '150px',
        color: '#555',
    },
    field: {
        '& .MuiInputBase-root': {
            height: '40px',
            width: '500px',
        }
    },
    radio: {
        display: 'flex',
    },
    date: {
        width: '150px',
        marginRight: '25px',
    },
    box: {
        height: '150px',
        width: '100%',
    },
    itemBox: {
        height: '50px',
        width: '100%',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    iright: {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        '& img': {
            height: '40px',
            width: '40px',
            marginRight: '10px',
        },
        '& p': {
            fontWeight: '600',
            letterSpacing: '1px',
        },
    },
    btn: {
        height: '40px',
        minWidth: '100px',
        position: 'absolute',
        right: 0,
    }
}))