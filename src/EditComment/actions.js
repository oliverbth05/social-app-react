import server from '../api';

export const fetchComment = data => {
    return dispatch => {
        dispatch({type: 'EDIT_COMMENT_LOADING'})
        server.get(`posts/${data.post_id}/comments/${data.comment_id}`)
        .then(res => {
            dispatch({type: 'FETCH_COMMENT', payload: res.data})
            dispatch({type: '!EDIT_COMMENT_LOADING'})
        })
        .catch(err => {
            if (err.response.status === 401) {
                dispatch({type: 'TOKEN_ERROR'});
                dispatch({type: 'LOGOUT'})
            }
            dispatch({type: '!EDIT_COMMENT_LOADING'})
        })
    }
}

export const updateComment = (data, ownProps) => {
    return dispatch => {
        dispatch({type: 'EDIT_COMMENT_LOADING'})
        server.patch(`/posts/${data.post_id}/comments/${data.comment_id}`, data)
        .then(res => {
            ownProps.history.push(`/show/${data.post_id}`);
            dispatch({type: '!EDIT_COMMENT_LOADING'});
        })
        .catch(err => {
            if (err.response.status === 401) {
                dispatch({type: 'TOKEN_ERROR'});
                dispatch({type: 'LOGOUT'})
            }
            dispatch({type: '!EDIT_COMMENT_LOADING'});
        })
    }
}

export const resetComment = () => {
    return {
        type: 'RESET_COMMENT'
    }
}

export const deleteComment = (data, ownProps) => {
    return dispatch => {
        dispatch({type: 'EDIT_COMMENT_LOADING'})
        server.delete(`posts/${data.post_id}/comments/${data.comment_id}`)
        .then(res => {
            ownProps.history.push(`/show/${data.post_id}`);
            dispatch('!EDIT_COMMENT_LOADING');
        })
        .catch(err => {
            if (err.response.status === 401) {
                dispatch({type: 'TOKEN_ERROR'});
                dispatch({type: 'LOGOUT'})
            }
            dispatch({type: '!EDIT_COMMENT_LOADING'});
            console.log(err)
        })
    }
}