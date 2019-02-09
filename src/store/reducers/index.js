import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
import home from './home';
import show from './show';

const appReducer = combineReducers({
    auth,
    loading,
    home,
    show
});

const rootReducer = (state, action) => { //Solution for resetting state on logout
    if (action.type === 'LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;