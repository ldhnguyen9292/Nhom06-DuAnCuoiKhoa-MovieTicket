import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    container: {
        maxWidth: '1140px',
        width: '100%',
        display: 'flex',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        paddingBottom: '30px',
        paddingRight: '0px',
        [theme.breakpoints.down("sm")]: {
            display: 'block',
        }
    },
}));