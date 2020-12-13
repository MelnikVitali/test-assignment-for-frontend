import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    Box,
    Drawer,
    IconButton, Link,
    List,
    ListItem,
} from '@material-ui/core';

import Divider from '@material-ui/core/Divider';

import { setIsDrawerOpen } from '../../../store/actions/mobileMenuActions';

import logo from '../../../assets/logo.svg';

import useStyles from './styles';

const SideDrawer = ({ window }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const isDrawerOpen = useSelector(state => state.mobileMenuReducers.isDrawerOpen);
    const {
        firstDrawerList,
        secondDrawerList,
        thirdDrawerList
    }
        = useSelector(state => state.mobileMenuReducers.mobileNavLinks);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        dispatch(setIsDrawerOpen(open));
    };

    const sideDrawerList = (
        <div
            className={classes.drawerContainer}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Link component='a'
                  href="#"
                  className={classes.logoLink}
            >
                <img src={logo} alt="TESTTASK" className={classes.logoImg} />
            </Link >
            <Divider />
            <List component="nav" className={classes.navList} >
                {firstDrawerList.map(({ title, path }) => (
                    <ListItem component='li'
                              key={title}
                              button
                              className={classes.listItem}
                    >
                        <Link
                            href={path}
                            color='inherit'
                        >
                            {title}
                        </Link >
                    </ListItem >
                ))}
            </List >
            <Divider />
            <List component="nav" className={classes.navList} >
                {secondDrawerList.map(({ title, path }) => (
                    <ListItem component='li'
                              key={title}
                              button
                              className={classes.listItem}
                    >
                        <Link
                            href={path}
                            color='inherit'
                        >
                            {title}
                        </Link >
                    </ListItem >
                ))}
            </List >
            <Divider />
            <List component="nav" className={classes.navList} >
                {thirdDrawerList.map(({ title, path }) => (
                    <ListItem component='li'
                              button
                              key={title}
                              className={classes.listItem}
                    >
                        <Link
                            href={path}
                            color='inherit'
                        >
                            {title}
                        </Link >
                    </ListItem >
                ))}
            </List >
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer(true)}
            >
                <Box component='div' className={classes.menuButton} />
            </IconButton >
            <Drawer
                container={container}
                variant="temporary"
                anchor='left'
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                {sideDrawerList}
            </Drawer >
        </ >
    );
};

export default SideDrawer;