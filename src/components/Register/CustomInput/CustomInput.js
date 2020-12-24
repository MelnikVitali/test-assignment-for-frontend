import { fade, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { pxToRem } from '../../../utils/pxToRem';

const CustomInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: 27,
        },
        '&.Mui-error > .MuiInputBase-input': {
            color: theme.palette.error.main,
            borderColor: theme.palette.primary.mainHover,
            '&:focus': {
                borderColor: theme.palette.error.main,
                boxShadow: theme.boxShadowError
            },
            '&:active': {
                borderColor: theme.palette.error.main,
                boxShadow: theme.boxShadowError
            },
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.inputBorderColor}`,
        fontFamily: 'PT Sans',
        fontSize: pxToRem(16),
        fontWeight: 400,
        padding: `${pxToRem(9)} ${pxToRem(13)}`,
        transition: theme.transitions.create([ 'border-color', 'box-shadow' ]),
        '&:focus': {
            boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.secondary.main,
        },
        "&::placeholder": {
            color: theme.placeholderGrayColor
        }
},
}))
(InputBase);

export default CustomInput;
