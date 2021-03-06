import React from 'react';

import { Container, Typography } from '@material-ui/core';

import FormRegister from './FormRegister';

import useStyles from './styles';

const RegisterToGet = () => {
    const classes = useStyles();

    return (
        <Container
            id='sign-up'
            component='section'
            maxWidth={false}
            className={classes.root}
        >
            <Typography
                component='h2'
                variant='h2'
                className={classes.titleH2}
            >
                Register to get a work
            </Typography >
            <Typography
                component='h3'
                variant='h4'
                className={classes.titleH4}
            >
                Attention! After successful registration and alert, update the list of users in the block from the top
            </Typography >

            <FormRegister />
        </Container >
    );
};

export default RegisterToGet;
