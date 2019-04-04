import { combineReducers } from 'redux';

import auth from '../authStore/reducer';
import home from '../Views/Home/reducer';
import login from '../Views/Login/reducer';
import createPost from '../Views/CreatePost/reducer';
import register from '../Views/Register/reducer';
import comments from '../Views/ViewPost/comments_reducer';
import post from '../Views/ViewPost/post_reducer';
import profile from '../Views/Profile/reducer';
import editComment from '../Views/EditComment/reducer';
import editPost from '../Views/EditPost/reducer';
import notifications from '../Views/Notifications/reducer';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    login,
    register,
    auth,
    createPost,
    home,
    comments,
    post,
    profile,
    notifications,
    editComment,
    editPost,
    form: formReducer
});

/*
    Solution for resetting state on logout

    The wrapReducer wraps the root at the highest point
    in case of a logout action, so that it
    may return the entire state tree as undefined.
*/
const wrapReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
        window.localStorage.clear();
    }
    return rootReducer(state, action)
}

export default wrapReducer;
