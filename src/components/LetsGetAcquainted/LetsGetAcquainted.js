import React from 'react';

import useStyles from './styles';
import { Box, Button, CardMedia, Container, Grid, Typography } from '@material-ui/core';

import manLaptopImg from '../../assets/man-laptop-v1.svg';

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
            <Grid container justify='space-between' wrap='nowrap' >
                <Grid item >
                    <CardMedia
                        className={classes.img}
                        image={manLaptopImg}
                        title='man with laptop'
                    />
                </Grid >
                <Grid item className={classes.content} >
                    <Typography component='h3' variant='h3' className={classes.titleH3} >
                        I am cool frontend developer
                    </Typography >
                    <Typography component='p' variant='body1' className={classes.text} >
                        <span style={{ wordSpacing: 2 }} > We will evaluate how clean your approach to writing CSS and
                        Javascript</span > code is. You can use any CSS and Javascript 3rd party libraries without
                        any restriction
                    </Typography >
                    <Typography component='p' variant='body1' className={classes.text} >
                        <span style={{ wordSpacing: 8.9 }} > If 3rd party css/javascript  libraries are added to
                        the project via </span > <span style={{ wordSpacing: 2.8 }} >bower/npm/yarn you will get bonus
                        points. If you use any task runner</span > <span style={{ wordSpacing: 2.3 }} > (gulp/webpack)
                        you will get bonus points as well. Slice service directory</span > page P​SD mockup​ into
                        HTML5/CSS3.
                    </Typography >
                    <Button href='#sign-up' color='primary' className={classes.btn} >
                        Sing up now
                    </Button >

                </Grid >
            </Grid >
        </Container >
    );
};

export default LetsGetAcquainted;
