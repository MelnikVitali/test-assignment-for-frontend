/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
    AppBar,
    Toolbar,
    List,
    Hidden,
    Link, ListItem
} from '@material-ui/core';

import logo from '../../assets/logo.svg';

import SideDrawer from './SideDrawer';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    const navLinks = useSelector(state => state.navLinksReducer.navLinks);

    const [ selectedIndex, setSelectedIndex ] = useState(null);

    const handleLogoClick = () => {
        setSelectedIndex(null);
    };

    const handleListItemClick = (event, index) => {
        event.preventDefault();

        setSelectedIndex(index);
    };

    return (
        <AppBar position="sticky" className={classes.appBar} color='inherit' >
            <Toolbar className={classes.toolbar} >
                <Link component='a'
                      href="#"
                      className={classes.logoLink}
                      onClick={handleLogoClick}
                >
                    <img src={logo} alt="TESTTASK" className={classes.logoImg} />
                </Link >
                <Hidden mdDown >
                    <List
                        component="nav"
                        aria-labelledby="main navigation"
                        className={classes.navList}
                    >
                        {navLinks.map(({ title, path }, index) => (
                            <ListItem
                                component='li'
                                key={title}
                                button
                                className={[
                                    classes.listItem,
                                    selectedIndex === index ? classes.selected : ''
                                ].join(' ')} >
                                <Link
                                    href={path}
                                    color='inherit'
                                    onClick={(event) => handleListItemClick(event, index)}
                                >
                                    {title}
                                </Link >
                            </ListItem >
                        ))}
                    </List >
                </Hidden >
                <Hidden lgUp >
                    <SideDrawer implementation="css" />
                </Hidden >
            </Toolbar >
        </AppBar >
    );
};

export default Header;
