import { makeStyles } from '@material-ui/core/styles';
import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0 15px',
        backgroundColor: theme.backgroundColor2,
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            padding: '0 46px',
        },
        [theme.breakpoints.up('lg')]: {
            padding: '0 46px',
        },
    },
    titleH2: {
        padding: `${pxToRem(68)} 0 ${pxToRem(3)}`,
        [theme.breakpoints.up('md')]: {
            padding: `${pxToRem(112)} 0 ${pxToRem(17)}`,
            fontSize: pxToRem(40),
            // letterSpacing: pxToRem(-0.6),
            // wordSpacing: pxToRem(1)
        },
        [theme.breakpoints.up('lg')]: {
            padding: `${pxToRem(154)} 0 ${pxToRem(21)}`,
            fontSize: pxToRem(50),
        }
    },
    titleH4: {
        marginBottom: 37,
        [theme.breakpoints.up('md')]: {
            marginBottom: 76,
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: 75,
        },
    },
    gridContainer: {},
    gridItem: {
        width: 200,
        marginBottom: 0,
        [theme.breakpoints.up('md')]: {
            marginBottom: 50,
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: 72,
        },
    },
    userPhoto: {
        borderRadius: '50%',
        width: 70,
        marginBottom: 10
    },
    userName: {
        wordBreak: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginBottom: 10
    },
    userEmail: {
        wordWrap: 'normal',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: 'pointer'
    },
    errorMessage: {
        justifyContent: 'center',
        marginTop: 25,
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
            marginBottom: 40,
        },
    },
    btn: {
        padding: `${pxToRem(4.5)} ${pxToRem(61)}`,
        marginTop: pxToRem(24),
        marginBottom: 67,
        [theme.breakpoints.up('md')]: {
            marginTop: pxToRem(-26),
            marginBottom: 40,
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: pxToRem(0),
            marginBottom: 30,
        },
    }
}));

export default useStyles;
