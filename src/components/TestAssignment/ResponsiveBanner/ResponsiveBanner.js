import React from 'react';

import bannerImage360 from '../../../assets/bannerPhoto/banner-photo360.jpg';
import bannerImage360_2x from '../../../assets/bannerPhoto/banner-photo360@2x.jpg';
import bannerImage360_3x from '../../../assets/bannerPhoto/banner-photo360@3x.jpg';
import bannerImage480 from '../../../assets/bannerPhoto/banner-photo480.jpg';
import bannerImage480_2x from '../../../assets/bannerPhoto/banner-photo480@2x.jpg';
import bannerImage480_3x from '../../../assets/bannerPhoto/banner-photo480@3x.jpg';
import bannerImage768 from '../../../assets/bannerPhoto/banner-photo768.jpg';
import bannerImage768_2x from '../../../assets/bannerPhoto/banner-photo768@2x.jpg';
import bannerImage768_3x from '../../../assets/bannerPhoto/banner-photo768@3x.jpg';
import bannerImage1024 from '../../../assets/bannerPhoto/banner-photo1024.jpg';
import bannerImage1024_2x from '../../../assets/bannerPhoto/banner-photo1024@2x.jpg';
import bannerImage1024_3x from '../../../assets/bannerPhoto/banner-photo1024@3x.jpg';


import useStyles from './styles';

const ResponsiveBanner = () => {
    const classes = useStyles();

    return (
        <>
            <picture >
                <source
                    media='(max-width: 481px)'
                    srcSet={
                        `${bannerImage360} 1x,
                         ${bannerImage360_2x} 2x,
                         ${bannerImage360_3x} 3x`
                    }
                />
                <source
                    media='(max-width: 767px)'
                    srcSet={
                        `${bannerImage480} 1x,
                         ${bannerImage480_2x} 2x,
                         ${bannerImage480_3x} 3x`
                    }
                />
                <source
                    media='(max-width: 1023px)'
                    srcSet={
                        `${bannerImage768} 1x,
                         ${bannerImage768_2x} 2x,
                         ${bannerImage768_3x} 3x`
                    }
                />
                <source
                    media='(max-width: 3064px)'
                    srcSet={
                        `${bannerImage1024} 1x,
                         ${bannerImage1024_2x} 2x,
                         ${bannerImage1024_3x} 3x`
                    }
                />
                <img
                    src={bannerImage1024}
                    alt="Man with laptop in headphones"
                    className={classes.img}
                    loading="lazy"
                />
            </picture >
        </ >
    );
};

export default ResponsiveBanner;
