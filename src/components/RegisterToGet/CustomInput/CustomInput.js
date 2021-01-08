import { fade, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

import { pxToRem } from '../../../utils/pxToRem';

const CustomInput = withStyles((theme) => ({
    root: {
        'label + &': {
            paddingTop: pxToRem(30),
        },
        '&.Mui-error > .MuiInputBase-input': {
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
        borderRadius: pxToRem(4),
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.inputBorderColor}`,
        fontFamily: 'PT Sans',
        fontSize: pxToRem(16),
        fontWeight: 400,
        padding: `${pxToRem(8)} ${pxToRem(13)}`,
        transition: theme.transitions.create([ 'border-color', 'box-shadow' ]),
        '&:focus': {
            boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 ${pxToRem(3.2)}`,
            borderColor: theme.palette.secondary.main,
        },
        '&:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 0 ${theme.backgroundColor} inset`,
            transition: 'background-color 5000s ease-out 0s',
            '&:focus': {
                WebkitBoxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 ${pxToRem(3.2)}`,
            }
        },
        '&:nth-of-type(3)': {
            paddingLeft: pxToRem(12)
        },
    },
}))
(InputBase);

export default CustomInput;
