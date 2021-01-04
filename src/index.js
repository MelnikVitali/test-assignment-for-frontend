import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import store from './store';

import App from './components/App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <ThemeProvider theme={theme} >
        <Provider store={store} >
            <CssBaseline />
            <App />
            <ToastContainer />
        </Provider >
    </ThemeProvider >,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
