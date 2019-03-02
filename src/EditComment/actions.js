import server from '../api';

export const fetchComment = id => {
    return dispatch => {
        dispatch({type: 'EDIT_COMMENT_LOADING'})
        server.get(`/comment/${id}`)
        .then(res => {
            dispatch({type: 'FETCH_COMMENT', payload: res.data})
            dispatch({type: '!EDIT_COMMENT_LOADING'})
        })
        .catch(err => {
            dispatch({type: '!EDIT_COMMENT_LOADING'})
        })
    }
}

export const updateComment = (data, ownProps) => {
    return dispatch => {
        dispatch({type: 'EDIT_COMMENT_LOADING'})
        server.patch('/comment/:id', data)
        .then(res => {
            ownProps.history.push(`/show/${data.post_id}`);
            dispatch({type: '!EDIT_COMMENT_LOADING'});
        })
        .catch(err => {
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
        server.delete(`/comment/${data._id}?token=${data.token}`)
        .then(res => {
            ownProps.history.push(`/show/${data.post_id}`);
            dispatch('!EDIT_COMMENT_LOADING');
        })
        .catch(err => {
            dispatch({type: '!EDIT_COMMENT_LOADING'});
            console.log(err)
        })
    }
}