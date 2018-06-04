import { createStore, applyMiddleware } from 'redux';
import Middleware from './middlewares/index';

import rootReducer from './reducers/index';
export default function configureStore(initialState={}) {
 return createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(Middleware)
 );
}