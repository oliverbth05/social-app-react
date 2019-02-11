import { combineReducers } from 'redux';
import user from './user';
import loading from './loading';
import home from './home';
import show from './show';
import error from './error';

const appReducer = combineReducers({
    user,
    loading,
    error,
    home,
    show
});

const rootReducer = (state, action) => { //Solution for resetting state on logout
    if (action.type === 'LOGOUT') {
        state = undefined;
        window.localStorage.clear();
    }
    return appReducer(state, action)
}

export default rootReducer;