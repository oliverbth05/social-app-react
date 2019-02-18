import server from '../api';

export const fetchPost = (id) => {
    return dispatch => {
        dispatch({type: 'POST_LOADING'})
        server.get(`/post/${id}`)
            .then(res => {
                dispatch({
                    type: 'FETCH_POST',
                    payload: res.data
                })
                dispatch({type: '!POST_LOADING'})

            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const fetchComments = (post_id, page) => {
    return dispatch => {
        dispatch({type: 'COMMENTS_LOADING'})
        server.get(`/post/${post_id}/comments?page=${page}`)
        .then(res => {
            console.log(res.data, 'COMMENTS RECEIVED')
            dispatch({type: 'FETCH_COMMENTS', payload: res.data})
            dispatch({type: '!COMMENTS_LOADING'})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const fetchMoreComments = (post_id, page) => {
    return dispatch => {
        dispatch({type: 'COMMENTS_LOADING'})
        server.get(`/post/${post_id}/comments?page=${page}`)
        .then(res => {
            console.log(res.data, 'COMMENTS RECEIVED')
            dispatch({type: 'FETCH_MORE_COMMENTS', payload: res.data})
            dispatch({type: '!COMMENTS_LOADING'})
        })
        .catch(err => {
            console.log(err)
        })
    }
}


export const postComment = (data) => {
    return dispatch => {
        dispatch({type: 'COMMENTS_LOADING'})
        server.post(`/post/${data.post_id}/comments`, data)
        .then(res => {
            dispatch({
                type: 'POST_COMMENT',
                payload: res.data
            })
            dispatch({type: '!COMMENTS_LOADING'})
        })
        .catch(err => {
            
        })
    }
}

export const likePost = (data) => {
    return dispatch => {
        dispatch({
            type: 'LIKE_LOADING'
        })
        server.post(`/post/${data.post_id}/like`, data)
            .then(res => {
                dispatch({ type: '!LIKE_LOADING' })
                dispatch({
                    type: 'LIKE_POST',
                    payload: data.user_id
                })
            })
            .catch(err => {

            })
    }
}

export const pinPost = (data) => {
    return dispatch => {
        dispatch({ type: 'PIN_LOADING' })
        server.post(`/user/${data.user_id}/pins`, data)
            .then(res => {
                dispatch({
                    type: 'PIN_POST',
                    payload: {
                        post_id: data.post_id,
                        post_title: data.post_title,
                        pin_date: new Date()
                    }
                })
                dispatch({ type: '!PIN_LOADING' })
            })
            .catch(err => {

            })
    }
} 