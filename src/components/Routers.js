/* eslint-disable no-console */
import React from 'react';

import { Router, Route, hashHistory } from 'react-router';

import Frame from './Frame';
import Main from '../pages/main/';
import Login from '../pages/login/'

const handleChange = (...args) => {
    console.log(args);
};

const Routers = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Frame} onChange={handleChange}>
            <Route path="main" component={Main} />
            <Route path="login" component={Login} />
        </Route>
    </Router>
);

export default Routers;
