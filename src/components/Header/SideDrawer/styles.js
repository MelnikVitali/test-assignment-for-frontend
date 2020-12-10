import { makeStyles } from "@material-ui/core/styles";

import { pxToRem } from "../../../utils/pxToRem";

import menuIcon from '../../../assets/menu-icon.svg'


const useStyles = makeStyles(theme => ({
    drawerContainer: {
        width: 290,
    },
    logoLink: {
        height: pxToRem(40),
        display: 'flex',
        alignItems: 'center',
        marginLeft: pxToRem(14),
        paddingTop: pxToRem(1),
        [theme.breakpoints.up('md')]: {
            height: pxToRem(60),
        },
    },
    logoImg: {
        width: pxToRem(136),
        height: pxToRem(21)
    },
    navList: {
        height: pxToRem(245),
        padding: `${pxToRem(5)} 0 ${pxToRem(5)} ${pxToRem(14)}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    listItem: {
        width: 'inherit',
        overflow: 'hidden',
        color: theme.mobileMenuTextColor,
        '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
            transition: 'color .3s ease',
        },
        '&:active': {
            color: `${theme.palette.secondary.main} !important`,
            transition: 'color .3s ease'
        },
    },
    menuButton: {
        width: pxToRem(20),
        height: pxToRem(15),
        backgroundImage: `url(${menuIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

export default useStyles;
