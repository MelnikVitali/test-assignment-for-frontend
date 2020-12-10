import { createMuiTheme } from '@material-ui/core/styles';

import { pxToRem } from "./utils/pxToRem";

import { OpenSansRegular, OpenSansSemiBold, PTSansRegular } from "./fonts";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: [
            'Open Sans',
            'sans-serif'
        ].join(','),
        secondaryFontFamily: [
            'PT Sans',
            'sans-serif'
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
    mobileMenuTextColor: '#000000',
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [
                    OpenSansRegular,
                    OpenSansSemiBold,
                    PTSansRegular
                ].join(','),
                'html, body': {
                    outline: 'none'
                },
                body: {
                    margin: '0 auto',
                    backgroundColor: '#fff',
                    fontSize: pxToRem(16),
                    color: '#212529',
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
        MuiDrawer:{
            paper:{
                overflow: "hidden",
            }
        },
        MuiToolbar: {
            regular: {
                minHeight: `${pxToRem(41)} !important`,
                height: 'inherit'
            },
        },
        MuiListItem: {
            gutters: {
                padding: '0 !important'
            }
        }
    },
});

export default theme;
