import React, { useEffect } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Box, Button, CircularProgress, Container, Grid, Typography } from '@material-ui/core';

import { getFirstUsers, getNextUsers } from '../../store/actions/usersActions';
import { clearErrors } from '../../store/actions/errorActions';

import { APIUrls } from '../../configs/APIUrls';

import User from './User';

import useStyles from './styles';

const OurCheerfulUsers = React.memo(() => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { users, total_pages, nextUrl } = useSelector(store => store.usersReducer, shallowEqual);
    const isFetching = useSelector(store => store.toggleIsFetchingReducer.isFetching);

    useEffect(() => {
        const url = window.innerWidth < 600 ?
            APIUrls.getUsersMobileStartPage :
            APIUrls.getUsersTabletStartPage;

        dispatch(clearErrors());

        dispatch(getFirstUsers(url));
    }, [ dispatch ]);

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
                {users && users.length > 0 && users.map(user => {
                        return <User key={user.id} user={user} />;
                    }
                )}
            </Grid >

            <Box component='div' className={classes.wrapperButton} >
                {nextUrl && nextUrl[0] && (new URL(nextUrl).searchParams.get('page') <= total_pages) &&
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
});

export default OurCheerfulUsers;
