import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers';

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk, logger)
));




