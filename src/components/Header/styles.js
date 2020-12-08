import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from "../../utils/pxToRem";

const useStyles = makeStyles(theme => ({
    appBar: {
        height: pxToRem(60),
        boxShadow: 'none'
    },
    toolbar: {
        justifyContent: `space-between`,
        padding: `0 ${pxToRem(30)} 0 ${pxToRem(29)}`,
    },
    logoLink: {
        marginTop: pxToRem(5),
    },
    logoImg: {
        width: pxToRem(136),
        height: pxToRem(21)
    },
    navList: {
        justifyContent: `space-between`,
        fontSize: pxToRem(14),
    },
    navLink: {
        marginLeft: pxToRem(29),
        paddingRight: 0,
        '&:hover': {
            color: theme.palette.primary.main,
            transition: 'color .2s ease'
        },
        '&:nth-last-child(2)': {
            marginLeft: pxToRem(28)
        }
    },
    selected: {
        color: theme.palette.secondary.main,
        transition: 'color .2s ease'
    }
}));

export default useStyles;
