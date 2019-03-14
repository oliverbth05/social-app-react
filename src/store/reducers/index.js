import { combineReducers } from 'redux';
import user from '../../User/reducer';
import loading from './loading';
import home from '../../Views/Home/reducer';
import error from './error';

import login from '../../Views/Login/reducer';
import register from '../../Views/Register/reducer';

import comments from '../../Views/Show/comments_reducer';
import post from '../../Views/Show/post_reducer';
import profile from '../../Views/Profile/reducer';
import edit_comment from '../../Views/EditComment/reducer';
import edit_post from '../../Views/EditPost/reducer';
import search from '../../Views/Search/reducer';
import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
    login,
    register,
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