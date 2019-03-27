import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import axios from 'axios';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, )
));


//Makes sure that the token is attached to every API call by default
store.subscribe(() => {
  axios.defaults.headers.common['Authorization'] = store.getState().auth.token;
});

export default store;
