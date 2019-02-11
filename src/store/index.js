import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers';

export default createStore(reducer, applyMiddleware(logger, thunk));

/*

REDUCERS

auth
  authenticated: Boolean
  token: String

user
  

*/