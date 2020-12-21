import { fade, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const CustomInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: 27,
        },
        '&.Mui-error > .MuiInputBase-input': {
            color: '#db3445',
            borderColor: '#db3445',
            '&:focus': {
                borderColor: theme.palette.primary.main,
                boxShadow: '0 0 0 3px #f8d6da'
            },
        },
    },
    input: {
        borderRadius: 4,
        width: '440px',
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '9px 12px',
        transition: theme.transitions.create([ 'border-color', 'box-shadow' ]),
        '&:focus': {
            boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.secondary.main,
        },
    },
}))(InputBase);

export default CustomInput;
