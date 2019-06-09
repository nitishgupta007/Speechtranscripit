import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";

import App from './App';
import Afterlogin from './Afterlogin';
import Editor from './Editor/index';

const Root = () => {
	return (
		<Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/listing" component={Afterlogin} exact />
        <Route path="/editor" component={Editor} exact />
      </Switch>
		</Router>
	);
};

export default Root;
