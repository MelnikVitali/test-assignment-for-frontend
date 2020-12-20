import { makeStyles } from '@material-ui/core';
import { pxToRem } from '../../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    gridItem: {
        marginBottom: pxToRem(35),
        [theme.breakpoints.up('md')]: {
            marginBottom: pxToRem(56),
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: pxToRem(50),
        },
    },
    userContent: {
        width: pxToRem(216),
        margin: '0 auto'
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
