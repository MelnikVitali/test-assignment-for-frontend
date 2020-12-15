import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    img: {
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        objectFit: 'cover',
        zIndex:'-1'
    },
}));

export default useStyles;
