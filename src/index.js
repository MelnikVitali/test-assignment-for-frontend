import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './components/App/App';

import theme from './theme';

import store from './store';

ReactDOM.render(
    <ThemeProvider theme={theme} >
        <Provider store={store} >
            <CssBaseline />
            <App />
        </Provider >
    </ThemeProvider >,
    document.getElementById('root')
);
