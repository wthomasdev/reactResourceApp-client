import React from "react";
import { Route, IndexRoute } from 'react-router';
import LandingPage from './components/home/LandingPage';
import App from './components/App';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
    </Route>
);
