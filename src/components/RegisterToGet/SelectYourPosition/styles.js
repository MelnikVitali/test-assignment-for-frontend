import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        textAlign: 'left',
        marginTop: pxToRem(22),
        marginBottom: 7,
        [theme.breakpoints.up('lg')]: {
            marginTop: pxToRem(24),
        }
    },
    label: {
        fontFamily: theme.typography.secondaryFontFamily,
        color: theme.palette.primary.contrastText,
        marginBottom: 19,
        letterSpacing: -0.1,
        '&:last-child': {
            marginBottom: 3
        }
    },
    formControl: {
        fontFamily: theme.typography.secondaryFontFamily,
        color: theme.palette.primary.contrastText,
        margin: '0 0 6px',
    }
}));

export default useStyles;

