import makeStyles from '@material-ui/core/styles/makeStyles';
// import { pxToRem } from '../../utils/pxToRem';


const useStales = makeStyles(theme => ({
    root: {
        marginBottom: 150,
        textAlign: 'center'
    },
    titleH2:{
        padding: '154px  0 75px',
    },
    gridContainer: {

    },
    content:{
        paddingLeft: 50,
        textAlign:'left'
    },
    img: {
        width: 340,
        height: 285,
        marginLeft: 30
    },
    titleH3:{
        margin:'-6px 0 20px'
    },
    text:{
        marginBottom: 24
    },
    btn:{
        padding: '2px 0',
    }
}));

export default useStales;
