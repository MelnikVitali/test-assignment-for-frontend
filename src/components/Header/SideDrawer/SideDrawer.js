import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';

import { setIsDrawerOpen } from '../../../store/actions/mobileMenuActions';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    list: {
        width: 250
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `none`,
        color: `#212529`,
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    menuButton: {
        // marginRight: theme.spacing(2),
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

const SideDrawer = ({ window }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const firstDrawerList = useSelector(state => state.mobileMenuReducers.firstDrawerList);
    const secondDrawerList = useSelector(state => state.mobileMenuReducers.secondDrawerList);
    const thirdDrawerList = useSelector(state => state.mobileMenuReducers.thirdDrawerList);
    const isDrawerOpen = useSelector(state => state.mobileMenuReducers.isDrawerOpen);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        dispatch(setIsDrawerOpen(open));
    };

    const sideDrawerList =  (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Divider />
            <List component="nav">
                {firstDrawerList.map(({ title, path }, index) => (
                    <a href={path} key={title} className={classes.linkText}>
                        <ListItem>
                            <ListItemText primary={title} />
                        </ListItem>
                     </a>
                ))}
            </List>
            <Divider />
            <List component="nav">
                {secondDrawerList.map(({ title, path }) => (
                    <a href={path} key={title} className={classes.linkText}>
                        <ListItem>
                            <ListItemText primary={title} />
                        </ListItem>
                    </a>
                ))}
            </List>
            <Divider />
            <List component="nav">
                {thirdDrawerList.map(({ title, path }) => (
                    <a href={path} key={title} className={classes.linkText}>
                        <ListItem>
                            <ListItemText primary={title} />
                        </ListItem>
                    </a>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer(true)}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>

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
            </Drawer>
        </React.Fragment>
    );
};

export default SideDrawer;