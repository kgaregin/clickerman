require('./main.scss');
require('../node_modules/bootstrap/scss/bootstrap.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import {HomePage} from './components/home';

ReactDOM.render(
    <HomePage/>,
    document.getElementById('app')
);

module.hot.accept();