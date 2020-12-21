/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, CircularProgress, Container, Fade, Grid, Typography } from '@material-ui/core';

import Alert from '@material-ui/lab/Alert';

import { getFirstUsers, getNextUsers } from '../../store/actions/usersActions';
import { clearErrors } from '../../store/actions/errorActions';

import { APIUrls } from '../../configs/APIUrls';

import User from './User';
// import Preloader from '../Preloader';

import useStyles from './styles';
import { Transition } from 'react-transition-group';

const OurCheerfulUsers = React.memo(() => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const usersList = useSelector(store => store.usersReducer.users);
    const nextUrl = useSelector(store => store.usersReducer.nextUrl);
    const errorMessage = useSelector(store => store.errorReducer.errorMessage);
    const isFetching = useSelector(store => store.toggleIsFetchingReducer.isFetching);

    const [ inProp, setInProp ] = useState(false);

    useEffect(() => {
        const url = window.innerWidth < 600 ?
            APIUrls.getUsersMobileStartPage :
            APIUrls.getUsersTabletStartPage;

        dispatch(clearErrors());

        dispatch(getFirstUsers(url));
    }, [ window.innerWidth, getFirstUsers, clearErrors ]);


    const handleNextUsersList = () => {
        setInProp(true);

        dispatch(getNextUsers(nextUrl));
    };

    return (
        <>
            <Container
                component='section'
                maxWidth={false}
                className={classes.root}
            >
                <Typography
                    component='h2'
                    variant='h2'
                    className={classes.titleH2}
                >
                    Our cheerful users
                </Typography >
                <Typography
                    component='h4'
                    variant='h4'
                    className={classes.titleH4}
                >
                    Attention! Sorting users by registration date
                </Typography >
                <Grid
                    container
                    justify="center"
                    className={classes.gridContainer}
                >

                    {usersList && usersList.length > 0 && usersList.map(user=>{
                        return <User key={user.id} user={user} />
                    })}

                </Grid >
                {isFetching && <CircularProgress color='secondary' className={classes.preloader} />}
                {errorMessage && (
                    <Alert severity="error" className={classes.errorMessage} >
                        {errorMessage}
                    </Alert >
                )}
                {nextUrl && nextUrl[0] && (
                    <Box component='div' >
                        <Button
                            href='#sign-up'
                            variant='contained'
                            color='primary'
                            disabled={isFetching}
                            className={classes.btn}
                            onClick={handleNextUsersList}
                        >
                            Show more
                        </Button >
                    </Box >
                )}
            </Container >
        </>
    );
});

export default OurCheerfulUsers;
