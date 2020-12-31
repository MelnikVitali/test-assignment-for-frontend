import React from 'react';

import useStyles from './styles';
import { Container, Divider, Typography } from '@material-ui/core';

const Footer = () => {
    const classes = useStyles();

    return (
        <Container
            component='section'
            maxWidth={false}
            className={classes.root}
        >
           <Divider/>
            <Typography className={classes.text}>
                © abz.agency specially for the test task
            </Typography>

        </Container>
    );
};

export default Footer;
