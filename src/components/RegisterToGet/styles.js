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
        paddingBottom: pxToRem(81),
        [theme.breakpoints.up('md')]: {
            padding: `${pxToRem(108)} ${pxToRem(119)} ${pxToRem(119)} ${pxToRem(128)}`,
        },
        [theme.breakpoints.up('lg')]: {
            padding: `${pxToRem(152)} ${pxToRem(165)} ${pxToRem(165)}`,
        }
    },
    titleH2: {
        [theme.breakpoints.up('md')]: {
            fontSize: pxToRem(40),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: pxToRem(50),
        }
    },
    titleH4: {
        maxWidth: pxToRem(460),
        lineHeight: pxToRem(22),
        padding: `${pxToRem(11)} ${pxToRem(17)} ${pxToRem(31)}`,
        [theme.breakpoints.up('md')]: {
            padding: `${pxToRem(16)} 0 ${pxToRem(31)}`,
            lineHeight: pxToRem(22),
        },
        [theme.breakpoints.up('lg')]: {
            padding: `${pxToRem(19)} 0 ${pxToRem(30)}`,
            lineHeight: pxToRem(24),
        }
    },
}));

export default useStyles;
