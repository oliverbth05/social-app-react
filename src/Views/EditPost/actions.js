import server from '../../api';

export const fetchEditPost = id => dispatch => {
    dispatch({ type: 'EDIT_POST_LOADING' })
    server.get(`/posts/${id}`)
        .then(res => {
            dispatch({ type: 'FETCH_EDIT_POST', payload: res.data })
            dispatch({ type: '!EDIT_POST_LOADING' })
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
            dispatch({ type: '!EDIT_POST_LOADING' })
        })
}
//ownProps contains the react-router history object for rerouting
export const updatePost = (data, ownProps) => dispatch => {
    dispatch({ type: 'EDIT_POST_LOADING' })
    server.patch(`/posts/${data._id}`, data)
        .then(res => {
            dispatch({ type: 'HOME_NEEDS_UPDATE' })
            dispatch({ type: '!EDIT_POST_LOADING' })
            ownProps.history.push(`/show/${data._id}`);
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
            dispatch({ type: '!EDIT_POST_LOADING' })
        })
}

export const deletePost = (data, ownProps) => dispatch => {
    dispatch({ type: 'EDIT_POST_LOADING' })
    server.delete(`/posts/${data._id}`)
        .then(res => {
            dispatch({ type: 'HOME_NEEDS_UPDATE' })
            dispatch({ type: '!EDIT_POST_LOADING' })
            ownProps.history.push('/home');
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
            dispatch({ type: '!EDIT_POST_LOADING' })
        })
}

export const resetEditPost = () => ({
    type: 'RESET_EDIT_POST'
})
