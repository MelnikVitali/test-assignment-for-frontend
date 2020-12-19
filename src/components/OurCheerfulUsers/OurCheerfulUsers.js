/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button, Container, Grid, Link, Tooltip, Typography } from '@material-ui/core';

import Alert from '@material-ui/lab/Alert';

import { getFirstUsers, getNextUsers } from '../../store/actions/usersActions';

import { APIUrls } from '../../configs/APIUrls';

import defaultAvatar from '../../assets/avatar.svg';

import User from './User';

import useStyles from './styles';
import { clearErrors } from '../../store/actions/errorActions';
import Preloader from '../Preloader';

const OurCheerfulUsers = React.memo(() => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const usersList = useSelector(store => store.usersReducer.users);
    const nextUrl = useSelector(store => store.usersReducer.nextUrl);
    const errorMessage = useSelector(store => store.errorReducer.errorMessage);
    const isFetching = useSelector(store => store.toggleIsFetchingReducer.isFetching);


    useEffect(() => {
        const url = window.innerWidth < 768 ?
            APIUrls.getUsersMobileStartPage :
            APIUrls.getUsersTabletStartPage;

        dispatch(clearErrors());

        dispatch(getFirstUsers(url));
    }, [ window.innerWidth, getFirstUsers ]);

    const handleNextUsersList = () => {
        console.log(nextUrl);
        dispatch(getNextUsers(nextUrl));
    };

    return (
        <Container
            component='section'
            maxWidth={false}
            className={classes.root} >

            {isFetching ? <Preloader /> : null}

            <Typography component='h2' variant='h2' className={classes.titleH2} >
                Our cheerful users
            </Typography >
            <Typography component='h4' variant='h4' className={classes.titleH4} >
                Attention! Sorting users by registration date
            </Typography >

            <Grid
                container
                spacing={10}
                justify="center"
                className={classes.gridContainer}
            >
                {usersList && usersList.length > 0 && usersList.map(user => (
                    <Grid
                        item
                        key={user.id}
                        md={4}
                        xs={12}
                        sm={6}
                        className={classes.gridItem}
                    >
                        <img
                            className={classes.userPhoto}
                            src={user.photo}
                            alt={user.name}
                            onError={e => {
                                e.target.src = defaultAvatar;
                            }}
                        />
                        <Typography
                            component='h3'
                            variant='h3'
                            className={classes.userName}
                        >
                            {user.name}
                        </Typography >
                        <Typography
                            component='p'
                            variant='body1'
                            className={classes.userPosition}
                        >
                            {user.position}
                        </Typography >
                        <Link href={`mailto:${user.email}`} >
                            <Tooltip title={user.email} >
                                <Typography
                                    component='p'
                                    variant='body1'
                                    className={classes.userEmail}
                                >
                                    {user.email}
                                </Typography >
                            </Tooltip >
                        </Link >
                        <Link href={`tel:${user.phone}`} >
                            <Typography
                                component='p'
                                variant='body1'
                                className={classes.userPhone}
                            >
                                {user.phone}
                            </Typography >
                        </Link >
                    </Grid >
                ))}
            </Grid >
            {errorMessage && (
                <Alert severity="error" className={classes.errorMessage} >{errorMessage}</Alert >
            )}
            {nextUrl && nextUrl[0] && (
                <Button
                    href='#sign-up'
                    variant='contained'
                    color='primary'
                    className={classes.btn}
                    onClick={handleNextUsersList}
                >
                    Show more
                </Button >
            )}


        </Container >
    );
});

export default OurCheerfulUsers;
