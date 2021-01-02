import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import store from './store';

import App from './components/App';

ReactDOM.render(
    <ThemeProvider theme={theme} >
        <Provider store={store} >
            <CssBaseline />
            <App />
            <ToastContainer />,
        </Provider >
    </ThemeProvider >,
    document.getElementById('root')
);
