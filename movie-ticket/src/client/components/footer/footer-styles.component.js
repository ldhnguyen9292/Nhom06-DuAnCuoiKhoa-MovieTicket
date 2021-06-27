import { makeStyles } from "@material-ui/core";
import { palette } from "@material-ui/system";
import Image from "./../../../assets/images/footer-shape.png"

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '30px',
        width: '100%',
        height: '650px',
        backgroundImage: 'linear-gradient(to right, #4c46e6, #6d68fe, #b446ff, rgb(151, 0, 255))',
        overflow: 'hidden',
        color: 'white',
        position: 'relative',
        [theme.breakpoints.down("sm")]: {
            height: '600px',
        }
    },
    shape: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        bottom: '-70px',
        left: '0px',
        background: `url(${Image}) no-repeat center center`,
        zIndex: '0',
    },
    container: {
        width: '100%',
        position: 'absolute',
        zIndex: '100',
        bottom: '0px',
    },
}));