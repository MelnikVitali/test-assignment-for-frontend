import { makeStyles } from '@material-ui/core/styles';

import bgImage from '../../assets/banner-photo.jpg';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
        padding: `${pxToRem(70)} ${pxToRem(16)} ${pxToRem(75)}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${bgImage})`,
        /* Set a background color that will be displayed
           while the background image is loading */
        backgroundColor: theme.palette.backgroundColorLoadingImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '52% 100%',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            padding: `${pxToRem(59)} ${pxToRem(30)} ${pxToRem(66)}`,
            backgroundSize: '100% 120%',
            backgroundPosition: 'unset',
        },
        [theme.breakpoints.up('md')]: {
            display: 'block',
            padding: `${pxToRem(59)} ${pxToRem(30)} ${pxToRem(66)}`,
            backgroundSize: '134% 120%',
            backgroundPosition: 'unset',
            textAlign: 'left',
        },
        [theme.breakpoints.up('lg')]: {
            padding: `${pxToRem(106)} ${pxToRem(30)} ${pxToRem(115)}`,
            backgroundSize: '100%',
            backgroundPosition: 'center',
            // backgroundSize: '100% auto'
        },
    },
    title: {
        margin: `0 ${pxToRem(11)}`,
        maxWidth: pxToRem(472),
        [theme.breakpoints.up('md')]: {
            margin: 0,
            maxWidth: pxToRem(420),
            fontSize: pxToRem(40),
            lineHeight: pxToRem(44),
            letterSpacing: pxToRem(-0.3),
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: pxToRem(510),
            fontSize: pxToRem(50),
            lineHeight: pxToRem(54),
            letterSpacing: pxToRem(-0.6),
        },
    },
    subtitle: {
        minWidth: pxToRem(330),
        maxWidth: pxToRem(600),
        marginTop: pxToRem(20),

        [theme.breakpoints.up('md')]: {
            maxWidth: pxToRem(450),
            marginTop: pxToRem(28),
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: pxToRem(530),
            marginTop: pxToRem(27),
            marginLeft: pxToRem(1),
        },
    },
    btn: {
        marginTop: pxToRem(24),
        [theme.breakpoints.up('md')]: {
            marginTop: pxToRem(34),
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: pxToRem(34),
        },
    }
}));

export default useStyles;
