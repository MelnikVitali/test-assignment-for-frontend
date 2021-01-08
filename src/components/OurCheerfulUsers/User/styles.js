import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    gridItem: {
        paddingBottom: pxToRem(35),
        [theme.breakpoints.up('md')]: {
            paddingBottom: pxToRem(55),
        },
        [theme.breakpoints.up('lg')]: {
            paddingBottom: pxToRem(50),
        },
    },
    userContent: {
        width: pxToRem(216),
        margin: '0 auto'
    },
    userPhoto: {
        borderRadius: theme.circleBorderRadius,
        width: pxToRem(70),
        height: pxToRem(70),
        paddingBottom: pxToRem(10)
    },
    userName: {
        wordBreak: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingBottom: pxToRem(10)
    },
    userEmail: {
        wordWrap: 'normal',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: 'pointer'
    },
}));

export default useStyles;
