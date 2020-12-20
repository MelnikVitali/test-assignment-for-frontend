import makeStyles from '@material-ui/core/styles/makeStyles';

import { pxToRem } from '../../utils/pxToRem';

const useStales = makeStyles(theme => ({
    root: {
        marginBottom: pxToRem(71),
        padding: `0 ${pxToRem(14)}`,
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            padding: `0 ${pxToRem(30)}`,
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: pxToRem(110),
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: pxToRem(152),
        }
    },
    titleH2: {
        padding: `${pxToRem(68)} 0 ${pxToRem(27)}`,
        letterSpacing: pxToRem(-0.5),
        wordSpacing: pxToRem(2),
        [theme.breakpoints.up('md')]: {
            padding: `${pxToRem(110)} 0 ${pxToRem(68)}`,
            fontSize: pxToRem(40),
            letterSpacing: pxToRem(-0.6),
            wordSpacing: pxToRem(1)
        },
        [theme.breakpoints.up('lg')]: {
            padding: `${pxToRem(154)} 0 ${pxToRem(75)}`,
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
    gridItemContent: {
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
            marginLeft: `${pxToRem(30)} !important`,
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: `${pxToRem(49)} !important`,
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
            marginLeft: pxToRem(25)
        }
    },
    titleH3: {

        margin: `${pxToRem(29)} 0 ${pxToRem(20)}`,
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            margin: `${pxToRem(-4)} 0 ${pxToRem(20)}`,
            textAlign: 'left',
        },
        [theme.breakpoints.up('lg')]: {
            margin: `${pxToRem(-6)} 0 ${pxToRem(20)}`,
            textAlign: 'left',
        }
    },
    textBlock: {
        letterSpacing: pxToRem(-0.097),
        marginBottom: pxToRem(24),
        textAlign: 'justify',
        [theme.breakpoints.up('lg')]: {
            letterSpacing: pxToRem(-0.03),
        }
    },
    btn: {
        padding: `${pxToRem(2)} 0 ${pxToRem(0)}`,
        '&:hover': {
            color: theme.palette.primary.mainHover
        }
    },
}));

export default useStales;
