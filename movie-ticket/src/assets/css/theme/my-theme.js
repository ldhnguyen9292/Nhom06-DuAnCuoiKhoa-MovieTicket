import {createMuiTheme} from '@material-ui/core';
import './../../../index.css';

export const theme = createMuiTheme({
    palette:{
        primary:{
            light:"#4c46e6",
            main:"#b446ff",
            dark:"#6d68fe",
            contrastText:"white",
        },
    },
    typography: {
        htmlFontSize: 16,
        fontFamily: "lato",
        fontSize: 14,
      },
})