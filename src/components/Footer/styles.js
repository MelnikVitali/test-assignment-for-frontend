import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        overflow: 'hidden',
        borderTop: `1px solid ${theme.footerBorderColor}`,
    },
    text: {
        padding: `${pxToRem(16)} 0`,
        whiteSpace: 'nowrap',
        [theme.breakpoints.up('md')]: {
            marginLeft: pxToRem(10),
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: 0
        }
    }
}));

export default useStyles;
