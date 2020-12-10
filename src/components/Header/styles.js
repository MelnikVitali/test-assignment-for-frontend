import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from "../../utils/pxToRem";

const useStyles = makeStyles(theme => ({
    appBar: {
        height: pxToRem(40),
        boxShadow: 'none',
        [theme.breakpoints.up('md')]: {
            height: pxToRem(60)
        },
    },
    toolbar: {
        justifyContent: `space-between`,
        padding: `0 ${pxToRem(3)} 0 ${pxToRem(14)}`,
        [theme.breakpoints.up('md')]: {
            padding: `0 ${pxToRem(19)} 0 ${pxToRem(29)} `,
        },
        [theme.breakpoints.up('lg')]: {
            padding: `0 ${pxToRem(30)} 0 ${pxToRem(29)} `,
        },
    },
    logoLink: {
        marginTop: pxToRem(7),
        [theme.breakpoints.up('md')]: {
            marginTop: pxToRem(4),
        },
    },
    logoImg: {
        width: pxToRem(136),
        height: pxToRem(21)
    },
    navList: {
        justifyContent: `space-between`,
        fontSize: pxToRem(14),
    },
    selected: {
        color: `${theme.palette.secondary.main} !important`,
        transition: 'color .3s ease'
    },
    listItem: {
        width: 'inherit',
        marginLeft: pxToRem(29),
        padding: 0,
        display: 'inline-block',
        overflow: 'hidden',
        borderRadius: pxToRem(8),
        '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
            transition: 'color .3s ease',
        },
        '&:nth-last-child(2)': {
            marginLeft: pxToRem(28)
        }
    }
}));

export default useStyles;
