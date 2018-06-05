import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import getRoutes from './routes';
import { BrowserRouter as Router } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router>
		  {getRoutes(configureStore())}
		</Router>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
