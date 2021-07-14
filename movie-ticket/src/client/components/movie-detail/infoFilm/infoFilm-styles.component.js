import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '1140px',
        margin: '30px auto 30px',
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: '10px',
        color: '#ddd',
        height: '450px',
    },
    appBar: {
        backgroundColor: 'transparent',
        borderRadius: '10px',
        width: '350px',
        boxShadow: 'none',
        margin: '0 auto',
    },
    TabsAppBar: {
        margin: '0 auto',
        '& .MuiTab-textColorPrimary': {
            color: 'white',
            fontWeight: 'bold',
        },
        '& .MuiTab-textColorPrimary.Mui-selected': {
            color: '#b446ff',
        },
    },
    
}));