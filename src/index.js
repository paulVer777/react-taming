import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './store'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Auth from './Components/Auth/Auth'

ReactDOM.render(

    <MuiThemeProvider>
    <Provider store={store}>
    <Auth>
        <App />
    </Auth>
    </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'));
