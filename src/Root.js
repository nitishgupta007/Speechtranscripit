import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";

import App from './App';
import Afterlogin from './Afterlogin'

const Root = () => {
	return (
		<Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/listing" component={Afterlogin} exact />
      </Switch>
		</Router>
	);
};

export default Root;
