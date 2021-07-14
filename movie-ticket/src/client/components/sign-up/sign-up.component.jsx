import React from 'react'
import { useStyles } from './sign-up-styles.component'
import { NavLink } from "react-router-dom";
import Logo from "./../../../assets/images/logo.gif";
import { Button } from '@material-ui/core';

function SignUp() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.Box}>
                <Button className={classes.close} href="../">X</Button>
                <div className={classes.contentBox}>
                    <div className={classes.logoBox}>
                        <NavLink to="/" className={classes.logo}>
                            <img src={Logo} alt="logo" className={classes.iconLogo} />
                            <span>movie ticket</span>
                        </NavLink>
                    </div>
                    <p>Thế giới phim trên đầu ngón tay</p>
                    
                </div>
            </div>
        </div>
    )
}

export default SignUp
