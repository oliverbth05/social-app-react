import { combineReducers } from 'redux';
import user from '../../Auth/reducer';
import loading from './loading';
import home from '../../Home/reducer';
import error from './error';

import comments from '../../Show/comments_reducer';
import post from '../../Show/post_reducer';
import profile from '../../Profile/reducer';

const appReducer = combineReducers({
    user,
    loading,
    error,
    home,
    comments,
    post,
    profile
});

const rootReducer = (state, action) => { //Solution for resetting state on logout
    if (action.type === 'LOGOUT') {
        state = undefined;
        window.localStorage.clear();
    }
    return appReducer(state, action)
}

export default rootReducer;