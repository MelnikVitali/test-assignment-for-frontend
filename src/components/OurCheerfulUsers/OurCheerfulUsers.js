import React, { useCallback, useEffect } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Box, Button, CircularProgress, Container, Grid, Typography } from '@material-ui/core';

import { getFirstUsers, getNextUsers } from '../../store/actions/usersActions';
import { clearErrors } from '../../store/actions/errorActions';

import { MOBILE_MAX_WIDTH } from '../../constans/mobileMaxWidth';

import { APIUrls } from '../../configs/APIUrls';

import User from './User';

import useStyles from './styles';

const OurCheerfulUsers = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { users, totalPages, nextUrl } = useSelector(store => store.usersReducer, shallowEqual);
    const isFetching = useSelector(store => store.toggleIsFetchingReducer.isFetching);

    const getUsers = useCallback(
        () => {
            const url = window.innerWidth < MOBILE_MAX_WIDTH ?
                APIUrls.getUsersMobileStartPage :
                APIUrls.getUsersTabletStartPage;

            dispatch(clearErrors());

            dispatch(getFirstUsers(url));
        },
        [ dispatch ]
    );

    useEffect(() => {
        getUsers();
    }, [ getUsers ]);

    const handleNextUsersList = () => {
        dispatch(getNextUsers(nextUrl));
    };

    return (
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
                component='h3'
                variant='h4'
            >
                Attention! Sorting users by registration date
            </Typography >

            {users && users.length > 0 && <Grid
                container
                justify="center"
                className={classes.usersList}
            >
                {users.map(user => {
                        return <User key={user.id} user={user} />;
                    }
                )}
            </Grid >}

            <Box component='div' className={classes.wrapperButton} >
                {nextUrl && (new URL(nextUrl).searchParams.get('page') <= totalPages) &&
                <Button
                    variant='contained'
                    color='primary'
                    disabled={isFetching}
                    className={classes.btn}
                    onClick={handleNextUsersList}
                >
                    Show more
                </Button >}
                {isFetching && <CircularProgress
                    thickness={5}
                    size={26}
                    color='secondary'
                    className={classes.preloader} />}
            </Box >
        </Container >
    );
};

export default OurCheerfulUsers;
