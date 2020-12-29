import { fade, makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../../utils/pxToRem';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width:pxToRem(466),
        color: theme.formRegisterColor,

    },
    formControl: {
        position: 'relative',
        width:'100%',
        paddingBottom: 24,
        '&:nth-of-type(3)': {
            letterSpacing: pxToRem(0.27),
        },
    },
    label: {
        fontSize: pxToRem(21),
        fontWeight: 400,
        '&:last-child': {}
    },
    helperText: {
        position: 'absolute',
        bottom: pxToRem(-1),
        fontFamily: theme.typography.secondaryFontFamily,
        color: '#6c757d',
        fontSize: pxToRem(13),
        wordSpacing: pxToRem(-1),
        letterSpacing: pxToRem(0.3),
        marginTop: pxToRem(4),
        '&$error': {
            color: '#db3445'
        }
    },
    btn: {
        marginTop: pxToRem(24),
        [theme.breakpoints.up('md')]: {
            marginTop: pxToRem(34),
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: pxToRem(17),
        },
    },

    btnUpload:{
        position:'absolute',
        height: '100%',
        bottom: 0,
        right:0,
        fontFamily: 'PT Sans',
        lineHeight:30,
        fontWeight:400,
        backgroundColor:theme.inputButtonBackgroundColor,
        borderColor: theme.inputBorderColor,
        borderRadius: `0 4px 4px 0`,
        '&:active': {
            boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.secondary.main,
        },
        zIndex: 2
    },
    previewAvatar:{
        width: 70,
        height:70,
        marginTop: 10
    }


}));


export default useStyles;
