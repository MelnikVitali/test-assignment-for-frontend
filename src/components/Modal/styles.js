import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from "../../utils/pxToRem";

const useStyles = makeStyles(theme => ({
    root:{
    },
    modalTitle: {
        padding: `${pxToRem(13)} ${pxToRem(15)} ${pxToRem(18)}`,
        fontSize: pxToRem(24),
        lineHeight: pxToRem(30),
        fontWeight:400,
        margin: 0
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 17,
        padding: pxToRem(4),
        borderRadius: 0,
    },
    closeIcon: {
        width: 20,
        height: 20,
        fontSize: pxToRem(20)
    },
    content:{
      padding: `${pxToRem(18)} ${pxToRem(17)} ${pxToRem(16)} ${pxToRem(17)}`,
    },
    wrapperBtn: {
        padding:pxToRem(16)
    },
    btn: {
       padding: `${pxToRem(4.5)} ${pxToRem(18)}`,
    }
}));

export default useStyles;
