import { makeStyles } from '@material-ui/core';
import { pxToRem } from '../../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    gridItem: {
        width: 200,
        marginBottom: 0,
        [theme.breakpoints.up('md')]: {
            marginBottom: pxToRem(50),
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: pxToRem(72),
        },
    },
    userPhoto: {
        borderRadius: '50%',
        width: pxToRem(70),
        marginBottom: pxToRem(10)
    },
    userName: {
        wordBreak: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginBottom: pxToRem(10)
    },
    userEmail: {
        wordWrap: 'normal',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: 'pointer'
    },
}));

export default useStyles;
