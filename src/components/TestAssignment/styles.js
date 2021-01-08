import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        overflow: 'hidden',
        padding: `${pxToRem(70)} ${pxToRem(16)} ${pxToRem(75)}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            padding: `${pxToRem(59)} ${pxToRem(30)} ${pxToRem(66)}`,
        },
        [theme.breakpoints.up('md')]: {
            display: 'block',
            padding: `${pxToRem(59)} ${pxToRem(30)} ${pxToRem(66)}`,
            textAlign: 'left',
        },
        [theme.breakpoints.up('lg')]: {
            padding: `${pxToRem(106)} ${pxToRem(30)} ${pxToRem(115)}`,
        },
    },
    boxContent: {
        zIndex: theme.testAssignmentBlockZIndex
    },
    title: {
        padding: `0 ${pxToRem(11)}`,
        maxWidth: pxToRem(472),
        [theme.breakpoints.up('md')]: {
            padding: 0,
            maxWidth: pxToRem(420),
            fontSize: pxToRem(40),
            lineHeight: pxToRem(44),
            wordSpacing: pxToRem(1),
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: pxToRem(510),
            paddingTop: pxToRem(1),
            fontSize: pxToRem(50),
            lineHeight: pxToRem(54),
            wordSpacing: pxToRem(3),
            letterSpacing: pxToRem(-0.7),
        },
    },
    subtitle: {
        minWidth: pxToRem(330),
        maxWidth: pxToRem(600),
        padding: `${pxToRem(19)} 0 ${pxToRem(24)}`,

        [theme.breakpoints.up('md')]: {
            maxWidth: pxToRem(450),
            padding: `${pxToRem(28)} 0 ${pxToRem(34)}`,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: pxToRem(530),
            padding: `${pxToRem(25)} 0  ${pxToRem(34)}`,
        },
    }
}));

export default useStyles;
