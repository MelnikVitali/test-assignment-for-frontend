import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

import { pxToRem } from "./utils/pxToRem";

import { OpenSansRegular, OpenSansSemiBold, PTSansRegular } from "./fonts";

// Generate breakpoints so we can use them in the theme definition
const breakpoints = createBreakpoints({});


const theme = createMuiTheme({
    breakpoints: {
        keys: [
            'xs',
            'sm',
            'md',
            'lg',
            'xl' ],
        values: {
            xs: 0,
            sm: 361,
            md: 769,
            lg: 11170,
            xl: 2560,
        },
    },
    typography: {
        fontFamily: [
            'Open Sans',
            'sans-serif'
        ].join(','),
        secondaryFontFamily: [
            'PT Sans, sans-serif'
        ].join(','),

    },
    palette: {
        primary: {
            main: '#ef5b4c',
            contrastText: '#212529',
        },
        secondary: {
            main: '#007bff',
            contrastText: '#4c4b4b',
        },
    },
    backgroundColor: '#fff',
    backgroundColor2: '#f9f9f3',
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [
                    OpenSansRegular,
                    OpenSansSemiBold,
                    PTSansRegular
                ],
                html: {
                    outline: 'none'
                },
                body: {
                    margin: '0 auto',
                    backgroundColor: '#fff',
                    fontSize: pxToRem(16),
                    color: '#212529',
                    outline: 'none'
                },
                'html, body': {
                    outline: 'none'
                },
                '#root': {
                    width: '100%',
                    maxWidth: pxToRem(1170),
                    minWidth: pxToRem(360),
                    display: 'block',
                    boxSizing: 'border-box',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: 0,
                },
                ':focus': {
                    outline: 'none'
                },
                a: {
                    textDecoration: 'none !important',
                }
            },
        },
        MuiTypography: {},
        MuiToolbar: {
            regular: {
                [breakpoints.up("xs")]: {
                    minHeight: pxToRem(61)
                },

            },

        },
    },
});

export default theme;
