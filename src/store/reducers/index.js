import { combineReducers } from 'redux';
import user from '../../Auth/reducer';
import loading from './loading';
import home from '../../Home/reducer';
import error from './error';

import comments from '../../Show/comments_reducer';
import post from '../../Show/post_reducer';
import profile from '../../Profile/reducer';
import edit_comment from '../../EditComment/reducer';
import edit_post from '../../EditPost/reducer';
import search from '../../Search/reducer';
import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
    user,
    loading,
    error,
    home,
    comments,
    post,
    profile,
    edit_comment,
    edit_post,
    search,
    form: formReducer
});

const rootReducer = (state, action) => { //Solution for resetting state on logout
    if (action.type === 'LOGOUT') {
        state = undefined;
        window.localStorage.clear();
    }
    return appReducer(state, action)
}

export default rootReducer;