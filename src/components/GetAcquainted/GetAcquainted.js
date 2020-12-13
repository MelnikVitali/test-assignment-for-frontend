import React from 'react';

import useStyles from './styles';
import { Box, Container, Grid, Typography } from '@material-ui/core';

const GetAcquainted = () => {
    const classes = useStyles();

    return (
        <Container
            component='section'
            maxWidth={false}
            className={classes.root} >
            <Typography component='h2' variant='h2' className={classes.title} >
                Let's get acquainted
            </Typography >
            <Grid container>
                <Grid item>

                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        </Container>
    );
};

export default GetAcquainted;
