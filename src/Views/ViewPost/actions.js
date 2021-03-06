import server from '../../api';
import { reset } from 'redux-form';

export const fetchPost = id => dispatch => {
    let data;
    dispatch({ type: 'POST_LOADING' })
    server.get(`/posts/${id}`)
        .then(res => {
            data = { ...res.data }
            return server.get(`/user/${data.author._id}/posts?limit=5`)
        })
        .then(res => {
            data.otherPosts = [...res.data]
            dispatch({
                type: 'FETCH_POST',
                payload: data
            })
            dispatch({ type: '!POST_LOADING' })
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
                else if (err.response.status === 404) {
                    dispatch({ type: 'POST_ERROR', payload: 'Post not found' })
                }
            }
            else {
                dispatch({ type: 'POST_ERROR', payload: 'Something went wrong.' })
            }
            dispatch({ type: '!POST_LOADING' })
        })
}

export const notPostError = () => ({
    type: '!POST_ERROR'
})

export const fetchComments = postId => dispatch => {
    dispatch({ type: '!END_COMMENTS' })
    dispatch({ type: 'COMMENTS_LOADING' })
    server.get(`/posts/${postId}/comments?page=1`)
        .then(res => {
            dispatch({ type: 'FETCH_COMMENTS', payload: res.data })
            if (res.data.comments.length < 10) {
                dispatch({ type: 'END_COMMENTS' })
            }
            dispatch({ type: '!COMMENTS_LOADING' })
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
            else {
                dispatch({ type: 'COMMENT_ERROR' })
                dispatch({ type: '!COMMENTS_LOADING' })
            }
        })
}

export const fetchMoreComments = (post_id, page) => dispatch => {
    dispatch({ type: 'MORE_COMMENTS_LOADING' })
    server.get(`/posts/${post_id}/comments?page=${page}`)
        .then(res => {
            if (res.data.comments.length < 10) {
                dispatch({ type: 'END_COMMENTS' })
            }
            dispatch({ type: 'FETCH_MORE_COMMENTS', payload: res.data })
            dispatch({ type: '!MORE_COMMENTS_LOADING' })
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
            else {
                dispatch({ type: 'COMMENT_ERROR' })
                dispatch({ type: '!MORE_COMMENTS_LOADING' })
            }
        })
}


export const postComment = data => dispatch => {
    dispatch({ type: 'COMMENT_FORM_LOADING' })
    server.post(`/posts/${data.post._id}/comments`, data)
        .then(res => {
            dispatch({
                type: 'POST_COMMENT',
                payload: res.data
            })
            dispatch({ type: '!COMMENT_FORM_LOADING' })
            dispatch(reset('comment'));
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
            else {
                dispatch({ type: 'COMMENT_ERROR' })
                dispatch({ type: '!COMMENT_FORM_LOADING' })
            }
        })
}

export const likeComment = data => dispatch => {
    server.post(`/posts/${data.post._id}/comments/${data.commentId}/likes`, data)
        .then(res => {
            dispatch({
                type: 'LIKE_COMMENT',
                payload: {
                    userId: data.user._id,
                    commentId: data.commentId
                }
            })
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
        })
}

export const postReply = data => dispatch => {
    server.post(`/posts/${data.post_id}/comments/${data.comment_id}/replies`, data)
        .then(res => {

        })
        .catch(err => {

        })
}

export const likePost = data => dispatch => {
    dispatch({
        type: 'LIKE_LOADING'
    })
    server.post(`/posts/${data.post._id}/likes`, data)
        .then(res => {
            dispatch({ type: '!LIKE_LOADING' })
            dispatch({
                type: 'LIKE_POST',
                payload: data.user._id
            })
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
        })
}

export const pinPost = data => dispatch => {
    dispatch({ type: 'PIN_LOADING' })
    server.post(`/user/${data.userId}/pins`, data)
        .then(res => {
            dispatch({
                type: 'PIN_POST',
                payload: {
                    post: data.post,
                    pinDate: new Date()
                }
            })
            dispatch({ type: '!PIN_LOADING' })
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
        })
}

export const resetCommentError = () => ({
    type: '!COMMENT_ERROR'
})
