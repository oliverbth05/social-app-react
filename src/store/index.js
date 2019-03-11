import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';
import axios from 'axios';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk, logger)
));

store.subscribe(() => {
  axios.defaults.headers.common['Authorization'] = store.getState().user.token;
});

export default store;