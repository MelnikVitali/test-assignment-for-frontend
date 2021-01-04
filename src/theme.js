import { createMuiTheme } from '@material-ui/core/styles';

import { pxToRem } from './utils/pxToRem';

import { OpenSansRegular, OpenSansSemiBold, PTSansRegular } from './fonts';

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
    spacing: 6,
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
            mainHover: '#D24335',
            contrastText: '#212529',
            errorText: '#db3445'
        },
        secondary: {
            main: '#007bff',
            contrastText: '#4c4b4b',
        },
        textPrimary: {
            main: '#ffffff'
        },
    },
    backgroundColor: '#fff',
    backgroundColor2: '#f9f9f3',
    backgroundColorInput: '#f5f8fa',
    mobileMenuTextColor: '#000000',
    boxShadowError: '0 0 0 3px #f8d6da',
    radioButtonHoverColor: '#ebf1f5',
    inputBorderColor: '#ced4da',
    inputErrorBoxShadow: '0 0 0 3px #f8d6da',
    inputButtonBackgroundColor: '#f8f7f5',
    placeholderGrayColor: '#b2b9c0',
    hoverButtonGreyColor: '#DBE0E6',
    formRegisterColor: '#212529',
    helperText: '#6c757d',
    footerBorderColor: '#ececec',
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [
                    OpenSansRegular,
                    OpenSansSemiBold,
                    PTSansRegular
                ].join(','),
                'html': {
                    boxSizing: 'border-box',
                    scrollBehavior: 'smooth',
                    width: '100%',
                    height: '100%'
                },
                'html, body': {
                    outline: 'none',
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
                    scrollBehavior: 'smooth'
                },
                ':focus': {
                    outline: 'none'
                },
                a: {
                    textDecoration: 'none !important',
                },
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
            },
            h3: {
                fontSize: pxToRem(24),
                color: '#212529',
                fontWeight: 400,
                lineHeight: pxToRem(30),
            },
            h4: {
                fontSize: pxToRem(16),
                color: '#212529',
                fontWeight: 400,
                lineHeight: pxToRem(22),
            },
            h6: {
                fontSize: pxToRem(24),
                lineHeight: pxToRem(30),
            },
            subtitle1: {
                fontSize: pxToRem(16),
                color: '#fff',
                fontWeight: 400,
                lineHeight: pxToRem(24),
            },
            body1: {
                fontSize: pxToRem(16),
                color: '#4c4b4b',
                fontWeight: 400,
                lineHeight: pxToRem(24),
            },
            body2: {
                color: '#212529'
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
            },
        },
        MuiButton: {
            root: {
                textTransform: 'none',
                fontSize: pxToRem(16),
                fontWeight: 600,
                padding: `${pxToRem(4.5)} ${pxToRem(58.5)}`,
            },
            containedPrimary: {
                color: '#fefefe',
                '&:hover': {
                    backgroundColor: '#D24335'
                }
            },
            textPrimary: {
                '&:hover': {
                    backgroundColor: 'transparent'
                }
            }
        },
        MuiFormControlLabel: {
            label: {
                fontFamily: 'PT Sans',
                color: '#212529',
            }
        },
        MuiFormLabel: {
            root: {
                fontFamily: 'PT Sans',
                color: '#212529',
            }
        },
        MuiInputLabel: {
            root: {
                fontSize: 18,
                color: '#212529',
                '&.Mui-focused': {
                    color: '#212529'
                }
            }
        },
        PrivateSwitchBase: {
            root: {
                padding: 0,
                marginRight: 8
            }
        },
        MuiFormHelperText: {
            root: {
                '&.Mui-error': {
                    color: '#db3445'
                }
            }
        },
        MuiDialog: {
            paper: {
                margin: pxToRem(16)
            },
            paperWidthSm: {
                maxWidth: pxToRem(395),
                width: pxToRem(395)
            }
        }
    },
});

export default theme;
