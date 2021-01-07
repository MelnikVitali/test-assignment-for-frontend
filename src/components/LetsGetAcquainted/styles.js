import makeStyles from '@material-ui/core/styles/makeStyles';

import { pxToRem } from '../../utils/pxToRem';

const useStales = makeStyles(theme => ({
    root: {
        padding: `${pxToRem(0)} ${pxToRem(14)}  ${pxToRem(71)}`,
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            padding: `0 ${pxToRem(30)}`,
        },
        [theme.breakpoints.up('md')]: {
            paddingBottom: pxToRem(110),
        },
        [theme.breakpoints.up('lg')]: {
            padding: `${pxToRem(154)} ${pxToRem(30)} ${pxToRem(151)}`,
        }
    },
    titleH2: {
        padding: `${pxToRem(68)} 0 ${pxToRem(25)} ${pxToRem(1)}`,
        letterSpacing: pxToRem(-0.5),
        wordSpacing: pxToRem(2),
        [theme.breakpoints.up('md')]: {
            padding: `${pxToRem(110)} 0 ${pxToRem(68)} ${pxToRem(1)}`,
            fontSize: pxToRem(40),
            letterSpacing: pxToRem(-0.6),
            wordSpacing: pxToRem(1)
        },
        [theme.breakpoints.up('lg')]: {
            padding: `0 0 ${pxToRem(69)} ${pxToRem(1)}`,
            fontSize: pxToRem(50),
            letterSpacing: pxToRem(-1),
            wordSpacing: pxToRem(2.5)
        }
    },
    gridContainer: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            flexWrap: 'nowrap !important',
            textAlign: 'left'
        },
    },
    wrapperImg: {
        [theme.breakpoints.up('lg')]: {
            padding: `${pxToRem(5)} 0 0 ${pxToRem(25)}`,
        }
    },
    img: {
        width: pxToRem(289),
        height: pxToRem(243),
        [theme.breakpoints.up('md')]: {
            width: pxToRem(247),
            height: pxToRem(207),
        },
        [theme.breakpoints.up('lg')]: {
            width: pxToRem(340),
            height: pxToRem(285),
        }
    },
    gridItemContent: {
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
            paddingLeft: `${pxToRem(30)}`,
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: `${pxToRem(49)}`,
        }
    },

    titleH3: {
        padding: `${pxToRem(31)} 0 ${pxToRem(19)}`,
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            marginTop: pxToRem(-4),
            padding: `0 0 ${pxToRem(19)}`,
            textAlign: 'left',
        },
        [theme.breakpoints.up('lg')]: {
            margin: 0,
        }
    },
    textBlock: {
        letterSpacing: pxToRem(-0.097),
        paddingBottom: pxToRem(24),
        textAlign: 'justify',
        [theme.breakpoints.up('md')]: {
            paddingBottom: pxToRem(24),
        },
        [theme.breakpoints.up('lg')]: {
            letterSpacing: pxToRem(-0.03),
        }
    },
    btn: {
        padding: `${pxToRem(3)} 0 ${pxToRem(0)}`,
        '&:hover': {
            color: theme.palette.primary.mainHover
        }
    },
}));

export default useStales;
