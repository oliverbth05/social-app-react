import server from '../../api';

export const fetchComment = data => dispatch => {
    dispatch({ type: 'EDIT_COMMENT_LOADING' })
    server.get(`posts/${data.postId}/comments/${data.commentId}`)
        .then(res => {
            dispatch({ type: 'FETCH_COMMENT', payload: res.data })
            dispatch({ type: '!EDIT_COMMENT_LOADING' })
        })
        .catch(err => {
            console.log(err.response)
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
                else if (err.response.status === 404) {
                    dispatch({ type: 'EDIT_COMMENT_ERROR' })
                }
            }
            else {
                dispatch({ type: 'EDIT_COMMENT_ERROR' })
            }
            dispatch({ type: '!EDIT_COMMENT_LOADING' })
        })
}


export const updateComment = (data, ownProps) => dispatch => {
    dispatch({ type: 'EDIT_COMMENT_LOADING' })
    server.patch(`/posts/${data.post._id}/comments/${data._id}`, data)
        .then(res => {
            ownProps.history.push(`/show/${data.post._id}`);
            dispatch({ type: '!EDIT_COMMENT_LOADING' });
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
            dispatch({ type: '!EDIT_COMMENT_LOADING' });
        })
}

export const resetComment = () => ({
    type: 'RESET_COMMENT'
})

export const resetCommentError = () => ({
    type: '!EDIT_COMMENT_ERROR'
})

export const deleteComment = (data, ownProps) => dispatch => {
    dispatch({ type: 'EDIT_COMMENT_LOADING' })
    server.delete(`posts/${data.post._id}/comments/${data._id}`)
        .then(res => {
            ownProps.history.push(`/show/${data.post._id}`);
            dispatch('!EDIT_COMMENT_LOADING');
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
            dispatch({ type: '!EDIT_COMMENT_LOADING' });
        })
}
