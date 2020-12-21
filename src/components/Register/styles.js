import {makeStyles} from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme =>({
    root: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        padding: `0 ${pxToRem(16)}`,
        textAlign: 'center',
        overflow: 'hidden',

    },
    titleH2: {
        padding: `${pxToRem(68)} 0 ${pxToRem(3)}`,
        [theme.breakpoints.up('md')]: {
            padding: `${pxToRem(112)} 0 ${pxToRem(17)}`,
            fontSize: pxToRem(40),
        },
        [theme.breakpoints.up('lg')]: {
            margin: `${pxToRem(40)} 0 ${pxToRem(3)}`,
            fontSize: pxToRem(50),
        }
    },
    titleH4: {
        maxWidth: 460,
        lineHeight: pxToRem(24),
        marginBottom: pxToRem(37),
        [theme.breakpoints.up('md')]: {
            marginBottom: pxToRem(30),
        },
    },
}));

export default useStyles;
