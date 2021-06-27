import React from 'react'
import { NavLink } from "react-router-dom"
import { useStyles } from './logo-styles.component'
import Logo from "./../../../../../assets/images/logo.gif"

function LogoComponent() {
    const classes = useStyles();
    return (
        <div className={classes.logoContainer}>
            <NavLink to="/" className={classes.logo}>
                <img src={Logo} alt="logo" className={classes.iconLogo} />
                <span>movie ticket</span>
            </NavLink>
        </div>
    )
}

export default LogoComponent
