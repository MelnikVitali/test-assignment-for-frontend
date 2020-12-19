import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        padding: `0 ${pxToRem(15)}`,
        backgroundColor: theme.backgroundColor2,
        textAlign: 'center',
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            padding: '0 46px',
        },
        [theme.breakpoints.up('lg')]: {
            padding: '0 46px',
        },
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
            marginBottom: pxToRem(76),
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: pxToRem(75),
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
        padding: `${pxToRem(4.5)} ${pxToRem(61)}`,
        marginTop: pxToRem(24),
        marginBottom: pxToRem(67),
        [theme.breakpoints.up('md')]: {
            marginTop: pxToRem(-26),
            marginBottom: pxToRem(40),
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: 0,
            marginBottom: pxToRem(30),
        },
    }
}));

export default useStyles;
