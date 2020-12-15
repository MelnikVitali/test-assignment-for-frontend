import { createMuiTheme } from '@material-ui/core/styles';

import { pxToRem } from './utils/pxToRem';

import { OpenSansRegular, OpenSansSemiBold, PTSansRegular } from './fonts';

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
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
        textPrimary: {
            main: '#ffffff'
        }
    },
    backgroundColor: '#fff',
    backgroundColor2: '#f9f9f3',
    backgroundColorLoadingImage: '#23304A',
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
        MuiTypography: {
            h1: {
                fontSize: pxToRem(30),
                color: '#fff',
                fontWeight: 400,
                lineHeight: pxToRem(34),
                letterSpacing: pxToRem(-0.3),
                textTransform: 'uppercase',
            },
            h2: {
                fontSize: pxToRem(30),
                color: '#212529',
                fontWeight: 400,
                lineHeight: pxToRem(50),
                letterSpacing: pxToRem(-0.5),
                wordSpacing: pxToRem(2)
            },
            h3:{
                fontSize: pxToRem(24),
                color: '#212529',
                fontWeight: 400,
                lineHeight: pxToRem(30),
            },
            subtitle1: {
                fontSize: pxToRem(16),
                color: '#fff',
                fontWeight: 400,
                lineHeight: pxToRem(24),
            },
            body1:{
                fontSize: pxToRem(16),
                color: '#4c4b4b',
                fontWeight: 400,
                lineHeight: pxToRem(24),
            }
        },
        MuiDrawer: {
            paper: {
                overflow: 'hidden',
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
        },
        MuiButton: {
            root: {
                textTransform: 'none',
                fontSize: pxToRem(16),
                fontWeight: 600,
                padding: `${pxToRem(4.5)} ${pxToRem(58.5)}`,
            },
            containedPrimary: {
                color: '#fefefe'
            }
        }
    },
});

export default theme;
