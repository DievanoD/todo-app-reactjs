import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Todo from './pages/todo';
import About from './pages/about';

const Routes = (props) => (
    <BrowserRouter>
        <Switch>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/todos' />
        </Switch>
    </BrowserRouter>
);

export default Routes;