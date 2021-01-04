import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        marginBottom: pxToRem(81),
        [theme.breakpoints.up('md')]: {
            marginLeft: pxToRem(4),
            marginBottom: pxToRem(119),
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: 0,
            marginBottom: pxToRem(165),
        }
    },
    titleH2: {
        margin: `${pxToRem(68)} 0 ${pxToRem(11)}`,
        [theme.breakpoints.up('md')]: {
            margin: `${pxToRem(107)} 0 ${pxToRem(14)}`,
            fontSize: pxToRem(40),
        },
        [theme.breakpoints.up('lg')]: {
            margin: `${pxToRem(152)} 0 ${pxToRem(19)}`,
            fontSize: pxToRem(50),
        }
    },
    titleH4: {
        maxWidth: 460,
        lineHeight: pxToRem(22),
        marginBottom: pxToRem(31),
        padding: `0 ${pxToRem(16)}`,
        [theme.breakpoints.up('md')]: {
            lineHeight: pxToRem(24),
            padding: 0,
            marginBottom: pxToRem(29),
        },
    },
}));

export default useStyles;
