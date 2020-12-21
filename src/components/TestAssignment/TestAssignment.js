import React from 'react';

import { Box, Button, Container, Hidden, Typography } from '@material-ui/core';

import subtitleInH1 from '../../constans/subtitleInH1';

import ResponsiveBanner from './ResponsiveBanner';

import useStyles from './styles';

const TestAssignment = () => {
    const classes = useStyles();

    const { subtitleMobile, subtitleTabletUp } = subtitleInH1;

    return (
        <Container
            component='section'
            maxWidth={false}
            className={classes.root}

        >
            <ResponsiveBanner />

            <Box component='div' className={classes.boxContent} >
                <Typography component='h1' variant='h1' className={classes.title} >
                    Test <Box component='span' style={{ paddingLeft: 3 }} >assignment</Box > for Frontend Developer
                    position
                </Typography >
                <Hidden smDown >
                    <Typography component='p' variant='subtitle1' className={classes.subtitle} >
                        {subtitleTabletUp}
                    </Typography >
                </Hidden >
                <Hidden mdUp >
                    <Typography component='p' variant='subtitle1' className={classes.subtitle} >
                        {subtitleMobile}
                    </Typography >
                </Hidden >
                <Button href='#sign-up' variant='contained' color='primary' className={classes.btn} >
                    Sing up now
                </Button >
            </Box >
        </Container >
    );
};

export default TestAssignment;
