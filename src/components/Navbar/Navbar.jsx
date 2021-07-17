import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../Navbar/styles';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from '../SideDrawer/SideDrawer';

const Navbar = (props) => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar >
                    <SideDrawer setCategory={props.setCategory}/>
                    <Box className={classes.icon}>
                        <img className={classes.iconStyle} src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="" />
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
