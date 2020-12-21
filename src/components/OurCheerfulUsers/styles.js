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
        padding: `${pxToRem(68)} 0 ${pxToRem(3)}`,
        [theme.breakpoints.up('md')]: {
            padding: `${pxToRem(112)} 0 ${pxToRem(17)}`,
            fontSize: pxToRem(40),
        },
        [theme.breakpoints.up('lg')]: {
            padding: `${pxToRem(154)} 0 ${pxToRem(21)}`,
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
    btn: {
        padding: `${pxToRem(4)} ${pxToRem(61)}`,
        marginBottom: pxToRem(80),
        [theme.breakpoints.up('md')]: {
            marginBottom: pxToRem(122),
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: 0,
            marginBottom: pxToRem(161),
        },
    },
    preloader:{
        marginBottom: pxToRem(25)
    }

}));

export default useStyles;
