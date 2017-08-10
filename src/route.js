import React from 'react';
import { createHashHistory } from 'history';
import { Router, Route,  IndexRoute, hashHistory } from 'react-router';
import Root from './components/root';
import Main from './components/main';
const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Root}>
            {/*首页*/}
            <IndexRoute component={Main} />
            <Route path="/main" component={Main} />
        </Route>
    </Router>
);

export default RouteConfig