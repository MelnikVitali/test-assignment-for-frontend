import { fade, makeStyles } from '@material-ui/core/styles';
import { pxToRem } from '../../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    wrapperUploadPhoto: {
        width: '100%',
        position: 'relative',
        marginTop: 30,
    },
    input: {
        position: 'relative',
        zIndex: 2,
        width: '100%',
        padding: `${pxToRem(8)} ${pxToRem(13)}`,
        margin: 0,
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
        borderRadius: 4,
        width: '100%',
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.inputBorderColor}`,
        color: theme.placeholderGrayColor,
        fontFamily: 'PT Sans',
        fontSize: pxToRem(16),
        fontWeight: 400,
        padding: `${pxToRem(6)} ${pxToRem(13)}`,
        textAlign: 'left',
        transition: theme.transitions.create([ 'border-color', 'box-shadow' ]),
        zIndex: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&::After': {
            content: '"Browse"',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0 4px 4px 0',
            borderLeft: 'inherit',
            outline: 'none',
            cursor: 'pointer',
            boxSizing: 'border-box',
            fontSize: 16,
            color: theme.formRegisterColor,
            width: 81,
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            paddingBottom: 2,
            backgroundColor: theme.inputButtonBackgroundColor,
            zIndex: 3,
        },
    },
    error: {
        color: theme.palette.error.main,
        borderColor: theme.palette.primary.mainHover,
        transition: theme.transitions.create([ 'border-color', 'box-shadow' ]),
    }
}));

export default useStyles;
