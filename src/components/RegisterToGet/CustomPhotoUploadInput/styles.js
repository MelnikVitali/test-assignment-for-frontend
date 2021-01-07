import { fade, makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    wrapperUploadPhoto: {
        width: '100%',
        position: 'relative',
        marginTop: pxToRem(30),
    },
    input: {
        position: 'relative',
        width: 0,
        padding: `${pxToRem(8)} 0`,
        margin: 0,
        zIndex: 2,
        opacity: 0,
        '&:focus~label': {
            transition: theme.transitions.create([ 'border-color', 'box-shadow' ]),
            boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.secondary.main,
        },
        '&.Mui-error:focus~label': {
            borderColor: theme.palette.error.main,
            boxShadow: theme.boxShadowError
        }
    },
    label: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: '100%',
        borderRadius: pxToRem(4),
        width: '100%',
        padding: `${pxToRem(6)} ${pxToRem(81)} ${pxToRem(6)} ${pxToRem(13)}`,
        backgroundColor: theme.palette.common.white,
        color: theme.placeholderGrayColor,
        fontFamily: 'PT Sans',
        fontSize: pxToRem(16),
        fontWeight: 400,
        textAlign: 'left',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        border: `${pxToRem(1)} solid ${theme.inputBorderColor}`,
        transition: theme.transitions.create([ 'border-color', 'box-shadow' ]),
        zIndex: 1,
        '&::After': {
            content: '"Browse"',
            width: pxToRem(81),
            paddingBottom: pxToRem(3),
            boxSizing: 'border-box',
            position: 'absolute',
            right: pxToRem(1),
            top: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.inputButtonBackgroundColor,
            outline: 'none',
            borderRadius: `0 ${pxToRem(4)} ${pxToRem(4)} 0`,
            borderLeft: 'inherit',
            fontSize: pxToRem(16),
            color: theme.formRegisterColor,
            cursor: 'pointer',
            zIndex: 3,
        },
    },
    error: {
        borderColor: theme.palette.primary.mainHover,
        transition: theme.transitions.create([ 'border-color', 'box-shadow' ]),
    }
}));

export default useStyles;
