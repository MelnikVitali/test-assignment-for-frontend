import { makeStyles } from '@material-ui/core/styles';
import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root:{
        display:'flex',
        justifyContent: 'center',
        padding:0,
        overflow:'hidden',
        borderTop:`${pxToRem(1)} solid ${theme.footerBorderColor}`,

    },
    text: {
        padding: `${pxToRem(16)} 0`,
        overflow:'hidden',
        [theme.breakpoints.up('md')]:{
            marginLeft:pxToRem(10)
        },
        [theme.breakpoints.up('lg')]:{
            marginLeft:pxToRem(0)
        }
    }
}));

export default useStyles;
