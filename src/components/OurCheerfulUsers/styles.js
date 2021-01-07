import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        padding: `0 ${pxToRem(16)} ${pxToRem(80)}`,
        backgroundColor: theme.backgroundColor2,
        textAlign: 'center',
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            paddingBottom: pxToRem(122),
        },
        [theme.breakpoints.up('lg')]: {
            paddingBottom: pxToRem(161),
        },

    },
    titleH2: {
        padding: `${pxToRem(68)} 0 ${pxToRem(2)} ${pxToRem(1)} `,
        [theme.breakpoints.up('md')]: {
            padding: `${pxToRem(112)} 0 ${pxToRem(16)}`,
            fontSize: pxToRem(40),
        },
        [theme.breakpoints.up('lg')]: {
            padding: `${pxToRem(155)} 0 ${pxToRem(20)}`,
            fontSize: pxToRem(50),
        }
    },
    usersList: {
        paddingTop: pxToRem(37),
        [theme.breakpoints.up('md')]: {
            paddingTop: pxToRem(77),
        },
    },
    wrapperButton: {
        position: 'relative',
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
