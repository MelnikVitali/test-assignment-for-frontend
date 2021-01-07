import React from 'react';

import { Button, Container, Grid, Typography } from '@material-ui/core';

import manLaptopImg from '../../assets/man-laptop-v1.svg';

import useStyles from './styles';

const LetsGetAcquainted = () => {
    const classes = useStyles();

    return (
        <Container
            component='section'
            maxWidth={false}
            className={classes.root} >
            <Typography component='h2' variant='h2' className={classes.titleH2} >
                Let's get acquainted
            </Typography >
            <Grid container className={classes.gridContainer} >
                <Grid
                    item
                    data-aos="zoom-in"
                    data-aos-duration="700"
                    className={classes.wrapperImg} >
                    <img src={manLaptopImg} alt='man with laptop' className={classes.img} />
                </Grid >
                <Grid item className={classes.gridItemContent} >
                    <Typography component='h3' variant='h3' className={classes.titleH3} >
                        I am cool frontend developer
                    </Typography >
                    <Typography component='p' variant='body1' className={classes.textBlock} >
                        We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any
                        CSS and Javascript 3rd party libraries without any restriction.
                    </Typography >
                    <Typography component='p' variant='body1' className={classes.textBlock} >
                        If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get
                        bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice
                        service directory page P​SD mockup​ into HTML5/CSS3.
                    </Typography >
                    <Button
                        href='#sign-up'
                        color='primary'
                        className={classes.btn}
                    >
                        Sing up now
                    </Button >

                </Grid >
            </Grid >
        </Container >
    );
};

export default LetsGetAcquainted;
