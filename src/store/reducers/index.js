import { combineReducers } from 'redux';

import user from '../../User/reducer';
import home from '../../Views/Home/reducer';
import login from '../../Views/Login/reducer';
import createPost from '../../Views/CreatePost/reducer';
import register from '../../Views/Register/reducer';
import comments from '../../Views/ViewPost/comments_reducer';
import post from '../../Views/ViewPost/post_reducer';
import profile from '../../Views/Profile/reducer';
import editComment from '../../Views/EditComment/reducer';
import editPost from '../../Views/EditPost/reducer';
import search from '../../Views/Search/reducer';
import notifications from '../../Views/Notifications/reducer';

import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
    login,
    register,
    user,
    createPost,
    home,
    comments,
    post,
    profile,
    notifications,
    editComment,
    editPost,
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