import makeStyles from '@material-ui/core/styles/makeStyles';
import { pxToRem } from '../../utils/pxToRem';
// import { pxToRem } from '../../utils/pxToRem';


const useStales = makeStyles(theme => ({
    root: {
        marginBottom: 60,
        padding: '0 14px',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            padding:'0 22px'
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: 110,

        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: 150,
            padding:'0 30px'
        }

    },
    titleH2: {
        padding: '68px  0 27px',
        [theme.breakpoints.up('md')]: {
            fontSize: pxToRem(40),
            padding: '110px  0 68px',
            letterSpacing: pxToRem(-0.6),
            wordSpacing: pxToRem(1)
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: pxToRem(50),
            padding: '154px  0 75px',
            letterSpacing: pxToRem(-1),
            wordSpacing: pxToRem(2.5)
        }
    },
    gridContainer: {
        flexWrap:'wrap',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            flexWrap: 'nowrap',
            textAlign: 'left'
        },
        [theme.breakpoints.up('lg')]: {
            flexWrap: 'nowrap',
            textAlign: 'left'
        }
    },
    gridItemContent: {
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
            marginLeft: 30,
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: 49,
        }
    },
    img: {
        width: 289,
        height: 243,
        [theme.breakpoints.up('md')]: {
            width: 247,
            height: 207,
        },
        [theme.breakpoints.up('lg')]: {
            width: 340,
            height: 285,
            marginLeft: 25
        }
    },
    titleH3: {
        margin: '29px 0 20px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            margin: '-4px 0 20px',
            textAlign:'left',
        },
        [theme.breakpoints.up('lg')]: {
            margin: '-6px 0 20px',
            textAlign:'left',
        }
    },
    textBlock: {
        letterSpacing: '-0.1px',
        marginBottom: 24,
        textAlign:'justify',
    },
    btn: {
        padding: '2px 0',
    },
}));

export default useStales;
