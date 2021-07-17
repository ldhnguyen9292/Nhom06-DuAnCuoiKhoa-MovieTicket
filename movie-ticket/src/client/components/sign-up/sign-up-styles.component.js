import { makeStyles } from "@material-ui/core";
import BG from "./../../../assets/images/bg_sign-in.jpg";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        background: `url(${BG}) center center`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: 'white',
    },
    Box: {
        textAlign: 'center',
        position: "relative",
        padding: "40px 32px 30px",
        borderRadius: "5px",
        boxShadow: "0 0 10px 0 rgb(0 0 0 / 45%)",
        width: "360px",
        height: "537px",
        '& p': {
            fontSize: '12px',
            margin: '0px',
            color: '#aaa',
        },
        backgroundImage:
        "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
    },
    close: {
        width: "30px",
        height: "30px",
        position: "absolute",
        top: "-15px",
        right: "-15px",
        backgroundColor: "rgba(8,22,48,.9)",
        lineHeight: "30px",
        textAlign: "center",
        borderRadius: "50%",
        color: "#aaa",
        minWidth: '30px',
    },
    contentBox: {
        height: '447px',
        width: '296px',
    },
    logoBox: {
        width: '296px',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    logo: {
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0 10px",
        textDecoration: "none",
        transition: "all 0.5s",
        textTransform: "uppercase",
        fontWeight: "bold",
        transform: "scale(1.2)",
        [theme.breakpoints.up("md")]: {
          padding: "0 15px",
          "& span": {
            fontSize: "20px !important",
          },
        },
        [theme.breakpoints.up("lg")]: {
          padding: "0 20px",
        },
        "& span": {
          fontSize: 16,
        },
    },
    iconLogo: {
        width: 50,
        height: 50,
        borderRadius: "50%",
        borderBottomRightRadius: "0",
        padding: 5,
        [theme.breakpoints.up("md")]: {
          width: 50,
          height: 50,
        },
    },
    formBox: {
        width: '296px',
        margin: '10px 0px 20px',
    },
    input: {
        color: '#eee',
        fontWeight: '500',
        margin: '10px 0px',
    },
    btnSubmit: {
        color: '#eee',
        marginTop: '10px',
        width: '116px', 
    },
    button: {
        width: '100%',
        height: '50px',
        margin: '10px 0px',
        borderRadius: '5px',
    },
    imgIcon: {
        height: '100%',
        width: '296px',
    },
}))