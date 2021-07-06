import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0px 0 10px 0',
        paddingBottom: '10px',
        height: '365px',
        [theme.breakpoints.down('1700')]: {
            height: '345px',
        },
        [theme.breakpoints.down('1600')]: {
            height: '325px',
        },
        [theme.breakpoints.down('1500')]: {
            height: '365px',
        },
        [theme.breakpoints.down('1400')]: {
            height: '345px',
        },
        [theme.breakpoints.down('1300')]: {
            height: '325px',
        },
        [theme.breakpoints.down('1200')]: {
            height: '300px',
        },
        [theme.breakpoints.down('1100')]: {
            height: '270px',
        },
        [theme.breakpoints.down('1000')]: {
            height: '250px',
        },
        [theme.breakpoints.down('900')]: {
            height: '300px',
        },
        [theme.breakpoints.down('750')]: {
            height: '285px',
        },
        [theme.breakpoints.down('700')]: {
            height: 'auto',
            borderBottom: 'none',
        },
        width: '100%',
        borderBottom: '2px solid #b446ff',
        display: 'flex',
        overflow: 'hidden',
        justifyContent: 'flex-start',
    },
    left: {
        width: '450px',
        position: 'relative',
        height: '355px',
        [theme.breakpoints.down('1700')]: {
            height: '330px',
            width: '430px',
        },
        [theme.breakpoints.down('1600')]: {
            height: '310px',
            width: '400px',
        },
        [theme.breakpoints.down('1500')]: {
            height: '355px',
            width: '450px',
        },
        [theme.breakpoints.down('1400')]: {
            height: '330px',
            width: '430px',
        },
        [theme.breakpoints.down('1300')]: {
            height: '310px',
            width: '400px',
        },
        [theme.breakpoints.down('1200')]: {
            height: '290px',
            width: '400px',
        },
        [theme.breakpoints.down('1100')]: {
            height: '260px',
            width: '370px',
        },
        [theme.breakpoints.down('1000')]: {
            height: '240px',
            width: '350px',
        },
        [theme.breakpoints.down('900')]: {
            height: '290px',
            width: '380px',
        },
        [theme.breakpoints.down('850')]: {
            width: '0px',
        },
        // [theme.breakpoints.down('1200')]: {
        //     width: '0px',
        // },
        '&::before': {
            content: '""',
            display: 'block',
            height: '355px',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'absolute',
            top: '0px',
            [theme.breakpoints.down('1700')]: {
                height: '330px',
            },
            [theme.breakpoints.down('1600')]: {
                height: '310px',
            },
            [theme.breakpoints.down('1500')]: {
                height: '355px',
            },
            [theme.breakpoints.down('1400')]: {
                height: '330px',
            },
            [theme.breakpoints.down('1300')]: {
                height: '310px',
            },
            [theme.breakpoints.down('1200')]: {
                height: '290px',
            },
            [theme.breakpoints.down('1100')]: {
                height: '260px',
            },
            [theme.breakpoints.down('1000')]: {
                height: '240px',
            },
            [theme.breakpoints.down('900')]: {
                height: '290px',
            },
        },
        '& img': {
            width: '100%',
            height: '355px',
            [theme.breakpoints.down('1700')]: {
                height: '330px',
            },
            [theme.breakpoints.down('1600')]: {
                height: '310px',
            },
            [theme.breakpoints.down('1500')]: {
                height: '355px',
            },
            [theme.breakpoints.down('1400')]: {
                height: '330px',
            },
            [theme.breakpoints.down('1300')]: {
                height: '310px',
            },
            [theme.breakpoints.down('1200')]: {
                height: '290px',
            },
            [theme.breakpoints.down('1100')]: {
                height: '260px',
            },
            [theme.breakpoints.down('1000')]: {
                height: '240px',
            },
            [theme.breakpoints.down('900')]: {
                height: '290px',
            },
        },
        '& h3': {
            position: 'absolute',
            top: '40%',
            left: '50%',
            width: '250px',
            color: 'white',
            fontSize: '35px',
            transform: 'translate(-50%,-50%)',
            lineHeight: '50px',
            fontWeight: 'bold',
            [theme.breakpoints.down('1100')]: {
                fontSize: '25px',
            },
        },
    },
    right: {
        width: window.screen.width - 450,
        [theme.breakpoints.down('1700')]: {
            width: window.screen.width - 430,
        },
        [theme.breakpoints.down('1600')]: {
            width: window.screen.width - 400,
        },
        [theme.breakpoints.down('1500')]: {
            width: window.screen.width - 450,
        },
        [theme.breakpoints.down('1400')]: {
            width: window.screen.width - 430,
        },
        [theme.breakpoints.down('1300')]: {
            width: window.screen.width - 400,
        },
        [theme.breakpoints.down('1100')]: {
            width: window.screen.width - 370,
        },
        [theme.breakpoints.down('1000')]: {
            width: window.screen.width - 350,
        },
        [theme.breakpoints.down('900')]: {
            width: window.screen.width - 380,
        },
        [theme.breakpoints.down('850')]: {
            width: window.screen.width - 0,
        },
        [theme.breakpoints.down('650')]: {
            height: '335px',
        },
        [theme.breakpoints.down('550')]: {
            height: '300px',
        },
        height: '355px',
        backgroundColor: 'white',
    },
}));