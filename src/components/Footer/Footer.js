import React from 'react';

import { Container, Divider, Typography } from '@material-ui/core';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <Container
            component='footer'
            maxWidth={false}
            className={classes.root}
        >
            <Divider />
            <Typography className={classes.text} >
                &copy; abz.agency specially for the test task
            </Typography >
        </Container >
    );
};

export default Footer;
