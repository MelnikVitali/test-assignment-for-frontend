import { makeStyles } from '@material-ui/core/styles';
import { pxToRem } from '../../../utils/pxToRem';

// import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formControl: {
        marginBottom:24
    },
    errorText:{
        color:'#db3445'
    },
    btn: {
        marginTop: pxToRem(24),
        [theme.breakpoints.up('md')]: {
            marginTop: pxToRem(34),
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: pxToRem(34),
        },
    },
    inputError: {
        height: 100,
        borderColor: theme.palette.primary.mainHover,
        '&:focus': {
            boxShadow: '0 0 0 3px #f8d6da'
        },
    }
}));


export default useStyles;
