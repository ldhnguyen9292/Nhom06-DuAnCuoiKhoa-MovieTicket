import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    title: {
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
}))