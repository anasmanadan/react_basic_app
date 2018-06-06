import React from 'react';
import { Switch, Route } from "react-router-dom";
import App from './App';
import Home from './containers/Home/Home';
import Loading from './components/Loading/Loading';

export default (store) => {
	return (
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/loading" render={()=><Loading text="Loading...."/>}/>
			<Route path="/home" component={Home} />
		</Switch>
	);
};
