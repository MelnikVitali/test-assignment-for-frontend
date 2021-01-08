import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: `${pxToRem(19)} 0 ${pxToRem(7)}`,
        textAlign: 'left',
        [theme.breakpoints.up('md')]: {
            paddingTop: pxToRem(19),
        },
        [theme.breakpoints.up('lg')]: {
            paddingTop: pxToRem(19),
        }
    },
    label: {
        paddingTop: pxToRem(22),
        paddingBottom: 0,
        fontFamily: theme.typography.secondaryFontFamily,
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.up('lg')]: {
            paddingTop: pxToRem(23),
        },
        letterSpacing: pxToRem(-0.1),
        '&:last-child': {
            paddingBottom: pxToRem(3)
        }
    },
    formControl: {
        margin: 0,
        paddingBottom: pxToRem(6),
        fontFamily: theme.typography.secondaryFontFamily,
        color: theme.palette.primary.contrastText,
    }
}));

export default useStyles;
