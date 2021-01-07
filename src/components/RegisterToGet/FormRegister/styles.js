import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../../utils/pxToRem';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: `0 ${pxToRem(3)}`,
        color: theme.formRegisterColor,
        [theme.breakpoints.up('sm')]: {
            width: pxToRem(380),
            padding: 0,
            margin: 0
        },
        [theme.breakpoints.up('md')]: {
            width: pxToRem(468),
        },
        [theme.breakpoints.up('lg')]: {
            width: pxToRem(467),
        },
    },
    formControl: {
        position: 'relative',
        width: '100%',
        paddingBottom: pxToRem(23),
        '&:nth-of-type(3)': {
            letterSpacing: pxToRem(0.29),
            '& input': {
                paddingLeft: pxToRem(12)
            }
        }
    },
    label: {
        fontSize: pxToRem(21),
        fontWeight: 400,
    },
    errorLabel: {
        color: theme.palette.primary.errorText
    },
    helperText: {
        position: 'absolute',
        paddingTop: pxToRem(4),
        bottom: pxToRem(0),
        left: pxToRem(-1),
        fontFamily: theme.typography.secondaryFontFamily,
        fontSize: pxToRem(12),
        color: theme.helperText,
        letterSpacing: pxToRem(-0.06),
        [theme.breakpoints.up('md')]: {
            bottom: 0,
            left: pxToRem(1),
            fontSize: pxToRem(12),
            letterSpacing: pxToRem(-0.1)
        },
        [theme.breakpoints.up('lg')]: {
            bottom: pxToRem(-2),
            left: pxToRem(1),
            fontSize: pxToRem(13),
            letterSpacing: pxToRem(0.13),
        }
    },
    previewAvatar: {
        width: pxToRem(70),
        height: pxToRem(70),
        margin: `0 auto`,
    },
    wrapperButton: {
        position: 'relative',
        paddingTop: pxToRem(17),
    },
    preloader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: pxToRem(-4),
        marginLeft: pxToRem(-12),
    },
    errorMessage: {
        justifyContent: 'center',
        marginBottom: pxToRem(20),
    },
}));


export default useStyles;
