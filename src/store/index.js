import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

export default createStore(reducer, applyMiddleware(thunk));