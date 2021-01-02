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
        paddingLeft: pxToRem(7),
        marginRight: pxToRem(8),
        color: theme.formRegisterColor,
        [theme.breakpoints.up('sm')]: {
            width: pxToRem(380),
            padding: 0,
            margin: 0
        },
        [theme.breakpoints.up('md')]: {
            width: pxToRem(466),
            padding: 0,
            margin: 0
        }
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
        },
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
        bottom: pxToRem(0),
        left: pxToRem(-1),
        fontFamily: theme.typography.secondaryFontFamily,
        color: theme.helperText,
        fontSize: pxToRem(12),
        letterSpacing: pxToRem(-0.06),
        marginTop: pxToRem(4),
        [theme.breakpoints.up('md')]: {
            fontSize: pxToRem(12),
            left: pxToRem(1),
            bottom: 0,
            letterSpacing: pxToRem(-0.1)
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: pxToRem(13),
            bottom: pxToRem(-3),
            letterSpacing: pxToRem(0.1),
            left: pxToRem(1),
        }
    },
    previewAvatar: {
        width: 70,
        height: 70,
        marginTop: 10,
    },
    wrapperButton:{
        position: 'relative',
        marginTop: pxToRem(17),
        [theme.breakpoints.up('md')]: {
            marginTop: pxToRem(17),
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: pxToRem(17),
        },
    },
    preloader: {
        marginBottom: pxToRem(25),
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: pxToRem(-12),
        marginLeft: pxToRem(-12),
    },
    errorMessage: {
        justifyContent: 'center',
        marginBottom: pxToRem(20),
    },
}));


export default useStyles;
