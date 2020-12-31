import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        padding: `0 ${pxToRem(16)}`,
        backgroundColor: theme.backgroundColor2,
        textAlign: 'center',
        overflow: 'hidden',

    },
    titleH2: {
        padding: `${pxToRem(67)} 0 ${pxToRem(3)}`,
        [theme.breakpoints.up('md')]: {
            padding: `${pxToRem(111)} 0 ${pxToRem(17)}`,
            fontSize: pxToRem(40),
        },
        [theme.breakpoints.up('lg')]: {
            padding: `${pxToRem(155)} 0 ${pxToRem(20)}`,
            fontSize: pxToRem(50),
        }
    },
    titleH4: {
        marginBottom: pxToRem(37),
        [theme.breakpoints.up('md')]: {
            marginBottom: pxToRem(77),
        },
    },
    errorMessage: {
        justifyContent: 'center',
        marginTop: pxToRem(25),
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
            marginBottom: pxToRem(40),
        },
    },
    wrapperButton:{
        position: 'relative',
        marginBottom: pxToRem(80),
        [theme.breakpoints.up('md')]: {
            marginBottom: pxToRem(122),
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: 0,
            marginBottom: pxToRem(161),
        },
    },
    btn: {
        padding: `${pxToRem(4.5)} ${pxToRem(61)}`,
    },
    preloader: {
        marginBottom: pxToRem(25),
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: pxToRem(-12),
        marginLeft: pxToRem(-12),
    }

}));

export default useStyles;
