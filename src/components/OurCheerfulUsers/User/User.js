import React from 'react';

import useStales from '../../LetsGetAcquainted/styles';
import { Avatar, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const User = () => {
    const classes = useStales();

    const faces = [
        "http://i.pravatar.cc/300?img=1",
        "http://i.pravatar.cc/300?img=2",
        "http://i.pravatar.cc/300?img=3",
        "http://i.pravatar.cc/300?img=4"
    ];

    return (
        <>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={
                        "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                    }
                />
                <CardContent className={classes.content}>
                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                    >
                        Nature Around Us
                    </Typography>
                    <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                    >
                        We are going to learn different kinds of species in nature that live
                        together to form amazing environment.
                    </Typography>
                    <Divider className={classes.divider} light />
                    {faces.map(face => (
                        <Avatar className={classes.avatar} key={face} src={face} />
                    ))}
                </CardContent>
            </Card>
        </ >
    );
};

export default User;

