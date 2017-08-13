/**
 * Created by proto on 2017/4/17.
 */
import React from 'react';
import { render } from 'react-dom';
import routes from './route';
import { Router, Route, hashHistory } from 'react-router';
import './css/base.less';
render(routes,
    document.getElementById('container')
);


