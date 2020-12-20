import React from 'react';

import { Box, Grid, Link, Tooltip, Typography } from '@material-ui/core';

import defaultAvatar from '../../../assets/avatar.svg';

import useStales from './styles';

const User = ({ user }) => {
    const classes = useStales();

    return (
        <>
            <Grid
                item
                key={user.id}
                md={4}
                xs={12}
                sm={6}
                className={classes.gridItem}
            >
                <Box component='div' className={classes.userContent} >
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
                </Box >
            </Grid >
        </ >
    );
};

export default User;